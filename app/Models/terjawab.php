<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class terjawab extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table = 'bio9_pertanyaan_terjawab';
    protected $fillable = [
        'terjawab_id',
        'pertanyaan_id_terjawab',
        'student_gamedata_id_terjawab'
    ];

    public function getpertanyaan(){
        return $this->belongsTo(pertanyaan::class, 'pertanyaan_id_terjawab', 'pertanyaan_id');
    }

    public function getgamedata(){
        return $this->belongsTo(gamedata::class, 'student_gamedata_id_terjawab', 'student_gamedata_id');
    }
}
