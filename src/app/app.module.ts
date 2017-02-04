// Global
import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';
import { RouterModule }   from '@angular/router';
import { FormsModule }    from '@angular/forms';
import { AUTH_PROVIDERS } from 'angular2-jwt';

// Components
import { AppComponent }       from './components/app.component';
import { MainComponent }      from './components/main.component';
import { PrimitiveComponent } from './pages/verb.page';

// Pages
import { HomePage }         from './pages/home.page';
import { NounsPage }        from './pages/nouns.page';
import { AdjectivesPage }   from './pages/adjectives.page';
import { VerbsPage }        from './pages/verbs.page';
import { VerbPage }         from './pages/verb.page';

// Forms
import { AddNounForm }      from './forms/add-noun.form';
import { AddAdjectiveForm } from './forms/add-adjective.form';
import { LoginForm }        from './forms/login.form';

// Services
import { HttpService }        from './services/http.service';
import { NounsService }       from './services/nouns.service';
import { AdjectivesService }  from './services/adjectives.service';
import { VerbsService }       from './services/verbs.service';
import { TokenService }       from './services/token.service'; 
import { UtilsService }       from './services/utils.service'; 

@NgModule({
  imports:      [ 
    BrowserModule, 
    MaterialModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: MainComponent, 
        children: 
        [
          { path: '', component: HomePage },
          { path: 'nouns', component: NounsPage },
          { path: 'adjectives', component: AdjectivesPage },
          { path: 'verbs', component: VerbsPage },
          { path: 'verb/:id', component: VerbPage }
        ]
      },
      { path: 'login',  component: LoginForm }
    ], { useHash: true}),
    FormsModule
  ],
  providers: [
    AUTH_PROVIDERS,
    HttpService,
    NounsService,
    AdjectivesService,
    VerbsService,
    TokenService,
    UtilsService
  ],
  declarations: [ 
    // Components
    AppComponent, 
    MainComponent, 
    PrimitiveComponent,

    // Pages
    HomePage,
    NounsPage,
    AdjectivesPage,
    VerbsPage,
    VerbPage,

    // Forms
    AddNounForm,
    AddAdjectiveForm,
    LoginForm
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }