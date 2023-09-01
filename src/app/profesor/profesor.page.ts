import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from '../models/UserModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfesorPage implements OnInit {

  adminInfoReceived: UserModel | undefined;

  constructor(private r: Router) {
    this.adminInfoReceived = this.r.getCurrentNavigation()?.extras.state?.['user'];
   }

  ngOnInit() {
  }

}
