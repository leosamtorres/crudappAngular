import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClienteDataService {

    private serviceUrl: string = 'https://localhost:44303/';

    constructor(private http: Http) { }

    getUsuario() {
        return this.http
                .get(this.serviceUrl + 'api/usuario')
                .map((res: Response) => res.json());
    }

    deleteUsuario(data: any) {
        return this.http
                .post(this.serviceUrl + 'api/usuario/delete', data)
                .map((res: Response) => res.json());
    }

    createUsuario(data: any) {
        return this.http
                .post(this.serviceUrl + 'api/usuario', data)
                .map((res: Response) => res.json());
    }

    updateUsuario(data: any) {
        return this.http
                .put(this.serviceUrl + 'api/usuario', data)
                .map((res: Response) => res.json());
    }

    getNewsletter(){
        return[
            {valor: 's', desc: 'Sim'},
            {valor: 'n', desc: 'Não'}
        ];
    }

    
}


