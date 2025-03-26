<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GrillaCableColor extends Model
{
    use HasFactory;

    protected $table = 'grilla_cablecolor';

    protected $fillable = [
        'nombre',
        'descripcion',
        'fecha',
    ];
}
