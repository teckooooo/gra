<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\GrillaTVRED;
use App\Http\Controllers\Controller;

class GrillaCanalController extends Controller
{
    public function index()
    {
        return response()->json(GrillaTVRED::all());
    }
}