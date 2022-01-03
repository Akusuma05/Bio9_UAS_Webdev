<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class terbunuh extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table='bio9_monster_terbunuh';
    protected $fillable =[
        'terbunuh_id',
        'monster_id_terbunuh',
        'student_gamedata_id_terbunuh',
        'monster_base_health',
        'monster_health_left'
    ];

    public function getmonster(){
        return $this->belongsTo(monster::class, 'monster_id_terbunuh', 'monster_id');
    }

    public function getgamedata(){
        return $this->belongsTo(gamedata::class, 'student_gamedata_id_terbunuh', 'student_gamedata_id');
    }
}
