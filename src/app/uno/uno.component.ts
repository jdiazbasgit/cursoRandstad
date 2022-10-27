import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute) { }

  ngOnInit(): void {
    alert(this.rutaActiva.snapshot.params['pais'])
  }

}
