// import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
function App() {
    const [html, setHtml] = useState(`
    <h1>Selamat Datang di Aplikasi Wedding</h1>
    <h3>Aplikasi ini Dibuat agar Anda yang ingin mengundang teman, <br> kerabat atau orang lain Ke Pernikahan bisa menggunakan website ini.</h3>
    <br>
    <h5>Di Website ini Anda hanya cukup memasukan data data yang biasanya dibutuhkan untuk mengundang</h5>
    <h5>Seperti Nama Pasangan, Lokasi, dan Tanggal Pernikahannya</h5>
    <h5>Silahkan Tekan Tombol di bawah ini untuk Membuat Undangan</h5>
    <br>
    `);
    useEffect(() => {
        fetch(`${window.location.origin}/api/cek-user`, {
            credentials: 'include',
            method: 'GET',
        })
        .then(response => response.json())
        .then(data => {
            if(data){
                setHtml((prev) =>
                    prev +
                    `<button id="buatUndanganUser" onclick="cekUser(true)" style="padding: 10px; border-radius: 10px; border: none; background-color: #4CAF50; color: white; font-size: 16px; cursor: pointer;">Buat Undangan</button>`
                );
            }else{
                setHtml((prev) =>
                    prev +
                    `<button id="buatUndanganGuest" class="btn btn-success" data-toggle="modal" data-target="#loginModal">Buat Undangan</button>`
                );
            }
        })
        .catch(error => {"Error:", error});
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

function Login() {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const [html, setHtml] = useState(`
        <div class="modal-dialog" role="document">
            <div class="modal-content color_div">
                <div>
                    <button type="button" style="color: white" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                    <h5 id="loginModalLabel" style="text-align: center">Login</h5>
                </div>
                <form class="login-form" action="/post-login" id="loginForm" method="POST">
                    <input type="hidden" name="_token" value="${csrfToken}">
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="username">Username / Email</label>
                            <div class="input-wrapper">
                                <input class="form-control" type="text" id="username" name="username" required autocomplete="username">
                                <span class="focus-border"></span>
                            </div>
                            <span class="error-message" id="emailError"></span>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <div class="input-wrapper password-wrapper">
                                <input class="form-control" type="password" id="password" name="password" required autocomplete="current-password">
                                <span class="focus-border"></span>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer" style="justify-content: center;">
                        <button type="button" id="registerButton" class="btn btn-warning" data-dismiss="modal">Register</button>
                        <button type="submit" class="btn btn-success">Login</button>
                    </div>
                </form>
            </div>
        </div>
    `);
    useEffect(() => {
        setTimeout(() => {
            const btnGuest = document.getElementById("registerButton");
            btnGuest.onclick = function() {
                window.location.href = `${window.location.origin}/register`;
            }

        }, 100); // tunggu 100ms biar HTML sudah render
    }, [html]);
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

ReactDOM.createRoot(document.getElementById('baru')).render(<App />);
ReactDOM.createRoot(document.getElementById('loginModal')).render(<Login />);