import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { provideAuth, AUTH_PROVIDERS, AuthHttp, AuthConfig } from 'angular2-jwt';
import * as jQuery from 'jquery';
import * as bootstrap from 'bootstrap';

import { SharedModule } from './shared';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthProxyService } from './services/auth-proxy.service';
import { MemberProxyService } from './services/member-proxy.service';

// Components
import { ContainerComponent } from './infrastructure';
import { NavComponent } from './infrastructure';
import { FooterComponent } from './infrastructure';

import { IndividualDashboardComponent } from './individuals/individual-dashboard.component';
import { CreateIndividualComponent } from './individuals/create-individual/create-individual.component';
import { EditIndividualComponent } from './individuals/edit-individual/edit-individual.component';

import { GeneralComponent } from './general/general.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TalentsComponent } from './talents/talents.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AdminComponent } from './admin/components/admin.component';
import { QuestionCreateToggleComponent } from './surveys/question-create-toggle.component';
import { TalentCreateToggleComponent } from './individuals/individual-talent/talent-create-toggle.component';
import { ParticipantCreateToggleComponent } from './individuals/individual-participant/participant-create-toggle.component';
import { DynamicTalentComponent } from './individuals/individual-talent/dynamic-talent.component';
import { DynamicQuestionComponent } from './surveys/dynamic-question.component';
import { DynamicParticipantComponent } from './individuals/individual-participant/dynamic-participant.component';
import { CreateSurveyComponent } from './surveys/create-survey.component';
import { DeleteindividualComponent } from './individuals/delete-individual/deleteindividual.component';
import { SearchIndividualComponent } from './individuals/search-individual/search-individual.component'

// Pipes
import { NationalityEnumFilterPipe } from './shared';
import { RaceEnumFilterPipe } from './shared';
import { GenderEnumFilterPipe } from './shared';


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
  declarations: [
    AppComponent,
    ContainerComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
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
    DeleteindividualComponent,
    RaceEnumFilterPipe,
    NationalityEnumFilterPipe,
    GenderEnumFilterPipe,
    FooterComponent,
    SearchIndividualComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2AutoCompleteModule,
    BrowserModule,
    SharedModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    },
    AuthService, AuthGuardService, AuthProxyService, MemberProxyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
