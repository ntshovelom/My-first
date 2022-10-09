import { Component } from '@angular/core';
import { AppService} from './app.service';
import { Product} from './product';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'My-first';
  name='Products';
  product: Product ={
    id: 0,
    name: '',
    title: '',
    description: '',
    price: ''
  };

  constructor(public AppService: AppService, public HttpClient:HttpClient){

  }

  getAllProducts(): void {
    this.product = this.AppService.getAllProducts();
  }
  ngOnInit(): void {
    this.getAllProducts();
  }

}
