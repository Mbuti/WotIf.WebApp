import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { provideAuth, AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';

import * as jQuery from 'jquery';
import * as bootstrap from 'bootstrap';

import { CoreModule } from './core';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

// Services
import { MemberProxyService } from './services/member-proxy.service';

// Components

import { IndividualDashboardComponent } from './components';
import { CreateIndividualComponent } from './components';
import { EditIndividualComponent } from './components';

import { GeneralComponent } from './components';
import { ParticipantsComponent } from './components';
import { TalentsComponent } from './components';
import { SurveysComponent } from './components';
import { AdminComponent } from './components';
import { QuestionCreateToggleComponent } from './components';
import { TalentCreateToggleComponent } from './components';
import { ParticipantCreateToggleComponent } from './components';
import { DynamicTalentComponent } from './components';
import { DynamicQuestionComponent } from './components';
import { DynamicParticipantComponent } from './components';
import { CreateSurveyComponent } from './components';
import { DeleteIndividualComponent } from './components';
import { SearchIndividualComponent } from './components'

// Pipes
import { NationalityEnumFilterPipe } from './pipes';
import { RaceEnumFilterPipe } from './pipes';
import { GenderEnumFilterPipe } from './pipes';


// AuthHttp should be used instead of Http when endpoints have authorization added to them.
// This will greatly reduce code repetition and will make your life a lot easier when sending
// tokens to endpoints.
// https://github.com/auth0/angular2-jwt
export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    headerName: "Authorization",
    headerPrefix: "Bearer",
    tokenName: "id_token",
    tokenGetter: (() => localStorage.getItem("id_token")),
    globalHeaders: [{ 'Content-Type': "application/json" }],
    noJwtError: false,
    noTokenScheme: false
  }), http, options);
}

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2AutoCompleteModule,
    AppRoutingModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    IndividualDashboardComponent,
    CreateIndividualComponent,
    EditIndividualComponent,
    GeneralComponent,
    ParticipantsComponent,
    TalentsComponent,
    SurveysComponent,
    AdminComponent,
    QuestionCreateToggleComponent,
    TalentCreateToggleComponent,
    ParticipantCreateToggleComponent,
    DynamicTalentComponent,
    DynamicQuestionComponent,
    DynamicParticipantComponent,
    CreateSurveyComponent,
    DeleteIndividualComponent,
    RaceEnumFilterPipe,
    NationalityEnumFilterPipe,
    GenderEnumFilterPipe,
    SearchIndividualComponent,
    LoginComponent
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    MemberProxyService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
