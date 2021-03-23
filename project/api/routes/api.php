<?php

use App\Http\Controllers\Question;
use App\Http\Controllers\User;
use App\Http\Controllers\Admin;
use App\Http\Controllers\Category;
use \App\Http\Controllers\Game;
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


Route::options('{any?}', function ($any = null) {
    return 'cors';
})->where('any', '.*')->middleware('cors');

Route::get('/question', [Question::class, 'getRandomById']);
Route::post('/question', [Question::class, 'store']);
Route::get('/question/{question}', [Question::class, 'show']);
Route::post('/question/{question}/report', [Question::class, 'reportForError']);

Route::post('/game', [Game::class, 'storeGame']);

Route::post('/user/login', [User::class, 'login']);
Route::post('/user/register', [User::class, 'register']);
Route::get('/user/auth', [User::class, 'auth']);
Route::get('/user/logout', [User::class, 'logout'])->middleware('auth');
Route::post('/user/points', [User::class, 'addPoints']);
Route::get('/user/stats', [User::class, 'stats']);
Route::get('/user/favourite', [User::class, 'getUserGames']);

Route::get('/category', [Category::class, 'getAll']);
Route::post('/category', [Category::class, 'create']);
Route::get('/category/{id}', [Category::class, 'getById']);
Route::put('/category/{id}', [Category::class, 'edit']);
Route::delete('/category/{id}', [Category::class, 'delete']);

Route::get('/admin/users', [Admin::class, 'getAllUsers']);
Route::get('/admin/categories', [Admin::class, 'getAllCategories']);
Route::get('/admin/questions', [Admin::class, 'getAllQuestions']);
