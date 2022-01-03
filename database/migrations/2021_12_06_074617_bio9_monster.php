<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Bio9Monster extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bio9_monster', function (Blueprint $table) {
            $table->integer('monster_id')->primary();
            $table->String('monster_name');
            $table->String('monster_image_path_idle');
            $table->String('monster_image_path_attack');
            $table->String('monster_image_path_dead');
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
