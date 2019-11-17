// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'footer_component.dart';
export 'footer_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:periodicaidan/src/components/footer/footer_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'footer_component.dart' as import2;
import 'package:angular/src/runtime/text_binding.dart' as import3;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import4;
import 'package:angular/src/core/linker/view_type.dart' as import5;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import7;
import 'package:angular/src/runtime.dart' as import8;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import10;
import 'package:angular/src/runtime/interpolate.dart' as import11;

final List<dynamic> styles$FooterComponent = [import0.styles];

class ViewFooterComponent0 extends AppView<import2.FooterComponent> {
  final import3.TextBinding _textBinding_5 = import3.TextBinding();
  static import4.ComponentStyles _componentStyles;
  ViewFooterComponent0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import7.document.createElement('site-footer');
  }
  static String get _debugComponentUrl {
    return (import8.isDevMode ? 'asset:periodicaidan/lib/src/components/footer/footer_component.dart' : null);
  }

  @override
  ComponentRef<import2.FooterComponent> build() {
    final _rootEl = rootEl;
    final import7.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import7.document;
    final _el_0 = import10.appendElement(doc, parentRenderNode, 'footer');
    this.updateChildClass(_el_0, 'ui inverted vertical center aligned segment');
    import10.setAttribute(_el_0, 'id', 'footer');
    addShimE(_el_0);
    final _el_1 = import10.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'ui container');
    addShimC(_el_1);
    final _el_2 = import10.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'ui inverted centered grid');
    addShimC(_el_2);
    final _el_3 = import10.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'ui ten wide column');
    import10.setAttribute(_el_3, 'id', 'copyright');
    addShimC(_el_3);
    final _text_4 = import10.appendText(_el_3, 'Copyright © 2019 - ');
    _el_3.append(_textBinding_5.element);
    final _text_6 = import10.appendText(_el_3, ' Aidan T. Manning. No rights reserved. Website and its ');
    final _el_7 = import10.appendElement(doc, _el_3, 'a');
    import10.setAttribute(_el_7, 'href', 'https://github.com/periodicaidan/periodicaidan.github.io');
    addShimC(_el_7);
    final _text_8 = import10.appendText(_el_7, 'source code');
    final _text_9 = import10.appendText(_el_3, ' are free to use.');
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    _textBinding_5.updateText(import11.interpolate0(_ctx.currentYear()));
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import4.ComponentStyles.scoped(styles$FooterComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.FooterComponent> _FooterComponentNgFactory = const ComponentFactory('site-footer', viewFactory_FooterComponentHost0);
ComponentFactory<import2.FooterComponent> get FooterComponentNgFactory {
  return _FooterComponentNgFactory;
}

final List<dynamic> styles$FooterComponentHost = const [];

class _ViewFooterComponentHost0 extends AppView<import2.FooterComponent> {
  ViewFooterComponent0 _compView_0;
  import2.FooterComponent _FooterComponent_0_5;
  _ViewFooterComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import5.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.FooterComponent> build() {
    _compView_0 = ViewFooterComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _FooterComponent_0_5 = import2.FooterComponent();
    _compView_0.create(_FooterComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _FooterComponent_0_5);
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

AppView<import2.FooterComponent> viewFactory_FooterComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewFooterComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(FooterComponent, FooterComponentNgFactory);
  _ref0.initReflector();
}
