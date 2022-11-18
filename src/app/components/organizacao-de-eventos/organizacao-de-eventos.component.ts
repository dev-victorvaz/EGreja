import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { observable } from 'rxjs';
import { Cronograma } from 'src/app/models/cronograma.model';
import { DomingoService } from 'src/app/services/cronograma/domingo.service';
import { SegundaService } from 'src/app/services/cronograma/segunda.service';
import { TercaService } from 'src/app/services/cronograma/terca.service';
import { QuartaService } from 'src/app/services/cronograma/quarta.service';
import { QuintaService } from 'src/app/services/cronograma/quinta.service';
import { SextaService } from 'src/app/services/cronograma/sexta.service';
import { SabadoService } from 'src/app/services/cronograma/sabado.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-organizacao-de-eventos',
  templateUrl: './organizacao-de-eventos.component.html',
  styleUrls: ['./organizacao-de-eventos.component.css']
})
export class OrganizacaoDeEventosComponent implements OnInit {
  domingo = new Cronograma();
  segunda = new Cronograma();
  terca = new Cronograma();
  quarta = new Cronograma();
  quinta = new Cronograma();
  sexta = new Cronograma();
  sabado = new Cronograma();
  listaDomingo = new Array<Cronograma>();
  listaSegunda = new Array<Cronograma>();
  listaTerca = new Array<Cronograma>();
  listaQuarta = new Array<Cronograma>();
  listaQuinta = new Array<Cronograma>();
  listaSexta = new Array<Cronograma>();
  listaSabado = new Array<Cronograma>();
  sub: any;
  id: string = "";
  conteudo: string = "";
  horario: string = "";
  novoDomingo: boolean = false;
  novoSegunda: boolean = false;
  novoTerca: boolean = false;
  novoQuarta: boolean = false;
  novoQuinta: boolean = false;
  novoSexta: boolean = false;
  novoSabado: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private domingoService: DomingoService,
    private segundaService: SegundaService,
    private tercaService: TercaService,
    private quartaService: QuartaService,
    private quintaService: QuintaService,
    private sextaService: SextaService,
    private sabadoService: SabadoService,
    private route: ActivatedRoute,
    public router: Router,
    public authService: AuthService
    ) { }

  ngOnInit(): void {
    this.lerDomingo();
    this.lerSegunda();
    this.lerTerca();
    this.lerQuarta();
    this.lerQuinta();
    this.lerSexta();
    this.lerSabado();
    this.sub = this.route.params.subscribe(params => {
      this.id = params["id"];
      console.log("ID: ", this.id);
    });
    this.verificarAdmin();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  lerDomingo() {
    this.listaDomingo = [];
    let observable = this.domingoService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaDomingo.push(entry[1]);
      })
    })
  }

  lerSegunda() {
    this.listaSegunda = [];
    let observable = this.segundaService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaSegunda.push(entry[1]);
      })
    })
  }

  lerTerca() {
    this.listaTerca = [];
    let observable = this.tercaService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaTerca.push(entry[1]);
      })
    })
  }

  lerQuarta() {
    this.listaQuarta = [];
    let observable = this.quartaService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaQuarta.push(entry[1]);
      })
    })
  }

  lerQuinta() {
    this.listaQuinta = [];
    let observable = this.quintaService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaQuinta.push(entry[1]);
      })
    })
  }

  lerSexta() {
    this.listaSexta = [];
    let observable = this.sextaService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaSexta.push(entry[1]);
      })
    })
  }

  lerSabado() {
    this.listaSabado = [];
    let observable = this.sabadoService.getAll();
    observable.subscribe(l => {
      const entries = Object.entries(l);
      console.log(l);

      entries.forEach(entry => {
        const a = entry[1];
        a.id = entry[0];
        this.listaSabado.push(entry[1]);
      })
    })
  }

  postarDomingo() {
    let observable = this.domingoService.post(this.domingo);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.domingo.conteudo = "";
      this.domingo.horario = "";
      this.lerDomingo();
    })
  }

  postarSegunda() {
    let observable = this.segundaService.post(this.segunda);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.segunda.conteudo = "";
      this.segunda.horario = "";
      this.lerSegunda();
    })
  }

  postarTerca() {
    let observable = this.tercaService.post(this.terca);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.terca.conteudo = "";
      this.terca.horario = "";
      this.lerTerca();
    })
  }

  postarQuarta() {
    let observable = this.quartaService.post(this.quarta);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.quarta.conteudo = "";
      this.quarta.horario = "";
      this.lerQuarta();
    })
  }

  postarQuinta() {
    let observable = this.quintaService.post(this.quinta);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.quinta.conteudo = "";
      this.quinta.horario = "";
      this.lerQuinta();
    })
  }

  postarSexta() {
    let observable = this.sextaService.post(this.sexta);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.sexta.conteudo = "";
      this.sexta.horario = "";
      this.lerSexta();
    })
  }

  postarSabado() {
    let observable = this.sabadoService.post(this.sabado);
    observable.subscribe(s => {
      console.log("Criando novo aviso: ", s);
      this.sabado.conteudo = "";
      this.sabado.horario = "";
      this.lerSabado();
    })
  }
/*
  lerUmDomingo(id: string) {
    let observable = this.domingoService.get(id);
    observable.subscribe(domingo => {
      this.domingo = domingo;
    })
  }

  lerUmSegunda(id: string) {
    let observable = this.segundaService.get(id);
    observable.subscribe(segunda => {
      this.segunda = segunda;
    })
  }

  lerUmTerca(id: string) {
    let observable = this.tercaService.get(id);
    observable.subscribe(terca => {
      this.terca = terca;
    })
  }

  lerUmQuarta(id: string) {
    let observable = this.quartaService.get(id);
    observable.subscribe(quarta => {
      this.quarta = quarta;
    })
  }

  lerUmQuinta(id: string) {
    let observable = this.quintaService.get(id);
    observable.subscribe(quinta => {
      this.quinta = quinta;
    })
  }

  lerUmSexta(id: string) {
    let observable = this.sextaService.get(id);
    observable.subscribe(sexta => {
      this.sexta = sexta;
    })
  }

  lerUmSabado(id: string) {
    let observable = this.sabadoService.get(id);
    observable.subscribe(sabado => {
      this.sabado = sabado;
    })
  }

  alteracaoD() {
    let observable = this.domingoService.put(this.id, this.domingo);
    observable.subscribe(s => {
      console.log("Alterando aviso: ", s);
    })
    this.domingo.conteudo = "";
    this.domingo.horario = "";
  }

  postar() {
    if(this.id) {
      this.alteracaoAviso();
      this.lerAvisos;
      this.aviso.titulo = "";
      this.aviso.texto = "";
    }
    else {
      this.postarAvisos();
      this.lerAvisos();
      this.router.navigate(['avisos']);
    }
  }
*/
  excluirDomingo(id: string) {
    let observable = this.domingoService.delete(id);
    observable.subscribe(evento => {
      console.log("Evento excluído.", evento);
      this.lerDomingo();
    })
  }

  excluirSegunda(id: string) {
    let observable = this.segundaService.delete(id);
    observable.subscribe(evento => {
      console.log("Evento excluído.", evento);
      this.lerSegunda();
    })
  }

  excluirTerca(id: string) {
    let observable = this.tercaService.delete(id);
    observable.subscribe(evento => {
      console.log("Evento excluído.", evento);
      this.lerTerca();
    })
  }

  excluirQuarta(id: string) {
    let observable = this.quartaService.delete(id);
    observable.subscribe(evento => {
      console.log("Evento excluído.", evento);
      this.lerQuarta();
    })
  }

  excluirQuinta(id: string) {
    let observable = this.quintaService.delete(id);
    observable.subscribe(evento => {
      console.log("Evento excluído.", evento);
      this.lerQuinta();
    })
  }

  excluirSexta(id: string) {
    let observable = this.sextaService.delete(id);
    observable.subscribe(evento => {
      console.log("Evento excluído.", evento);
      this.lerSexta();
    })
  }

  excluirSabado(id: string) {
    let observable = this.sabadoService.delete(id);
    observable.subscribe(evento => {
      console.log("Evento excluído.", evento);
      this.lerSabado();
    })
  }

  criarDomingo(decisao: boolean) {
    this.novoDomingo = decisao;
  }

  criarSegunda(decisao: boolean) {
    this.novoSegunda = decisao;
  }

  criarTerca(decisao: boolean) {
    this.novoTerca = decisao;
  }

  criarQuarta(decisao: boolean) {
    this.novoQuarta = decisao;
  }

  criarQuinta(decisao: boolean) {
    this.novoQuinta = decisao;
  }

  criarSexta(decisao: boolean) {
    this.novoSexta = decisao;
  }

  criarSabado(decisao: boolean) {
    this.novoSabado = decisao;
  }

  async verificarAdmin() {
    if (!this.authService.isLoggedIn) {
      this.isAdmin = false;
    }
    else if (await this.authService.isManager(this.authService.userData.uid)) {
      this.isAdmin = true;
    }
    else {
      this.isAdmin = false;
    }
  }
}