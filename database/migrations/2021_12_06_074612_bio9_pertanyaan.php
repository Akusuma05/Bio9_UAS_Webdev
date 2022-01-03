<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Bio9Pertanyaan extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bio9_pertanyaan', function (Blueprint $table) {
            $table->integer('pertanyaan_id')->primary();
            $table->String('pertanyaan');
            $table->String('jawaban_benar');
            $table->String('jawaban_salah1');
            $table->String('jawaban_salah2');
            $table->String('jawaban_salah3');
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
