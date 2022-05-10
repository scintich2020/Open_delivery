import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-colis',
  templateUrl: './list-colis.component.html',
  styleUrls: ['./list-colis.component.scss']
})
export class ListColisComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
