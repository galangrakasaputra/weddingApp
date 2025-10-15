// import React from 'react';
import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from "react";
import axios from 'axios';
function Login() {
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const [html, setHtml] = useState(`
        <div class="modal-body">
            <div class="form-group">
                <label for="username">Username / Email</label>
                <input type="hidden" name="_token" value="${csrfToken}">
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
    `);
    useEffect(() => {
        setTimeout(() => {
            GetWed(data.user.id);
            
            const btnGuest = document.getElementById("registerButton");
            btnGuest.onclick = function() {
                window.location.href = `${window.location.origin}/register`;
            }
            const btnLogin = document.getElementById("loginButton");
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;
        }, 100); // tunggu 100ms biar HTML sudah render
    }, [html]);
    return (
        <div dangerouslySetInnerHTML={{ __html: html }} />
    );
}

async function GetWed(id){
    try {
        const res = await fetch(`${window.location.origin}/api/getWed/${id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        
        let data = await res.json();
        return data;
    } catch (error) {
        
    }
}

ReactDOM.createRoot(document.getElementById('loginForm')).render(<Login />);
