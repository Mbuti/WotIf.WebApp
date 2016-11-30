import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { IndividualDashboardComponent } from './individuals/individual-dashboard.component';
import { CreateIndividualComponent } from './individuals/create-individual.component';
import { EditIndividualComponent } from './individuals/edit-individual.component';
import { GeneralComponent } from './general/general.component';
import { ParticipantsComponent } from './participants/participants.component';
import { TalentsComponent } from './talents/talents.component';
import { SurveysComponent } from './surveys/surveys.component';
import { AdminComponent } from './admin/admin.component';

// Services
import { AuthGuardService } from './services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'login/:redirectUrl', component: LoginComponent },
    { path: 'individual-dashboard', component: IndividualDashboardComponent, canActivate: [AuthGuardService] },
    { path: 'individual-create', component: CreateIndividualComponent, canActivate: [AuthGuardService] },
    { path: 'individual-edit/:id', component: CreateIndividualComponent, canActivate: [AuthGuardService] },
    { path: 'general', component: GeneralComponent, canActivate: [AuthGuardService] },
    { path: 'participants', component: ParticipantsComponent, canActivate: [AuthGuardService] },
    { path: 'talents', component: TalentsComponent, canActivate: [AuthGuardService] },
    { path: 'surveys', component: SurveysComponent, canActivate: [AuthGuardService] },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService] }
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