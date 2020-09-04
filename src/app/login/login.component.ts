import { Component, OnInit } from '@angular/core';

import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {}

  async loginProcessHere() {
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:3800/adduser';
    const result: any = await this.http.post(url, data).toPromise();
    if(result.opr) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else{
      this.uiInvalidCredential = true;
    }

  }

}
