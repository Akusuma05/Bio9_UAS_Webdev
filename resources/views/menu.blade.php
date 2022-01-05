@extends('layouts.master')

@section('content')
<div id="container">
    <div id="home" class="flex-column flex-center">
        <h1>Name Game + Logo Mungkin</h1>
        <a href="/game" class="btn">Play</a>
        <a id ="highscore-btn" href="/leaderboard" class="btn">Leaderboard</a>
        <a href="/" class="btn">Quit</a>
    </div>
</div>
