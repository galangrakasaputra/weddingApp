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
        $json_background = json_encode($data['background']);
        $json_image = json_encode($data['image']);
        $arr = [
            "id_customer" => Auth::user()->id,
            'summary' => $data['pengantar'],
            'background' => $json_background,
            'image' => $json_image,
            'location' => $data['weddingPlace'],
            'maps_location' => $data['linkMaps'],
            'event_date' => $data['event_date']
        ];
    }

    // Write something awesome :)
}
