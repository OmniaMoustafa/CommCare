import { Component, OnInit } from '@angular/core';
import { User } from '../calsses/user';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { ToastrModule, ToastrService } from "ngx-toastr";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userRegisterationForm: FormGroup;
  user: User;
  constructor(private fb: FormBuilder, private userService:UserService , private toastr:ToastrService) {
  
  }
 
  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('Password').value !== c.get('ConfirmPassword').value) {
      return { invalid: true };
    }
  }

  ngOnInit() {
    this.userRegisterationForm = this.fb.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      LastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      Username: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      ConfirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });
  }

  resetForm(form?:FormGroup){
    if(form !=null){
      form.reset();
      this.user={
        Username:'',
         Password:'',
         FirstName:'',
         LastName:'',
         Email:'',
         ConfirmPassword:''
      }
    }
  }
  onSubmit(form: FormGroup) {
    this.userService.registerUser(form.value)
    .subscribe((data:any) =>{
    if(data.Succeeded==true)
      {
        this.resetForm(form);
        this.toastr.success('User Registeration successful');

      }
      else{
        this.toastr.error(data.Errors[0]); 
      }
    
    });
  }
}

