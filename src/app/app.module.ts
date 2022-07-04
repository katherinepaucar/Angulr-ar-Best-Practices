import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent }  from './app.component';
import { NavBarComponent }  from './nav-bar.component';

import { RegisterComponent } from "./components/sign-in.component";
import { SignInComponent } from "./components/sign-in.component";
import { LoadingComponent } from "./components/loading-spinner.component";
import { DataRepositoryService } from "./services/data-repository"
import { AccountMenuComponent } from "./account-menu.component";
import { CatalogComponent } from './catalog/catalog.component';


@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    NavBarComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingComponent,
    AccountMenuComponent
  ],
  providers: [ DataRepositoryService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
