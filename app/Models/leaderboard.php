<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class leaderboard extends Model
{
    use HasFactory;

    public $timestamps = false;
    public $table = 'bio9_leaderboard';
    protected $fillable = [
        'name',
        'total_damage',
    ];
}
