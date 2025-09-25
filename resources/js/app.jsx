// import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
function App() {
    // let status = "guest";
    // let url = window.location.origin;
    // fetch(`${url}/api/cekStatus`)
    // .then()
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
                    `<button id="buatUndanganGuest" style="padding: 10px; border-radius: 10px; border: none; background-color: #4CAF50; color: white; font-size: 16px; cursor: pointer;">Buat Undangan</button>`
                );
            }
        })
        .catch(error => {"Error:", error});
    }, []);

    useEffect(() => {
        setTimeout(() => {
            const btnGuest = document.getElementById("buatUndanganGuest");
            btnGuest.onclick = function() {
                alert("Silahkan Login Terlebih dahulu untuk membuat undangan");
                window.location.href = `${window.location.origin}/login`;
            }

        }, 100); // tunggu 100ms biar HTML sudah render
    }, [html]);
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

ReactDOM.createRoot(document.getElementById('baru')).render(<App />);