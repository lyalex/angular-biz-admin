import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    SecureComponent,
    MenuComponent,
    NavComponent,
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ]
})
export class SecureModule { }
