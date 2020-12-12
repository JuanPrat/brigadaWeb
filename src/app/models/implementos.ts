export interface kitPrimerosAuxilios {
    nombre:string;
    algodon: string;
    curas: string;
    disponible: string | boolean;
    fosforos: string;
    gasa: string;
    isodine: string;
    linterna: string | boolean;
    microporo: string; 
    paletasMadera: string;
    solucionSalina: string;
    tijeras: string | boolean;
    brigadista: string;
}

export interface audifonos {
    nombre:string;
    disponible: false;
    brigadista: string;
}

export interface radio{
    nombre:string;
    disponible: false;
    brigadista: string;
}