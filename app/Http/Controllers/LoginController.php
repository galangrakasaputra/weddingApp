<?php

namespace App\Http\Controllers;

use App\Services\User\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    protected $userservice;
    public function __construct(UserService $userservice)
    {
        $this->userservice = $userservice;
    }

    public function index()
    {
        return view('login');
    }

    public function register(){
        return view('register');
    }

    public function registerUser(Request $requuest){
        $data = $requuest->all();
        $this->userservice->registerUser($data);
        return redirect()->route('login');
    }

    public function loginUser(Request $request){
        $data = $request->all();
        $user = $this->userservice->loginUser($data);
        if($user){
            Auth::login($user);
            return redirect()->route('dashboard');
        }else {
            return redirect()->back()->with('error', 'Username Atau Password Salah');
        }
    }

    public function checkUser(){
        return response()->json([
            'id' => Auth::user()->id
        ]);
    }

    public function logout(){
        Auth::logout();
        return redirect()->route('home');
    }
}
