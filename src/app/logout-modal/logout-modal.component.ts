import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-modal',
  templateUrl: './logout-modal.component.html',
  styleUrls: ['./logout-modal.component.css']
})
export class LogoutModalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private router: Router) {}

  ngOnInit(): void {}

  closeModal() {
    this.activeModal.dismiss();
  }

  logOut() {
    sessionStorage.removeItem('');

    this.activeModal.dismiss();

  }
  }

