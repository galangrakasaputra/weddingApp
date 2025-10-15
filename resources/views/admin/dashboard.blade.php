@extends('partial.main')
@section('content')
<link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
<div class="background"></div>
@if(session('error'))
    <div class="alert alert-danger">
        {{ session('error') }}
    </div>
@endif
<div class="container">
    <div class="content">
        <h1>Selamat Datang @auth {{ Auth::user()->name }} @else di Aplikasi Wedding @endauth</h1>
        <br>
        <h3>Aplikasi ini Dibuat agar Anda yang ingin mengundang teman, <br> kerabat atau orang lain Ke Pernikahan bisa menggunakan website ini.</h3>
        <br>
        <h5>Di Website ini Anda hanya cukup memasukan data data yang biasanya dibutuhkan untuk mengundang</h5>
        <h5>Seperti Nama Pasangan, Lokasi, dan Tanggal Pernikahannya</h5>
        <h5>Silahkan Tekan Tombol di bawah ini untuk Membuat Undangan</h5>
        <br>
        @auth
            <a href="{{ url('undangan/'.Auth::user()->id) }}" class="btn btn-primary">Buat Undangan</a>   
            @if($data)
            <a href="{{ url('wedding_view/'.Auth::user()->id) }}" class="btn btn-warning">Lihat Undangan</a>
            @endif
        @else
            <button class="btn btn-primary" data-toggle="modal" data-target="#loginModal">Buat Undangan</button>
        @endauth
    </div>
</div>

<div class="modal fade" style="margin-top: 8%" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content color_div">
            <div>
                <button type="button" style="color: white" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
                <h5 id="loginModalLabel" style="text-align: center">Login</h5>
            </div>
            <form class="login-form" action="{{ route('login-user') }}" id="loginForm" method="POST">
                @csrf
            </form>
        </div>
    </div>
</div>

<script>
    let data = {!! $globalData->toJson()!!};
</script>
@vite('resources/js/app.jsx')
@endsection