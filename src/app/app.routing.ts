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
        , loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about'
        , data: {title: 'About' }
        , loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'resume'
        , data: {title: 'Resume' }
        , loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
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
        , loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about'
        , data: { title: 'About' }
        , loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'resume'
        , data: { title: 'Resume' }
        , loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule)
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
