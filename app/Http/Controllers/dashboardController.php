<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class dashboardController extends Controller
{
    public function index(){
        return view('admin.dashboard');
    }

    public function invitation($id_user){
        if(Auth::user()->id == $id_user){
            return view('undangan.index', ['id_user' => $id_user]);
        } else {
            return redirect()->route('dashboard');
        }
    }
}
