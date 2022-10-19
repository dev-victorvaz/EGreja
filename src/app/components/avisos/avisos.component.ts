import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { Aviso } from 'src/app/models/aviso.model';
import { AvisoService } from 'src/app/services/aviso.service';

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
  avisobutton: string = "Adicionar aviso"

  constructor(private avisoService: AvisoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.lerAvisos();
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log("ID: ", this.id);
      if (this.id) {
        this.avisobutton = "Salvar edição"
        this.lerAviso(this.id);
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
      console.log("Criando novo aviso: ", s);
    })
  }

  postar() {
    if(this.id) {
      this.alteracaoAviso();
      this.lerAvisos;
    }
    else {
      this.postarAvisos();
      this.lerAvisos();
    }
  }

  excluirAviso(id: string) {
    let observable = this.avisoService.delete(id);
    observable.subscribe(aviso => {
      console.log("Aviso excluído.", aviso);
      this.lerAvisos();
    })
  }

}
