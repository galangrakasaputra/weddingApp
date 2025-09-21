<?php

namespace App\Services\User;

use LaravelEasyRepository\BaseService;

interface UserService extends BaseService{

    // Write something awesome :)

    public function registerUser(array $data);

    public function loginUser(array $data);
}
