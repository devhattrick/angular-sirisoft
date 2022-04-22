import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
// import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
// import { ServerComponent } from './server/server.component';
// import { ServersComponent } from './servers/servers.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { Assignment3Component } from './assignment3/assignment3.component';


//* Container ของ component & service
@NgModule({
  declarations: [ //* เรียกใช้ components
    AppComponent, SuccessAlertComponent,WarningAlertComponent, Assignment3Component
    // ServerComponent,
    // ServersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
