@extends('layouts.master')

@section('main_content')
<div id="container">
    <div id="tulisan_leaderboard">
        <h1 id="leaderboardtext">Leaderboard</h1>
    </div>
    
    <div id="tabel_leaderboard">
        <table border='1' id='leaderboardTable' style='border-collapse: collapse;'>
            <thead>
             <tr>
               <th>No.</th>
               <th>Name</th>
               <th>Score</th>
             </tr>
            </thead>
            <tbody>
    
            </tbody>
        </table>
    </div>

    <div id="backbuttondiv" class="flex-column flex-center">
        <a href="/menu" class="btn" id="backbutton">Back</a>
    </div>
    

    

</div>

{{-- Javascript --}}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src=//code.jquery.com/jquery-3.5.1.min.js
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin=anonymous></script>

<script src="/js/leaderboard.js"></script>