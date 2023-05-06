import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form:FormGroup;
  showError:boolean = false;
  loading:boolean= false;
  constructor(private formBuilder:FormBuilder, private auth:AuthService, private ruta:Router){
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required, Validators.minLength(8)]]
      }
    )

  }



  ngOnInit(): void {
    
  }

  get Email()
  {
    return this.form.get('email');
  }

  get Password()
  {
    return this.form.get('password');
  }

  onEnviar(event: Event) {
    event.preventDefault();
    this.loading = true;
    this.auth.Login(this.form.value).subscribe(
      data => {
        console.log("DATA:" + JSON.stringify(data));
        this.loading = false;
        this.ruta.navigate(['/home']);
      },
      error => {
        if (error.status === 401) {
          this.loading = false;
          this.showError = true;
        } else {
          console.log("ERROR:" + JSON.stringify(error));
        }
      }
    );
  }

}
