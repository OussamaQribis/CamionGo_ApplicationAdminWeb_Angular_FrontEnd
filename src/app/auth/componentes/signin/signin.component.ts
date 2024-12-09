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
    

  nom:any
  email:any
  motDePasse:any;
  role:any;
  telephone:any;
  constructor( private router: Router,
      private mess:MessageService,
      private service:SigninService) {

          
       }



      

       
       onSubmitForm(form: NgForm) {
        
        console.log(form.value)
        
        if(this.role!=null){
          this.service.register(form.value).subscribe((response) => {
            console.log(response)
            if (response!= null) {
              this.router.navigateByUrl("/authentification/login");
            }else{
              this.mess.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'This user already exists!!!' });
             }
          })
        }else{
          this.mess.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Select Role!!!' });
        }
         
         
         
      }

}
