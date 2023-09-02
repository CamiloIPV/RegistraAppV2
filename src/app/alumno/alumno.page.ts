import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserModel } from '../models/UserModel';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class AlumnoPage implements OnInit {

  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    console.log("Valor obtenido desde URL: ", this.idUserHtmlRouterLink)
  }

  ngOnInit() {
  }
  public alertButtons = ['OK']
}

