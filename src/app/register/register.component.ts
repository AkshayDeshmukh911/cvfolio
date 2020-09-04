import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],

  });
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {}

    async registerHere(){
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3800/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['home']);
  }

}
