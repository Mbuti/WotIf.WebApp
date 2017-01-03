import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { provideAuth, AUTH_PROVIDERS } from "angular2-jwt";
 import { Ng2AutoCompleteModule } from 'ng2-auto-complete';


// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthProxyService } from './services/auth-proxy.service';
import {MemberProxyService} from './services/member-proxy.service';

// Components
import { NavComponent } from './nav/nav.component';
import { IndividualDashboardComponent } from './individuals/individual-dashboard.component';
import { CreateIndividualComponent } from './individuals/create-individual.component';
import { EditIndividualComponent } from './individuals/edit-individual.component' ;
import { GeneralComponent } from './general/general.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TalentsComponent } from './talents/talents.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AdminComponent } from './admin/admin.component';
import { QuestionCreateToggleComponent } from './surveys/question-create-toggle.component';
import { DynamicQuestionComponent } from './surveys/dynamic-question.component';
import { CreateSurveyComponent } from './surveys/create-survey.component';
import {DeleteindividualComponent} from './individuals/deleteindividual.component';
import { Ng2CompleterModule } from "ng2-completer";


@NgModule({
  declarations: [
    AppComponent,
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
    DynamicQuestionComponent,
    CreateSurveyComponent,
    DeleteindividualComponent,
   
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    Ng2AutoCompleteModule
  ],
  providers: [
    provideAuth({
      headerName: "Authorization",
      headerPrefix: "Bearer",
      tokenName: "id_token",
      tokenGetter: (() => localStorage.getItem("id_token")),
      globalHeaders: [{ 'Content-Type': "application/json" }],
      noJwtError: false,
      noTokenScheme: false
    }),
    AuthService, AuthGuardService, AuthProxyService,MemberProxyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
