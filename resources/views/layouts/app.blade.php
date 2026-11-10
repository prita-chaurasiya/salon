<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="scroll-smooth">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Aurum - The Operating System for Premier Luxury Salons, Day Spas, Modern Barber Studios & Aesthetic Medical Centers.">

    <title>Aurum | Enterprise Salon Management Platform & Salon OS</title>

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Favicon Icon Badge -->
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23111111'/><text x='50%' y='65%' font-size='60' font-weight='bold' font-family='serif' fill='%23C8A96A' text-anchor='middle'>A</text></svg>">

    <!-- Vite Assets -->
    @vite(['resources/assets/css/app.css', 'resources/assets/js/app.js'])
</head>
<body class="bg-white text-[#111111] antialiased">
    @yield('content')
</body>
</html>

