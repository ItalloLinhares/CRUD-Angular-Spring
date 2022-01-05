import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

 @Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  courses: Course[] = [];
  displayedColumns = ['name', 'category'];
  dataSource = DATA;


  constructor() { }

  ngOnInit(): void {
  }



const DATA: Course[] = [
  {_id: '1', name: 'Hydrogen', category: 'a'},
  {_id: '2', name: 'Helium', category: 'a'}
];


