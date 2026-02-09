import { Routes } from '@angular/router';
import { Chat } from './chat/chat';
import { Welcome } from './welcome/welcome';
import { JoinRoom } from './join-room/join-room';


export const routes: Routes = [
  {path: '', redirectTo: 'join-room', pathMatch: 'full'},
  {path: 'join-room', component: JoinRoom},
  {path: 'welcome', component: Welcome},
  {path: 'chat', component: Chat}
];
