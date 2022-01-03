<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Hash;

class PertanyaanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 1,
            'pertanyaan' => 'Dimanakah tempat terjadinya ovulasi?',
            'jawaban_benar' => 'Ovarium',
            'jawaban_salah1' => 'Saluran tuba',
            'jawaban_salah2' => 'Uterus',
            'jawaban_salah3' => 'Vagina'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 2,
            'pertanyaan' => 'Persilangan antara dua individu dengan karakteristik tertentu disebut?',
            'jawaban_benar' => 'Monohibrid',
            'jawaban_salah1' => 'Dihybrid',
            'jawaban_salah2' => 'Trihibrid',
            'jawaban_salah3' => 'Quadhibrid'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 3,
            'pertanyaan' => 'Warna kekuningan urin disebabkan oleh adanya zat-zat tertentu dalam urin yaitu...',
            'jawaban_benar' => 'Urobilin',
            'jawaban_salah1' => 'Amonia',
            'jawaban_salah2' => 'Albumin',
            'jawaban_salah3' => 'Urea'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 4,
            'pertanyaan' => 'Organ reproduksi yang berfungsi menghasilkan sperma adalah...',
            'jawaban_benar' => 'Testis',
            'jawaban_salah1' => 'Penis',
            'jawaban_salah2' => 'Skrotum',
            'jawaban_salah3' => 'Vas deferens'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 5,
            'pertanyaan' => 'Organ-organ yang bertanggung jawab untuk penanganan zat beracun yang masuk ke dalam tubuh adalah...',
            'jawaban_benar' => 'Hati',
            'jawaban_salah1' => 'Ginjal',
            'jawaban_salah2' => 'Kulit',
            'jawaban_salah3' => 'Paru-paru'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 6,
            'pertanyaan' => 'Sistem saraf pusat terdiri dari...',
            'jawaban_benar' => 'Otak dan sumsum tulang belakang',
            'jawaban_salah1' => 'Otak dan saraf',
            'jawaban_salah2' => 'Otak besar dan otak kecil',
            'jawaban_salah3' => 'Otak saja'

        ]);
        //potentially kelebihan

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 7,
            'pertanyaan' => 'Bagian yg berfungsi sebagai alat keseimbangan tubuh adalah?',
            'jawaban_benar' => 'Otak kecil',
            'jawaban_salah1' => 'Mata',
            'jawaban_salah2' => 'Telinga',
            'jawaban_salah3' => 'Hidung'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 8,
            'pertanyaan' => 'Berikut ini yang bukan organ reproduksi pria adalah?',
            'jawaban_benar' => 'Uterus',
            'jawaban_salah1' => 'Uretra',
            'jawaban_salah2' => 'Epididimis',
            'jawaban_salah3' => 'Testis'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 9,
            'pertanyaan' => 'Sel telur yang melebur dengan sperma akan membentuk?',
            'jawaban_benar' => 'Zigote',
            'jawaban_salah1' => 'Embrio',
            'jawaban_salah2' => 'Janin',
            'jawaban_salah3' => 'Anak'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 10,
            'pertanyaan' => 'AIDS merupakan singkatan dari?',
            'jawaban_benar' => 'Acquired Immune Deficiency Syndrome',
            'jawaban_salah1' => 'Acquired Immune Deficiency Sickness',
            'jawaban_salah2' => 'Acquired Immune Disease Syndrome',
            'jawaban_salah3' => 'Acquired Immune Disease Sickness'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 11,
            'pertanyaan' => 'Siklus mentruasi yang normal terjadi setiap berapa hari sekali?',
            'jawaban_benar' => '28 hari',
            'jawaban_salah1' => '14 hari',
            'jawaban_salah2' => '36 hari',
            'jawaban_salah3' => '7 hari'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 12,
            'pertanyaan' => 'Ginjal menyaring zat sisa yg berupa ureum dari dalam...',
            'jawaban_benar' => 'Darah',
            'jawaban_salah1' => 'Urin',
            'jawaban_salah2' => 'Air',
            'jawaban_salah3' => 'Protein'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 13,
            'pertanyaan' => 'Bagian-bagian berikut yang bukan merupakan bagian ginjal adalah?',
            'jawaban_benar' => 'Limpa',
            'jawaban_salah1' => 'Nefron',
            'jawaban_salah2' => 'Korteks',
            'jawaban_salah3' => 'Pelvis'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 14,
            'pertanyaan' => 'Berikut adalah cara-cara penularan HIV/AIDS, kecuali...',
            'jawaban_benar' => 'Air liur',
            'jawaban_salah1' => 'Hubungan seks',
            'jawaban_salah2' => 'Transfusi darah',
            'jawaban_salah3' => 'Jarum suntik'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 15,
            'pertanyaan' => 'Organ reproduksi wanita yang berfungsi sebagai saluran persalinan dan tempat masuknya sperma adalah?',
            'jawaban_benar' => 'Vagina',
            'jawaban_salah1' => 'Rahim',
            'jawaban_salah2' => 'Ovarium',
            'jawaban_salah3' => 'Tuba falopi'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 16,
            'pertanyaan' => 'Berikut yang bukan merupakan organ dalam sistem ekskresi adalah?',
            'jawaban_benar' => 'Uterus',
            'jawaban_salah1' => 'Uretra',
            'jawaban_salah2' => 'Hati',
            'jawaban_salah3' => 'Ureter'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 17,
            'pertanyaan' => 'Sifat turunan yang bisa diamati dengan mata adalah sifat...',
            'jawaban_benar' => 'Fenotipe',
            'jawaban_salah1' => 'Genotipe',
            'jawaban_salah2' => 'Dominan',
            'jawaban_salah3' => 'Selotipe'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 18,
            'pertanyaan' => 'Berikut yang bukan merupakan sifat genotipe dominan adalah?',
            'jawaban_benar' => 'tidak ada',
            'jawaban_salah1' => 'BB',
            'jawaban_salah2' => 'HH',
            'jawaban_salah3' => 'KK'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 19,
            'pertanyaan' => 'Penyakit menular seksual berikut yang disebabkan oleh bakteri adalah?',
            'jawaban_benar' => 'Gonore',
            'jawaban_salah1' => 'HIV/AIDS',
            'jawaban_salah2' => 'Herpes',
            'jawaban_salah3' => 'Cholera'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 20,
            'pertanyaan' => 'Penyakit menular seksual berikut yang disebabkan oleh bakteri adalah?',
            'jawaban_benar' => 'Gonore',
            'jawaban_salah1' => 'HIV/AIDS',
            'jawaban_salah2' => 'Herpes',
            'jawaban_salah3' => 'Cholera'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 21,
            'pertanyaan' => 'Treponema pallidum merupakan bakteri penyebab penyakit...',
            'jawaban_benar' => 'Sifilis',
            'jawaban_salah1' => 'Gonore',
            'jawaban_salah2' => 'Herpes',
            'jawaban_salah3' => 'Klamidia'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 22,
            'pertanyaan' => 'Proses pembentukan sperma disebut...',
            'jawaban_benar' => 'Spermatogenesis',
            'jawaban_salah1' => 'Oogenesis',
            'jawaban_salah2' => 'Mimpi basah',
            'jawaban_salah3' => 'Ejakulasi'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 23,
            'pertanyaan' => 'Batang yang ada di dalam tanah disebut...',    
            'jawaban_benar' => 'Rhizoma',
            'jawaban_salah1' => 'Stolon',
            'jawaban_salah2' => 'Umbi batang',
            'jawaban_salah3' => 'Setek'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 24,
            'pertanyaan' => 'Contoh tumbuhan yang berkembang biak dengan cara rhizoma adalah?',    
            'jawaban_benar' => 'Jahe',
            'jawaban_salah1' => 'Bawang',
            'jawaban_salah2' => 'Kentang',
            'jawaban_salah3' => 'Mawar'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 25,
            'pertanyaan' => 'Batang tumbuhan yang menjalar di atas tanah disebut...',    
            'jawaban_benar' => 'Stolon',
            'jawaban_salah1' => 'Rhizoma',
            'jawaban_salah2' => 'Ubi jalar',
            'jawaban_salah3' => 'Setek'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 26,
            'pertanyaan' => 'Contoh tumbuhan yang berkembang biak dengan cara stolon adalah?',    
            'jawaban_benar' => 'Stroberi',
            'jawaban_salah1' => 'Kunyit',
            'jawaban_salah2' => 'Kentang',
            'jawaban_salah3' => 'Geragih'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 27,
            'pertanyaan' => 'Contoh tumbuhan yang berkembang biak dengan cara umbi lapis adalah?',    
            'jawaban_benar' => 'Bawang merah',
            'jawaban_salah1' => 'Daun bawang',
            'jawaban_salah2' => 'Kentang',
            'jawaban_salah3' => 'Kacang'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 28,
            'pertanyaan' => 'Contoh tumbuhan yang berkembang biak dengan cara umbi batang adalah?',    
            'jawaban_benar' => 'Kentang',
            'jawaban_salah1' => 'Ubi jalan',
            'jawaban_salah2' => 'Kacang',
            'jawaban_salah3' => 'Kedelai'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 29,
            'pertanyaan' => 'Contoh tumbuhan yang berkembang biak dengan cara kuncup adventif adalah?',    
            'jawaban_benar' => 'Cocor bebek',
            'jawaban_salah1' => 'Cocor ayam',
            'jawaban_salah2' => 'Cocor burung',
            'jawaban_salah3' => 'Cacar ayam'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 30,
            'pertanyaan' => 'Berikut yang bukan merupakan perkembangbiakan vegetatif alami adalah...',    
            'jawaban_benar' => 'Setek',
            'jawaban_salah1' => 'Rhizoma',
            'jawaban_salah2' => 'Stolon',
            'jawaban_salah3' => 'Kuncup adventif'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 31,
            'pertanyaan' => 'Proses menempelnya serbuk sari ke kepala putik disebut?',    
            'jawaban_benar' => 'Penyerbukan',
            'jawaban_salah1' => 'Perkawinan',
            'jawaban_salah2' => 'Peleburan',
            'jawaban_salah3' => 'Penempelan'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 32,
            'pertanyaan' => 'Penyerbukan dengan bantuan angin disebut?',    
            'jawaban_benar' => 'Anemogami',
            'jawaban_salah1' => 'Entomogami',
            'jawaban_salah2' => 'Ornitogami',
            'jawaban_salah3' => 'Antropogami'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 33,
            'pertanyaan' => 'Penyerbukan dengan bantuan kelelawar disebut?',    
            'jawaban_benar' => 'Kiropterogami',
            'jawaban_salah1' => 'Antropogami',
            'jawaban_salah2' => 'Entomogami',
            'jawaban_salah3' => 'Ornitogami'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 34,
            'pertanyaan' => 'Penyerbukan dengan bantuan manusia disebut?',    
            'jawaban_benar' => 'Antropogami',
            'jawaban_salah1' => 'Androgami',
            'jawaban_salah2' => 'Entomogami',
            'jawaban_salah3' => 'Homonogami'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 35,
            'pertanyaan' => 'Penyerbukan dapat dibedakan menjadi berbagai macam berdasarkan asal serbuk sarinya, kecuali...',    
            'jawaban_benar' => 'Rosagami',
            'jawaban_salah1' => 'Autogami',
            'jawaban_salah2' => 'Geitonogami',
            'jawaban_salah3' => 'Allogami/Xenogami'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 36,
            'pertanyaan' => 'Berikut adalah macam-macam cara penyebaran biji, kecuali...',    
            'jawaban_benar' => 'Aerokori',
            'jawaban_salah1' => 'Zookori',
            'jawaban_salah2' => 'Hidrokori',
            'jawaban_salah3' => 'Antropokori'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 37,
            'pertanyaan' => 'Proses penyebaran biji dengan bantuan air disebut?',    
            'jawaban_benar' => 'Hidrokori',
            'jawaban_salah1' => 'Aquakori',
            'jawaban_salah2' => 'Hidropokori',
            'jawaban_salah3' => 'Watakori'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 38,
            'pertanyaan' => 'Cara penyebaran biji yang termasuk dalam zookori adalah?',    
            'jawaban_benar' => 'Ornitokori',
            'jawaban_salah1' => 'Arachnokori',
            'jawaban_salah2' => 'Avesokori',
            'jawaban_salah3' => 'Insektokori'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 39,
            'pertanyaan' => 'Pada perkecambahan, sebelum berkecambah biji mengalami masa?',    
            'jawaban_benar' => 'Dormansi',
            'jawaban_salah1' => 'Embrionik',
            'jawaban_salah2' => 'Pre-kecambah',
            'jawaban_salah3' => 'Pasif'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 40,
            'pertanyaan' => 'Alat perkembangbiakan generatif pada tumbuhan Gymnospermae disebut?',    
            'jawaban_benar' => 'Strobilus',
            'jawaban_salah1' => 'Spora',
            'jawaban_salah2' => 'Putik',
            'jawaban_salah3' => 'Stolon'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 41,
            'pertanyaan' => 'Pada tumbuhan Gymnospermae, mikrospora akan berkembang membentuk? ',    
            'jawaban_benar' => 'Serbuk sari',
            'jawaban_salah1' => 'Spora',
            'jawaban_salah2' => 'Putik',
            'jawaban_salah3' => 'Sari spora'
            
        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 42,
            'pertanyaan' => 'Pada tumbuhan Gymnospermae, mitosis inti megaspora akan membentuk?',    
            'jawaban_benar' => 'Sel telur',
            'jawaban_salah1' => 'Telur',
            'jawaban_salah2' => 'Putik',
            'jawaban_salah3' => 'Sel spora betina'
            
        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 43,
            'pertanyaan' => 'Contoh tumbuhan Gymnospermae yang berkembang biak secara vegetatif adalah...',    
            'jawaban_benar' => 'Pinus',
            'jawaban_salah1' => 'Edelweiss',
            'jawaban_salah2' => 'Kelapa',
            'jawaban_salah3' => 'Cemara'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 44,
            'pertanyaan' => 'Tumbuhan lumut dapat mengalami perkembangbiakan vegetatif melalui ... dan melakukan ...',    
            'jawaban_benar' => 'gemmae - fragmentasi',
            'jawaban_salah1' => 'gemmae - fermentasi',
            'jawaban_salah2' => 'mitosis - fragmentasi',
            'jawaban_salah3' => 'mitosis - fermentasi'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 45,
            'pertanyaan' => 'Berikut merupakan contoh aplikasi teknologi perkembangbiakan pada tumbuhan kecuali...',    
            'jawaban_benar' => 'Hidrokultur',
            'jawaban_salah1' => 'Kultur jaringan',
            'jawaban_salah2' => 'Hidroponik',
            'jawaban_salah3' => 'Vertikultur'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 46,
            'pertanyaan' => 'Penanaman tumbuhan menggunakan larutan nutrisi dan mineral dalam air tanpa menggunakan tanah disebut?',    
            'jawaban_benar' => 'Hidroponik',
            'jawaban_salah1' => 'Ponikhidro',
            'jawaban_salah2' => 'Hidrokultur',
            'jawaban_salah3' => 'Hidroplanting'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 47,
            'pertanyaan' => 'Peningkatan jumlah tanaman dengan cara pembuatan instalasi secara bertingkat disebut?',    
            'jawaban_benar' => 'Vertikultur',
            'jawaban_salah1' => 'Kultur vertikal',
            'jawaban_salah2' => 'Vertiponik',
            'jawaban_salah3' => 'Vertiplanting'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 48,
            'pertanyaan' => 'Berikut contoh perkembangbiakan aseksual pada hewan kecuali...',    
            'jawaban_benar' => 'Bertelur',
            'jawaban_salah1' => 'Bertunas',
            'jawaban_salah2' => 'Fragmentasi',
            'jawaban_salah3' => 'Partenogenesis'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 49,
            'pertanyaan' => 'Contoh hewan yang berkembang biak secara bertunas adalah?',    
            'jawaban_benar' => 'Hydra sp',
            'jawaban_salah1' => 'Planaria',
            'jawaban_salah2' => 'Copepoda',
            'jawaban_salah3' => 'Plasmodium sp'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 50,
            'pertanyaan' => 'Pemotongan tubuh induk yang dilanjutkan dengan regenerasi potongan tubuh tersebut disebut?',    
            'jawaban_benar' => 'Fragmentasi',
            'jawaban_salah1' => 'Fermentasi',
            'jawaban_salah2' => 'Regenerasi',
            'jawaban_salah3' => 'Membelah diri'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 51,
            'pertanyaan' => 'Contoh hewan yang berkembang biak secara fragmentasi adalah?',    
            'jawaban_benar' => 'Planaria',
            'jawaban_salah1' => 'Hydra sp',
            'jawaban_salah2' => 'Cacing tanah',
            'jawaban_salah3' => 'Copepoda'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 52,
            'pertanyaan' => 'Hewan yang berkembang biak dengan cara melahirkan disebut hewan?',    
            'jawaban_benar' => 'Vivipar',
            'jawaban_salah1' => 'Ovipar',
            'jawaban_salah2' => 'Ovovivipar',
            'jawaban_salah3' => 'Vivopar'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 53,
            'pertanyaan' => 'Hewan yang berkembang biak dengan cara bertelur disebut hewan?',    
            'jawaban_benar' => 'Ovipar',
            'jawaban_salah1' => 'Vivipar',
            'jawaban_salah2' => 'Ovovivipar',
            'jawaban_salah3' => 'Ovopar'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 54,
            'pertanyaan' => 'Contoh hewan yang berkembang biak secara ovovivipar adalah?',    
            'jawaban_benar' => 'Ular',
            'jawaban_salah1' => 'Cacing tanah',
            'jawaban_salah2' => 'Katak',
            'jawaban_salah3' => 'Platypus'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 55,
            'pertanyaan' => 'Pada metamorfosis tidak sempurna, tahap hewan muda disebut?',    
            'jawaban_benar' => 'Nimfa',
            'jawaban_salah1' => 'Larva',
            'jawaban_salah2' => 'Pupa',
            'jawaban_salah3' => 'Imago'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 56,
            'pertanyaan' => 'Contoh hewan yang mengalami metamorfosis sempurna adalah?',    
            'jawaban_benar' => 'Lalat',
            'jawaban_salah1' => 'Belalang',
            'jawaban_salah2' => 'Ulat',
            'jawaban_salah3' => 'Kutu'

        ]);

        DB::table('bio9_pertanyaan')->insert([
            'pertanyaan_id' => 57,
            'pertanyaan' => 'Contoh hewan yang mengalami metamorfosis tidak sempurna adalah?',    
            'jawaban_benar' => 'Kecoak',
            'jawaban_salah1' => 'Nyamuk',
            'jawaban_salah2' => 'Katak',
            'jawaban_salah3' => 'Kupu-kupu'

        ]);
    }
}
