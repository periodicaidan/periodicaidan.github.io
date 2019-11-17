// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'project_list_component.dart';
export 'project_list_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:periodicaidan/src/components/socials/socials_component.template.dart' as _ref1;
import 'package:periodicaidan/src/objects/external.template.dart' as _ref2;
import 'package:periodicaidan/src/objects/project.template.dart' as _ref3;
import 'package:periodicaidan/src/components/project_list/project_list_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'project_list_component.dart' as import2;
import '../socials/socials_component.template.dart' as import3;
import '../socials/socials_component.dart' as import4;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import6;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import7;
import 'package:angular/src/core/linker/view_type.dart' as import8;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import10;
import 'package:angular/src/runtime.dart' as import11;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import13;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import15;
import 'package:angular/src/runtime/text_binding.dart' as import16;
import '../../objects/project.dart' as import17;
import 'package:angular/src/runtime/interpolate.dart' as import18;

final List<dynamic> styles$ProjectListComponent = [import0.styles];

class ViewProjectListComponent0 extends AppView<import2.ProjectListComponent> {
  import3.ViewSocialsComponent0 _compView_4;
  import4.SocialsComponent _SocialsComponent_4_5;
  ViewContainer _appEl_5;
  import6.NgFor _NgFor_5_9;
  var _expr_0;
  static import7.ComponentStyles _componentStyles;
  ViewProjectListComponent0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import10.document.createElement('project-list');
  }
  static String get _debugComponentUrl {
    return (import11.isDevMode ? 'asset:periodicaidan/lib/src/components/project_list/project_list_component.dart' : null);
  }

  @override
  ComponentRef<import2.ProjectListComponent> build() {
    final _rootEl = rootEl;
    final import10.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import10.document;
    final _el_0 = import13.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'ui segment');
    import13.setAttribute(_el_0, 'id', 'parent');
    addShimC(_el_0);
    final _el_1 = import13.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'ui left rail');
    addShimC(_el_1);
    final _el_2 = import13.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'ui sticky');
    addShimC(_el_2);
    final _el_3 = import13.appendDiv(doc, _el_2);
    this.updateChildClass(_el_3, 'ui segment');
    import13.setAttribute(_el_3, 'id', 'socials');
    addShimC(_el_3);
    _compView_4 = import3.ViewSocialsComponent0(this, 4);
    final _el_4 = _compView_4.rootEl;
    _el_3.append(_el_4);
    addShimC(_el_4);
    _SocialsComponent_4_5 = import4.SocialsComponent();
    _compView_4.create0(_SocialsComponent_4_5);
    final _anchor_5 = import13.appendAnchor(_el_0);
    _appEl_5 = ViewContainer(5, 0, this, _anchor_5);
    TemplateRef _TemplateRef_5_8 = TemplateRef(_appEl_5, viewFactory_ProjectListComponent1);
    _NgFor_5_9 = import6.NgFor(_appEl_5, _TemplateRef_5_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (((!import15.AppViewUtils.throwOnChanges) && firstCheck)) {
      _SocialsComponent_4_5.ngOnInit();
    }
    final currVal_0 = _ctx.projects;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      _NgFor_5_9.ngForOf = currVal_0;
      _expr_0 = currVal_0;
    }
    if ((!import15.AppViewUtils.throwOnChanges)) {
      _NgFor_5_9.ngDoCheck();
    }
    _appEl_5.detectChangesInNestedViews();
    _compView_4.detectChanges();
  }

  @override
  void destroyInternal() {
    _appEl_5.destroyNestedViews();
    _compView_4.destroyInternalState();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import7.ComponentStyles.scoped(styles$ProjectListComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.ProjectListComponent> _ProjectListComponentNgFactory = const ComponentFactory('project-list', viewFactory_ProjectListComponentHost0);
ComponentFactory<import2.ProjectListComponent> get ProjectListComponentNgFactory {
  return _ProjectListComponentNgFactory;
}

class _ViewProjectListComponent1 extends AppView<import2.ProjectListComponent> {
  final import16.TextBinding _textBinding_5 = import16.TextBinding();
  final import16.TextBinding _textBinding_11 = import16.TextBinding();
  var _expr_0;
  bool _expr_1;
  bool _expr_2;
  import10.AnchorElement _el_6;
  _ViewProjectListComponent1(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.ProjectListComponent> build() {
    final _ctx = ctx;
    final doc = import10.document;
    final _el_0 = doc.createElement('div');
    this.updateChildClass(_el_0, 'ui segment project-card');
    addShimC(_el_0);
    final _el_1 = import13.appendDiv(doc, _el_0);
    this.updateChildClass(_el_1, 'ui divided grid');
    addShimC(_el_1);
    final _el_2 = import13.appendDiv(doc, _el_1);
    this.updateChildClass(_el_2, 'four wide column');
    addShimC(_el_2);
    final _el_3 = import13.appendDiv(doc, _el_1);
    this.updateChildClass(_el_3, 'twelve wide wide column');
    addShimC(_el_3);
    final _el_4 = import13.appendElement(doc, _el_3, 'h2');
    this.updateChildClass(_el_4, 'ui dividing header');
    addShimE(_el_4);
    _el_4.append(_textBinding_5.element);
    _el_6 = import13.appendElement(doc, _el_3, 'a');
    this.updateChildClass(_el_6, 'ui labeled icon button');
    import13.setAttribute(_el_6, 'role', 'button');
    import13.setAttribute(_el_6, 'target', '_blank');
    addShimC(_el_6);
    final _el_7 = import13.appendElement(doc, _el_6, 'i');
    this.updateChildClass(_el_7, 'play icon');
    addShimE(_el_7);
    final _text_8 = import13.appendText(_el_6, ' Demo');
    final _el_9 = import13.appendElement(doc, _el_3, 'hr');
    this.updateChildClass(_el_9, 'ui hidden divider');
    addShimE(_el_9);
    final _el_10 = import13.appendElement(doc, _el_3, 'p');
    addShimE(_el_10);
    _el_10.append(_textBinding_11.element);
    _el_0.addEventListener('mouseenter', eventHandler1(_ctx.onMouseEnter));
    _el_0.addEventListener('mouseleave', eventHandler1(_ctx.onMouseLeave));
    _el_0.addEventListener('click', eventHandler1(_handle_click_0_2));
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_project = import11.unsafeCast<import17.Project>(locals['\$implicit']);
    _textBinding_5.updateText(import18.interpolateString0(local_project.name));
    final currVal_0 = local_project.codeUrl;
    if (import15.checkBinding(_expr_0, currVal_0)) {
      import13.setProperty(_el_6, 'href', import15.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
    final currVal_1 = local_project.hasDemo;
    if (import15.checkBinding(_expr_1, currVal_1)) {
      import13.updateClassBinding(_el_6, 'green', currVal_1);
      _expr_1 = currVal_1;
    }
    final bool currVal_2 = (!local_project.hasDemo);
    if (import15.checkBinding(_expr_2, currVal_2)) {
      import13.updateClassBinding(_el_6, 'disabled', currVal_2);
      _expr_2 = currVal_2;
    }
    _textBinding_11.updateText(import18.interpolateString0(local_project.description));
  }

  void _handle_click_0_2($event) {
    final local_project = import11.unsafeCast<import17.Project>(locals['\$implicit']);
    local_project.openSourceCodeInNewTab();
  }
}

AppView<void> viewFactory_ProjectListComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewProjectListComponent1(parentView, parentIndex);
}

final List<dynamic> styles$ProjectListComponentHost = const [];

class _ViewProjectListComponentHost0 extends AppView<import2.ProjectListComponent> {
  ViewProjectListComponent0 _compView_0;
  import2.ProjectListComponent _ProjectListComponent_0_5;
  _ViewProjectListComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import8.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.ProjectListComponent> build() {
    _compView_0 = ViewProjectListComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _ProjectListComponent_0_5 = import2.ProjectListComponent();
    _compView_0.create(_ProjectListComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _ProjectListComponent_0_5);
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

AppView<import2.ProjectListComponent> viewFactory_ProjectListComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewProjectListComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(ProjectListComponent, ProjectListComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
  _ref3.initReflector();
}
