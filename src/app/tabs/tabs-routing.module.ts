import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [

    ]
  },
  {
    path: 'signup',
    children: [
      {
        path: '',
        loadChildren: () => import('../signup/signup.module').then(m => m.SignupPageModule)
      }
    ]
  },
  {
    path: 'onboarding',
    children: [
      {
        path: '',
        loadChildren: () => import('../onboarding/onboarding.module').then(m => m.OnboardingPageModule)
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
