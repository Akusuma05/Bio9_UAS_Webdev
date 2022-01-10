//Deklarasi
let jawaban_benar;
let jawaban_salah1;
let jawaban_salah2;
let jawaban_salah3;

let monster_idle;
let monster_attack;
let monster_death;

let player_name;

var price;
var attribute;
var gamedata_id;
var total_damage = 0;
var benar = 0;
var current_damage = 0;
var health_user = 0;
var health_monster = 100;
var money = 0;
var current_health_monster = health_monster;
var randomPertanyaan;
var randomMonster = 1;
var timestart = 1;
var time_to_database;

//Saat Ngeload
$(document).ready(function() {
    //Hidden Button Resume And Show Pause
    document.getElementById('pause').style.visibility = 'visible';
    document.getElementById('resume').style.visibility = 'hidden';

    //Get User Data
    GetUserData();

    //Get List Pertanyaan
    PertanyaanListPertama();
});

//Function Get Game Data
function GetUserData(){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://127.0.0.1:8000/profiledata",
        success: function (data) {
            gamedata_id = data.id;
            GetGameData(data.id);
            player_name = data.name;
            GetTerbunuh(data.id);
        }
    });
}

//Function Get Game Data
function GetGameData($id){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://127.0.0.1:8000/getGameData/"+$id,
        success: function (data) {

            //If GameData == null
            if (data.time_left == null ){  
                PostGameData(gamedata_id);
                GetGameData(gamedata_id);
                CreateTerbunuh(gamedata_id);
                GetTerbunuh(gamedata_id);

            }else{
                total_damage = data.total_damage;
                current_damage = data.current_damage;
                health_user = data.health_left;
                money = data.money;
    
                //Start Timer
                var seconds = data.time_left,
                display = document.querySelector('#time');
                startTimer(seconds, display);
    
                $("#health_user").html(health_user);
                $("#total_damage").html(total_damage);
            }
        }
    });
}

//Function timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    let runcountdown = setInterval(countdown, 1000);

    //Button Pause Di Tekan
    $("#pause").click(function(){
        clearInterval(runcountdown);
        duration = ((minutes*60) + seconds)-1;

        //Update Game Data
        UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

        //Update Current Monster Data
        UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

        //Hide Button Pause, Display Resume
        document.getElementById('pause').style.visibility = 'hidden';
        document.getElementById('resume').style.visibility = 'visible';
        
        //Jawaban dan Pertanyaan di Hidden
        document.getElementById('jawaban1').style.visibility = 'hidden';
        document.getElementById('jawaban2').style.visibility = 'hidden';
        document.getElementById('jawaban3').style.visibility = 'hidden';
        document.getElementById('jawaban4').style.visibility = 'hidden';
        document.getElementById('question').style.visibility = 'hidden';
    });

    //Button Resume di Tekan
    $("#resume").click(function(){
        var resumeTimer = 0;
        if(resumeTimer == 1){

        }else{
            resumeTimer = 1;
            runcountdown = setInterval(countdown, 1000);
            startTimer(duration, display);
    
            //Hide Button Resume, Display Pause
            document.getElementById('pause').style.visibility = 'visible';
            document.getElementById('resume').style.visibility = 'hidden';
    
            //Jawaban and Pertanyaan di Visible
            document.getElementById('jawaban1').style.visibility = 'visible';
            document.getElementById('jawaban2').style.visibility = 'visible';
            document.getElementById('jawaban3').style.visibility = 'visible';
            document.getElementById('jawaban4').style.visibility = 'visible';
            document.getElementById('question').style.visibility = 'visible';
        }
    });

    function countdown() {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        time_to_database = ((minutes*60) + seconds)-1;

        if (--timer < 0) {
            clearInterval(runcountdown);
            document.getElementById('shop1').style.visibility = 'hidden';
            document.getElementById('shop2').style.visibility = 'hidden';
            document.getElementById('skip').style.visibility = 'hidden';
            document.getElementById('pause').style.visibility = 'hidden';
            document.getElementById('resume').style.visibility = 'hidden';

            document.getElementById('jawaban1').style.visibility = 'hidden';
            document.getElementById('jawaban2').style.visibility = 'hidden';
            document.getElementById('jawaban3').style.visibility = 'hidden';
            document.getElementById('jawaban4').style.visibility = 'hidden';
            $("#question").html("Game Over Times Up");

            PostLeaderboard();

            setTimeout(function(){
                location.replace("http://127.0.0.1:8000/leaderboard");
            }, 5000);
        }
    }
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
                $("#wizard").attr('src',"/image/wizard_attack.gif");
                setTimeout(function(){
                    $("#wizard").attr('src',"/image/wizard_idle.gif");
                }, 800);
                total_damage += current_damage;
                $("#total_damage").html(total_damage);
                progressBarFull.style.width = (((current_health_monster - current_damage)*100)/health_monster) + '%';
                current_health_monster -= current_damage;
                
                

                //Update Game Data
                UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                //Health Monster Habis
                health_monster_habis()

                //Update Current Monster Data
                UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                button_pressed = 1;
                PertanyaanListPertama(); 
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban2").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban3").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban4").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

    //Skenario 2 Jawaban 2 Benar
    }else if(randomPertanyaan == 2){ 

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban1").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban2").click(function(){
            if (button_pressed == 1){

            }else{
                $("#wizard").attr('src',"/image/wizard_attack.gif");
                setTimeout(function(){
                    $("#wizard").attr('src',"/image/wizard_idle.gif");
                }, 800);
                total_damage += current_damage;
                $("#total_damage").html(total_damage);
                progressBarFull.style.width = (((current_health_monster - current_damage)*100)/health_monster) + '%';
                current_health_monster -= current_damage;
                
                

                //Update Game Data
                UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                //Health Monster Habis
                health_monster_habis()

                //Update Current Monster Data
                UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                button_pressed = 1;
                PertanyaanListPertama(); 
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban3").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);   

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban4").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })
    
    //Skenario 3 Jawaban 3 Benar
    }else if(randomPertanyaan == 3){

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban1").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban2").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban3").click(function(){
            if (button_pressed == 1){

            }else{
                $("#wizard").attr('src',"/image/wizard_attack.gif");
                setTimeout(function(){
                    $("#wizard").attr('src',"/image/wizard_idle.gif");
                }, 800);
                total_damage += current_damage;
                $("#total_damage").html(total_damage);
                progressBarFull.style.width = (((current_health_monster - current_damage)*100)/health_monster) + '%';
                current_health_monster -= current_damage;
                
                

                //Update Game Data
                UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                //Health Monster Habis
                health_monster_habis()

                //Update Current Monster Data
                UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                button_pressed = 1;
                PertanyaanListPertama(); 
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban4").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;
                    
                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

    //Skenario 4 Jawaban 4 Benar
    }else if(randomPertanyaan == 4){

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban1").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);
                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban2").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);

                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;

                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);
                    
                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                GetMonsterAttack(randomMonster);
                health_user -= 1;
                $("#health_user").html(health_user);
                $("#jawaban3").html("salah");
                if(health_user == 0){
                    
                    document.getElementById('shop1').style.visibility = 'hidden';
                    document.getElementById('shop2').style.visibility = 'hidden';
                    document.getElementById('skip').style.visibility = 'hidden';
                    document.getElementById('pause').style.visibility = 'hidden';
                    document.getElementById('resume').style.visibility = 'hidden';

                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    $("#question").html("Game Over You Died");

                    PostLeaderboard();

                    $("#wizard").attr('src',"/image/wizard_death.gif");
                    setTimeout(function(){
                        $("#wizard").attr('src',"/image/wizard_death_png.gif");
                    }, 700);
                    setTimeout(function(){
                        location.replace("http://127.0.0.1:8000/leaderboard");
                    }, 5000);
                }else{
                    button_pressed = 1;
                    //Update Game Data
                    UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                    //Update Current Monster Data
                    UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban4").click(function(){
            if (button_pressed == 1){

            }else{
                $("#wizard").attr('src',"/image/wizard_attack.gif");
                setTimeout(function(){
                    $("#wizard").attr('src',"/image/wizard_idle.gif");
                }, 800);
                total_damage += current_damage;
                $("#total_damage").html(total_damage);
                progressBarFull.style.width = (((current_health_monster - current_damage)*100)/health_monster) + '%';
                current_health_monster -= current_damage;
                
                

                //Update Game Data
                UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

                //Health Monster Habis
                health_monster_habis()

                //Update Current Monster Data
                UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);

                button_pressed = 1;
                PertanyaanListPertama();  
            }
        })
    }     
}

//Function Shop
function shop(){
    $("#shop1").click(function(){
        if(money>=100){
            GetItem(1);
            
            
            document.getElementById('jawaban1').style.visibility = 'visible';
            document.getElementById('jawaban2').style.visibility = 'visible';
            document.getElementById('jawaban3').style.visibility = 'visible';
            document.getElementById('jawaban4').style.visibility = 'visible';
            document.getElementById('question').style.visibility = 'visible';

            //Update Game Data
            UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);
        }else{
            alert("Your Money is not Enough");
        }
    })

    $("#shop2").click(function(){
        if(money>=200){
            if(health_user == 3){

            }else{
                
                document.getElementById('jawaban1').style.visibility = 'visible';
                document.getElementById('jawaban2').style.visibility = 'visible';
                document.getElementById('jawaban3').style.visibility = 'visible';
                document.getElementById('jawaban4').style.visibility = 'visible';
                document.getElementById('question').style.visibility = 'visible';

                //Update Game Data
                UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);
            }
            
        }else{
            alert("Your Money is not Enough");
        }
    })

    $("#skip").click(function(){
        document.getElementById('jawaban1').style.visibility = 'visible';
        document.getElementById('jawaban2').style.visibility = 'visible';
        document.getElementById('jawaban3').style.visibility = 'visible';
        document.getElementById('jawaban4').style.visibility = 'visible';
        document.getElementById('question').style.visibility = 'visible';

        //Update Game Data
        UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);
    })
}



function health_monster_habis(){
    if(current_health_monster <= 0){

        //Shop
        //Jawaban dan Pertanyaan di Hidden
        document.getElementById('jawaban1').style.visibility = 'hidden';
        document.getElementById('jawaban2').style.visibility = 'hidden';
        document.getElementById('jawaban3').style.visibility = 'hidden';
        document.getElementById('jawaban4').style.visibility = 'hidden';
        document.getElementById('question').style.visibility = 'hidden';

        

        shop();

        GetMonsterDeath(randomMonster);

        money += 100;
        $("#money").html(money);
        health_monster = health_monster * 2;
        current_health_monster = health_monster;
        progressBarFull.style.width = '100%';

        //Update Game Data
        UpdateGameData(gamedata_id, total_damage, health_user, money, time_to_database, current_damage);

        //Update Current Monster Data
        UpdateTerbunuh(gamedata_id, randomMonster, current_health_monster, health_monster);
    }
}

//Function Get Item
function GetItem($id){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://127.0.0.1:8000/getItem/" +$id,
        success: function (data) {
            price = data.price;
            attribute = data.attribute;
            if($id == 1){
                current_damage += attribute;
                money -= price;
                $("#money").html(money);
            }else if($id == 2){
                money -= price;
                health_user += attribute;
                $("#health_user").html(health_user);
                $("#money").html(money);
            }
        }
    });
}

//Function Get Monster Attack
function GetMonsterAttack($id){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://127.0.0.1:8000/getMonster/" +$id,
        success: function (data) {
            monster_idle = data.monster_image_path_idle;
            monster_attack = data.monster_image_path_attack;
            if(randomMonster == 1){
                $("#monster").attr('src',monster_attack);
                setTimeout(function(){
                    $("#monster").attr('src',monster_idle);
                }, 1500);
            }else if(randomMonster == 2){
                $("#monster").attr('src',monster_attack);
                setTimeout(function(){
                    $("#monster").attr('src',monster_idle);
                }, 600);
            }else if(randomMonster == 3){
                $("#monster").attr('src',monster_attack);
                setTimeout(function(){
                    $("#monster").attr('src',monster_idle);
                }, 1700);
            }else if(randomMonster == 4){
                $("#monster").attr('src',monster_attack);
                setTimeout(function(){
                    $("#monster").attr('src',monster_idle);
                }, 1180);
            }else if(randomMonster == 5){
                $("#monster").attr('src',monster_attack);
                setTimeout(function(){
                    $("#monster").attr('src',monster_idle);
                }, 920);
            }
        }
    });
}

//Function Get Monster Idle
function GetMonsterIdle($id){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://127.0.0.1:8000/getMonster/" +$id,
        success: function (data) {
            monster_idle = data.monster_image_path_idle;
            $("#monster").attr('src',monster_idle);
        }
    });
}


//Function Get Monster Death
function GetMonsterDeath($id){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://127.0.0.1:8000/getMonster/" +$id,
        success: function (data) {
            monster_death = data.monster_image_path_dead;

            //game over
            if(randomMonster == 1){
                $("#monster").attr('src', monster_death);
                setTimeout(function(){
                    randomMonster = Math.floor(Math.random() * 5) + 1;
                    GetMonsterIdle(randomMonster);
                }, 2200);

            }else if(randomMonster == 2){
                $("#monster").attr('src', monster_death);
                setTimeout(function(){
                    randomMonster = Math.floor(Math.random() * 5) + 1;
                    GetMonsterIdle(randomMonster);
                }, 900);

            }else if(randomMonster == 3){
                $("#monster").attr('src', monster_death);
                setTimeout(function(){
                    randomMonster = Math.floor(Math.random() * 5) + 1;
                    GetMonsterIdle(randomMonster);
            }, 900);
            }else if(randomMonster == 4){
                $("#monster").attr('src', monster_death);
                setTimeout(function(){
                    randomMonster = Math.floor(Math.random() * 5) + 1;
                    GetMonsterIdle(randomMonster);
            }, 1200);
            }else if(randomMonster == 5){
                $("#monster").attr('src', monster_death);
                setTimeout(function(){
                    randomMonster = Math.floor(Math.random() * 5) + 1;
                    GetMonsterIdle(randomMonster);
            }, 1100);            
        }
        }
    });
}

// Post Data to Leaderboard
function PostLeaderboard(){
    //Update Current Monster Data
    UpdateTerbunuh(gamedata_id, 1, 100, 100);
    
    //Update Game Data
    UpdateGameData(gamedata_id, 0, 3, 0, 600, 20);

    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: "http://127.0.0.1:8000/postLeaderboard",
        type: 'POST',
        dataType: 'JSON',
        data: { 
            name: player_name,
            total_damage: total_damage			
        },
        success: function(data){
            alert(data.success);
        }
    });
}

//Create Game Data
function PostGameData(id){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: "http://127.0.0.1:8000/postGameData",
        type: 'POST',
        dataType: 'JSON',
        data: { 
            gamedata_id: id,
            student_id: id,
            total_damage : 0,
            health_left : 3,
            money : 0,
            time_left : 600,
            current_damage : 20	
        },
        success: function(data){
            alert(data.success);
        }
    });
}

//Update Game Data
function UpdateGameData(id, total_damage, health_left, money, time_left, current_damage){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: "http://127.0.0.1:8000/updateGameData/" + id,
        type: 'POST',
        dataType: 'JSON',
        data: { 
            gamedata_id: id,
            student_id: id,
            total_damage : total_damage,
            health_left : health_left,
            money : money,
            time_left : time_left,
            current_damage : current_damage	
        },
        success: function(data){
            alert(data.success);
        }
    });
}

//Get Monster Terbunuh
function GetTerbunuh(id){
    $.ajax({
        type: "GET",
        dataType: 'json',
        url: "http://127.0.0.1:8000/getTerbunuh/"+id,
        success: function (data) {
            randomMonster = data.monster_id;
            health_monster = data.monster_base_health;
            current_health_monster = data.monster_health_left;

            progressBarFull.style.width = (((current_health_monster)*100)/health_monster) + '%';
            if(randomMonster == 1){
                $("#monster").attr('src',"/image/monster_idle.gif");
            }else if(randomMonster == 2){
                $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
            }else if(randomMonster == 3){
                $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
            }else if(randomMonster == 4){
                $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
            }else if(randomMonster == 5){
                $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
            }
        }
    });
}

//Create Terbunuh
function CreateTerbunuh(id){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: "http://127.0.0.1:8000/postTerbunuh",
        type: 'POST',
        dataType: 'JSON',
        data: { 
            current_monster_id : id,
            monster_id: 1,
            gamedata_id : id,
            monster_base_health : 100,
            monster_health_left : 100
        },
        success: function(data){
            alert(data.success);
        }
    });
}

//Function Update Terbunuh
function UpdateTerbunuh(id, monster_id, current_health_monster, health_monster){
    $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url: "http://127.0.0.1:8000/updateTerbunuh/" + id,
        type: 'POST',
        dataType: 'JSON',
        data: { 
            monster_id: monster_id,
            gamedata_id : id,
            monster_base_health : health_monster,
            monster_health_left : current_health_monster
        },
        success: function(data){
            alert(data.success);
        }
    });
}