import { Component, OnInit,Input} from '@angular/core';
import {MemberApiModel} from '../models/MemberApiModel';
import {MemberProxyService} from '../services/member-proxy.service';
import {IndividualDashboardComponent} from '../individuals/individual-dashboard.component';
import {Router} from '@angular/router';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-deleteindividual',
  templateUrl: './deleteindividual.component.html',
  styleUrls: ['./deleteindividual.component.css']
})
export class DeleteindividualComponent implements OnInit {
member :MemberApiModel;
id : number;
  constructor( private MemberProxy : MemberProxyService, private router : Router , private route : ActivatedRoute) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];
   
  }

DeleteMember(id:number) 
{
this.MemberProxy.removeMember(id)
  .subscribe((member) =>{
  this.member=member;
  this.router.navigate(["individual-dashboard"]);
  }
  );
 
}
ReturnToIndividuals(){
this.router.navigate(["individual-dashboard"]);

}

}
