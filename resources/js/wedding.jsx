// import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import axios from 'axios';

function Wedding(){
    const [html, setHtml] = useState(`
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
                    <input class="form-control" style="width:50%; margin:auto;" type="file" name="imageSecondary[]" multiple>
                    <span class="focus-border"></span>
                </div>
            </div>
            <div style="justify-content: center;">
                <button type="submit" class="btn btn-success">Simpan</button>
                <button type="button" id="backButton" class="btn btn-danger" data-dismiss="modal">Kembali</button>
            </div>
            <p>Perhatian</p>
            <p>Untuk Struktur Gambar Tambahan yang akan ditampilkan</p>
            <p>(Gambar 1)  (Gambar 2)</p>
            <p>(      Gambar 3     )</p>
    `)
    useEffect(() => {
        setTimeout(() => {
            const btnGuest = document.getElementById("backButton");
            btnGuest.onclick = function() {
                window.location.href = `${window.location.origin}/dashboard`;
            }
        }, 100);
    }, [html]);
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

console.log(document.getElementById('form_wedding'));

ReactDOM.createRoot(document.getElementById('form_wedding')).render(<Wedding />);
