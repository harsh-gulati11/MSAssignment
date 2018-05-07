import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BootstrapCssModule} from './app-bootstrapcss.module';
import { CardsComponent } from './components/cards/cards.component';
import { CardsDetailsComponent } from './components/cards-details/cards-details.component';
import { DataRetrivalService}  from './services/data-retrival.service';
import { HeaderComponent } from './components/shared/header/header.component';
import { RoutingAppModule } from './routing-app.module';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardsDetailsComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,BootstrapCssModule,HttpClientModule,RoutingAppModule
   
  ],
 
  providers: [DataRetrivalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
