<?php

use App\Http\Controllers\Question;
use App\Http\Controllers\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
//    session(['isloggedin' => true]);
    return response()->json(["debug" => true]);
});

Route::resource('/question', Question::class);
Route::resource('/user', User::class);
