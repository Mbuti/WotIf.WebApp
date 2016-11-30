import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

// Components
import { NavComponent } from './nav/nav.component';
import { IndividualDashboardComponent } from './individuals/individual-dashboard.component';
import { CreateIndividualComponent } from './individuals/create-individual.component';
import { EditIndividualComponent } from './individuals/edit-individual.component';
import { GeneralComponent } from './general/general.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TalentsComponent } from './talents/talents.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AdminComponent } from './admin/admin.component';
import { QuestionCreateToggleComponent } from './surveys/question-create-toggle.component';

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
    QuestionCreateToggleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
