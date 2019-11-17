import "package:angular/angular.dart";

@Component(
  selector: "site-footer",
  templateUrl: "footer_component.html",
  styleUrls: ["footer_component.css"],
)
class FooterComponent {
  int currentYear() {
    var today = DateTime.now();
    return today.year;
  }
}