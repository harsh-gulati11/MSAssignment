import { Component, OnInit, TemplateRef } from '@angular/core';
import { Data } from '../../services/data';
import { DataRetrivalService } from '../../services/data-retrival.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  modalRef: BsModalRef;
  nonFavoriteArray: any;
  favoritesArray: any;
  favoriteCount: any;
  cardsData:Data[];
  errorMessage:string;
  heading1:string="Detail view";
  heading2:string="Sub Detail view"
  constructor(private dataRetrivalService:DataRetrivalService ,private bsModelService: BsModalService , private routingService:Router) { }

  ngOnInit() {
    this.dataRetrivalService.getProducts()
    .subscribe(data => {
        this.cardsData = data;
            },
        error => this.errorMessage = <any>error);
  }
  public addToFavourite(data: Data){

    for(let cardDetail of this.cardsData){
      if(data._id === cardDetail._id){
        if(data.isFavourite){
          cardDetail.isFavourite = false;
         
        } else {
          cardDetail.isFavourite = true;
        
        }

      }
    }
}
public showPopup(template: TemplateRef<any>) {
  
  this.modalRef = this.bsModelService.show(template);
}
/**
 * showDetails
 */
public showDetails(cardId:string) {
  this.routingService.navigate(['/PortfolioDetails',cardId])
}
}
