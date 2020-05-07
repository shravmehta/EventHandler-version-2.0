import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConnectionsComponent } from './connections/connections.component';
import { ConnectionComponent } from './connection/connection.component';
import { LoginComponent } from './login/login.component';
import { SavedconnectionsComponent } from './savedconnections/savedconnections.component';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { RegisterComponent } from './register/register.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import {ContactComponent} from './contact/contact.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'connections', component: ConnectionsComponent },
  { path: 'connection/:id', component: ConnectionComponent },
  { path: 'savedconnections', component: SavedconnectionsComponent},
  { path: 'newconnection', component: NewconnectionComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'seat-selection', component: SeatSelectionComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
