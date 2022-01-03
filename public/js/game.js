//Deklarasi
let jawaban_benar;
let jawaban_salah1;
let jawaban_salah2;
let jawaban_salah3;

var score = 0;
var benar = 0;
var randomPertanyaan;

// $("#score").html(score);

//Saat Ngeload
$(document).ready(function() {
    GetGameData();
    // PertanyaanListPertama();
});


function GetGameData(){
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/getGameData/1",
        success: function (data1) {
            $("#score").html(data1.current_damage);
        }
    });
}

//Function Get Pertanyaan Dari Database dan Mendisplay
function PertanyaanListPertama(){
    //Random Pertanyaan
    var random = Math.floor(Math.random() * 57) + 1;

    //Random Posisi Jawaban Benar
    randomPertanyaan = Math.floor(Math.random() * 4) + 1; 

    $.ajax({  
        type: "GET",
        url: "http://127.0.0.1:8000/getPertanyaan/" + random,       
        success: function (data) {
            $("#question").html(data.pertanyaan);

            jawaban_benar = data.jawaban_benar;
            jawaban_salah1 = data.jawaban_salah1;
            jawaban_salah2 = data.jawaban_salah2;
            jawaban_salah3 = data.jawaban_salah3;
            
            //Display Jawaban
            //Skenario 1 Jawaban 1 Benar
            if(randomPertanyaan == 1){
                klikjawaban();
                $("#jawaban1").html(jawaban_benar);
                $("#jawaban2").html(jawaban_salah1);
                $("#jawaban3").html(jawaban_salah2);
                $("#jawaban4").html(jawaban_salah3);

            //Skenario 2 Jawaban 2 Benar
            }else if(randomPertanyaan == 2){
                klikjawaban();
                $("#jawaban1").html(jawaban_salah1);
                $("#jawaban2").html(jawaban_benar);
                $("#jawaban3").html(jawaban_salah2);
                $("#jawaban4").html(jawaban_salah3);

            //Skenario 3 Jawaban 3 Benar
            }else if(randomPertanyaan == 3){
                klikjawaban();
                $("#jawaban1").html(jawaban_salah1);
                $("#jawaban2").html(jawaban_salah2);
                $("#jawaban3").html(jawaban_benar);
                $("#jawaban4").html(jawaban_salah3);

            //Skenario 4 Jawaban 4 Benar
            }else if(randomPertanyaan == 4){
                klikjawaban();
                $("#jawaban1").html(jawaban_salah1);
                $("#jawaban2").html(jawaban_salah2);
                $("#jawaban3").html(jawaban_salah3);
                $("#jawaban4").html(jawaban_benar);
            }
        }
    });
}

//Function Klik Jawaban
function klikjawaban(){
    var button_pressed = 0;
    
    //Skenario 1 Jawaban 1 Benar
    if(randomPertanyaan == 1){
    
        $("#jawaban1").click(function(){
            if (button_pressed == 1){
            }else{
                score += 1;
                // $("#score").html(score);
                button_pressed = 1;
                PertanyaanListPertama();
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban2").html("salah");
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban3").html("salah");
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban4").html("salah");
            }
        })

    //Skenario 2 Jawaban 2 Benar
    }else if(randomPertanyaan == 2){ 

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban1").html("salah");
            }
        })

        $("#jawaban2").click(function(){
            if (button_pressed == 1){
            }else{
                score += 1;
                // $("#score").html(score);
                button_pressed = 1;
                PertanyaanListPertama();
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban3").html("salah");
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban4").html("salah");
            }
        })
    
    //Skenario 3 Jawaban 3 Benar
    }else if(randomPertanyaan == 3){

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban1").html("salah");
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban2").html("salah");
            }
        })

        $("#jawaban3").click(function(){
            if (button_pressed == 1){
            }else{
                score += 1;
                // $("#score").html(score);
                button_pressed = 1;
                PertanyaanListPertama();
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban4").html("salah");
            }
        })

    //Skenario 4 Jawaban 4 Benar
    }else if(randomPertanyaan == 4){

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban1").html("salah");
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban2").html("salah");
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                $("#jawaban3").html("salah");
            }
        })

        $("#jawaban4").click(function(){
            if (button_pressed == 1){
            }else{
                score += 1;
                // $("#score").html(score);
                button_pressed = 1;
                PertanyaanListPertama();
            }
        })
    }       
}