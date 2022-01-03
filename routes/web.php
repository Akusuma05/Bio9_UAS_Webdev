<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

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

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::middleware(['auth'])->group(function () {
    Route::get('/profiledata', function(Request $request) {
        return auth()->user();
    });

    Route::get('/', function () {
        return view('home');
    });

    Route::get('/game', function () {
        return view('game');
    }); 

    Route::get('/menu', function () {
        return view('menu');
    });

    Route::get('/getPertanyaan/{id}','App\Http\Controllers\PertanyaanController@getPertanyaan');

    Route::get('/getGameData/{id}','App\Http\Controllers\GamedataController@getGameData');
});
