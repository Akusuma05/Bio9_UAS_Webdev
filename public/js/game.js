//Deklarasi
let jawaban_benar;
let jawaban_salah1;
let jawaban_salah2;
let jawaban_salah3;

let player_name;

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

//Saat Ngeload
$(document).ready(function() {
    //Hidden Button Resume And Show Pause
    document.getElementById('pause').style.visibility = 'visible';
    document.getElementById('resume').style.visibility = 'hidden';

    //Monster Health Bar 100%
    progressBarFull.style.width = '100%';

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
            GetGameData(data.id);
            player_name = data.name;
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

        if (--timer < 0) {
            timer = duration;
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
                if(current_health_monster <= 0){
                    //Shop
                    //Jawaban dan Pertanyaan di Hidden
                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    document.getElementById('question').style.visibility = 'hidden';

                   shop();
                   
                    if(randomMonster == 1){
                        $("#monster").attr('src',"/image/monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 2200);
                    }else if(randomMonster == 2){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 3){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 4){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1200);
                    }else if(randomMonster == 5){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1100);
                    }
                    money += 100;
                    $("#money").html(money);
                    health_monster = health_monster * 2;
                    current_health_monster = health_monster;
                    progressBarFull.style.width = '100%';
                }
                button_pressed = 1;
                PertanyaanListPertama(); 
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

    //Skenario 2 Jawaban 2 Benar
    }else if(randomPertanyaan == 2){ 

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                if(current_health_monster <= 0){

                    //Shop
                    //Jawaban dan Pertanyaan di Hidden
                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    document.getElementById('question').style.visibility = 'hidden';

                    shop();

                    //game over
                    if(randomMonster == 1){
                        $("#monster").attr('src',"/image/monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 2200);
                    }else if(randomMonster == 2){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 3){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 4){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1200);
                    }else if(randomMonster == 5){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1100);
                    }
                    money += 100;
                    $("#money").html(money);
                    health_monster = health_monster * 2;
                    current_health_monster = health_monster;
                    progressBarFull.style.width = '100%';
                }
                button_pressed = 1;
                PertanyaanListPertama(); 
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })
    
    //Skenario 3 Jawaban 3 Benar
    }else if(randomPertanyaan == 3){

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                if(current_health_monster <= 0){

                    //Shop
                    //Jawaban dan Pertanyaan di Hidden
                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    document.getElementById('question').style.visibility = 'hidden';

                    shop();

                    //game over
                    if(randomMonster == 1){
                        $("#monster").attr('src',"/image/monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 2200);
                    }else if(randomMonster == 2){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 3){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 4){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1200);
                    }else if(randomMonster == 5){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1100);
                    }
                    money += 100;
                    $("#money").html(money);
                    health_monster = health_monster * 2;
                    current_health_monster = health_monster;
                    progressBarFull.style.width = '100%';
                }
                button_pressed = 1;
                PertanyaanListPertama(); 
            }
        })

        $("#jawaban4").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

    //Skenario 4 Jawaban 4 Benar
    }else if(randomPertanyaan == 4){

        $("#jawaban1").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban2").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                    PertanyaanListPertama(); 
                }
            }
        })

        $("#jawaban3").click(function(){
            if(button_pressed == 1){

            }else{
                if(randomMonster == 1){
                    $("#monster").attr('src',"/image/monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/monster_idle.gif");
                    }, 1500);
                }else if(randomMonster == 2){
                    $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_attack.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_idle.gif");
                    }, 600);
                }else if(randomMonster == 3){
                    $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_idle_v2.gif");
                    }, 1700);
                }else if(randomMonster == 4){
                    $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif");
                    }, 1180);
                }else if(randomMonster == 5){
                    $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_attack_v2.gif");
                    setTimeout(function(){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_idle_v2.gif");
                    }, 920);
                }
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
                if(current_health_monster <= 0){

                    //Shop
                    //Jawaban dan Pertanyaan di Hidden
                    document.getElementById('jawaban1').style.visibility = 'hidden';
                    document.getElementById('jawaban2').style.visibility = 'hidden';
                    document.getElementById('jawaban3').style.visibility = 'hidden';
                    document.getElementById('jawaban4').style.visibility = 'hidden';
                    document.getElementById('question').style.visibility = 'hidden';

                    shop();

                    //game over
                    if(randomMonster == 1){
                        $("#monster").attr('src',"/image/monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 2200);
                    }else if(randomMonster == 2){
                        $("#monster").attr('src',"/image/Eyeball_monster/Eyeball_monster_death.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 3){
                        $("#monster").attr('src',"/image/Fire_worm_v2/Fire_worm_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 900);
                    }else if(randomMonster == 4){
                        $("#monster").attr('src',"/image/Scifi_monster_v2/Scifi_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1200);
                    }else if(randomMonster == 5){
                        $("#monster").attr('src',"/image/Trash_monster_v2/Trash_monster_death_v2.gif");
                        setTimeout(function(){
                            randomMonster = Math.floor(Math.random() * 5) + 1;
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
                        }, 1100);
                    }
                    money += 100;
                    $("#money").html(money);
                    health_monster = health_monster * 2;
                    current_health_monster = health_monster;
                    progressBarFull.style.width = '100%';
                }
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
            current_damage += 15;
            money -= 100
            $("#money").html(money);
            document.getElementById('jawaban1').style.visibility = 'visible';
            document.getElementById('jawaban2').style.visibility = 'visible';
            document.getElementById('jawaban3').style.visibility = 'visible';
            document.getElementById('jawaban4').style.visibility = 'visible';
            document.getElementById('question').style.visibility = 'visible';
        }else{
            alert("Your Money is not Enough");
        }
    })

    $("#shop2").click(function(){
        if(money>=200){
            if(health_user == 3){

            }else{
                money -= 200
                health_user ++;
                $("#health_user").html(health_user);
                $("#money").html(money);
                document.getElementById('jawaban1').style.visibility = 'visible';
                document.getElementById('jawaban2').style.visibility = 'visible';
                document.getElementById('jawaban3').style.visibility = 'visible';
                document.getElementById('jawaban4').style.visibility = 'visible';
                document.getElementById('question').style.visibility = 'visible';
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
    })
}

// Post Data to Leaderboard
function PostLeaderboard(){
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