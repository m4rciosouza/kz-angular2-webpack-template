/**
 * Serviço de gerenciamento de usuários.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */
 
import { Injectable } from '@angular/core';

import { Usuario } from './usuario.model';

@Injectable()
export class UsuarioService {

	/**
	 * Retorna listagem de todos os usuários.
	 *
	 * @return Usuario[] usuarios
	 */
	listarTodos(): Usuario[] {
		var usuarios:string = sessionStorage['usuarios'];
		return usuarios ? JSON.parse(usuarios) : [];
	}

	/**
	 * Cadastra um novo usuário.
	 *
	 * @param Usuario usuario
	 */
	cadastrar(usuario: Usuario): void {
		var usuarios:Usuario[] = this.listarTodos();
		usuarios.push(usuario);
		sessionStorage['usuarios'] = JSON.stringify(usuarios);
	}

	/**
	 * Retorna os dados de um usuário por id.
	 *
	 * @param number id
	 * @return Usuario usuario
	 */
	buscarPorId(id: number): Usuario {
		var usuarios:Usuario[] = this.listarTodos();
		for (let usuario of usuarios) {
			if (usuario.id == id) {
				return usuario;
			}
		}

		return new Usuario();
	}

	/**
	 * Atualiza os dados de um usuário.
	 *
	 * @param number id
	 * @param Usuario usuarios
	 */
	atualizar(id: number, usuario: Usuario): void {
		var usuarios:Usuario[] = this.listarTodos();
		for (var i=0; i<usuarios.length; i++) {
			if (usuarios[i].id == id) {
				usuarios[i] = usuario;
			}
		}

		sessionStorage['usuarios'] = JSON.stringify(usuarios);
	}

	/**
	 * Remove um usuário.
	 *
	 * @param number id
	 */
	excluir(id: number): void {
		var usuarios:Usuario[] = this.listarTodos();
		var usuariosFinal:Usuario[] = [];

		for (let usuario of usuarios) {
			if (usuario.id != id) {
				usuariosFinal.push(usuario);
			}
		}

		sessionStorage['usuarios'] = JSON.stringify(usuariosFinal);
	}
}