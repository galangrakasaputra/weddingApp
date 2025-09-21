<?php

namespace App\Repositories\User;

use LaravelEasyRepository\Implementations\Eloquent;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserRepositoryImplement extends Eloquent implements UserRepository{

    /**
    * Model class to be used in this repository for the common methods inside Eloquent
    * Don't remove or change $this->model variable name
    * @property Model|mixed $model;
    */
    protected User $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function countUser(): int
    {
        return $this->model->count();
    }

    public function registerUser(array $data): User
    {
        $data['password'] = Hash::make($data['password']);
        if($this->countUser() == 0){
            $data['status'] = 'admin';
        } else {
            $data['status'] = 'user';
        }
        return $this->model->create($data);
    }

    public function loginUser(array $data): ?User
    {
        $user = $this->model->where('username', $data['username'])->orWhere('email', $data['username'])->first();
        if($user && Hash::check($data['password'], $user->password)){
            return $user;
        }
        return null;
    }

    // Write something awesome :)
}
