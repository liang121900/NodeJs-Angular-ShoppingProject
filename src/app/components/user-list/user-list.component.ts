import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { GoogleLoginService } from 'src/app/services/login/google-login.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  private pdata:[]=[];
  private imageURI:string="";
  private searchText: string = "";
  private searchedUser: User;
  constructor(private userService: UserService, private googleService:GoogleLoginService) {
  }
  ngOnInit() {
    //Here we have to make rest call using HttpClient
      this.userService.findAll().subscribe(data =>{
        //if(data.status== "success"){
        this.pdata = data;
        //}
      });
  }

  public blockUser(username){
    this.userService.blockUser(username).subscribe(data =>{
      console.log(data);
    });
  }
  public unblockUser(username){
    this.userService.unblockUser(username).subscribe(data =>{
      console.log(data);
    });
  }
  public deleteUser(username){
    this.userService.deleteUser(username).subscribe(data =>{
      console.log(data);
    });
  }
  public searchUser(){
    this.userService.findUser(this.searchText).subscribe(data =>{
      this.searchedUser = data;
      console.log(this.searchedUser);
    });
  }

}