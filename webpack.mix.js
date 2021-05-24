// Importa la libreria che vogliamo usare
let mix = require('laravel-mix');

// Specifica che vogliamo compilare il file src/app.scss 
// e che la versione compilata verrà salvata all'interno della cartella dist/
mix.sass("src/style.scss", "dist/")