import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  time: any = {
    nome: '',
    escudo: '',
    pontos: 0,
    meuTime: false
  }

  times: any = [];

  constructor(private router: Router) { }

  ngOnInit() { // executado ao carregar a tela
    this.times = JSON.parse(localStorage.getItem('times'));

    if (this.times == null) { // checando se o localStorage está vazio
      this.times = [];
    }
  }

  criar() {

    this.times.push(Object.assign({}, this.time));
    localStorage.setItem('times', JSON.stringify(this.times)) // salva informações
    this.voltarParaClassificacao();
  }

  voltarParaClassificacao() {
    this.router.navigate(['/tabs/tab1']);
    
  }

}
