import { Component, OnInit } from '@angular/core';
import {MemberProxyService} from '../services/member-proxy.service';
import {MemberApiModel} from '../models/MemberApiModel';
import {Router} from '@angular/router';
import{DeleteindividualComponent} from '../deleteindividual/deleteindividual.component';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs/Observable';
//import { CompleterService, CompleterData } from 'ng2-completer';


@Component({
  selector: 'app-individual-dashboard',
  templateUrl: './individual-dashboard.component.html',
  styleUrls: ['./individual-dashboard.component.css'],
  
})
export class IndividualDashboardComponent implements OnInit {
private members : MemberApiModel[] = [];

private SelectedId :number;
private SelectedUsername :MemberApiModel;

  constructor(private MemberProxy :MemberProxyService ,  private router : Router , private route : ActivatedRoute ) { 

  }

  ngOnInit() {
   
    this.MemberProxy.getMembers()
      .subscribe((members) => {
       this.members = members;
       console.log(members);
      }
      );
  }
  BackToIndividuals()
{
  this.SelectedUsername = new MemberApiModel();
}        
    IsSelected(member:MemberApiModel)
     { return member.Id === this.SelectedId; }



   EditMember(member: MemberApiModel){
      this.router.navigate(['individual-edit/' + member.Id]);
     }
     

     DeleteMember(member:MemberApiModel){
       this.router.navigate(['deleteindividual/' + member.Id]);
       
     }
      

}


