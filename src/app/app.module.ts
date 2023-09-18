import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { ColorDirective } from './color.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWrapComponent } from './service-wrap/service-wrap.component';
import { PhotoChangerComponent } from './photo-changer/photo-changer.component';
import { FormsComponent } from './forms/forms/forms.component';
import { HttpClientComponent } from './http-client/http-client/http-client.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interseptor.service';

const INTERCEPTOR_PROVIDER : Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptorService,
  multi: true
}

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    ShowPostsComponent,
    ColorDirective,
    ServiceWrapComponent,
    PhotoChangerComponent,
    FormsComponent,
    HttpClientComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
