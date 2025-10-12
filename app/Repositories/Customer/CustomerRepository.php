<?php

namespace App\Repositories\Customer;

use App\Models\customer;
use LaravelEasyRepository\Repository;

interface CustomerRepository extends Repository{

    // Write something awesome :)

    public function insertData(array $data): customer;
}
