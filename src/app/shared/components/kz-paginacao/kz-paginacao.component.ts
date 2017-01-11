/**
 * Componente utilitário para exibir os links de 
 * paginação para uma tabela HTML.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.2
 */

import { 
	Component, 
	Input, 
	OnInit, 
	Output, 
	EventEmitter 
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'kz-paginacao',
	templateUrl: 'kz-paginacao.component.html',
	styleUrls: ['kz-paginacao.component.css']
})
export class KzPaginacaoComponent implements OnInit {
	public static readonly TOTAL_PAGS_PADRAO: number = 20;
	public static readonly PAG_PADRAO: number = 1;
	public static readonly REG_PADRAO: number = 0;
	public static readonly ADJACENTES_PADRAO: number = 10;

	@Input() qtdPorPagina: number;
	@Input() totalRegistros: number;
	@Input() qtdAdjacentes: number;
	@Output() onPaginate: EventEmitter<number> = new EventEmitter<number>();

	pagina: number;
	paginas: Array<number>;
	exibirProximo: boolean;
	qtdPaginas: number;

	constructor(private route: ActivatedRoute) {
	}

	ngOnInit() {
		this.qtdAdjacentes = this.qtdAdjacentes || KzPaginacaoComponent.ADJACENTES_PADRAO;
		this.qtdPorPagina = this.qtdPorPagina || KzPaginacaoComponent.TOTAL_PAGS_PADRAO;
		this.pagina = +this.route.snapshot.queryParams['pagina'] || KzPaginacaoComponent.PAG_PADRAO;
		this.totalRegistros = this.totalRegistros || KzPaginacaoComponent.REG_PADRAO;
		this.qtdPaginas = Math.ceil(this.totalRegistros / this.qtdPorPagina);
		this.gerarLinks();
	}

	/**
	 * Gera os links de paginação.
	 */
	gerarLinks() {
		this.exibirProximo = this.qtdPaginas !== this.pagina;
		this.paginas = [];
		let iniAdjacente = (this.pagina - this.qtdAdjacentes <= 0) ? 1 : 
				(this.pagina - this.qtdAdjacentes);
		let fimAdjacente = (this.pagina + this.qtdAdjacentes >= this.qtdPaginas) ? 
				this.qtdPaginas : (this.pagina + this.qtdAdjacentes);
		for (let i=iniAdjacente; i<=fimAdjacente; i++) {
			this.paginas.push(i);
		}
	}

	/**
	 * Método responsável por chamar o Emitter de 
	 * paginação.
	 *
	 * @param number pagina
	 * @param any $event número da página a ser exibida.
	 */
	paginar(pagina: number, $event: any) {
		$event.preventDefault();
		this.pagina = pagina;
		this.gerarLinks();
		this.onPaginate.emit(pagina);
	}
}
