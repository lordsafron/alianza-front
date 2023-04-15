import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client, Response } from '../models/response.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  path = 'client';

  nuevoClient: EventEmitter<Client[] | undefined> = new EventEmitter<Client[] | undefined>();

  constructor(private http: HttpClient) { }

  getAllClients() {
    return this.http.get<Response>(`${base_url}/${this.path}`);
  }

  getClientBySharedId(sharedId: string) {
    return this.http.get<Response>(`${base_url}/${this.path}/${sharedId}`);
  }

  saveClient(client: Client) {
    return this.http.post<Response>(`${base_url}/${this.path}`, client);
  }
}
