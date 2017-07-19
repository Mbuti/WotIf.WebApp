import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Components
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { IndividualDashboardComponent } from './components/individuals/individual-dashboard.component';
import { CreateIndividualComponent } from './components/individuals/create-individual/create-individual.component';
import { EditIndividualComponent } from './components/individuals/edit-individual/edit-individual.component';
import { GeneralComponent } from './components/general/general.component';
import { ParticipantsComponent } from './components/participants/participants.component';
import { TalentsComponent } from './components/talents/talents.component';
import { SurveysComponent } from './components/surveys/surveys.component';
import { CreateSurveyComponent } from './components/surveys/create-survey.component';
import { AdminComponent } from './components/admin/admin.component';
import { DeleteIndividualComponent } from './components/individuals/delete-individual/delete-individual.component';
import { SearchIndividualComponent } from './components/individuals/search-individual/search-individual.component';

// Services
import { AuthGuardService } from './core';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'login/:redirectUrl', component: LoginComponent },
    { path: 'individual-dashboard', component: IndividualDashboardComponent, canActivate: [AuthGuardService] },
    { path: 'individual-create', component: CreateIndividualComponent, canActivate: [AuthGuardService] },
    { path: 'search-individual', component: SearchIndividualComponent, canActivate: [AuthGuardService] },
    { path: 'individual-edit/:id', component: EditIndividualComponent, canActivate: [AuthGuardService],/* resolve: { member: 'member'}*/ },
    { path: 'general', component: GeneralComponent, canActivate: [AuthGuardService] },
    { path: 'participants', component: ParticipantsComponent, canActivate: [AuthGuardService] },
    { path: 'talents', component: TalentsComponent, canActivate: [AuthGuardService] },
    { path: 'surveys', component: SurveysComponent, canActivate: [AuthGuardService] },
    { path: 'survey-create', component: CreateSurveyComponent, canActivate: [AuthGuardService] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] },
    { path: 'deleteindividual/:id', component: DeleteIndividualComponent, canActivate: [AuthGuardService] },
    { path: '**', component: HomeComponent, canActivate: [AuthGuardService] }    
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
