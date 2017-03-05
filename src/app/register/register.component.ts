import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NewColonist, Job} from '../models';
import {FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl} from '@angular/forms';

import { JOBS_URL, COLONIST_URL } from '../models/API'
import { ColonistAPIService } from '../apiService/colonist';
import { JobsAPIService } from '../apiService/jobs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService ]
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;

  marsJobs: Job[];
  registerForm: FormGroup;
  flashRed: boolean;

  constructor( private colonistApiService: ColonistAPIService,
                private jobsAPIService: JobsAPIService,
                private router: Router ) {
    
                  
    this.getMarsJobs();

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('none', [Validators.required]),
    });

    this.flashRed = false;

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
    
    this.jobsAPIService.getMarsJobs()
        .subscribe((result) => {
          this.marsJobs = result;
        });
  }

  postNewColonist(event){
    event.preventDefault();
    
    if(this.registerForm.invalid){
      this.flashRed = true;
    }else {
    const name = this.registerForm.get('name').value;
    const age = this.registerForm.get('age').value;
    const job_id = this.registerForm.get('job_id').value;

    const newColonist = new NewColonist(name, job_id, age);
    const colonistPostRequest = { colonist: newColonist };
 /* tslint:disable */
    this.colonistApiService.saveColonist( colonistPostRequest )
        .subscribe((resultColonist) => {
          localStorage.setItem('colonist_id', JSON.stringify(resultColonist.id));
          console.log('Colonist was saved: ', resultColonist);
        });
        this.router.navigate(['encounter']);
    }

    console.log(this.registerForm);

    
  }


}
