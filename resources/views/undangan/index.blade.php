@extends('partial.main')
@section('content')
<link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
<div class="background"></div>
<div class="container">
    <div class="content" id="pengisianForm">
        <h5>Harap Lengkapi Form Berikut</h5>
        <br>
        <form action="{{ route('create_invitation') }}" method="post" enctype="multipart/form-data">
            @csrf
            <div class="form-group">
                <h5>Pasangan Pria</h5>
            </div>
            <div class="pisahan">
                <div class="form-group">
                    <label for="pria">Nama Pasangan Pria</label>
                    <div class="input-wrapper">
                        <input type="text" class="form-control" style="width: 100%; margin:auto; text-align:center" name="pria" required>
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pria">Nama Wali(Ayah) Pria</label>
                    <div class="input-wrapper">
                        <input type="text" class="form-control" style="width: 100%; margin:auto; text-align:center" name="pria" required>
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pria">Nama Wali(Ibu) Pria</label>
                    <div class="input-wrapper">
                        <input type="text" class="form-control" style="width: 100%; margin:auto; text-align:center" name="pria" required>
                        <span class="focus-border"></span>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <h5>Pasangan Wanita</h5>
            </div>
            <div class="pisahan">
                <div class="form-group">
                    <label for="wanita">Nama Pasangan Wanita</label>
                    <div class="input-wrapper">
                        <input type="text" class="form-control" style="width: 100%; margin:auto; text-align:center" name="wanita" required>
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pria">Nama Wali(Ayah) Wanita</label>
                    <div class="input-wrapper">
                        <input type="text" class="form-control" style="width: 100%; margin:auto; text-align:center" name="pria" required>
                        <span class="focus-border"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="pria">Nama Wali(Ibu) Wanita</label>
                    <div class="input-wrapper">
                        <input type="text" class="form-control" style="width: 100%; margin:auto; text-align:center" name="pria" required>
                        <span class="focus-border"></span>
                    </div>
                </div>
            </div>    
            <div class="form-group">
                <label for="summary">Kata Pengantar</label>
                <div class="input-wrapper">
                    <textarea class="form-control" style="width: 50%; margin:auto; height:10%" name="pengantar" cols="30" rows="10"></textarea>
                    <span class="focus-border"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="summary">Lokasi Pernikahan</label>
                <div class="input-wrapper" id="lokasiNikah">
                    <input class="form-control" style="width:50%; margin:auto;" type="text" name="weddingPlace">
                    <span class="focus-border"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="summary">Link Maps</label>
                <div class="input-wrapper" id="linkMaps">
                    <input class="form-control" style="width:50%; margin:auto;" type="text" name="linkMaps">
                    <span class="focus-border"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="summary">Gambar Pengantin</label>
                <div class="input-wrapper" id="inputanGambar">
                    <input class="form-control" style="width:50%; margin:auto;" type="file" name="imageCouple">
                    <span class="focus-border"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="summary">Gambar Latar Belakang</label>
                <div class="input-wrapper" id="inputanGambarBackground">
                    <input class="form-control" style="width:50%; margin:auto;" type="file" name="imageBackground">
                    <span class="focus-border"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="summary">Gambar Tambahan</label>
                <div class="input-wrapper" id="inputanGambarTambahan">
                    <input class="form-control" style="width:50%; margin:auto;" type="file" name="imageSecondary">
                    <span class="focus-border"></span>
                </div>
            </div>
            <div style="justify-content: center;">
                <button type="submit" class="btn btn-success">Login</button>
                <button type="button" id="registerButton" class="btn btn-danger" data-dismiss="modal">Register</button>
            </div>
            <p>Perhatian</p>
            <p>Untuk Struktur Gambar Tambahan yang akan ditampilkan</p>
            <p>(Gambar 1)  (Gambar 2)</p>
            <p>(      Gambar 3     )</p>
        </form>
    </div>
</div>
@endsection