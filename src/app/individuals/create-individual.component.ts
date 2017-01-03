import { Component, OnInit } from '@angular/core';
import {MemberApiModel} from '../models/MemberApiModel';
import {MemberProxyService} from '../services/member-proxy.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  styleUrls: [],
  providers:[MemberProxyService]
})
export class CreateIndividualComponent implements OnInit {

 member: MemberApiModel;
  

  constructor(private MemberProxy :MemberProxyService, private router :Router)  { 
    this.member = new MemberApiModel();

  }
  

  ngOnInit() {
  }
  
  CreateIndividual() {
      this.MemberProxy.createMember(this.member)
      .subscribe(() => {}
    );
      this.router.navigate(["individual-dashboard"]);
}
}

