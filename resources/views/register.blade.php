<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
</head>
<body>
    <div class="login-container">
        <div class="login-card">
            <div class="login-header">
                <h2>Register</h2>
            </div>
            
            <form class="login-form" action="{{ route('register_account') }}" id="registerForm" method="POST" novalidate>
                @csrf
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <div class="input-wrapper">
                        <input type="text" id="name" name="name" required autocomplete="name">
                        <span class="focus-border"></span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="username">Username</label>
                    <div class="input-wrapper">
                        <input type="text" id="username" name="username" required autocomplete="username">
                        <span class="focus-border"></span>
                    </div>
                </div>
                

                <div class="form-group">
                    <label for="email">Email</label>
                    <div class="input-wrapper">
                        <input type="email" id="email" name="email" required autocomplete="email">
                        <span class="focus-border"></span>
                    </div>
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <div class="input-wrapper password-wrapper">
                        <input type="password" id="password" name="password" required autocomplete="new-password">
                        <span class="focus-border"></span>
                    </div>
                    <span class="error-message" id="passwordError"></span>
                </div>

                <button type="submit" class="login-btn btn">
                    <span class="btn-text">Sign Up</span>
                    <span class="btn-loader"></span>
                </button>
            </form>

            <div class="signup-link">
                <button type="button" class="register-btn btn-register" onclick="window.location='{{ route('login') }}'">
                    <span class="btn-register-text">Sign in</span>
                    <span class="btn-resgiter-loader"></span>
                </button>
            </div>
        </div>
    </div>

    <script src="{{ asset('js/script.js') }}"></script>
</body>
</html>