import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1: string=""
  value2: string=""
  result: number=0
  opeartor=""
  eq_opr=""
  constructor() { }
  ngOnInit(): void {
  }
  getValue1($event: any) {
    this.value1 = $event.target.value
  }
  getValue2($event: any) {
    this.value2 = $event.target.value
  }
  setValue(num:string){
   if(this.opeartor==""){
     this.value1=num
   }else{
     this.value2=num
   }
  }
 setOperator(opr:string){
  if(opr=="="){
   this.eq_opr=opr
   if(this.opeartor=='+'){
     this.result=parseInt(this.value2)+parseInt(this.value1)
   }
   if(this.opeartor=='-'){
    this.result=parseInt(this.value1)-parseInt(this.value2)
  }
    // switch(this.opeartor){
    //   case '+':{
    //     this.result=parseInt(this.value2)+parseInt(this.value1)
    //     break
    //   }
   // }
  }
  else{
    this.opeartor=opr
  }
   console.log(this.opeartor)
}

  add() {
    this.result = parseInt(this.value1) + parseInt(this.value2)
  }
}
