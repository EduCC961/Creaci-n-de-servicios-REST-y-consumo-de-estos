import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = 'http://localhost:3000/usuario';

  constructor(private http: HttpClient) {}

  // Obtener todos 
  getUsuarios(): Promise<any> {
    return firstValueFrom(this.http.get(this.apiUrl));
  }

  // Obtener por cédula
  getUsuarioPorCedula(cedula: string): Promise<any> {
    return firstValueFrom(this.http.get(`${this.apiUrl}/${cedula}`));
  }

  // Crear 
  crearUsuario(usuario: any): Promise<any> {
    return firstValueFrom(this.http.post(this.apiUrl, usuario));
  }

  // Actualizar 
  actualizarUsuario(cedula: string, usuario: any): Promise<any> {
    return firstValueFrom(this.http.put(`${this.apiUrl}/${cedula}`, usuario));
  }

  // Eliminar 
  eliminarUsuario(cedula: string): Promise<any> {
    return firstValueFrom(this.http.delete(`${this.apiUrl}/${cedula}`));
  }
}
