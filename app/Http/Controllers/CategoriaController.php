<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class CategoriaController extends Controller
{

    public function index()
    {
        $categorias = DB::table('categorias')->get();
        return response()->json($categorias);
    }

    public function store(Request $request)

    {

        $categorias = new Categoria;
        $categorias->nombre = $request->input('nombre');
        $categorias->descripcion = $request->input('descripcion');

        if ($request->hasFile('imagen')) {
            $path = Storage::putFile('categorias', $request->file('imagen'));
            $categorias->imagen = $path;
        }
        $categorias->save();
    }

    /**
     * Display the specified resource.

     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Categoria::findOrFail($id);
        return response()->json($data);

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function edit(Categoria $categoria)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Categoria $categoria)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Categoria  $categoria
     * @return \Illuminate\Http\Response
     */
    public function destroy(Categoria $categoria)
    {
        //
    }
}
