import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref, ActivatedRoute } from '@angular/router';
import { UserModel } from '../models/UserModel';
import { IUserLogin } from '../models/IUserLogin';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class RecuperarPage implements OnInit {

  listUser: UserModel[] = [
    new UserModel('Camilo','Pulgar','cpulgar@gmail.com',undefined,'ALUMNO','cpulgar','camilo123'),
    new UserModel('Jose Luis','Gonzalez','jgonzalez@gmail.com',undefined,'ALUMNO','jgonzalez','joseluis123'),
    new UserModel('Carlos','Gomez','cgomez@gmail.com',undefined,'ALUMNO','cgomez','carlos123'),
    new UserModel('Armando','Casas','acasas@gmail.com',undefined,'PROFESOR','acasas','armando123'),
    new UserModel('Roberto','Perez','rperez@gmail.com',undefined,'PROFESOR','rperez','roberto123'),
    new UserModel('Sara','Cabello','scabello@gmail.com',undefined,'PROFESOR','scabello','scaballo')
  ];

  userLoginModal: IUserLogin = {
    username: '',
    password: ''
  };

  userInfoReceived: UserModel | undefined;
  idUserHtmlRouterLink: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private route: Router) {
    this.userInfoReceived = this.router.getCurrentNavigation()?.extras.state?.['user'];
    this.idUserHtmlRouterLink = this.activatedRoute.snapshot.params['id'];
    console.log("Valor obtenido desde URL: ", this.idUserHtmlRouterLink)
  }
  ngOnInit() {
  }

  recupPass(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username)){
        console.log('User Loged...', this.userLoginModal.username);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].type == 'ALUMNO'){
          let sendInfo = this.route.navigate(['/recuperar'], userInfoSend);
          return true;
        }else{
          let sendInfo = this.route.navigate(['/recuperar'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
  }
  userLoginModalRestart(): void{
    this.userLoginModal.username = '';
    this.userLoginModal.password = '';
  }
}

