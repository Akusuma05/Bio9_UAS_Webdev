<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class gamedata extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'student_gamedata_id';
    protected $keyType = 'integer';
    protected $table = 'bio9_student_gamedata';
    protected $fillable = [
        'student_gamedata_id',
        'student_id_gamedata',
        'total_damage',
        'health_left',
        'money',
        'time_left',
        'current_damage',
    ];

    public function getterbeli(){
        return $this->hasMany(terbeli::class, 'student_gamedata_id_terbeli', 'student_gamedata_id');
    }

    public function getterjawab(){
        return $this->hasMany(terjawab::class, 'student_gamedata_id_terjawab', 'student_gamedata_id');
    }
    
    public function getterbunuh(){
        return $this->hasMany(terbunuh::class, 'student_gamedata_id_terbunuh', 'student_gamedata_id');
    }

    public function getstudent(){
        return $this->belongsTo(students::class, 'student_id_gamedata', 'student_id');
    }
}
