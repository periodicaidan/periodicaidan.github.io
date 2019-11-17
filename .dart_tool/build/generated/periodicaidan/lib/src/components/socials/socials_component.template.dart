// **************************************************************************
// Generator: AngularDart Compiler
// **************************************************************************

import 'socials_component.dart';
export 'socials_component.dart';
import 'package:angular/src/di/reflector.dart' as _ngRef;
import 'package:angular/angular.template.dart' as _ref0;
import 'package:periodicaidan/src/objects/external.template.dart' as _ref1;
import 'package:periodicaidan/src/objects/socials.template.dart' as _ref2;
import 'package:periodicaidan/src/components/socials/socials_component.css.shim.dart' as import0;
import 'package:angular/src/core/linker/app_view.dart';
import 'socials_component.dart' as import2;
import 'package:angular/src/core/linker/view_container.dart';
import 'package:angular/src/common/directives/ng_for.dart' as import4;
import 'package:angular/src/core/linker/style_encapsulation.dart' as import5;
import 'package:angular/src/core/linker/view_type.dart' as import6;
import 'package:angular/src/core/change_detection/change_detection.dart';
import 'dart:html' as import8;
import 'package:angular/src/runtime.dart' as import9;
import 'package:angular/angular.dart';
import 'package:angular/src/runtime/dom_helpers.dart' as import11;
import 'package:angular/src/core/linker/template_ref.dart';
import 'package:angular/src/core/linker/app_view_utils.dart' as import13;
import 'package:angular/src/runtime/text_binding.dart' as import14;
import '../../objects/socials.dart' as import15;
import 'package:angular/src/runtime/interpolate.dart' as import16;

final List<dynamic> styles$SocialsComponent = [import0.styles];

class ViewSocialsComponent0 extends AppView<import2.SocialsComponent> {
  ViewContainer _appEl_1;
  import4.NgFor _NgFor_1_9;
  static import5.ComponentStyles _componentStyles;
  ViewSocialsComponent0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.component, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
    rootEl = import8.document.createElement('socials');
  }
  static String get _debugComponentUrl {
    return (import9.isDevMode ? 'asset:periodicaidan/lib/src/components/socials/socials_component.dart' : null);
  }

  @override
  ComponentRef<import2.SocialsComponent> build() {
    final _rootEl = rootEl;
    final import8.HtmlElement parentRenderNode = initViewRoot(_rootEl);
    final doc = import8.document;
    final _el_0 = import11.appendDiv(doc, parentRenderNode);
    this.updateChildClass(_el_0, 'ui fluid blue vertical labeled icon buttons');
    addShimC(_el_0);
    final _anchor_1 = import11.appendAnchor(_el_0);
    _appEl_1 = ViewContainer(1, 0, this, _anchor_1);
    TemplateRef _TemplateRef_1_8 = TemplateRef(_appEl_1, viewFactory_SocialsComponent1);
    _NgFor_1_9 = import4.NgFor(_appEl_1, _TemplateRef_1_8);
    init0();
  }

  @override
  void detectChangesInternal() {
    final _ctx = ctx;
    bool firstCheck = (this.cdState == 0);
    if (firstCheck) {
      if (!identical(_ctx.socials, null)) {
        (_NgFor_1_9.ngForOf = _ctx.socials);
      }
    }
    if ((!import13.AppViewUtils.throwOnChanges)) {
      _NgFor_1_9.ngDoCheck();
    }
    _appEl_1.detectChangesInNestedViews();
  }

  @override
  void destroyInternal() {
    _appEl_1.destroyNestedViews();
  }

  @override
  void initComponentStyles() {
    var styles = _componentStyles;
    if (identical(styles, null)) {
      (_componentStyles = (styles = (_componentStyles = import5.ComponentStyles.scoped(styles$SocialsComponent, _debugComponentUrl))));
    }
    componentStyles = styles;
  }
}

const ComponentFactory<import2.SocialsComponent> _SocialsComponentNgFactory = const ComponentFactory('socials', viewFactory_SocialsComponentHost0);
ComponentFactory<import2.SocialsComponent> get SocialsComponentNgFactory {
  return _SocialsComponentNgFactory;
}

class _ViewSocialsComponent1 extends AppView<import2.SocialsComponent> {
  final import14.TextBinding _textBinding_3 = import14.TextBinding();
  var _expr_0;
  String _expr_1;
  import8.AnchorElement _el_0;
  import8.Element _el_1;
  _ViewSocialsComponent1(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.embedded, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways) {
    initComponentStyles();
  }
  @override
  ComponentRef<import2.SocialsComponent> build() {
    final doc = import8.document;
    _el_0 = doc.createElement('a');
    this.updateChildClass(_el_0, 'ui button');
    addShimC(_el_0);
    _el_1 = import11.appendElement(doc, _el_0, 'i');
    addShimE(_el_1);
    final _text_2 = import11.appendText(_el_0, ' ');
    _el_0.append(_textBinding_3.element);
    init1(_el_0);
  }

  @override
  void detectChangesInternal() {
    final local_social = import9.unsafeCast<import15.Social>(locals['\$implicit']);
    final currVal_0 = local_social.link;
    if (import13.checkBinding(_expr_0, currVal_0)) {
      import11.setProperty(_el_0, 'href', import13.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
      _expr_0 = currVal_0;
    }
    final currVal_1 = import16.interpolateString1('icon ', local_social.icon, '');
    if (import13.checkBinding(_expr_1, currVal_1)) {
      this.updateChildClass(_el_1, currVal_1);
      _expr_1 = currVal_1;
    }
    _textBinding_3.updateText(import16.interpolateString0(local_social.name));
  }
}

AppView<void> viewFactory_SocialsComponent1(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSocialsComponent1(parentView, parentIndex);
}

final List<dynamic> styles$SocialsComponentHost = const [];

class _ViewSocialsComponentHost0 extends AppView<import2.SocialsComponent> {
  ViewSocialsComponent0 _compView_0;
  import2.SocialsComponent _SocialsComponent_0_5;
  _ViewSocialsComponentHost0(AppView<dynamic> parentView, int parentIndex) : super(import6.ViewType.host, parentView, parentIndex, ChangeDetectionStrategy.CheckAlways);
  @override
  ComponentRef<import2.SocialsComponent> build() {
    _compView_0 = ViewSocialsComponent0(this, 0);
    rootEl = _compView_0.rootEl;
    _SocialsComponent_0_5 = import2.SocialsComponent();
    _compView_0.create(_SocialsComponent_0_5, projectedNodes);
    init1(rootEl);
    return ComponentRef(0, this, rootEl, _SocialsComponent_0_5);
  }

  @override
  void detectChangesInternal() {
    bool firstCheck = (this.cdState == 0);
    if (((!import13.AppViewUtils.throwOnChanges) && firstCheck)) {
      _SocialsComponent_0_5.ngOnInit();
    }
    _compView_0.detectChanges();
  }

  @override
  void destroyInternal() {
    _compView_0.destroyInternalState();
  }
}

AppView<import2.SocialsComponent> viewFactory_SocialsComponentHost0(AppView<dynamic> parentView, int parentIndex) {
  return _ViewSocialsComponentHost0(parentView, parentIndex);
}

var _visited = false;
void initReflector() {
  if (_visited) {
    return;
  }
  _visited = true;

  _ngRef.registerComponent(SocialsComponent, SocialsComponentNgFactory);
  _ref0.initReflector();
  _ref1.initReflector();
  _ref2.initReflector();
}
