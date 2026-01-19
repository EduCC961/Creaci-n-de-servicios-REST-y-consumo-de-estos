import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../../services/usuario';

@Component({
  selector: 'app-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuario.html',
  styleUrls: ['./usuario.css']
})
export class UsuarioComponent {

  cedula = '';
  usuario: any = null;
  mensaje = '';

  constructor(private usuarioService: UsuarioService) {}

  async buscarUsuario() {
    try {
      const cedula = this.cedula.trim();
      this.usuario = await this.usuarioService.getUsuarioPorCedula(cedula);
      this.mensaje = '';
    } catch (error) {
      this.usuario = null;
      this.mensaje = 'Usuario no encontrado';
    }
  }
}
