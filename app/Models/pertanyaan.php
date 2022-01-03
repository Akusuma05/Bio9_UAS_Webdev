<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pertanyaan extends Model
{
    use HasFactory;
    
    public $timestamps = false;
    protected $primaryKey = 'pertanyaan_id';
    protected $keyType = 'integer';
    protected $table = 'bio9_pertanyaan';
    protected $fillable = [
        'pertanyaan_id',
        'pertanyaan',
        'jawaban_benar',
        'jawaban_salah1',
        'jawaban_salah2',
        'jawaban_salah3',
    ];

    public function getpertanyaanterjawab(){
        return $this->hasMany(terjawab::class, 'pertanyaan_id_terjawab', 'pertanyaan_id');
    }
}
