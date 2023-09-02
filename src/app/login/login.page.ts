import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, NavigationExtras, RouterLinkWithHref } from '@angular/router';
import { IUserLogin } from '../models/IUserLogin';
import { UserModel } from '../models/UserModel';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLinkWithHref, FormsModule]})
export class LoginPage implements OnInit {

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

  constructor(private route: Router) { }

  ngOnInit() {
    this.userLoginModalRestart();
  }

  userLogin(userLoginInfo: IUserLogin): boolean{
    for(let i = 0; i < this.listUser.length; i++){
      if((this.listUser[i].username == userLoginInfo.username) && (this.listUser[i].password == userLoginInfo.password)){
        console.log('User Loged...', this.userLoginModal.username, this.userLoginModal.password);
        let userInfoSend: NavigationExtras = {
          state: {
            user: this.listUser[i]
          }
        }
        if(this.listUser[i].type == 'ALUMNO'){
          let sendInfo = this.route.navigate(['/alumno'], userInfoSend);
          return true;
        }else{
          let sendInfo = this.route.navigate(['/profesor'], userInfoSend);
          return true;
        }
      }
    }
    this.userLoginModalRestart();
    return false;
    
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
