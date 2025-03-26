<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Contrato extends Model {
    protected $fillable = ['cliente', 'tipo', 'fecha_inicio', 'fecha_fin'];
}