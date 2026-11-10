<?php

use Illuminate\Support\Facades\Route;

// Single Page Application Frontend Entry
Route::get('/{any?}', function () {
    return view('welcome');
})->where('any', '.*');
