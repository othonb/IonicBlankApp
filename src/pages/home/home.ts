import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nomeUsuario : string;
  senhaUsuario : string;

  constructor(
    public navCtrl: NavController,
    private alertCtrl : AlertController
  ) { }

  private clicaBotao() {
    let alert = this.alertCtrl.create ({
      title : "Nome do Usuário: " + this.nomeUsuario,
      buttons : ['Ok']
    });
    alert.present();
  }

}
