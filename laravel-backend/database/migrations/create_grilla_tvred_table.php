<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGrillaTvredTable extends Migration
{
    /**
     * Ejecuta la migración.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grilla_tvred', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->text('descripcion')->nullable();
            $table->date('fecha');
            $table->timestamps();
        });
    }

    /**
     * Revierte la migración.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('grilla_tvred');
    }
}
