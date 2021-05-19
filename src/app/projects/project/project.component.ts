import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  @Input() name: string;
  @Input() repoUrl: string;
  @Input() demoUrl: string;

  constructor() {}

  ngOnInit(): void {}
}