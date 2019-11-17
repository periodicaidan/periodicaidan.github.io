// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'hero_component.dart';
export 'hero_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:periodicaidan/src/components/hero/hero_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'hero_component.dart' as import2;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import3;
import 'package:angular/src/core/linker/view_type.dart' as import4;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import6;
import 'package:angular/src/runtime.dart' as import7;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import9;

final List<dynamic> styles$HeroComponent = [import0.styles];

class ViewHeroComponent0 extends AppView<import2.HeroComponent> {
  static import3.ComponentStyles _componentStyles;
  ViewHeroComponent0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import6.document.createElement('hero');
  }
  static String get _debugComponentUrl {
    return (import7.isDevMode ? 'asset:periodicaidan/lib/src/components/hero/hero_component.dart' : null);
  }

  @override
  ComponentRef<import2.HeroComponent> build() {
    final _rootEl = rootEl;
    final import6.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import6.document;
    final _el_0 = import9.appendElement(doc, parentRenderNode, 'header');
    this.updateChildClass(_el_0, 'ui inverted vertical center aligned segment');
    import9.setAttribute(_el_0, 'id', 'hero');
    addShimE(_el_0);
    final _el_1 = import9.appendElement(doc, _el_0, 'nav');
    this.updateChildClass(_el_1, 'ui huge secondary inverted pointing menu');
    addShimE(_el_1);
    final _el_2 = import9.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'ui container hide-on-mobile');
    addShimC(_el_2);
    final _el_3 = import9.appendElement(doc, _el_2, 'a');
    this.updateChildClass(_el_3, 'active item');
    import9.setAttribute(_el_3, 'data-tooltip', 'cd');
    import9.setAttribute(_el_3, 'href', '/');
    addShimC(_el_3);
    final _text_4 = import9.appendText(_el_3, 'guest@github.io');
    final _el_5 = import9.appendDiv(doc, _el_2);
    this.updateChildClass(_el_5, 'right menu');
    addShimC(_el_5);
    final _el_6 = import9.appendElement(doc, _el_5, 'a');
    this.updateChildClass(_el_6, 'item');
    import9.setAttribute(_el_6, 'href', '#');
    addShimC(_el_6);
    final _text_7 = import9.appendText(_el_6, 'about');
    final _text_8 = import9.appendText(_el_5, ' ');
    final _el_9 = import9.appendElement(doc, _el_5, 'a');
    this.updateChildClass(_el_9, 'item');
    import9.setAttribute(_el_9, 'href', '#');
    addShimC(_el_9);
    final _text_10 = import9.appendText(_el_9, 'resume');
    final _text_11 = import9.appendText(_el_5, ' ');
    final _text_12 = import9.appendText(_el_5, ' ');
    final _el_13 = import9.appendElement(doc, _el_5, 'a');
    this.updateChildClass(_el_13, 'item');
    import9.setAttribute(_el_13, 'href', '#');
    addShimC(_el_13);
    final _text_14 = import9.appendText(_el_13, 'contact');
    final _el_15 = import9.appendDiv(doc, _el_0);
    this.updateChildClass(_el_15, 'ui text');
    addShimC(_el_15);
    final _el_16 = import9.appendElement(doc, _el_15, 'h1');
    this.updateChildClass(_el_16, 'ui inverted header');
    addShimE(_el_16);
    final _el_17 = import9.appendElement(doc, _el_16, 'code');
    addShimE(_el_17);
    final _text_18 = import9.appendText(_el_17, 'Aidan T. Manning');
    final _el_19 = import9.appendDiv(doc, _el_16);
    this.updateChildClass(_el_19, 'ui sub header');
    addShimC(_el_19);
    final _text_20 = import9.appendText(_el_19, 'An Overview');
    init0();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import3.ComponentStyles.scoped(styles$HeroComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.HeroComponent> _HeroComponentNgFactory = const ComponentFactory('hero', viewFactory_HeroComponentHost0);
ComponentFactory<import2.HeroComponent> get HeroComponentNgFactory {
  return _HeroComponentNgFactory;
}

final List<dynamic> styles$HeroComponentHost = const [];

class _ViewHeroComponentHost0 extends AppView<import2.HeroComponent> {
  ViewHeroComponent0 _compView_0;
  import2.HeroComponent _HeroComponent_0_5;
  _ViewHeroComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import4.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.HeroComponent> build() {
    _compView_0 = ViewHeroComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _HeroComponent_0_5 = import2.HeroComponent();
    _compView_0.create(_HeroComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _HeroComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.HeroComponent> viewFactory_HeroComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewHeroComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(HeroComponent, HeroComponentNgFactory);
  _ref0.initReflector();
}
