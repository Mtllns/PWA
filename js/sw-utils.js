

// Guardar en el cache dinámico
function actualizaCacheDinamico( dynamicCache, req, res ) {
     
    if ( res.ok ) { // Si la respuesta es "ok" quiere decir que tiene data y queremos almacenar en cache
    
        return caches.open( dynamicCache ).then( cache => {

            cache.put( req, res.clone() );  // Almacenamos en el cache la request. Clonamos respuesta
            return res.clone();
        });

    } else {

        return res;

    }

}
