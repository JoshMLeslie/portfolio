import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'web'
    , children: [
      {
        path: 'home'
        , data: {title: 'Home' }
        , loadChildren: () => import('./split-screen/web/home/web-home.module').then(m => m.WebHomeModule)
      },
      {
        path: 'about'
        , data: {title: 'About' }
        , loadChildren: () => import('./shared/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'resume'
        , data: {title: 'Resume' }
        , loadChildren: () => import('./shared/resume/resume.module').then(m => m.ResumeModule)
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      }
    ]
  },
  {
    path: 'industrial'
    , children: [
      {
        path: 'home'
        , data: { title: 'Home' }
        , loadChildren: () => import('./split-screen/industrial/home/industrial-home.module').then(m => m.IndustrialHomeModule)
      },
      {
        path: 'about'
        , data: { title: 'About' }
        , loadChildren: () => import('./shared/about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'resume'
        , data: { title: 'Resume' }
        , loadChildren: () => import('./shared/resume/resume.module').then(m => m.ResumeModule)
      },
      {
        path: '', pathMatch: 'full', redirectTo: 'home'
      }
    ]
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
