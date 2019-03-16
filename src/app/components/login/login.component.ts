import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from 'src/app/services/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User=new User();
  constructor(private userService:UserService,private router: Router) { }
  errorMessage:String="";
  ngOnInit() {
    
  }

  public login(){
    this.userService.login(this.user).subscribe(res=>{
      if(res.status&&res.status=='success'){
        this.user.role=res.role;

        sessionStorage.setItem('currentUser', JSON.stringify(this.user));
        sessionStorage.setItem('id_token',res.authToken);
        this.userService.addShareUser(this.user);
        
        this.user=new User();
        this.errorMessage="";

        if(res.role=='admin'){               
          this.router.navigate(['/admin-dashboard']);
        }
        else if(res.role=='vendor'){
          this.router.navigate(['/seller-dashboard']);
        }
        else{
          this.router.navigate(['/']);
        }

      }else{
        this.errorMessage="User name does not exist or password is not correct.";
        this.user.password="";
      }
    },(error=>{
      this.errorMessage="username does not exist or password is not correct";
    })
    );
  }

}
