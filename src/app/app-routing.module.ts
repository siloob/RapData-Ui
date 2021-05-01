import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DocumentationComponent} from './documentation/documentation.component';
import { TarifComponent } from './tarif/tarif.component';
import { ContactComponent } from './contact/contact.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'documentation', component: DocumentationComponent },
  { path: 'pricies', component: TarifComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
