<?php

namespace App\Repositories\Customer;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\customer;
use Illuminate\Support\Facades\Auth;

class CustomerRepositoryImplement extends Eloquent implements CustomerRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected customer $model;

    public function __construct(customer $model)
    {
        $this->model = $model;
    }

    public function insertData(array $data): customer
    {
        $data['id_customer'] = Auth::user()->id;
        return $this->model->create($data);
    }

    // Write something awesome :)
}
