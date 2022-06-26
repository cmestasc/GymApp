export interface Clima {
    title:           string;
    today:           Today;
    tomorrow:        Today;
    ciudades:        Ciudade[];
    provincia:       Provincia;
    comautonoma:     Comautonoma;
    breadcrumb:      Breadcrumb[];
    metadescripcion: string;
    keywords:        string;
}

export interface Breadcrumb {
    name:  string;
    url:   null | string;
    title: string;
}

export interface Ciudade {
    id:           string;
    idProvince:   string;
    name:         string;
    nameProvince: string;
    stateSky:     StateSky;
    temperatures: Temperatures;
}

export interface StateSky {
    description: string;
    id:          string;
}

export interface Temperatures {
    max: string;
    min: string;
}

export interface Comautonoma {
    ID:       string;
    CODAUTON: string;
    CODCOMUN: string;
    NOMBRE:   string;
}

export interface Provincia {
    CODPROV:                   string;
    NOMBRE_PROVINCIA:          string;
    CODAUTON:                  string;
    COMUNIDAD_CIUDAD_AUTONOMA: string;
    CAPITAL_PROVINCIA:         string;
}

export interface Today {
    p: string;
}
