import { ApplicationRef, ChangeDetectorRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { QualificationComponent } from './components/qualification/qualification.component';
import { ServicesComponent } from './components/meservices/services.component';
import { ProjectInMindComponent } from './components/project-in-mind/project-in-mind.component';

import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { FooterComponent } from './components/footer/footer.component';
import { InterceptorService } from './services/interceptor.service';
import { SkillsBackendComponent } from './components/skills-backend/skills-backend.component';

import { SkillsFrontendComponent } from './components/skills-frontend/skills.component';
import { QualificationworkComponent } from './components/qualificationwork/qualificationwork.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component'; 
import { LoadingServiceService } from './services/loading-service.service';






@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    LoginPageComponent,
    CarouselComponent,
    AboutmeComponent,
    SkillsBackendComponent,
    QualificationComponent,
    ServicesComponent,
    ProjectInMindComponent,
    ContactMeComponent,
    FooterComponent,
    SkillsBackendComponent,
    SkillsFrontendComponent,
    QualificationworkComponent,
    NotFoundPageComponent,
    LoadingPageComponent,
    



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule


  ],
  providers: [
    {provide: ChangeDetectorRef, useClass: ApplicationRef},
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
    LoadingServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
