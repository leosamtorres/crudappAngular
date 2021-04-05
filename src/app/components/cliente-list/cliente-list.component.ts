import { Component, OnInit } from '@angular/core';
import { ClienteDataService } from '../../services/cliente.data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  providers: [ClienteDataService]
})
export class ClienteListComponent implements OnInit {
  public usuarios: any[] = [];
  constructor(private clienteService: ClienteDataService, private route: Router) { }

  ngOnInit() {
    this.getUsuario();
    localStorage.clear();
    localStorage.removeItem('update.product');
  }

  getUsuario() {
    this.clienteService
      .getUsuario()
        .subscribe(result => {
          this.usuarios = result;

          //teste retorno
        //   for (var i = 0; i < result.length; i++) {
        //     alert(result[i].cpf + ' - ' + result[i].dataNascimento);
        //  }

        }, error => {
          console.log(error);
        });
  }

  delete(usuario) {
    this.clienteService
      .deleteUsuario(usuario)
        .subscribe(result => {
          alert('Usuário excluido com sucesso.');
          this.getUsuario();
      }, error => {
        alert(JSON.parse(error._body));
    });
  }

  update(product) {
    localStorage.setItem('update.product', JSON.stringify(product));
    this.route.navigateByUrl('/usuario')
  }



}
