import { Component, OnInit } from '@angular/core';
import { MyProduct } from '../myproduct/myproduct';
import { MyproductService } from '../myproduct/myproduct.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number;
  prd:MyProduct;
  constructor(private route: ActivatedRoute, private service:MyproductService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.prd=new MyProduct();
    this.id=this.route.snapshot.params['id'];
  
    this.service.searchProduct(this.id).subscribe(
      data=>{
        console.log(data)
        this.prd=data;
      },
      error=>console.log(error)
    );
  }

  list(){
    this.router.navigate(['product']);
  }
}
