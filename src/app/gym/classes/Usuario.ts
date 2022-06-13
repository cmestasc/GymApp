
export class Usuario {
    private _ID_usuario!: number;
    private _usuario!: string;
    private _password!: string;
    private _ID_tipo_usuario!: number;
    constructor(){}

    get ID_usuario(){
        return this._ID_usuario;
    }
    get usuario(){
        return this._usuario;
    }
    get password(){
        return this._password;
    }
    get ID_tipo_usuario(){
        return this._ID_tipo_usuario;
    }
}