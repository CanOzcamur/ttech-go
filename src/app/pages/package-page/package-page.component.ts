import { Component, OnInit } from '@angular/core';
import { PackagePageService } from './package-page.service';
import { Product } from 'src/app/classes/product';
import { Package } from 'src/app/classes/package';
import { Checkout } from 'src/app/classes/checkout';
import { CheckoutDataService } from 'src/app/data/checkout-data.service';

@Component({
  selector: 'app-package-page',
  templateUrl: './package-page.component.html',
  styleUrls: ['./package-page.component.css']
})
export class PackagePageComponent implements OnInit {

  cards :any;
  slides: any = [[]];

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  phoneNumber: string;
  products: Product;
  packages: Package[];
  yedekPaket:Package[];
  checkout: Checkout = {
    packages: []
  };
  flag: boolean;

  constructor(private packagePageService: PackagePageService, private checkoutDataService: CheckoutDataService) { }

  ngOnInit() {
    
 
   
    this.checkoutDataService.currentMessage.subscribe(message => this.checkout = message);
   
    if (this.checkout === null) {
      this.checkout = {
        packages: []
      };
    }

    this.phoneNumber = localStorage.getItem("phoneNumber")
    this.packagePageService.getProduct(this.phoneNumber).subscribe(data => {
     
      this.products = data as Product;
      this.packages = this.products.data.packages;

      this.yedekPaket = this.products.data.packages;
      for(let i=0;i<this.yedekPaket.length;i++){
          this.yedekPaket[i]["img"]=this.randomImgUrl(this.yedekPaket[i].name);
      }



      // paket sayisinin 3ün kati olmadığı durumlarda (ornegin 8) 
      // 3 3 2 product gorunecektir. daha efektif bir goruntu sağlamak adina 
      // card sayisi 3 e tamamlandi.fazladan eklenen product rastgele secildi.
      
      this.cards=this.yedekPaket;
      let modCardCount=this.yedekPaket.length%3;
      if(modCardCount!=0){
        let copyCount=3-modCardCount;
        for(let i=1;i<=copyCount;i++){
          let num=Math.floor(Math.random() * this.yedekPaket.length);
          this.cards.push(this.yedekPaket[num]);
        }
      }


    
      this.slides = this.chunk(this.cards, 3);
      

      localStorage.setItem("products", JSON.stringify(this.products));
    });

   

  }

  addToCheckout(newPackage: any) {
 
  
    this.flag = true;
    let paket:Package;
   

    //sepete eklenen data alindi.
    paket=newPackage;

    if (this.checkout.packages.length == 0) {
      this.checkout.packages.push(paket);
    } else {
      this.checkout.packages.forEach((element) => {
        if (element.id == paket.id) {
          this.flag = false;
        }
      });

      if (this.flag == true) {
        this.checkout.packages.push(paket);
      }
    }
    this.checkoutDataService.changeMessage(this.checkout);
  }

  randomImgUrl(a:string){
    let ImgList=[
      {
        name:"platinum",
        link:[
          "https://foto.haberler.com/haber/2017/05/27/turkcell-platinum-musterilerine-ozel-firsatlar-9664732_6690_amp.jpg",
          "https://foto.haberler.com/haber/2017/05/27/turkcell-platinum-musterilerine-ozel-firsatlar-9664732_6690_amp.jpg"
    
          ]
    },
    {
      name:"bip",
      link:[
        "https://www.technopat.net/wp-content/uploads/2019/06/turkcell.jpg",
        "https://www.technopat.net/wp-content/uploads/2019/06/turkcell.jpg",
        ]
    },
    {
      name:"tv+",
      link:[
        "https://cdn.iha.com.tr/Contents/images/2017/35/2156641.jpg",
        "https://eventoftech.com/wp-content/uploads/2020/01/tv-plus.jpg"

      
        ]
    },
    {
      name:"fizy",
      link:[
        "https://i.ytimg.com/vi/IlPg5-8mOLI/maxresdefault.jpg",
        "https://i2.milimaj.com/i/milliyet/75/0x410/5ca1cef545d2a029641d2d24.jpg"
        ]
    }
    ,
    {
      name:"dergilik",
      link:[
        "https://s2.turkcell.com.tr/SiteAssets/Bireysel/Kampanya/render/gorseller/Dergilik-1GB-Kampanya-Gorseli.jpg",
        "https://www.mobil13.com/wp-content/uploads/2019/07/Turkcell-Dergilik.jpg"
        ]
    }
    ,
    {
      name:"lifebox",
      link:[
        "https://www.teknotalk.com/wp-content/uploads/2016/11/lifebox.jpg",
        "https://www.teknotalk.com/wp-content/uploads/2016/11/lifebox.jpg"
        ]
    }
    ,
    {
      name:"gollercepte",
      link:[
        "https://turk-internet.com/wp-content/uploads/2019/05/goller-cepte-turkcell-ticom.jpg",
        "https://turk-internet.com/wp-content/uploads/2019/05/goller-cepte-turkcell-ticom.jpg"
        ]
    }


  ];
   let num=Math.floor(Math.random() * 2);
   for(let i=0;i<ImgList.length;i++){
    if(ImgList[i].name==a){
      return ImgList[i].link[num];
    }
   }
  }
  
}
