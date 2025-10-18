<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Undangan Pernikahan {{ Auth::user()->id }}</title>
    <link href="{{ asset('bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('bootstrap/js/bootstrap.min.js') }}" rel="stylesheet">
    <script>
        let data = {!! $data->toJson() !!}
    </script>
    <link rel="stylesheet" href="{{ asset('css/invitation.css') }}">
</head>
<body>
    <div id="body_react"></div>

    <script src="{{ asset('vendor/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>

    <script src="{{ asset('vendor/jquery-easing/jquery.easing.min.js') }}"></script>
    <!-- Custom scripts for all pages-->
    <script src="{{ asset('js/sb-admin-2.min.js') }}"></script>
    @viteReactRefresh
    @vite('resources/js/invitation.jsx')
</body>
</html>