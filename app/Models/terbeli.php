<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class terbeli extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $table='bio9_item_terbeli';
    protected $fillable =[
        'terbeli_id',
        'item_id_terbeli',
        'student_gamedata_id_terbeli',
        'harga',
    ];

    public function getitem(){
        return $this->belongsTo(item::class, 'item_id_terbeli', 'item_id');
    }

    public function getgamedata(){
        return $this->belongsTo(gamedata::class, 'student_gamedata_id_terbeli', 'student_gamedata_id');
    }
}
