import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ENCOUNTERS_URL } from '../models/API';
import { Encounter } from '../models';
import { EncountersAPIService } from '../apiService/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styleUrls: ['./encounters.component.scss'],
  providers: [ EncountersAPIService ]
})
export class EncountersComponent implements OnInit {

  encounterList: Encounter[];
  reportedEncounter: Encounter;

  constructor(private encountersAPIService: EncountersAPIService,
              private router: Router) {
    this.getEncounters();
    console.log(localStorage.getItem('NewReportedEncounter'));

    this.reportedEncounter = {
      "id": Number(localStorage.getItem('NewReportedID')),
      "date": new Date().toLocaleDateString("en-US"),
      "colonist_id": Number(localStorage.getItem('NewReportedCID')),
      "atype": localStorage.getItem('NewReportedATYPE'),
      "action": localStorage.getItem('NewReportedACTION')
    }
    
    // console.log(this.reportedEncounter)
   }

  getEncounters(){

    this.encountersAPIService.getEncounters()
        .subscribe((result) => {
          this.encounterList = result;
          this.encounterList.unshift(this.reportedEncounter);
        });
  }

  navigateLink(){
    this.router.navigate(['report']);
  }

  ngOnInit() {
  }

}
