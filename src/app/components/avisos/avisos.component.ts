import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aviso } from 'src/app/models/aviso.model';
import { AvisoService } from 'src/app/services/aviso.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.css']
})
export class AvisosComponent implements OnInit, OnDestroy {
  aviso = new Aviso();
  listaAviso = new Array<Aviso>();
  sub: any;
  id: string = "";
  avisobutton: string = "Adicionar aviso";
  novoTopico: boolean = false;

  constructor(
    private avisoService: AvisoService,
    private route: ActivatedRoute,
    public router: Router,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.lerAvisos();
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log("ID: ", this.id);
      if (this.id) {
        this.avisobutton = "Salvar edição"
        this.lerAviso(this.id);
        this.publicarNovoAviso();
      }
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  lerAvisos() {
    this.listaAviso = [];
    let observable = this.avisoService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaAviso.push(entry[1]);
      })
    })
  }

  lerAviso(id: string) {
    let observable = this.avisoService.get(id);
    observable.subscribe(aviso => {
      this.aviso = aviso;
    })
  }

  postarAvisos() {
    let observable = this.avisoService.post(this.aviso);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.aviso.titulo = "";
      this.aviso.texto = "";
      this.lerAvisos();
    })
  }

  apagarAvisos() {
    let observable = this.avisoService.getAll();
    observable.subscribe(Aviso => {
      console.log("Aviso excluído", Aviso);
    })
  }

  alteracaoAviso() {
    let observable = this.avisoService.put(this.id, this.aviso);
    observable.subscribe(s => {
      console.log("Alterando aviso: ", s);
      this.lerAvisos();
      this.aviso.titulo = "";
      this.aviso.texto = "";
      this.router.navigate(['avisos']);
    })
  }

  postar() {
    if(this.id) {
      this.alteracaoAviso();
    }
    else {
      this.postarAvisos();
    }
  }

  excluirAviso(id: string) {
    let observable = this.avisoService.delete(id);
    observable.subscribe(aviso => {
      console.log("Aviso excluído.", aviso);
      this.lerAvisos();
    })
  }

  publicarNovoAviso() {
    this.novoTopico = true;
  }

  cancelarAviso() {
    this.novoTopico = false;
    this.router.navigate(['avisos']);
  }
}
