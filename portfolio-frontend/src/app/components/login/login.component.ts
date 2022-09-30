import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string=''
  password:string=''

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }
  loginWithRedirect():void{
    this.auth.login(this.username,this.password).subscribe((data)=>{
      this.auth.setSession(data)
      
    })
  }
}
