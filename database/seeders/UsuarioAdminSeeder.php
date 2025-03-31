<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class UsuarioAdminSeeder extends Seeder
{
    public function run()
    {
        User::create([
            'nombre' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('123456'),
            'rol_id' => 1,
        ]);
    }
}
