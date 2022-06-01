import { ChangeDetectorRef, Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { DataService } from 'src/app/services/dataService/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  filteredString:string = '';
  titleSearch:string='';
  grid=false;
  formatGridList=false;
  
  @Output() DisplayEvent = new EventEmitter<string>();

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 50},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;
  nextData: any;
  token: any;
  RouteSegment:any


  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher ,private data:DataService,private router: Router,private activeRoute:ActivatedRoute ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
   
  }
  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  keyFunction(event:any)
{
    console.log("event",event.target.value)
    this.data.changeMessage(event.target.value)
}
logout(){
  localStorage.removeItem('token');
  this.router.navigateByUrl("/login")
  console.log("Logged out sucessfully!!!");
}

FormatView()
  {
    if(this.formatGridList==false)
    {
      this.formatGridList=true
      return this.formatGridList
    }
    else
    {
      this.formatGridList=false
      return this.formatGridList
    }
  }
  FormatListView()
    {
      this.grid=false
      this.data.nextDataUpdate(this.FormatView().valueOf())
      console.log("value ",this.FormatView())
    }

    FormatGridView()
    {
       this.grid=true
       this.data.nextDataUpdate(this.FormatView().valueOf())
        console.log("value ",this.FormatView())
    }
}

   



