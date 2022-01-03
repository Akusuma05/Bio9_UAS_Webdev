<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RelationTerbeliGamedata extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bio9_item_terbeli', function (Blueprint $table) {
            $table->foreign('student_gamedata_id_terbeli')
            ->references('student_gamedata_id')->on('bio9_student_gamedata')
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
