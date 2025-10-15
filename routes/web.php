<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('dashboard');
})->name('home');

// Login
Route::get('/login', [App\Http\Controllers\LoginController::class, 'index'])->name('login');
Route::post('/login', [App\Http\Controllers\LoginController::class, 'loginUser'])->name('login-user');

// Registter
Route::get('/register', [App\Http\Controllers\LoginController::class, 'register'])->name('register');
Route::post('/register', [App\Http\Controllers\LoginController::class, 'registerUser'])->name('register_account');

// Logout
Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout'])->name('logout');

Route::get('/dashboard', [App\Http\Controllers\dashboardController::class, 'index'])->name('dashboard');
Route::get('/tes', [App\Http\Controllers\dashboardController::class, 'getDataCustomer']);

Route::middleware(['auth'])->group(function () {
    Route::get('/undangan/{id_user}', [App\Http\Controllers\dashboardController::class, 'invitation'])->name('create-invitation');
    Route::post('/undangan', [App\Http\Controllers\dashboardController::class, 'weddingInvitation'])->name('create_invitation');
    Route::get('/wedding_view/{id}', [App\Http\Controllers\weddingController::class, 'wedding'])->name('wedding');
});