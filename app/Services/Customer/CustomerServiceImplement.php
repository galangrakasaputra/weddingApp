<?php

namespace App\Services\Customer;

use LaravelEasyRepository\ServiceApi;
use App\Repositories\Customer\CustomerRepository;

class CustomerServiceImplement extends ServiceApi implements CustomerService{

    /**
     * set title message api for CRUD
     * @param string $title
     */
     protected string $title = "";
     /**
     * uncomment this to override the default message
     * protected string $create_message = "";
     * protected string $update_message = "";
     * protected string $delete_message = "";
     */

     /**
     * don't change $this->mainRepository variable name
     * because used in extends service class
     */
     protected CustomerRepository $mainRepository;

    public function __construct(CustomerRepository $mainRepository)
    {
      $this->mainRepository = $mainRepository;
    }

    // Define your custom methods :)
}
