import { Tema } from './../model/Tema';
import { Observable } from 'rxjs';
import { TemaService } from './../service/tema.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css'],
})
export class TemaComponent implements OnInit {
  temas: Tema[];
  novoTema: Tema = new Tema();

  constructor(private router: Router, private temaService: TemaService) {}

  ngOnInit() {
    if (environment.token == '') {
      alert('Sua sessão expirou, faça o login novamente.');
      this.router.navigate(['/entrar']);
    }

    this.findAllTema();
  }

  findAllTema() {
    this.temaService.getAllTema().subscribe((resp: Tema[]) => {
      this.temas = resp;
    });
  }

  cadastrar() {
    console.log(this.novoTema)
    this.temaService.postTema(this.novoTema).subscribe((resp: Tema) => {
      this.novoTema = resp;
      alert('Tema cadastrado com sucesso!')
      this.findAllTema();
      this.novoTema = new Tema();
    });
  }
}
