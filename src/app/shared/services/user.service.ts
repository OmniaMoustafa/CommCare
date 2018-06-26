import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators'
import { User } from '../calsses/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
readonly rooturl = 'http://localhost:58802';
constructor(private httpClient:HttpClient) { }
registerUser(user:User)
{
  const body :User={
    Username :user.Username,
    Password:user.Password,
    Email:user.Email,
    FirstName:user.FirstName,
    LastName:user.LastName,
    ConfirmPassword:user.ConfirmPassword

  }
  return this.httpClient.post(this.rooturl + '/api/Account/Register',body)
}

}
