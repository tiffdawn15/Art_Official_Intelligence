import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BuilderModule } from '@builder.io/angular';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    LandingPageComponent,
    PageNotFoundComponent,
    FooterComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    BuilderModule.forRoot('46169a9559584965ab011075ec6d4a9b'),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
