<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class MonsterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bio9_monster')->insert([
            'monster_id' => 1,
            'monster_name' => 'Demon King',
            'monster_image_path_idle' => '/image/monster_idle.gif',
            'monster_image_path_attack' => '/image/monster_attack.gif',
            'monster_image_path_dead' => '/image/monster_death.gif'
        ]);

        DB::table('bio9_monster')->insert([
            'monster_id' => 2,
            'monster_name' => 'Eyeball Monster',
            'monster_image_path_idle' => '/image/Eyeball_monster/Eyeball_monster_idle.gif',
            'monster_image_path_attack' => '/image/Eyeball_monster/Eyeball_monster_attack.gif',
            'monster_image_path_dead' => '/image/Eyeball_monster/Eyeball_monster_death.gif'
        ]);

        DB::table('bio9_monster')->insert([
            'monster_id' => 3,
            'monster_name' => 'Fireworm',
            'monster_image_path_idle' => '/image/Fire_worm_v2/Fire_worm_idle_v2.gif',
            'monster_image_path_attack' => '/image/Fire_worm_v2/Fire_worm_attack_v2.gif',
            'monster_image_path_dead' => '/image/Fire_worm_v2/Fire_worm_death_v2.gif'
        ]);

        DB::table('bio9_monster')->insert([
            'monster_id' => 4,
            'monster_name' => 'Scifi',
            'monster_image_path_idle' => '/image/Scifi_monster_v2/Scifi_monster_idle_v2.gif',
            'monster_image_path_attack' => '/image/Scifi_monster_v2/Scifi_monster_attack_v2.gif',
            'monster_image_path_dead' => '/image/Scifi_monster_v2/Scifi_monster_death_v2.gif'
        ]);

        DB::table('bio9_monster')->insert([
            'monster_id' => 5,
            'monster_name' => 'Trash Monster',
            'monster_image_path_idle' => '/image/Trash_monster_v2/Trash_monster_idle_v2.gif',
            'monster_image_path_attack' => '/image/Trash_monster_v2/Trash_monster_attack_v2.gif',
            'monster_image_path_dead' => '/image/Trash_monster_v2/Trash_monster_death_v2.gif'
        ]);
    }
}
