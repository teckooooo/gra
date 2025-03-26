<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ComercialController;
use App\Http\Controllers\GrillaCanalController;

// Rutas públicas
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

// Rutas protegidas por Sanctum
Route::middleware('auth:sanctum')->group(function () {
    
    // Ventas
    Route::get('/ventas', [ComercialController::class, 'ventas']);
    Route::post('/ventas', [ComercialController::class, 'crearVenta']);
    
    // Contratos
    Route::get('/contratos', [ComercialController::class, 'contratos']);
    Route::post('/contratos', [ComercialController::class, 'crearContrato']);
    
    // Postventa
    Route::get('/postventa', [ComercialController::class, 'postventa']);
    Route::post('/postventa', [ComercialController::class, 'crearPostventa']);

    // Grillas (TVRED y CableColor)
    Route::get('/grillas/tvred', [GrillaCanalController::class, 'tvred']);
    Route::get('/grillas/cablecolor', [GrillaCanalController::class, 'cablecolor']);
});
