<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Postventa extends Model {
    protected $fillable = ['cliente', 'reporte', 'estado'];
}