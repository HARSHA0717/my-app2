import { Component } from '@angular/core';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  products:any=[
    {name:'pen', Price: 100 , Rating: 4, Freedelivery: 'true'},
    {name:'pencil', Price: 10 , Rating: 4.5, Freedelivery: 'false'},
    {name:'Iphone', Price: 80000 , Rating: 5, Freedelivery: 'true'},
    {name:'Shirt', Price: 3500 , Rating: 4.3, Freedelivery: 'false'},
    {name:'mobilecase', Price: 199 , Rating: 3, Freedelivery: 'false'},
    {name:'remote', Price: 700 , Rating: 3.5, Freedelivery: 'true'},
    {name:'watch', Price: 8000 , Rating: 5, Freedelivery: 'true'},

  ];
  delete(i:number){
    this.products.splice(i,1);
  }

  searchText:string="";
  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.searchText));
  }
  freeDel(){
    this.products=this.products.filter((product:any)=>product.Freedelivery=='true');

  }
  charge(){
    this.products=this.products.map((product:any)=>{
      product.Price=product.Price+40;
      return product;
    })
  }

  costh1(){
   this.products.sort((a:any,b:any)=>b.Price - a.Price);
  }

  cost1h(){
    this.products.sort((a:any,b:any)=>a.Price - b.Price);
   }
   rat1(){
    this.products.sort((a:any,b:any)=>b.Rating - a.Rating);
   }
   rat2(){
    this.products.sort((a:any,b:any)=>a.Rating - b.Rating);
   }
   discount(){
    this.products=this.products.map((product:any)=>{
      product.Price=product.Price*0.5;
      return product;
    })
   }
   total(){
    let total=this.products.reduce((sum:any,product:any)=>sum+product.Price,0);
    alert(total);
   }

   cart(){
    alert(this.products.length);
   }

   name:string="";
   Price:number=0;
   Rating:number=0;
   Freedelivery:string="true";
    
   add(){
    let product={
      name:this.name,
      Price:this.Price,
      Rating:this.Rating,
      Freedelivery:this.Freedelivery

    }
    this.products.unshift(product);
   }


}
