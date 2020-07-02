

class Camara {

    constructor( videoNode ) {

        this.videoNode = videoNode;
        console.log('Camara Class inicializada');

    }

    // Metodo encender camara
    encender() {

        navigator.mediaDevices.getUserMedia({
            audio: false,
            video: { width: 300, height: 300 }
        }).then( stream => {

            this.videoNode.srcObject = stream;
            this.stream = stream;

        });

    }


    // Metodo apagar camara
    apagar() {

        this.videoNode.pause();

        if (this.stream) {
            this.stream.getTracks()[0].stop();
        }

    }

    // Metodo tomar foto

    tomarFoto() {

        // Crear un elemento canvas para renderizar ahí la foto
        let canvas = document.createElement('canvas');

        // Colocar las dimensiones igual al elemento del video
        canvas.setAttribute('width', 300);
        canvas.setAttribute('heigth', 300);

        // Obtener el contexto del canvas
        let context = canvas.getContext('2d'); // Una simple imagen


        // Dibujar la imagen dentro del canvas
        context.drawImage( this.videoNode, 0, 0, canvas.width, canvas.height );

        this.foto = context.canvas.toDataURL();

        // Limpieza
        canvas  = null;
        context = null;

        return this.foto;

    }


}