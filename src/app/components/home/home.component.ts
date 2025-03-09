import {Component} from '@angular/core';
import {LogoComponent} from '../logo/logo.component';
import {ColorfulAppNameComponent} from '../colorful-app-name/colorful-app-name.component';

@Component({
  selector: 'app-home',
  imports: [
    LogoComponent,
    ColorfulAppNameComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
