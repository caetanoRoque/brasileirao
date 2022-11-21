import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listaDeTimes: any = [];

  constructor() { }

  ngOnInit() { // ao carrega a página
  }

  ionViewDidEnter() { // ao entrar na tela
    this.listaDeTimes = JSON.parse(localStorage.getItem('times'));

    if (this.listaDeTimes == null) {
      this.listaDeTimes = [];
    }

    this.listaDeTimes.sort((timeA, timeB) => timeA.pontos > timeB.pontos ? -1 : 1)
  }

  torcer(time) {
    if (time.meuTime == true) {
      time.meuTime = false;
    } else {
      time.meuTime = true;
    }
  }

}
