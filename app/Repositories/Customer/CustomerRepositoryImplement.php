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
            'male_family' => $data['pria'],
            'female_family' => $data['wanita'],
            'summary' => $data['pengantar'],
            'background' => $json_background,
            'image' => $json_image,
            'location' => $data['weddingPlace'],
            'maps_location' => $data['linkMaps'],
            'event_date' => $data['event_date']
        ];

        return customer::create($arr);
    }

    public function getWed(int $id): ?customer
    {
        return customer::where('id_customer', $id)->first();
    }

    // Write something awesome :)
}
