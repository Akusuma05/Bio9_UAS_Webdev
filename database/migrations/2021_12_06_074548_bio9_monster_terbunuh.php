<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Bio9MonsterTerbunuh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bio9_current_monster', function (Blueprint $table) {
            $table->bigIncrements('current_monster_id');
            $table->integer('monster_id');
            $table->integer('gamedata_id');
            $table->integer('monster_base_health');
            $table->integer('monster_health_left');
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
