import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Product } from '../product';
import { AppService} from '../app.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {

 
 product: Product ={
   id: 0,
   name: '',
   title: '',
   description: '',
   price: ''
 };
 

  constructor(public httpClient:HttpClient,private AppService:AppService){
    
  };
  getAllProducts(): void {
    this.product = this.AppService.getAllProducts();
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

}
