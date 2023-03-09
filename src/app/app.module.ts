import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentsComponent } from './components/contents/contents.component';
import { ɵparseCookieValue } from '@angular/common';
import { HttpClientModule, HttpClient ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {TabMenuModule} from 'primeng/tabmenu';
import { TokenIntercepterService } from './services/Auth/token-intercepter.service';
import { CookieService } from 'ngx-cookie-service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressSpinnerModule,
    TabMenuModule,
    ToastModule,
    CarouselModule,
    InputTextModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ToastModule,CookieService,{provide:HTTP_INTERCEPTORS,useClass:TokenIntercepterService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
