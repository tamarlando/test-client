import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ParticipantsComponent } from './components/participants/participants.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'chat/:chatId', component: MainComponent,
    children:[
      { path: 'participants', component: ParticipantsComponent},
      //   { path: 'details', component: DeatialsChatComponent},
      //   { path: 'manager', component: ManagerComponent},
      //   { path: 'settings', component: SettingsComponent},
      { path: '', component: ParticipantsComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
