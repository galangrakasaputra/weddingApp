<?php

namespace App\Http\Controllers;

use App\Services\Customer\CustomerService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class dashboardController extends Controller
{
    protected $customer_service;
    public function __construct(CustomerService $customer_service)
    {
        $this->customer_service = $customer_service;
    }
    public function index(){
        $data = false;
        if(Auth::user()){
            $data = $this->customer_service->getDataWed(Auth::user()->id);
        }
        return view('admin.dashboard')->with([
            "globalData" => collect([
                'user' => Auth::user(),
            ]),
            "data" => $data
    ]);
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
        $this->customer_service->insertData($data);
        return redirect()->route('dashboard');
    }

    public function getDataCustomer($id){
        $data = $this->customer_service->getDataWed($id);
        return response()->json($data);
    }
}
