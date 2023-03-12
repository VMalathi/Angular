import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  
  enquiryForm!: FormGroup ;
  submitted=false
  
  constructor( private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.enquiryForm = this.formBuilder.group({
      name: ['', [Validators.required,Validators.minLength(4)]],
      email:['',[Validators.required,Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(){
    this.submitted = true
    
    if(this.enquiryForm.invalid){
      return
    }
    alert("Success")
  }

}
