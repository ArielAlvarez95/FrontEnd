export class Educacion {
    id?: number;
    nombreD: string;
    descripcionD: string;
    imagenD: string;

    constructor(nombreD: string, descripcionD: string, imagenD: string){
        this.nombreD = nombreD;
        this.descripcionD = descripcionD;
        this.imagenD = imagenD;
    }
}
