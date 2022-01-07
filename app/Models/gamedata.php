<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class gamedata extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'gamedata_id';
    protected $keyType = 'integer';
    protected $table = 'bio9_student_gamedata';
    protected $fillable = [
        'gamedata_id',
        'student_id',
        'total_damage',
        'health_left',
        'money',
        'time_left',
        'current_damage',
    ];
}
