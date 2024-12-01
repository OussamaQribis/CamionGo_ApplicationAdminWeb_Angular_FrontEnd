import { Component } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService]
})
export class LoginComponent {
  valCheck: string[] = ['remember'];
    

  email:any
  password:any;

  constructor(
      private fb: FormBuilder,
      private router: Router,
      private service:LoginService,
      private mess:MessageService) {

        
          
       }



      

       
       onSubmitForm(form: NgForm) {
          this.service.login(form.value).subscribe(
              (response) => {
                if (response.jwt != null) {
                  const jwtToken = response.jwt;
                  localStorage.setItem('jwt', jwtToken);
                  localStorage.setItem('userId', response.user.id);
                  this.mess.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Hi '+response.user.name });
                  this.router.navigateByUrl("/");
                  
                }else{
                  this.mess.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Incorrect email or password!!!' });
                }
              }
            )
      }
}
