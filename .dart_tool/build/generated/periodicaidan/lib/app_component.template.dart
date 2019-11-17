// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'app_component.dart';
export 'app_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:periodicaidan/src/components/footer/footer_component.template.dart' as _ref1;
import 'package:periodicaidan/src/components/hero/hero_component.template.dart' as _ref2;
import 'package:periodicaidan/src/components/project_list/project_list_component.template.dart' as _ref3;
import 'package:periodicaidan/src/components/socials/socials_component.template.dart' as _ref4;
import 'package:periodicaidan/src/objects/external.template.dart' as _ref5;
import 'package:periodicaidan/src/objects/project.template.dart' as _ref6;
import 'package:periodicaidan/app_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'app_component.dart' as import2;
import 'src/components/hero/hero_component.template.dart' as import3;
import 'src/components/hero/hero_component.dart' as import4;
import 'src/components/project_list/project_list_component.template.dart' as import5;
import 'src/components/project_list/project_list_component.dart' as import6;
import 'src/components/footer/footer_component.template.dart' as import7;
import 'src/components/footer/footer_component.dart' as import8;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import9;
import 'package:angular/src/core/linker/view_type.dart' as import10;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import12;
import 'package:angular/src/runtime.dart' as import13;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import15;

final List<dynamic> styles$AppComponent = [import0.styles];

class ViewAppComponent0 extends AppView<import2.AppComponent> {
  import3.ViewHeroComponent0 _compView_0;
  import4.HeroComponent _HeroComponent_0_5;
  import5.ViewProjectListComponent0 _compView_2;
  import6.ProjectListComponent _ProjectListComponent_2_5;
  import7.ViewFooterComponent0 _compView_3;
  import8.FooterComponent _FooterComponent_3_5;
  static import9.ComponentStyles _componentStyles;
  ViewAppComponent0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import12.document.createElement('my-app');
  }
  static String get _debugComponentUrl {
    return (import13.isDevMode ? 'asset:periodicaidan/lib/app_component.dart' : null);
  }

  @override
  ComponentRef<import2.AppComponent> build() {
    final _rootEl = rootEl;
    final import12.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    _compView_0 = import3.ViewHeroComponent0(this, 0);
    final _el_0 = _compView_0.rootEl;
    parentRenderNode.append(_el_0);
    addShimC(_el_0);
    _HeroComponent_0_5 = import4.HeroComponent();
    _compView_0.create0(_HeroComponent_0_5);
    final doc = import12.document;
    final _el_1 = import15.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_1, 'ui container');
    addShimC(_el_1);
    _compView_2 = import5.ViewProjectListComponent0(this, 2);
    final _el_2 = _compView_2.rootEl;
    _el_1.append(_el_2);
    import15.setAttribute(_el_2, 'id', 'project-list');
    addShimC(_el_2);
    _ProjectListComponent_2_5 = import6.ProjectListComponent();
    _compView_2.create0(_ProjectListComponent_2_5);
    _compView_3 = import7.ViewFooterComponent0(this, 3);
    final _el_3 = _compView_3.rootEl;
    parentRenderNode.append(_el_3);
    addShimC(_el_3);
    _FooterComponent_3_5 = import8.FooterComponent();
    _compView_3.create0(_FooterComponent_3_5);
    init0();
  }

  @override
  void detectChangesInternal() {
    _compView_0.detectChanges();
    _compView_2.detectChanges();
    _compView_3.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
    _compView_2.destroyInternalState();
    _compView_3.destroyInternalState();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import9.ComponentStyles.scoped(styles$AppComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.AppComponent> _AppComponentNgFactory = const ComponentFactory('my-app', viewFactory_AppComponentHost0);
ComponentFactory<import2.AppComponent> get AppComponentNgFactory {
  return _AppComponentNgFactory;
}

final List<dynamic> styles$AppComponentHost = const [];

class _ViewAppComponentHost0 extends AppView<import2.AppComponent> {
  ViewAppComponent0 _compView_0;
  import2.AppComponent _AppComponent_0_5;
  _ViewAppComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import10.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.AppComponent> build() {
    _compView_0 = ViewAppComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _AppComponent_0_5 = import2.AppComponent();
    _compView_0.create(_AppComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _AppComponent_0_5);
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

AppView<import2.AppComponent> viewFactory_AppComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewAppComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(AppComponent, AppComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
  _ref4.initReflector();
  _ref5.initReflector();
  _ref6.initReflector();
}
