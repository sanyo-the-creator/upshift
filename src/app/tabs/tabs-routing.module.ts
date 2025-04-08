import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import {SignupPage} from "../signup/signup.page";

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'signup',
    component: SignupPage,
    children: [
      {
        path: '',
        redirectTo: 'signup',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
