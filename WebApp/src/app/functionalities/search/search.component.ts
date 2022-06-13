import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  public busqueda: string;
  public foundUsers: any[];

  constructor(private searchService: SearchService) {
    this.busqueda = '';
    this.foundUsers = [];
  }

  search() {
    if(this.busqueda !== '') {
      this.searchService.search(this.busqueda).subscribe({
        next: (users) => {this.foundUsers.push(users);}
      })
    } else {
      this.foundUsers = [];
    }
  }

}
