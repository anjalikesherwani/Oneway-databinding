import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one-way-databinging';
  uname='anjali';
  ucolor='red';
  apply="a b c d";
  iname="Anjali Kesherwani"

  but(val:any){
    this.iname=val
    console.log(val)
    // alert('hello')
  };
}
