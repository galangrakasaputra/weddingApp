<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class weddingController extends Controller
{
    public function wedding(){
        return view('undangan.wedding')->with(["data" => collect(['id' => Auth::user()->id])]);
    }
}
