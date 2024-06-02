import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  photo1: boolean = false;
  photo2: boolean = true;

  show(){
    if (this.photo1){
      this.photo1 = false;
      this.photo2 = true;
    }
    else{
      this.photo1 = true;
      this.photo2 = false;
    }
  }
}
