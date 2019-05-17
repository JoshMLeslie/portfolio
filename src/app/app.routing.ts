import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'home'
    , data: {title: 'Home' }
    , loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about'
    , data: {title: 'About' }
    , loadChildren: './about/about.module#AboutModule'
  },
  {
    path: 'resume'
    , data: {title: 'Resume' }
    , loadChildren: './resume/resume.module#ResumeModule'
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
