import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './users/user-profile.component';
import { UserFormComponent } from './users/user-form.component';
import { AppRouting } from './app.routing';
import { HomeComponent } from './webs/home.component';
import { AboutComponent } from './webs/about.component';
import { ContactComponent } from './webs/contact.component';

@NgModule({
 imports: [
   BrowserModule,
   FormsModule,
   AppRouting
 ],
 declarations: [
   AppComponent,
   UserProfileComponent,
   UserFormComponent,
   HomeComponent,
   AboutComponent,
   ContactComponent
 ],
 bootstrap: [ AppComponent ]
})
export class AppModule {}

