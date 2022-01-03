<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Bio9StudentGamedata extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bio9_student_gamedata', function (Blueprint $table) {
            $table->integer('student_gamedata_id')->primary();
            $table->integer('student_id_gamedata');
            $table->integer('total_damage');
            $table->integer('health_left');
            $table->integer('money');
            $table->integer('time_left');
            $table->integer('current_damage');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
