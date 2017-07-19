import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Services
import { AuthService, AuthProxyService, AuthGuardService } from './services';

// Components
import { ContainerComponent, NavComponent, FooterComponent } from './components';

@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    ContainerComponent,
    NavComponent,
    FooterComponent
  ],
  providers: [
    AuthService,
    AuthProxyService,
    AuthGuardService
  ],
  exports: [
    ContainerComponent,
    NavComponent,
    FooterComponent
  ]
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
 }
