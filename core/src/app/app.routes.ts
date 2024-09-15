import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';


export const routes: Routes = [

    {path: "", redirectTo: "", pathMatch: 'full'},
    {path: "" , component : AppComponent},
    

];
