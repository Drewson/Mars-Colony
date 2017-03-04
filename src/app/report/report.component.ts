import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alien, NewEncounter } from '../models';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ALIENS_URL } from '../models/API';
import { AliensAPIService } from '../apiService/aliens';
import { EncountersAPIService } from '../apiService/encounters';
import { } from './../../../';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
  providers: [AliensAPIService, EncountersAPIService]
})
export class ReportComponent implements OnInit {

  newEncounter: NewEncounter;
  alienType: Alien[];
  reportForm: FormGroup;
  et: string;
  flashRed: boolean;
  private storage: any;

  constructor(private aliensAPIService: AliensAPIService,
    private encountersApiService: EncountersAPIService,
    private router: Router) {

    this.flashRed = false;
    this.getAlienType();



    this.reportForm = new FormGroup({
      atype: new FormControl('', [Validators.required]),
      action: new FormControl('', [Validators.required]),
    });
  }

  getText(event) {
    this.et = event.target.value;
  }

  getAlienType() {

    this.aliensAPIService.getAlienType()
      .subscribe((result) => {
        this.alienType = result;
      });
  }

  postNewEncounter(event) {
    event.preventDefault();

    if (this.reportForm.invalid) {
      this.flashRed = true;

    } else {

      const date = new Date().toLocaleDateString("en-US");
      const colonist_id = localStorage.getItem('colonist_id');
      const atype = this.reportForm.get('atype').value;
      const action = this.reportForm.get('action').value;
      const newEncounter = new NewEncounter( date, colonist_id, atype, action);
      const encounterPostRequest = { encounter: newEncounter };

      this.encountersApiService.saveEncounter(encounterPostRequest)
        .subscribe((resultEncounter) => {
          console.log('Encounter was saved: ', resultEncounter);
          localStorage.setItem('NewReportedEncounter', JSON.stringify(resultEncounter));
          localStorage.setItem('NewReportedCID', JSON.stringify(resultEncounter.colonist_id));
          localStorage.setItem('NewReportedATYPE', JSON.stringify(resultEncounter.atype));
          localStorage.setItem('NewReportedACTION', JSON.stringify(resultEncounter.id));
          localStorage.setItem('NewReportedACTION', JSON.stringify(resultEncounter.action));
        });

      this.router.navigate(['encounter'])
    };
  }

  ngOnInit() {
  }

}
