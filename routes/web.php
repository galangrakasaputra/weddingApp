<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('dashboard');
});

// Login
Route::get('/login', [App\Http\Controllers\LoginController::class, 'index'])->name('login');
Route::post('/login', [App\Http\Controllers\LoginController::class, 'loginUser'])->name('login-user');

// Registter
Route::get('/register', [App\Http\Controllers\LoginController::class, 'register'])->name('register');
Route::post('/register', [App\Http\Controllers\LoginController::class, 'registerUser'])->name('register_account');

// Logout
Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout'])->name('logout');

Route::get('/dashboard', [App\Http\Controllers\dashboardController::class, 'index'])->name('dashboard');

Route::middleware(['auth'])->group(function () {
    Route::get('/undangan/{id_user}', [App\Http\Controllers\dashboardController::class, 'invitation'])->name('create-invitation');
});