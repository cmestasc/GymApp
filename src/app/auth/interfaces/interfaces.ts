
export interface AuthResponse {
    ID_usuario?: number;
    usuario?: string;
    password?: string;
    ID_tipo_usuario?: number;
    msg?: string;
    ok?: boolean;
}

export interface Usuario {
    ID_usuario?: number;
    usuario: string;
    password: string;
    ID_tipo_usuario?: number;
}