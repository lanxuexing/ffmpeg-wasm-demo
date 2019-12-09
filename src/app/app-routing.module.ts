import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoToPictureComponent } from './video-to-picture/video-to-picture.component';


const routes: Routes = [
  { path: 'video-to-picture', component: VideoToPictureComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
