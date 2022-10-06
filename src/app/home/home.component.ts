import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: any;
  task = [
    {
      "Orderdate": "22-Jun-20",
      "Ordernumber": 3000035091,
      "Orderplacedby": "Syed(shopper)",
      "NumberofProduct": 4,
      "ProductDetails": "Azelique Serumdipity, 1fl oz(30ml)",
      "Totalvalueorder": 1245,
      "Supplier": "Supplier 2",
      "Dateandtimeoflastaction": "22-Jun-20 13:20:10",
      "Comment": "Requested product from Health entity123",
      "Status": "Waiting for hospital approval",
      color: 'rgb(131, 191, 169)'

    },
    {
      "Orderdate": "21-Jun-20",
      "Ordernumber": 3000035092,
      "Orderplacedby": "Shopper 1",
      "NumberofProduct": 3,
      "ProductDetails": "Azelique Serumdipity, 1fl oz(30ml)",
      "Totalvalueorder": 2224,
      "Supplier": "Supplier 1",
      "Dateandtimeoflastaction": "22-Jun-20 13:20:10",
      "Comment": "Requested product from Health entity123",
      "Status": "Waiting for hospital purchase order",
      color: 'rgb(131, 191, 169)'

    },

    {
      "Orderdate": "19-Jun-20",
      "Ordernumber": 3000053094,
      "Orderplacedby": "Syed(shopper)",
      "NumberofProduct": 1,
      "ProductDetails": "Azelique Serumdipity, 1fl oz(30ml)",
      "Totalvalueorder": 476,
      "Supplier": "Supplier 3",
      "Dateandtimeoflastaction": "21-Jun-20 13:20:10",
      "Comment": "Order accepted by  supplier",
      "Status": "Waiting for hospital approval",
      color: 'rgb(126, 245, 71)'
    },
    {
      "Orderdate": "15-Jun-20",
      "Ordernumber": 3000035222,
      "Orderplacedby": "Shopper 3",
      "NumberofProduct": 5,
      "ProductDetails": "Azelique Serumdipity, 1fl oz(30ml)",
      "Totalvalueorder": 360,
      "Supplier": "Supplier 4",
      "Dateandtimeoflastaction": "17-Jun-20 12:10:40",
      "Comment": "Requested product from Health entity123",
      "Status": "Waiting for hospital purchase order",
      color: 'rgb(126, 245, 71)'


    },
    {
      "Orderdate": "22-Jun-20",
      "Ordernumber": 300003501,
      "Orderplacedby": "Syed(shopper)",
      "NumberofProduct": 4,
      "ProductDetails": "Azelique Serumdipity, 1fl oz(30ml)",
      "Totalvalueorder": 1245,
      "Supplier": "Supplier 5",
      "Dateandtimeoflastaction": "22-Jun-20 13:20:10",
      "Comment": "Requested product from Health entity123",
      "Status": "Waiting for hospital approval",
      color: 'rgb(236, 236, 105)'


    },
    {
      "Orderdate": "22-Jun-20",
      "Ordernumber": 3000035011,
      "Orderplacedby": "Salem",
      "NumberofProduct": 4,
      "ProductDetails": "Azelique Serumdipity, 1fl oz(30ml)",
      "Totalvalueorder": 1245,
      "Supplier": "Supplier 6",
      "Dateandtimeoflastaction": "22-Jun-20 13:20:10",
      "Comment": "Order accepted by  supplier",
      "Status": "Waiting for hospital purchase order",
      color: 'rgb(236, 236, 105)'


    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
