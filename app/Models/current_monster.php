<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class current_monster extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table='bio9_current_monster';
    protected $fillable =[
        'current_monster_id',
        'monster_id',
        'gamedata_id',
        'monster_base_health',
        'monster_health_left'
    ];
}
