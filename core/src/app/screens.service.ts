import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ScreensService {

  private screenWidth = new BehaviorSubject<number>(window.innerWidth);

  constructor() {
    window.addEventListener('resize', this.onResize.bind(this));
   }

   //Méthod pour récupérer la largeur actuelle
   getScreenWidth(){
    return this.screenWidth.asObservable();
   }
   //Méthod appelée lors du redimensionnement

   private onResize(){
    this.screenWidth.next(window.innerWidth)
   }
}
