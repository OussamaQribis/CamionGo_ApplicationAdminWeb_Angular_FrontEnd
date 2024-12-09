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
  motDePasse:any;

  constructor(
      private router: Router,
      private service:LoginService,
      private mess:MessageService) {

        
          
       }



      

       
       onSubmitForm(form: NgForm) {
        console.log(form.value)
        
          this.service.login(form.value).subscribe(
              (response) => {
                if (response.jwt != null) {
                  const jwtToken = response.jwt;
                  localStorage.setItem('jwt', jwtToken);
                  localStorage.setItem('userId', response.user.id);
                  localStorage.setItem('role', response.user.role);
                  this.mess.add({ key: 'tst', severity: 'success', summary: 'Success Message', detail: 'Hi '+response.user.nom });
                  this.router.navigateByUrl("/");
                  
                }else{
                  this.mess.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Incorrect email or password!!!' });
                }
              }
            )
      }
}
