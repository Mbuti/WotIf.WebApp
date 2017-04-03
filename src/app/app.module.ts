import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { provideAuth, AUTH_PROVIDERS } from "angular2-jwt";
import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Ng2CompleterModule } from "ng2-completer";
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

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
import { NavComponent } from './nav/nav.component';
import { IndividualDashboardComponent } from './individuals/individual-dashboard.component';
import { CreateIndividualComponent } from './individuals/create-individual/create-individual.component';
import { EditIndividualComponent } from './individuals/edit-individual/edit-individual.component';

import { GeneralComponent } from './general/general.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TalentsComponent } from './talents/talents.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AdminComponent } from './admin/admin.component';
import { QuestionCreateToggleComponent } from './surveys/question-create-toggle.component';
import { TalentCreateToggleComponent } from './individuals/individual talent/talent-create-toggle.component';
import { DynamicTalentComponent } from './individuals/individual talent/dynamic-talent.component';
import { DynamicQuestionComponent } from './surveys/dynamic-question.component';
import { CreateSurveyComponent } from './surveys/create-survey.component';
import { DeleteindividualComponent } from './individuals/delete-individual/deleteindividual.component';
import { SearchIndividualComponent } from './individuals/search-individual/search-individual.component'

// Pipes
import { NationalityEnumFilterPipe } from './pipes/nationality-enum-filter.pipe';
import { RaceEnumFilterPipe } from './pipes/race-enum-filter.pipe';
import { GenderEnumFilterPipe } from './pipes/gender-enum-filter.pipe';
import { FooterComponent } from './footer/footer.component';


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
    DynamicTalentComponent,
    DynamicQuestionComponent,
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
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Ng2CompleterModule,
    Ng2AutoCompleteModule,
    BrowserModule, 
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
