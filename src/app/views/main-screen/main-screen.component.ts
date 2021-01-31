import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.css']
})
export class MainScreenComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('screen'));
    if (this.route.snapshot.paramMap.get('screen') == 'list') {
      this.router.navigate(['list'], { relativeTo: this.route })
    } else if (this.route.snapshot.paramMap.get('screen') == 'add') {
      this.router.navigate(['add'], { relativeTo: this.route })
    } else {
      this.router.navigate(['update'], { relativeTo: this.route })
    }
  }

}
