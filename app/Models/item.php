<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class item extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'item_id';
    protected $keyType = 'integer';
    protected $table = 'bio9_item';
    protected $fillable = [
        'item_id',
        'item_name',
        'base_harga',
        'penambahan_damage',
    ];

    public function getitemterbeli(){
        return $this->hasMany(terbeli::class, 'item_id_terbeli', 'item_id');
    }
}
