import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
<<<<<<< HEAD
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: ['./app/app.component.css']
=======
 selector: 'my-app',
 template: `
 <header>
<nav class="navbar navbar-inverse">
       <div class="navbar-header">
         <a href="/" class="navbar-brand">My Angular 2 App!</a>
       </div>
     </nav>
   </header>
<main>
     <div class="row">
       <div class="col-sm-4">
         <div *ngIf="users">
         <ul class="list-group users-list">
           <li class="list-group-item"
              *ngFor="let user of users"
           		(click)="selectUser(user)"  [class.active]="user===activeUser">>
              {{ user.name }} ({{ user.username }})
           </li>
         </ul>
         </div>
       </div>
       <div class="col-sm-8">

			<div class="jumbotron" *ngIf="activeUser">
              <h2>{{activeUser.name}} <small> {{activeUser.username}} </small></h2>
            </div>
       </div>
     </div>
    
   </main>
   <footer class="text-center">
     Copyright &copy; 2016
   </footer>

 `,
 styles: [`
   .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
 `]
>>>>>>> 89c01071fe74d59caa65a7f5704dba31659d4b07
})

export class AppComponent {
message: string = 'Hello!';
 users: User[] = [
   { id: 25, name: 'Chris', username: 'sevilayha' },
   { id: 26, name: 'Nick', username: 'whatnicktweets' },
   { id: 27, name: 'Holly', username: 'hollylawly' }
 ];
 activeUser: User;


 selectUser(user) {
   this.activeUser = user;
   console.log(this.activeUser);
 }
   
onUserCreated(event) {
    this.users.push(event.user);
  }
}
