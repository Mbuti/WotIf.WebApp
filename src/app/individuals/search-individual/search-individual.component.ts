import { Component, OnInit } from '@angular/core';
import { MemberApiModel } from '../../models/MemberApiModel';
import { MemberProxyService } from '../../services/member-proxy.service';

@Component({
  selector: 'app-search-individual',
  templateUrl: './search-individual.component.html',
  styleUrls: ['./search-individual.component.css']
})
export class SearchIndividualComponent implements OnInit {

  public members: MemberApiModel[] = [];
  public SelectedUsername: MemberApiModel;

  constructor(private MemberProxy: MemberProxyService) {
  }

  ngOnInit() {
    this.MemberProxy.getMembers()
      .subscribe((members) => {
        this.members = members;
      })
  }

}
