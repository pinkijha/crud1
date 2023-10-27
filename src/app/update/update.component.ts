import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { datamodel } from '../list/model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  public dataid!: number;
  public employee!: datamodel;
  constructor(private activatedrout: ActivatedRoute,private router:Router,private api: ApiService){

  }
  ngOnInit():void{
this.activatedrout.paramMap.subscribe((param:Params)=>{
this.dataid=param['get']("id");
// console.log("dataid is",this.dataid);

})
this.api.fetchdata(this.dataid).subscribe((data:datamodel)=>{
this.employee=data;
})
  }
  update(){
    this.api.updateemployee(this.employee,this.dataid).subscribe((res:datamodel)=>{
      this.router.navigate(["/"]);
    })
  }
  delete(){
   
  }
}
