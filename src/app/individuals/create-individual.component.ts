import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-individual',
  templateUrl: './create-individual.component.html',
  styleUrls: []
})
export class CreateIndividualComponent implements OnInit {
   show = "yes";

   inputtedValues ={
     SearchByName:"",
     Name:"",
     Surname:"",
     Age:"",
     ID:"",
     Nationality:"",
     NameOfTalent:"",
     YearsExperience:"",
     EntityName:""
   };

   angular = false;
   hasTalent = false;
   hasParticipant = false;

   SubmitData(){
     alert('IMPLEMENTED this has not BEEN');
  }  

  SubmitFieldData(stringi){
    alert(stringi);
  }
  constructor() { }

  ngOnInit() {
  }

}
