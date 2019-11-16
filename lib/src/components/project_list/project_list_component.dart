import 'dart:html';

import "package:angular/angular.dart";
import 'package:periodicaidan/src/objects/project.dart';

@Component(
  selector: "project-list",
  templateUrl: "project_list_component.html",
  styleUrls: ["project_list_component.css"],
  directives: [
    coreDirectives,
  ]
)
class ProjectListComponent {
  List<Project> projects = [];

  ProjectListComponent() {
    var projects = [
      {
        "repo": "dart_tdlib",
        "name": "TDLib for Dart",
      },
      {
        "repo": "meme",
        "name": "Mobile Enigma Machine Emulator (MEME)",
      },
      {
        "repo": "selfishserver",
        "name": "Selfish Server",
      },
    ];

    for (var project in projects) {
      Project.github(project["repo"], name: project["name"])
        .then((proj) => this.projects.add(proj));
    }
  }

  void onMouseEnter(Event event) {
    var target = event.target as HtmlElement;
    target.classes.add("raised");
  }

  void onMouseLeave(Event event) {
    var target = event.target as HtmlElement;
    target.classes.remove("raised");
  }
}