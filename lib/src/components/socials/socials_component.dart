import 'dart:html';
import 'dart:js';
import "package:angular/angular.dart";
import 'package:periodicaidan/src/objects/external.dart';
import 'package:periodicaidan/src/objects/socials.dart';

@Component(
  selector: "socials",
  templateUrl: "socials_component.html",
  styleUrls: ["socials_component.css"],
  directives: [
    coreDirectives,
  ],
)
class SocialsComponent implements OnInit {
  final List<Social> socials = [
    github,
    email,
    linkedin,
    twitter,
  ];

  @override
  void ngOnInit() {
    Semantic.setSticky();
    window.resizeBy(0, 0);
  }
}