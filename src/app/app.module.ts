import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ColorDirective } from './color.directive';
import { FormsModule } from '@angular/forms';
import { ServiceWrapComponent } from './service-wrap/service-wrap.component';
import { PhotoChangerComponent } from './photo-changer/photo-changer.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ShowPostsComponent,
    ColorDirective,
    ServiceWrapComponent,
    PhotoChangerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
