import { Component, OnInit } from '@angular/core';
import { NewColonist, Job} from '../models';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

import { JOBS_URL, COLONIST_URL } from '../models/API'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;
  flashRed: boolean;

  constructor() {
    // TODO: call API, get jobs.

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('none', [Validators.required]),
    });

    this.flashRed = false;

    this.getMarsJobs();
  }



  acceptAge( min: number, max: number){
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value < min || control.value > max){
        return {'Sorry incorrect age': { age: control.value }};
      }      
    }
  }

  ngOnInit() {
    
  }


  getMarsJobs(){
    console.log('Getting...Jobs');
  }

  postNewColonist(){
    console.log('Posting...colonist');
    this.flashRed = true;
  }


}
