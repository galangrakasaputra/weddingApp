<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

Route::get('/cek-user', function (Request $request) {
    return response()->json(Auth::check());
});
