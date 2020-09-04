import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';
import { PersonalComponent } from '../personal/personal.component';
import { EducationComponent } from '../education/education.component';
import {WExperianceComponent} from '../w-experiance/w-experiance.component';
import {} from '../w-experiance/w-experiance.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {


  }

  processLogout() {
    this.modalService.open(LogoutModalComponent,{
      centered: true,
    });
  }

  personal() {
    this.modalService.open(PersonalComponent,{
      centered: true,
    });
  }

  education() {
    this.modalService.open(EducationComponent,{
      centered: true,
    })
  }

  experience() {
    this.modalService.open(WExperianceComponent,{
      centered: true,
    })
  }
}
