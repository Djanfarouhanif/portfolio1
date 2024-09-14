import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScreensService } from '../screens.service';
import { AboutComponent } from '../about/about.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent ,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ ScreensService]
})
export class HomeComponent implements OnInit {
  
  navbarOpen = true;
  constructor( ){}

  ngOnInit(): void {
    //Souscrire à a la taille de l'écran via le service
   

   
  }
  toggleNavbar(){
    this.navbarOpen = !this.navbarOpen;
    
  };
  
}
