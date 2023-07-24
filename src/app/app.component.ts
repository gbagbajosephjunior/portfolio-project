import { Component } from '@angular/core';
import { LoaderServiceService } from './loader-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Animated-Portfolio';

  showLoader$ = this.LoaderServiceService.loaderAction$;
  
  constructor(private LoaderServiceService: LoaderServiceService){}
  
}
