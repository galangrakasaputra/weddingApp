@extends('partial.main')
@section('content')
@vite('resources/js/wedding.jsx')
<link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
<div class="background"></div>
<div class="container">
    <div class="content" id="pengisianForm">
        <h5>Harap Lengkapi Form Berikut</h5>
        <br>
        <form action="{{ route('create_invitation') }}" method="post" enctype="multipart/form-data" id="form_wedding">
            @csrf
        </form>
    </div>
</div>
@endsection