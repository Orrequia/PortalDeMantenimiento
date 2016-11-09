import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-form',
  styles: [`
    form   {
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
    }
.ng-valid[required], .ng-valid.required  {
  border-left: 5px solid #42A948; /* green */
    }


.ng-invalid:not(form)  {
  border-left: 5px solid #a94442; /* red */
}
  `],
 template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
     
      <div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
        <input type="text" class="form-control" name="name" placeholder="Name" required
        #name="ngModel" [(ngModel)]="newUser.name" minlength="3">
        <span class="help-block" *ngIf="name.invalid && name.touched">Name is required.</span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': username.invalid && username.touched }">
               <input type="text" class="form-control" name="username" placeholder="Username" required 
        #username="ngModel" [(ngModel)]="newUser.username" minlength="3">
        <span class="help-block" *ngIf="username.invalid && username.touched">Username is required.</span>
      </div>
      <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
        Create User
      </button>
    </form>
  `
})

export class UserFormComponent {
 @Output() userCreated = new EventEmitter();
 newUser: User = new User();
 active: boolean = true;



 onSubmit() {
   // show the event that the user was created
       console.log(this.newUser);
   this.userCreated.emit({ user: this.newUser });



   this.newUser = new User();
   this.active = false;
   setTimeout(() => this.active = true, 0);
 }
}
