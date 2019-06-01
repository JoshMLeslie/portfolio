import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
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
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
