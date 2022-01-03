<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class monster extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'monster_id';
    protected $keyType = 'integer';
    protected $table = 'bio9_monster';
    protected $fillable = [
        'monster_id',
        'monster_name',
        'monster_image_path_idle',
        'monster_image_path_attack',
        'monster_image_path_dead',
    ];

    public function getmonsterterbunuh(){
        return $this->hasMany(terbunuh::class, 'monster_id_terbunuh', 'monster_id');
    }
}
