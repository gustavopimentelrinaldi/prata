<?php

namespace App\Http\Controllers;
use App\Http\Requests\ClienteRequest;
use Illuminate\Http\Request;
use App\Models\Cliente;

class ClienteController extends Controller
{

    public function index()
    {
        return view('prata');
    }

    public function create()
    {
        $cliente = Cliente::all();
        return view('prata', compact('cliente'));
    }

    public function store(ClienteRequest $request)
    {
        Cliente::create([
            'nomeCompleto' => $request->nomeCompleto,
            'celNumber' => $request->celNumber
        ]);

        return  redirect('/')-with('sucesso', 'Muito bom!');
    }
}
