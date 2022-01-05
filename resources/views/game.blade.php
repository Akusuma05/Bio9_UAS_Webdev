@extends('layouts.master')

@section('main_content')
<div id="container">
    
    {{-- Div Class Shop --}}
    <div id="shop">

        {{-- Div Button Shop Pertama --}}
        <div class="choice-container" id="shop1div">
            <p class="choice-prefix">$100</p>
            <p id="shop1" class="choice-text" data-number="1">Upgrade Damage + 15</p>
        </div>

        {{-- Div Button Shop Kedua --}}
        <div class="choice-container">
            <p class="choice-prefix">$200</p>
            <p id="shop2" class="choice-text" data-number="2">Health +1</p>
        </div>

        {{-- Div Button Shop Ketiga --}}
        <div class="choice-container" id="skipdiv">
            <p id="skip" class="choice-text" data-number="2">Skip</p>
        </div>
    </div>

    {{-- Div Class Permainan --}}
    <div id="display">

        {{-- Div Class HUD --}}
        <div id="hud">

            {{-- Div Class Time --}}
            <div class="hud-item" id="timediv">
                <p class="hud-prefix">
                    Time
                </p>
                <h1 class="hud-main-text" id="time">
                    10:00
                </h1>
            </div>

            {{-- Div pause --}}
            <div id="pausediv">
                <button class="btn" id="pause">Pause</button>
            </div>

            {{-- Div resume --}}
            <div id="resumediv">
                <button class="btn" id="resume">Resume</button>
            </div>              

            {{-- Div Health User --}}
            <div class="hud-item">
                <p class="hud-prefix">
                    Health User
                </p>
                <h1 class="hud-main-text" id="health_user">
                    0
                </h1>
            </div>

            {{-- Div Money --}}
            <div class="hud-item">
                <p class="hud-prefix">
                    Money
                </p>
                <h1 class="hud-main-text" id="money">
                    0
                </h1>
            </div>
            
            {{-- Div Total Damage --}}
            <div class="hud-item">
                <p class="hud-prefix">
                    Total Damage
                </p>
                <h1 class="hud-main-text" id="total_damage">
                    0
                </h1>
            </div>

            
            

        </div>

        {{-- Div Text pertanyaan --}}
        <div id="questiondiv">
            <h1 id="question">Text pertanyaan</h1>
        </div>
        

        <div id="healthbardiv">
            <div id="healthmonster">
                <div class="hud-item" id="health_bar_div">
                    <p id="progressText" class="hud-prefix">
                        Monster Health
                    </p>
                    <div id="progressBar">
                        <div id="progressBarFull"></div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Div Avatar --}}
        <div id="avatar">
            <div id="wizarddiv">
                <img width="30%" id="wizard" src="{{URL::asset('/image/wizard_idle.gif')}}"></img>
            </div>
            <div id="monsterdiv">
                {{-- Div Health Monster --}}
                
                <img width="30%" id="monster" src="{{URL::asset('/image/monster_idle.gif')}}"></img>
            </div>
        </div>
    
    </div>


    {{-- Div Jawaban --}}
    <div id="jawaban">
        {{-- PilGan Jawaban --}}
        <div class="choice-container" id="jawaban1div">
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
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src=//code.jquery.com/jquery-3.5.1.min.js
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin=anonymous></script>

<script src="/js/game.js"></script>