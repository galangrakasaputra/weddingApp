<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Undangan Pernikahan {{ Auth::user()->id }}</title>
    <script>
        let data = {!! $data->toJson() !!}
    </script>
    @viteReactRefresh
    @vite('resources/js/invitation.jsx')
</head>
<body>
    <div id="body_react"></div>
</body>
</html>