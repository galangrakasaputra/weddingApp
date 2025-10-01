<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;

// Route::post('/login', [App\Http\Controllers\LoginController::class, 'loginUserApi']);

Route::get('/cek-user', function (Request $request) {
    return response()->json([
        'authenticated' => Auth::check(),
        'user' => Auth::user(),
    ]);;
});
