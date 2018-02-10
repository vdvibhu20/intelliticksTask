import {Component, Pipe, PipeTransform} from '@angular/core';
import { UserService } from '../config/config.service';

@Component({
  selector: 'index',
  template: `
    <h3>GitHub Repo Lister</h3>
    
    <form >
      <input type="text" name="url" [(ngModel)]="url" />
      <button type="submit" (click)="getRepo()">Get Repo</button>
    </form>
    
    <ul id="table">
      <li class="table-li">
        <ul class="row">
          <li class="row-li" *ngFor="let key of repositories[0] | keys">{{key}} <button id="{{key}}" (click)="updateSortBy(key)">SortBy</button></li>
        </ul>
      </li>
      <li class="table-li" *ngFor="let repo of repositories">
        <ul class="row">
          <li class="row-li" *ngFor="let key of repo | keys">{{repo[key]}}</li>
        </ul>
      </li>
    </ul>
  `,
})
export class indexComponent  {
  url: string;
  repositories: repostory[];
  sortBy: string;
  constructor(private userService: UserService){
    this.repositories=[];
    this.url= "";
    this.sortBy= "name";
  }

  updateSortBy(str: string){
    this.sortBy= str;
    this.customSort();
  }

  customSort(){
    this.repositories= this.repositories.sort((a,b)=>{
      if(a[this.sortBy]>b[this.sortBy]){
        return 1;
      }else if(a[this.sortBy]<b[this.sortBy]){
        return -1;
      }else{
        return 0;
      }
    })
  }

  getRepo(){
    let repo = this.url.slice(19,);
    console.log("localeCompare first :" + repo );
    this.userService.getUser(repo).subscribe((data) =>{
      console.log(data);
      var new_repo: repostory= {
        isPrivate: data.private,
        name: data.name,
        owner: data.owner.login,
        pushed_at: data.pushed_at,
        forks: data.forks_count
      };
      this.repositories.push(new_repo);
      this.customSort();
    });
  }


}

interface repostory{
  isPrivate: boolean,
  name: string,
  owner: string,
  pushed_at: string,
  forks: number
}


