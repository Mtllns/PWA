

const STATIC_CACHE    = 'static-v1';
const DYNAMIC_CACHE   = 'dynamic-v1';
const INMUTABLE_CACHE = 'inmutable-v1';

// El corazón de la app (se debe cargar de manera intantane o lo más rápido posible)
const APP_SHELL = [
    '/',
    'index.html',
    'css/style.css',
    'img/favicon.ico',
    'img/avatars/hulk.jpg',
    'img/avatars/ironman.jpg',
    'img/avatars/spiderman.jpg',
    'img/avatars/thor.jpg',
    'img/avatars/wolverine.jpg',
    'js/app.js'
];

const APP_SHELL_INMUTABLE = [
    'https://fonts.googleapis.com/css?family=Quicksand:300,400',
    'https://fonts.googleapis.com/css?family=Lato:400,300',
    'https://use.fontawesome.com/releases/v5.3.1/css/all.css',
    'css/animate.css',
    'js/libs/jquery.js'
];

// Parte de la Instalación
self.addEventListener( 'install', e => {

    // Almacenamos la cache de nuestra app
    const cacheStatic = caches.open( STATIC_CACHE ).then(cache => cache.addAll( APP_SHELL ));
    const cacheInmutable = caches.open( INMUTABLE_CACHE ).then(cache => cache.addAll( APP_SHELL_INMUTABLE ));


    e.waitUntil( Promise.all([ cacheStatic, cacheInmutable ]) );

});

// Cada vez que cambiemos el SW borra los caches anteriores
self.addEventListener('activate', event => {
    
    const respuesta = caches.keys().then( keys => {

        keys.forEach( key => {
            
            // static-v1
            if ( key !== STATIC_CACHE && key.includes('static')) {
                return caches.delete(key);         
            }
        });


    });
    
    event.waitUntil( respuesta );
});