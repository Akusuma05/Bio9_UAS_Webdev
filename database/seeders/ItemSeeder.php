<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bio9_item')->insert([
            'item_id' => 1,
            'item_name' => 'Tambah Damage +15',
            'price' => '100',
            'attribute' => '15',
        ]);
        
        DB::table('bio9_item')->insert([
            'item_id' => 2,
            'item_name' => 'Tambah Health +1',
            'price' => '200',
            'attribute' => '1',
        ]);
    }
}
