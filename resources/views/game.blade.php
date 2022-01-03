@extends('layouts.master')

@section('main_content')
<div class="container">
    <div id="game" class="justify-center flex-column">

        {{-- HUD untuk Health dan Score --}}
        
        <div id="hud">
            
            <div class="hud-item">
                <p class="hud-prefix">
                    Score
                </p>
                <h1 class="hud-main-text" id="score">
                    0
                </h1>
            </div>


            <div class="hud-item">
                <p id="progressText" class="hud-prefix">
                    Monster Health
                </p>
                <div id="progressBar">
                    <div id="progressBarFull"></div>
                </div>
            </div>

        </div>

        {{-- Text pertanyaan --}}
        <h1 id="question">Text pertanyaan</h1>

        {{-- PilGan Jawaban --}}
        <div class="choice-container">
            <p class="choice-prefix">A</p>
            <p id="jawaban1" class="choice-text" data-number="1">Choice</p>
        </div>
        <div class="choice-container">
            <p class="choice-prefix">B</p>
            <p id="jawaban2" class="choice-text" data-number="2">Choice 2</p>
        </div>
        <div class="choice-container">
            <p class="choice-prefix">C</p>
            <p id="jawaban3" class="choice-text" data-number="3">Choice 3</p>
        </div>
        <div class="choice-container">
            <p class="choice-prefix">D</p>
            <p id="jawaban4" class="choice-text" data-number="4">Choice 4</p>
        </div>

    </div>
</div>

{{-- Javascript --}}
<script src=//code.jquery.com/jquery-3.5.1.min.js
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin=anonymous></script>

<script src="/js/game.js"></script>