import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SigninService } from '../../services/signin.service';

@Component({
  selector: 'app-signin',
  standalone:false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
  providers: [MessageService]
})
export class SigninComponent {

  
  valCheck: string[] = ['remember'];
    

  name:any
  email:any
  password:any;
  userRole:any;
  valRadio: string = '';
  confirmPassword:any

  constructor( private router: Router,
      private mess:MessageService,
      private service:SigninService) {

          
       }



      

       
       onSubmitForm(form: NgForm) {
         if(this.password===this.confirmPassword){
          this.service.register(form.value).subscribe((response) => {
            console.log(response)
            if (response!= null) {
              this.mess.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Hi '+response.name });
              this.router.navigateByUrl("/auth/login");
             
            }else{
              this.mess.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'This user already exists!!!' });
             }
          })
         }else{
          this.mess.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Incorrect  password!!!' });
         }
         
      }

}
