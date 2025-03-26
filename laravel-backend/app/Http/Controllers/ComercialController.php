<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Venta;
use App\Models\Contrato;
use App\Models\Postventa;
use App\Http\Controllers\Controller;

class ComercialController extends Controller {
    public function ventas() { return response()->json(Venta::all()); }
    public function contratos() { return response()->json(Contrato::all()); }
    public function postventa() { return response()->json(Postventa::all()); }

    public function crearVenta(Request $request) {
        $venta = Venta::create($request->all());
        return response()->json($venta, 201);
    }
    public function crearContrato(Request $request) {
        $contrato = Contrato::create($request->all());
        return response()->json($contrato, 201);
    }
    public function crearPostventa(Request $request) {
        $postventa = Postventa::create($request->all());
        return response()->json($postventa, 201);
    }
}