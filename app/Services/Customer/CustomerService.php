<?php

namespace App\Services\Customer;

use LaravelEasyRepository\BaseService;
use App\Models\customer;

interface CustomerService extends BaseService{

    // Write something awesome :)

    public function insertData(array $data);

    public function moveFile(array $data);
}
