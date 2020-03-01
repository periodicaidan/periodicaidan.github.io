import 'dart:html';

import "package:angular/angular.dart";
import 'package:periodicaidan/src/components/socials/socials_component.dart';
import 'package:periodicaidan/src/objects/external.dart';
import 'package:periodicaidan/src/objects/project.dart';

@Component(
  selector: "project-list",
  templateUrl: "project_list_component.html",
  styleUrls: ["project_list_component.css"],
  directives: [
    coreDirectives,
    SocialsComponent,
  ],
)
class ProjectListComponent {
  List<Project> projects;

  ProjectListComponent() {
    var projects = [
      {
        "repo": "dart_tdlib",
        "name": "TDLib for Dart",
      },
      {
        "repo": "selfishserver",
        "name": "Selfish Server",
      },
      {
        "repo": "meme",
        "name": "Mobile Enigma Machine Emulator (MEME)",
      },
      {
        "repo": "keykey",
        "name": "KeyKey"
      },
      {
        "repo": "reify",
        "name": "Reify"
      },
    ];
    this.projects = List(projects.length);

    for (int i = 0; i < projects.length; i++) {
      var project = projects[i];
      Project.github(project["repo"], name: project["name"])
        .then((proj) {
          this.projects[i] = proj;
          // Ensure the sticky content knows the project list has grown
          Semantic.refreshSticky();
        });
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