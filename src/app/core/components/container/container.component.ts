import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
