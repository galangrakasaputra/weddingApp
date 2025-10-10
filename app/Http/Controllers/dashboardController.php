<?php

namespace App\Http\Controllers;

use App\Services\Customer\CustomerService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
class dashboardController extends Controller
{
    protected $customer_service;
    public function __construct(CustomerService $customer_service)
    {
        $this->customer_service = $customer_service;
    }
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

    public function weddingInvitation(Request $request){
        $data = $request->all();
        dd($data);
        $this->customer_service->insertData($data);
    }
}
