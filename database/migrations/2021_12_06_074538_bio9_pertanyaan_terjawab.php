<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Bio9PertanyaanTerjawab extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bio9_pertanyaan_terjawab', function (Blueprint $table) {
            $table->bigIncrements('terjawab_id');
            $table->integer('pertanyaan_id_terjawab');
            $table->integer('student_gamedata_id_terjawab');
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
