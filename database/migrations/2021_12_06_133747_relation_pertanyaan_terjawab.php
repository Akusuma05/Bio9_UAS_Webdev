<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RelationPertanyaanTerjawab extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('bio9_pertanyaan_terjawab', function (Blueprint $table) {
            $table->foreign('pertanyaan_id_terjawab')
            ->references('pertanyaan_id')->on('bio9_pertanyaan')
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
        Schema::table('bio9_pertanyaan', function (Blueprint $table) {
            //
        });
    }
}
