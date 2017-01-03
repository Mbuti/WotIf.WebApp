import { Component, OnInit, Input} from '@angular/core';
import {MemberProxyService} from '../services/member-proxy.service';
import {CreateIndividualComponent} from '../individuals/create-individual.component';
import {MemberApiModel} from '../models/MemberApiModel';
import {ActivatedRoute, Params, Router} from '@angular/router';


@Component({
  selector: 'app-edit-individual',
  templateUrl: './edit-individual.component.html',
  styleUrls: []
})
export class EditIndividualComponent implements OnInit {
id : number;
member :MemberApiModel;



  constructor(private route : ActivatedRoute ,private MemberProxy: MemberProxyService, private router:Router  ){
  
    this.member = new MemberApiModel();
    this.id = route.snapshot.params['id'];
    this.MemberProxy.getMemberById(this.id)
      .subscribe((member) =>
        this.member = member);
  }

  ngOnInit() {
  }

SaveChanges(id:number, member:MemberApiModel){
  this.MemberProxy.editMember(this.id,this.member)
  .subscribe((member) => 
  this.member = member);
  console.log(this.member);
  this.router.navigate(["individual-dashboard"]);
}


}