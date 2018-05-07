import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { ActivatedRoute, Params } from '@angular/router';
import { DataRetrivalService } from '../../services/data-retrival.service';

@Component({
  selector: 'app-cards-details',
  templateUrl: './cards-details.component.html',
  styleUrls: ['./cards-details.component.css']
})
export class CardsDetailsComponent implements OnInit {
  errorMessage: any;
  cardsData:Data[];
  perCardData:Data;

  constructor(private routeService:ActivatedRoute, private dataRetrivalService:DataRetrivalService ) { }

  ngOnInit() {

this.routeService.params.forEach((param:Params)=>{

  this.dataRetrivalService.getProducts()
  .subscribe(data => {
      this.cardsData = data;
      this.perCardData=this.cardsData.find(selectedCard=>selectedCard._id==param.id)

     // console.log(this.perCardData);
          },
      error => this.errorMessage = <any>error);

});

   
  }

}
