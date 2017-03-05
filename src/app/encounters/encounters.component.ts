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
    
   }

  getEncounters(){

    this.encountersAPIService.getEncounters()
        .subscribe((result) => {
          this.encounterList = result;
        });
  }

  navigateLink(){
    this.router.navigate(['report']);
  }

  ngOnInit() {
  }

}
