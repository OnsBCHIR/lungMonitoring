import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  register: FormGroup ;
  submitted = false;
  bool =true;
  constructor() { }

  ngOnInit(): void {





  }

}
