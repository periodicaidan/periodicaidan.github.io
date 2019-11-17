import 'dart:html';
import 'dart:js';

import 'package:angular/angular.dart';
import 'package:periodicaidan/src/components/footer/footer_component.dart';
import 'package:periodicaidan/src/components/hero/hero_component.dart';
import 'package:periodicaidan/src/components/project_list/project_list_component.dart';
import 'package:periodicaidan/src/components/socials/socials_component.dart';
import 'package:periodicaidan/src/objects/external.dart';
import 'package:periodicaidan/src/objects/project.dart';

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [
    HeroComponent,
    FooterComponent,
    ProjectListComponent,
    SocialsComponent,
    coreDirectives,
  ],
)
class AppComponent {
  List<Project> projects = [];

  AppComponent() {
    
  }
}
