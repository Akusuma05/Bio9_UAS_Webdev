<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RelationTerbunuhGamedata extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bio9_current_monster', function (Blueprint $table) {
            $table->foreign('gamedata_id')
            ->references('gamedata_id')->on('bio9_student_gamedata')
            ->onDelete('cascade')
            ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('bio9_student_gamedata', function (Blueprint $table) {
            //
        });
    }
}
