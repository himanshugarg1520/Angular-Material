import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-angularmaterial',
  templateUrl: './angularmaterial.component.html',
  styleUrls: ['./angularmaterial.component.css']
})

export class AngularmaterialComponent implements OnInit {

  // Click Button Example
  onclick(){
    console.log("Button Cicked")
  }

  SelectedFood: string;

  foods = [
    {value:"pizza-1", viewvalue:"Pizza"},
    {value:"burger-2",viewvalue:"Burger"},
    {value:"momos-3",viewvalue:"Momos"},
  ]

  // Another Example

  Places = [
    {value:"Swizerland-1", viewvalue:"Swizerland"},
    {value:"Newzealand-2", viewvalue:"Newzealand"},
    {value:"Maldives-3", viewvalue: "Maldives", disabled: true},  // here we use disabled to disable value
    {value:"London-4", viewvalue: "London"},
  ]

  // Mat Input Material

  name: string
  comment: any
  password: string
  email: string


  onclickbutton(){
    console.log("Angular Button on Andular material matbutton")
  }

  // Mat Checkbox 

  isChecked=false

  Checkedcheckbox=true

  isInterminate = true

  // Multiple checkboxes

  option1=false
  option2=false
  option3=true
  option4=false

  // Mat Dialog

  constructor(public dialog: MatDialog,private fb:FormBuilder){}

  opendialog(){
    // seding data to from parent component
    // const dialogref = this.dialog.open(DialogComponent, {
    //   data: {message: 'Data From Parent Component'},
    // });

    const dialogref = this.dialog.open(DialogComponent,{
      data: {message: 'Data From Parent Component'},
      width: '400px',
      height: '300px',
      position: {top: '50px'},
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
    });

    dialogref.afterClosed().subscribe(result=>{
      console.log(`Dialog Result: ${result}`)
    });
  }



  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm=this.fb.group({
      name: ['',Validators.required],
      food: ['',Validators.required],
    }),
    this.simulateProgress();
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }


  // Mat Progress Spinner

  progress=50;
  progress1=65;


  // Dynamic spinner

  progress2 = 0;
  
  simulateProgress(){
    const interval = setInterval(()=>{
      this.progress2+=10;
      if(this.progress2>=100){
        clearInterval(interval);
      }
    },1000);
  }


  spinner=0;
  anothersimulateProgress(){
    const interval = setInterval(()=>{
      this.spinner+=5;
      if(this.spinner>=100){
        clearInterval(interval);
      }
    },1200);
  }

}
