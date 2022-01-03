<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RelationMonsterTerbunuh extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bio9_monster_terbunuh', function (Blueprint $table) {
            $table->foreign('monster_id_terbunuh')
            ->references('monster_id')->on('bio9_monster')
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
        Schema::table('bio9_monster', function (Blueprint $table) {
            //
        });
    }
}
