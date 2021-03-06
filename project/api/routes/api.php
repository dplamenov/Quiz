<?php

use App\Http\Controllers\Question;
use App\Http\Controllers\User;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::get('/', function () {
//    session(['isloggedin' => true]);
    return response()->json(["debug" => true]);
});

//Route::resource('/question', Question::class);

Route::get('/question', [Question::class, 'all']);
Route::get('/question/{question}', [Question::class, 'show']);
Route::post('/user/login', [User::class, 'login'])
    ->middleware('not.auth');
Route::post('/user/register', [User::class, 'register']);
Route::get('/user/auth', [User::class, 'auth']);
Route::get('/user/logout', function () {
    return response()->json(['logout' => true])->withCookie('auth-token');
})->middleware('auth');

