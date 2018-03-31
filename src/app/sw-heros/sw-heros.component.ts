import { Component, OnInit } from '@angular/core';
import { SwHerosService } from './sw-heros.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-sw-heros',
  templateUrl: './sw-heros.component.html',
  styleUrls: ['./sw-heros.component.css']
})
export class SwHerosComponent implements OnInit {

  heros: Observable<any>;
  constructor(private starWarHerosService: SwHerosService) {
  }

  ngOnInit() {

    this.heros = this.starWarHerosService.getHeros();
  }


}
