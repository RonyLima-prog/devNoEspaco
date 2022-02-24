import { Injectable } from '@angular/core';
import { Planeta } from './planeta';

@Injectable({
  providedIn: 'root',
})
export class tamanhoPlanetaService {
  oTamanhoDoPlanetaEh(planeta: Planeta): string {
    if (planeta.diametro >= 12742) return 'grande';
    else return 'Pequeno';
  }
}
