/**
 * Arquivo utilitário que serve como mock de um 
 * Router.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.5
 */

export class RouterStubService {

  navigateByUrl(url: string) { 
  	return url; 
  }

  navigate(url: string[]) { 
  	return url; 
  }
  
}
