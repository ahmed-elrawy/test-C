import { Component } from '@angular/core';
import { AppService } from './@core/services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Currency-Exchanger';

  constructor(private service:AppService) {

  }
  
  // ngOnInit(): void {
  //  this.service.Latest() .subscribe(res => {
  //   console.log(res)
  //   console.log(Object.keys(res.rates) )
  // })
  // }
}
