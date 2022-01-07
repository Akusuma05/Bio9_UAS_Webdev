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

    Route::get('/leaderboard', function () {
        return view('leaderboard');
    });

    Route::get('/getPertanyaan/{id}','App\Http\Controllers\PertanyaanController@getPertanyaan');

    Route::get('/getGameData/{id}','App\Http\Controllers\GamedataController@getGameData');

    Route::get('/getLeaderboard', 'App\Http\Controllers\LeaderboardController@getTop10Leaderboard');

    Route::post('/postLeaderboard', 'App\Http\Controllers\LeaderboardController@store');

    Route::post('/postGameData', 'App\Http\Controllers\GamedataController@store');

    Route::post('/updateGameData/{id}', 'App\Http\Controllers\GamedataController@update');

    Route::get('/getTerbunuh/{id}', 'App\Http\Controllers\CurrentMonsterController@show');

    Route::post('/postTerbunuh', 'App\Http\Controllers\CurrentMonsterController@create');

    Route::post('/updateTerbunuh/{id}', 'App\Http\Controllers\CurrentMonsterController@update');
});
