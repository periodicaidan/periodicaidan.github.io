import 'package:angular/angular.dart';
import 'package:periodicaidan/src/components/footer/footer_component.dart';
import 'package:periodicaidan/src/components/hero/hero_component.dart';

@Component(
  selector: 'my-app',
  styleUrls: ['app_component.css'],
  templateUrl: 'app_component.html',
  directives: [
    HeroComponent,
    FooterComponent,
  ],
)
class AppComponent {
  // Nothing here yet. All logic is in TodoListComponent.
}
