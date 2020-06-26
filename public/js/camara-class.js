

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

    }


}