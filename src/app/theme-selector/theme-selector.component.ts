import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {

  selectedThemeUrl: string;
  themeUrls = new Array(
   {url:"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/darkly/bootstrap.min.css", theme:"darkly"},
   {url:"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/lumen/bootstrap.min.css", theme:"lumen"},
   {url:"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/materia/bootstrap.min.css", theme:"materia"},
   {url:"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/sandstone/bootstrap.min.cs", theme:"sandstone"},
   {url:"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/spacelab/bootstrap.min.css" theme:"spacelab"}
  );
  constructor() { }

  ngOnInit() {
    this.selectedThemeUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/darkly/bootstrap.min.css";
  }

}
