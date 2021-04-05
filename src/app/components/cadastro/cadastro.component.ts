import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ClienteDataService } from '../../services/cliente.data.service'
import { Router } from '@angular/router';

import { Sexo } from '../../Model/sexo';
import { SEXO } from '../../Model/mock-data';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  providers: [ClienteDataService]
})

export class CadastroComponent implements OnInit {
  public form: FormGroup;
  public showUpdate: boolean = false;
  public showCreate: boolean = false;
  public usuario: any;
  
  public sexoList: Sexo[] = SEXO;
  

  constructor(private fb: FormBuilder, private clienteService: ClienteDataService, private router: Router) {
    this.sexoList = SEXO;
    this.sexoList.forEach(e => {
      e.selected = false;
    });

    this.form = this.fb.group({
      cpf: ['', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.required
      ])],
      nome: ['', Validators.compose([
        Validators.maxLength(120),
        Validators.minLength(3),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.maxLength(50),
        Validators.minLength(3),
        Validators.required
      ])],
      sexo: ['', Validators.compose([
        Validators.maxLength(1),
        Validators.minLength(1),
        Validators.required
      ])],
      telefone: ['', Validators.compose([
        Validators.maxLength(11),
        Validators.minLength(11),
        Validators.required
      ])],
      datanascimento: ['', Validators.compose([
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.required
      ])]
    });
  }

  ngOnInit() {
    // this.tipoSexoOp = [ {desc : 'Masculino', valor : 1},
    //                     {desc : 'Feminino', valor : 2 }];

    //                     alert(JSON.stringify(this.tipoSexoOp));
    //   this.form = this.fb.group({
    //     tipoSexo: [ {desc : 'Masculino', valor : 1},
    //                 {desc : 'Feminino', valor : 2 }]
    //   })



    document.getElementById("cpf").focus();
    document.getElementById("cpf").removeAttribute('disabled');
    
    

    this.showCreate = true;

    this.usuario = JSON.parse(localStorage.getItem('update.product'));
    if(this.usuario) {
      document.getElementById("cpf").setAttribute('disabled', 'disabled');

      this.form.controls['cpf'].setValue(this.usuario.cpf);
      this.form.controls['nome'].setValue(this.usuario.nome);
      this.form.controls['email'].setValue(this.usuario.email);
      this.form.controls['telefone'].setValue(this.usuario.telefone);
      this.form.controls['sexo'].setValue(this.usuario.idSexo);

      this.sexoList.forEach(e => {
        if(e.value == this.usuario.idSexo){
            e.selected = true;
        }else{
            e.selected = false;
        }
      });
       
      this.form.controls['datanascimento'].setValue(this.usuario.dataNascimento);
      
      this.showCreate = false;
      this.showUpdate = true;

    }
  }

  submit() {
    this.clienteService
      .createUsuario(this.form.value)
        .subscribe(result => {
          alert('Usuário '+ result.nome +' Salvo com Sucesso!');

          this.router.navigateByUrl('');
        }, error => {
          alert(JSON.parse(error._body));
        });
  }

  update() {
    this.clienteService
      .updateUsuario(this.form.value)
        .subscribe(result => {
          alert('Usuário '+ result.nome +' Alterado com Sucesso!');
          localStorage.clear();
          localStorage.removeItem('update.product');

          this.router.navigateByUrl('');
        }, error => {

          alert(JSON.parse(error._body));

          this.router.navigateByUrl('');
        });
  }



}
