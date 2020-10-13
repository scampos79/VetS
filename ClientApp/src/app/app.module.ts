import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { ApiAuthorizationModule } from 'src/api-authorization/api-authorization.module';
import { AuthorizeGuard } from 'src/api-authorization/authorize.guard';
import { AuthorizeInterceptor } from 'src/api-authorization/authorize.interceptor';
import { MascotaFormComponent } from './mascota-form/mascota-form.component';
import { MascotaService } from '../services/mascota.service';
import { AppErrorHandler } from './app-error-handler';
import { MascotaListComponent } from './mascota-list/mascota-list.component';
import { PaginationComponent } from './shared/pagination.component';
import { ClienteService } from '../services/cliente.service';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { HistoriaClinicaComponent } from './historia-clinica/historia-clinica.component';
import { HistoriaClinicaService } from '../services/historiaClinica.service';
import { HistoriaClinicaSearchComponent } from './historia-clinica-search/historia-clinica-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteFormComponent,
    ClienteListComponent,
    HistoriaClinicaComponent,
    HistoriaClinicaSearchComponent,
    NavMenuComponent,
    HomeComponent,
    MascotaFormComponent,
    MascotaListComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    CKEditorModule,
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'mascotas', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'clientes', component: ClienteListComponent},
      { path: 'clientes/new', component: ClienteFormComponent},
      { path: 'clientes/:id', component: ClienteFormComponent },
      { path: 'historias', component: HistoriaClinicaComponent },
      { path: 'busquedas', component: HistoriaClinicaSearchComponent },
      { path: 'mascotas', component: MascotaListComponent },
      { path: 'mascotas/new', component: MascotaFormComponent },
      { path: 'mascotas/:id', component: MascotaFormComponent },
    ]),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      closeButton: true,
      positionClass: 'toast-top-right'
    }), 
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    MascotaService,
    ClienteService,
    HistoriaClinicaService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
