const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .css('resources/css/aos.css', 'public/css')
    .css('resources/css/bootstrap.min.css', 'public/css')
    .css('resources/css/glightbox.min.css', 'public/css')
    .css('resources/css/swiper-bundle.min.css', 'public/css')
    .sourceMaps();
