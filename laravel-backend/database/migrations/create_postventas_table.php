<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostventasTable extends Migration
{
    /**
     * Ejecuta la migración.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('postventas', function (Blueprint $table) {
            $table->id();
            $table->string('cliente');
            $table->text('reporte');
            $table->string('estado');
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
        Schema::dropIfExists('postventas');
    }
}
