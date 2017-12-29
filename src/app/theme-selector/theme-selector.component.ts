import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css']
})
export class ThemeSelectorComponent implements OnInit {

  selectedThemeUrl;
  selectedThemeName;

  themes = new Array(
    { url: "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/darkly/bootstrap.min.css", name: "darkly" },
    { url: "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/lumen/bootstrap.min.css", name: "lumen" },
    { url: "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/materia/bootstrap.min.css", name: "materia" },
    { url: "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/sandstone/bootstrap.min.cs", name: "sandstone" },
    { url: "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/spacelab/bootstrap.min.css", name: "spacelab" }
  );
  constructor() { }

  ngOnInit() {
    this.selectedThemeUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0-beta.2/darkly/bootstrap.min.css";
    this.selectedThemeName = "darkly";

  }

  setTheme(changedThemeUrl) {
    //this.selectedTheme = this.themes.filter(t => t.url == themeUrl);
    for (let i = 0; i < this.themes.length; i++) {
      if (this.themes[i].url == changedThemeUrl) {
        this.selectedThemeUrl = this.themes[i].url;
        this.selectedThemeName = this.themes[i].name;
        break;
      }
    }
    //alert(this.selectedTheme.name);
  }

}
