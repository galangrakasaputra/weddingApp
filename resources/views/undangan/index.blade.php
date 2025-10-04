@extends('partial.main')
@section('content')
<link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
<div class="background"></div>
<div class="container">
    <div class="content" id="pengisianForm">
        <h5>Harap Lengkapi Form Berikut</h5>
        <br>
        <form action="" method="post">
            <div class="form-group">
                <label for="pria">Nama Pasangan Pria</label>
                <div class="input-wrapper">
                    <input type="text" class="form-control" style="width: 30%; margin:auto; text-align:center" name="pria" required>
                    <span class="focus-border"></span>
                </div>
            </div>
            <br>
            <div class="form-group">
                <label for="wanita">Nama Pasangan Wanita</label>
                <div class="input-wrapper">
                    <input type="text" class="form-control" style="width: 30%; margin:auto; text-align:center" name="wanita" required>
                    <span class="focus-border"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="summary">Kata Pengantar</label>
                <div class="input-wrapper">
                    <textarea class="form-control" style="width: 30%; margin:auto; height:10%" name="pengantar" cols="30" rows="10"></textarea>
                    <span class="focus-border"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="summary">Gambar Pengantin</label>
                <div class="input-wrapper" id="inputanGambar">
                    <input class="form-control" style="width:30%; margin:auto;" type="file" name="imageCouple">
                    <span class="focus-border"></span>
                </div>
            </div>
        </form>
    </div>
</div>
@endsection