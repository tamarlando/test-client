import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatComponent } from './components/chat/chat.component';
import { MenuComponent } from './components/menu/menu.component';
import { ChatDetailsComponent } from './components/chat-details/chat-details.component'

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PermissionPipe } from './pipes/permission.pipe';
import { ParticipantsComponent } from './components/participants/participants.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    MenuComponent,
    ChatDetailsComponent,
    LoginComponent,
    MainComponent,
    PermissionPipe,
    ParticipantsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
