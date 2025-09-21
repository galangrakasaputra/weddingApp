<?php

namespace App\Repositories\User;

use App\Models\User;
use LaravelEasyRepository\Repository;

interface UserRepository extends Repository{

    // Write something awesome :)

    public function registerUser(array $data): User;

    public function loginUser(array $data): ?User;
}
