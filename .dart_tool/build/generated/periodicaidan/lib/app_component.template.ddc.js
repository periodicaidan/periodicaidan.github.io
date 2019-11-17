define(['dart_sdk', 'packages/angular/src/runtime/text_binding', 'packages/angular/src/bootstrap/modules', 'packages/angular/src/core/change_detection/change_detection', 'packages/angular/src/runtime/interpolate', 'packages/periodicaidan/src/components/footer/footer_component', 'packages/angular/angular.template', 'packages/periodicaidan/app_component', 'packages/periodicaidan/app_component.css.shim'], function(dart_sdk, packages__angular__src__runtime__text_binding, packages__angular__src__bootstrap__modules, packages__angular__src__core__change_detection__change_detection, packages__angular__src__runtime__interpolate, packages__periodicaidan__src__components__footer__footer_component, packages__angular__angular$46template, packages__periodicaidan__app_component, packages__periodicaidan__app_component$46css$46shim) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_binding = packages__angular__src__runtime__text_binding.src__runtime__text_binding;
  const view_type = packages__angular__src__bootstrap__modules.src__core__linker__view_type;
  const dom_helpers = packages__angular__src__bootstrap__modules.src__runtime__dom_helpers;
  const style_encapsulation = packages__angular__src__bootstrap__modules.src__core__linker__style_encapsulation;
  const app_view = packages__angular__src__bootstrap__modules.src__core__linker__app_view;
  const component_factory = packages__angular__src__bootstrap__modules.src__core__linker__component_factory;
  const view_container = packages__angular__src__bootstrap__modules.src__core__linker__view_container;
  const template_ref = packages__angular__src__bootstrap__modules.src__core__linker__template_ref;
  const ng_for = packages__angular__src__bootstrap__modules.src__common__directives__ng_for;
  const app_view_utils = packages__angular__src__bootstrap__modules.src__core__linker__app_view_utils;
  const optimizations = packages__angular__src__core__change_detection__change_detection.src__runtime__optimizations;
  const reflector = packages__angular__src__core__change_detection__change_detection.src__di__reflector;
  const interpolate = packages__angular__src__runtime__interpolate.src__runtime__interpolate;
  const footer_component = packages__periodicaidan__src__components__footer__footer_component.src__components__footer__footer_component;
  const hero_component = packages__periodicaidan__src__components__footer__footer_component.src__components__hero__hero_component;
  const project_list_component = packages__periodicaidan__src__components__footer__footer_component.src__components__project_list__project_list_component;
  const socials_component = packages__periodicaidan__src__components__footer__footer_component.src__components__socials__socials_component;
  const project = packages__periodicaidan__src__components__footer__footer_component.src__objects__project;
  const socials = packages__periodicaidan__src__components__footer__footer_component.src__objects__socials;
  const angular$46template = packages__angular__angular$46template.angular$46template;
  const app_component = packages__periodicaidan__app_component.app_component;
  const app_component$46css$46shim = packages__periodicaidan__app_component$46css$46shim.app_component$46css$46shim;
  const footer_component$46template = Object.create(dart.library);
  const footer_component$46css$46shim = Object.create(dart.library);
  const external$46template = Object.create(dart.library);
  const socials$46template = Object.create(dart.library);
  const app_component$46template = Object.create(dart.library);
  const project_list_component$46template = Object.create(dart.library);
  const socials_component$46template = Object.create(dart.library);
  const socials_component$46css$46shim = Object.create(dart.library);
  const project_list_component$46css$46shim = Object.create(dart.library);
  const project$46template = Object.create(dart.library);
  const hero_component$46template = Object.create(dart.library);
  const hero_component$46css$46shim = Object.create(dart.library);
  const $createElement = dartx.createElement;
  const $append = dartx.append;
  const $addEventListener = dartx.addEventListener;
  const $_get = dartx._get;
  let ComponentRefOfFooterComponent = () => (ComponentRefOfFooterComponent = dart.constFn(component_factory.ComponentRef$(footer_component.FooterComponent)))();
  let ComponentFactoryOfFooterComponent = () => (ComponentFactoryOfFooterComponent = dart.constFn(component_factory.ComponentFactory$(footer_component.FooterComponent)))();
  let AppViewOfFooterComponent = () => (AppViewOfFooterComponent = dart.constFn(app_view.AppView$(footer_component.FooterComponent)))();
  let AppViewAndintToAppViewOfFooterComponent = () => (AppViewAndintToAppViewOfFooterComponent = dart.constFn(dart.fnType(AppViewOfFooterComponent(), [app_view.AppView, core.int])))();
  let ComponentRefOfAppComponent = () => (ComponentRefOfAppComponent = dart.constFn(component_factory.ComponentRef$(app_component.AppComponent)))();
  let ComponentFactoryOfAppComponent = () => (ComponentFactoryOfAppComponent = dart.constFn(component_factory.ComponentFactory$(app_component.AppComponent)))();
  let AppViewOfAppComponent = () => (AppViewOfAppComponent = dart.constFn(app_view.AppView$(app_component.AppComponent)))();
  let AppViewAndintToAppViewOfAppComponent = () => (AppViewAndintToAppViewOfAppComponent = dart.constFn(dart.fnType(AppViewOfAppComponent(), [app_view.AppView, core.int])))();
  let AppViewOfvoid = () => (AppViewOfvoid = dart.constFn(app_view.AppView$(dart.void)))();
  let AppViewAndintToAppViewOfvoid = () => (AppViewAndintToAppViewOfvoid = dart.constFn(dart.fnType(AppViewOfvoid(), [app_view.AppView, core.int])))();
  let ComponentRefOfProjectListComponent = () => (ComponentRefOfProjectListComponent = dart.constFn(component_factory.ComponentRef$(project_list_component.ProjectListComponent)))();
  let ComponentFactoryOfProjectListComponent = () => (ComponentFactoryOfProjectListComponent = dart.constFn(component_factory.ComponentFactory$(project_list_component.ProjectListComponent)))();
  let AppViewOfProjectListComponent = () => (AppViewOfProjectListComponent = dart.constFn(app_view.AppView$(project_list_component.ProjectListComponent)))();
  let AppViewAndintToAppViewOfProjectListComponent = () => (AppViewAndintToAppViewOfProjectListComponent = dart.constFn(dart.fnType(AppViewOfProjectListComponent(), [app_view.AppView, core.int])))();
  let ComponentRefOfSocialsComponent = () => (ComponentRefOfSocialsComponent = dart.constFn(component_factory.ComponentRef$(socials_component.SocialsComponent)))();
  let ComponentFactoryOfSocialsComponent = () => (ComponentFactoryOfSocialsComponent = dart.constFn(component_factory.ComponentFactory$(socials_component.SocialsComponent)))();
  let AppViewOfSocialsComponent = () => (AppViewOfSocialsComponent = dart.constFn(app_view.AppView$(socials_component.SocialsComponent)))();
  let AppViewAndintToAppViewOfSocialsComponent = () => (AppViewAndintToAppViewOfSocialsComponent = dart.constFn(dart.fnType(AppViewOfSocialsComponent(), [app_view.AppView, core.int])))();
  let ComponentRefOfHeroComponent = () => (ComponentRefOfHeroComponent = dart.constFn(component_factory.ComponentRef$(hero_component.HeroComponent)))();
  let ComponentFactoryOfHeroComponent = () => (ComponentFactoryOfHeroComponent = dart.constFn(component_factory.ComponentFactory$(hero_component.HeroComponent)))();
  let AppViewOfHeroComponent = () => (AppViewOfHeroComponent = dart.constFn(app_view.AppView$(hero_component.HeroComponent)))();
  let AppViewAndintToAppViewOfHeroComponent = () => (AppViewAndintToAppViewOfHeroComponent = dart.constFn(dart.fnType(AppViewOfHeroComponent(), [app_view.AppView, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.fn(footer_component$46template.viewFactory_FooterComponentHost0, AppViewAndintToAppViewOfFooterComponent());
    },
    get C0() {
      return C0 = dart.const({
        __proto__: ComponentFactoryOfFooterComponent().prototype,
        [ComponentFactory__viewFactory]: C1 || CT.C1,
        [ComponentFactory_selector]: "site-footer"
      });
    },
    get C2() {
      return C2 = dart.constList([], dart.dynamic);
    },
    get C4() {
      return C4 = dart.fn(app_component$46template.viewFactory_AppComponentHost0, AppViewAndintToAppViewOfAppComponent());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ComponentFactoryOfAppComponent().prototype,
        [ComponentFactory__viewFactory]: C4 || CT.C4,
        [ComponentFactory_selector]: "my-app"
      });
    },
    get C5() {
      return C5 = dart.fn(project_list_component$46template.viewFactory_ProjectListComponent1, AppViewAndintToAppViewOfvoid());
    },
    get C7() {
      return C7 = dart.fn(project_list_component$46template.viewFactory_ProjectListComponentHost0, AppViewAndintToAppViewOfProjectListComponent());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ComponentFactoryOfProjectListComponent().prototype,
        [ComponentFactory__viewFactory]: C7 || CT.C7,
        [ComponentFactory_selector]: "project-list"
      });
    },
    get C8() {
      return C8 = dart.fn(socials_component$46template.viewFactory_SocialsComponent1, AppViewAndintToAppViewOfvoid());
    },
    get C10() {
      return C10 = dart.fn(socials_component$46template.viewFactory_SocialsComponentHost0, AppViewAndintToAppViewOfSocialsComponent());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ComponentFactoryOfSocialsComponent().prototype,
        [ComponentFactory__viewFactory]: C10 || CT.C10,
        [ComponentFactory_selector]: "socials"
      });
    },
    get C12() {
      return C12 = dart.fn(hero_component$46template.viewFactory_HeroComponentHost0, AppViewAndintToAppViewOfHeroComponent());
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ComponentFactoryOfHeroComponent().prototype,
        [ComponentFactory__viewFactory]: C12 || CT.C12,
        [ComponentFactory_selector]: "hero"
      });
    }
  });
  const _textBinding_5 = dart.privateName(footer_component$46template, "_textBinding_5");
  footer_component$46template.ViewFooterComponent0 = class ViewFooterComponent0 extends app_view.AppView$(footer_component.FooterComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:periodicaidan/lib/src/components/footer/footer_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "footer");
      this.updateChildClass(html.HtmlElement._check(_el_0), "ui inverted vertical center aligned segment");
      dom_helpers.setAttribute(_el_0, "id", "footer");
      this.addShimE(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "ui container");
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "ui inverted centered grid");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_3, "ui ten wide column");
      dom_helpers.setAttribute(_el_3, "id", "copyright");
      this.addShimC(_el_3);
      let _text_4 = dom_helpers.appendText(_el_3, "Copyright © 2019 - ");
      _el_3[$append](this[_textBinding_5].element);
      let _text_6 = dom_helpers.appendText(_el_3, " Aidan T. Manning. No rights reserved. Website and its ");
      let _el_7 = dom_helpers.appendElement(doc, _el_3, "a");
      dom_helpers.setAttribute(_el_7, "href", "https://github.com/periodicaidan/periodicaidan.github.io");
      this.addShimC(html.HtmlElement._check(_el_7));
      let _text_8 = dom_helpers.appendText(_el_7, "source code");
      let _text_9 = dom_helpers.appendText(_el_3, " are free to use.");
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      this[_textBinding_5].updateText(core.String._check(interpolate.interpolate0(_ctx.currentYear())));
    }
    initComponentStyles() {
      let styles = footer_component$46template.ViewFooterComponent0._componentStyles;
      if (styles == null) {
        footer_component$46template.ViewFooterComponent0._componentStyles = styles = footer_component$46template.ViewFooterComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(footer_component$46template.styles$FooterComponent, footer_component$46template.ViewFooterComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (footer_component$46template.ViewFooterComponent0.new = function(parentView, parentIndex) {
    this[_textBinding_5] = new text_binding.TextBinding.new();
    footer_component$46template.ViewFooterComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("site-footer"));
  }).prototype = footer_component$46template.ViewFooterComponent0.prototype;
  dart.addTypeTests(footer_component$46template.ViewFooterComponent0);
  dart.setLibraryUri(footer_component$46template.ViewFooterComponent0, "package:periodicaidan/src/components/footer/footer_component.template.dart");
  dart.setFieldSignature(footer_component$46template.ViewFooterComponent0, () => ({
    __proto__: dart.getFields(footer_component$46template.ViewFooterComponent0.__proto__),
    [_textBinding_5]: dart.finalFieldType(text_binding.TextBinding)
  }));
  dart.defineLazy(footer_component$46template.ViewFooterComponent0, {
    /*footer_component$46template.ViewFooterComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0 = dart.privateName(footer_component$46template, "_compView_0");
  const _FooterComponent_0_5 = dart.privateName(footer_component$46template, "_FooterComponent_0_5");
  footer_component$46template._ViewFooterComponentHost0 = class _ViewFooterComponentHost0 extends app_view.AppView$(footer_component.FooterComponent) {
    build() {
      this[_compView_0] = new footer_component$46template.ViewFooterComponent0.new(this, 0);
      this.rootEl = this[_compView_0].rootEl;
      this[_FooterComponent_0_5] = new footer_component.FooterComponent.new();
      this[_compView_0].create(this[_FooterComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfFooterComponent()).new(0, this, this.rootEl, this[_FooterComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0].destroyInternalState();
    }
  };
  (footer_component$46template._ViewFooterComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0] = null;
    this[_FooterComponent_0_5] = null;
    footer_component$46template._ViewFooterComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = footer_component$46template._ViewFooterComponentHost0.prototype;
  dart.addTypeTests(footer_component$46template._ViewFooterComponentHost0);
  dart.setLibraryUri(footer_component$46template._ViewFooterComponentHost0, "package:periodicaidan/src/components/footer/footer_component.template.dart");
  dart.setFieldSignature(footer_component$46template._ViewFooterComponentHost0, () => ({
    __proto__: dart.getFields(footer_component$46template._ViewFooterComponentHost0.__proto__),
    [_compView_0]: dart.fieldType(footer_component$46template.ViewFooterComponent0),
    [_FooterComponent_0_5]: dart.fieldType(footer_component.FooterComponent)
  }));
  footer_component$46template.viewFactory_FooterComponentHost0 = function viewFactory_FooterComponentHost0(parentView, parentIndex) {
    return new footer_component$46template._ViewFooterComponentHost0.new(parentView, parentIndex);
  };
  footer_component$46template.initReflector = function initReflector() {
    if (dart.test(footer_component$46template._visited)) {
      return;
    }
    footer_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(footer_component.FooterComponent), footer_component$46template.FooterComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.copyProperties(footer_component$46template, {
    get FooterComponentNgFactory() {
      return footer_component$46template._FooterComponentNgFactory;
    }
  });
  let C1;
  const ComponentFactory__viewFactory = dart.privateName(component_factory, "ComponentFactory._viewFactory");
  const ComponentFactory_selector = dart.privateName(component_factory, "ComponentFactory.selector");
  let C0;
  let C2;
  dart.defineLazy(footer_component$46template, {
    /*footer_component$46template.styles$FooterComponent*/get styles$FooterComponent() {
      return [footer_component$46css$46shim.styles];
    },
    /*footer_component$46template._FooterComponentNgFactory*/get _FooterComponentNgFactory() {
      return C0 || CT.C0;
    },
    /*footer_component$46template.styles$FooterComponentHost*/get styles$FooterComponentHost() {
      return C2 || CT.C2;
    },
    /*footer_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(footer_component$46css$46shim, {
    /*footer_component$46css$46shim.styles*/get styles() {
      return ["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css\"); @import url(\"https://code.cdn.mozilla.net/fonts/fira.css\");@font-face {font-family:'Material Icons';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf\") format('truetype')}.material-icons._ngcontent-%ID%{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2Rm.ttf\") format('truetype')}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:700;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4Omb2Rm.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:italic;font-weight:400;font-display:swap;src:local('Libre Baskerville Italic'),local('LibreBaskerville-Italic'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQCQ.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:400;font-display:swap;src:local('Libre Baskerville'),local('LibreBaskerville-Regular'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxY.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:700;font-display:swap;src:local('Libre Baskerville Bold'),local('LibreBaskerville-Bold'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcU.ttf\") format('truetype')}._nghost-%ID%{width:100%}._nghost-%ID% #copyright._ngcontent-%ID%{font-family:Palatino,\"Libre Baskerville\",serif!important;line-height:1.4em;text-align:center;font-size:1.5em;margin-top:85px}._nghost-%ID% footer._ngcontent-%ID%{background-color:#16112C!important;height:250px}"];
    }
  });
  external$46template.initReflector = function initReflector$() {
  };
  socials$46template.initReflector = function initReflector$0() {
  };
  const _compView_0$ = dart.privateName(app_component$46template, "_compView_0");
  const _HeroComponent_0_5 = dart.privateName(app_component$46template, "_HeroComponent_0_5");
  const _compView_2 = dart.privateName(app_component$46template, "_compView_2");
  const _ProjectListComponent_2_5 = dart.privateName(app_component$46template, "_ProjectListComponent_2_5");
  const _compView_3 = dart.privateName(app_component$46template, "_compView_3");
  const _FooterComponent_3_5 = dart.privateName(app_component$46template, "_FooterComponent_3_5");
  app_component$46template.ViewAppComponent0 = class ViewAppComponent0 extends app_view.AppView$(app_component.AppComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:periodicaidan/lib/app_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      this[_compView_0$] = new hero_component$46template.ViewHeroComponent0.new(this, 0);
      let _el_0 = this[_compView_0$].rootEl;
      parentRenderNode[$append](_el_0);
      this.addShimC(_el_0);
      this[_HeroComponent_0_5] = new hero_component.HeroComponent.new();
      this[_compView_0$].create0(this[_HeroComponent_0_5]);
      let doc = html.document;
      let _el_1 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_1, "ui container");
      this.addShimC(_el_1);
      this[_compView_2] = new project_list_component$46template.ViewProjectListComponent0.new(this, 2);
      let _el_2 = this[_compView_2].rootEl;
      _el_1[$append](_el_2);
      dom_helpers.setAttribute(_el_2, "id", "project-list");
      this.addShimC(_el_2);
      this[_ProjectListComponent_2_5] = new project_list_component.ProjectListComponent.new();
      this[_compView_2].create0(this[_ProjectListComponent_2_5]);
      this[_compView_3] = new footer_component$46template.ViewFooterComponent0.new(this, 3);
      let _el_3 = this[_compView_3].rootEl;
      parentRenderNode[$append](_el_3);
      this.addShimC(_el_3);
      this[_FooterComponent_3_5] = new footer_component.FooterComponent.new();
      this[_compView_3].create0(this[_FooterComponent_3_5]);
      this.init0();
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
      this[_compView_2].detectChanges();
      this[_compView_3].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
      this[_compView_2].destroyInternalState();
      this[_compView_3].destroyInternalState();
    }
    initComponentStyles() {
      let styles = app_component$46template.ViewAppComponent0._componentStyles;
      if (styles == null) {
        app_component$46template.ViewAppComponent0._componentStyles = styles = app_component$46template.ViewAppComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(app_component$46template.styles$AppComponent, app_component$46template.ViewAppComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (app_component$46template.ViewAppComponent0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_HeroComponent_0_5] = null;
    this[_compView_2] = null;
    this[_ProjectListComponent_2_5] = null;
    this[_compView_3] = null;
    this[_FooterComponent_3_5] = null;
    app_component$46template.ViewAppComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("my-app"));
  }).prototype = app_component$46template.ViewAppComponent0.prototype;
  dart.addTypeTests(app_component$46template.ViewAppComponent0);
  dart.setLibraryUri(app_component$46template.ViewAppComponent0, "package:periodicaidan/app_component.template.dart");
  dart.setFieldSignature(app_component$46template.ViewAppComponent0, () => ({
    __proto__: dart.getFields(app_component$46template.ViewAppComponent0.__proto__),
    [_compView_0$]: dart.fieldType(hero_component$46template.ViewHeroComponent0),
    [_HeroComponent_0_5]: dart.fieldType(hero_component.HeroComponent),
    [_compView_2]: dart.fieldType(project_list_component$46template.ViewProjectListComponent0),
    [_ProjectListComponent_2_5]: dart.fieldType(project_list_component.ProjectListComponent),
    [_compView_3]: dart.fieldType(footer_component$46template.ViewFooterComponent0),
    [_FooterComponent_3_5]: dart.fieldType(footer_component.FooterComponent)
  }));
  dart.defineLazy(app_component$46template.ViewAppComponent0, {
    /*app_component$46template.ViewAppComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _AppComponent_0_5 = dart.privateName(app_component$46template, "_AppComponent_0_5");
  app_component$46template._ViewAppComponentHost0 = class _ViewAppComponentHost0 extends app_view.AppView$(app_component.AppComponent) {
    build() {
      this[_compView_0$] = new app_component$46template.ViewAppComponent0.new(this, 0);
      this.rootEl = this[_compView_0$].rootEl;
      this[_AppComponent_0_5] = new app_component.AppComponent.new();
      this[_compView_0$].create(this[_AppComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfAppComponent()).new(0, this, this.rootEl, this[_AppComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$].destroyInternalState();
    }
  };
  (app_component$46template._ViewAppComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$] = null;
    this[_AppComponent_0_5] = null;
    app_component$46template._ViewAppComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = app_component$46template._ViewAppComponentHost0.prototype;
  dart.addTypeTests(app_component$46template._ViewAppComponentHost0);
  dart.setLibraryUri(app_component$46template._ViewAppComponentHost0, "package:periodicaidan/app_component.template.dart");
  dart.setFieldSignature(app_component$46template._ViewAppComponentHost0, () => ({
    __proto__: dart.getFields(app_component$46template._ViewAppComponentHost0.__proto__),
    [_compView_0$]: dart.fieldType(app_component$46template.ViewAppComponent0),
    [_AppComponent_0_5]: dart.fieldType(app_component.AppComponent)
  }));
  app_component$46template.viewFactory_AppComponentHost0 = function viewFactory_AppComponentHost0(parentView, parentIndex) {
    return new app_component$46template._ViewAppComponentHost0.new(parentView, parentIndex);
  };
  app_component$46template.initReflector = function initReflector$1() {
    if (dart.test(app_component$46template._visited)) {
      return;
    }
    app_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(app_component.AppComponent), app_component$46template.AppComponentNgFactory);
    angular$46template.initReflector();
    footer_component$46template.initReflector();
    hero_component$46template.initReflector();
    project_list_component$46template.initReflector();
    socials_component$46template.initReflector();
    external$46template.initReflector();
    project$46template.initReflector();
  };
  dart.copyProperties(app_component$46template, {
    get AppComponentNgFactory() {
      return app_component$46template._AppComponentNgFactory;
    }
  });
  let C4;
  let C3;
  dart.defineLazy(app_component$46template, {
    /*app_component$46template.styles$AppComponent*/get styles$AppComponent() {
      return [app_component$46css$46shim.styles];
    },
    /*app_component$46template._AppComponentNgFactory*/get _AppComponentNgFactory() {
      return C3 || CT.C3;
    },
    /*app_component$46template.styles$AppComponentHost*/get styles$AppComponentHost() {
      return C2 || CT.C2;
    },
    /*app_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _compView_4 = dart.privateName(project_list_component$46template, "_compView_4");
  const _SocialsComponent_4_5 = dart.privateName(project_list_component$46template, "_SocialsComponent_4_5");
  const _appEl_5 = dart.privateName(project_list_component$46template, "_appEl_5");
  const _NgFor_5_9 = dart.privateName(project_list_component$46template, "_NgFor_5_9");
  const _expr_0 = dart.privateName(project_list_component$46template, "_expr_0");
  let C5;
  project_list_component$46template.ViewProjectListComponent0 = class ViewProjectListComponent0 extends app_view.AppView$(project_list_component.ProjectListComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:periodicaidan/lib/src/components/project_list/project_list_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "ui segment");
      dom_helpers.setAttribute(_el_0, "id", "parent");
      this.addShimC(_el_0);
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "ui left rail");
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "ui sticky");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_3, "ui segment");
      dom_helpers.setAttribute(_el_3, "id", "socials");
      this.addShimC(_el_3);
      this[_compView_4] = new socials_component$46template.ViewSocialsComponent0.new(this, 4);
      let _el_4 = this[_compView_4].rootEl;
      _el_3[$append](_el_4);
      this.addShimC(_el_4);
      this[_SocialsComponent_4_5] = new socials_component.SocialsComponent.new();
      this[_compView_4].create0(this[_SocialsComponent_4_5]);
      let _anchor_5 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_5] = new view_container.ViewContainer.new(5, 0, this, _anchor_5);
      let _TemplateRef_5_8 = new template_ref.TemplateRef.new(this[_appEl_5], C5 || CT.C5);
      this[_NgFor_5_9] = new ng_for.NgFor.new(this[_appEl_5], _TemplateRef_5_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_SocialsComponent_4_5].ngOnInit();
      }
      let currVal_0 = _ctx.projects;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        this[_NgFor_5_9].ngForOf = currVal_0;
        this[_expr_0] = currVal_0;
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_5_9].ngDoCheck();
      }
      this[_appEl_5].detectChangesInNestedViews();
      this[_compView_4].detectChanges();
    }
    destroyInternal() {
      this[_appEl_5].destroyNestedViews();
      this[_compView_4].destroyInternalState();
    }
    initComponentStyles() {
      let styles = project_list_component$46template.ViewProjectListComponent0._componentStyles;
      if (styles == null) {
        project_list_component$46template.ViewProjectListComponent0._componentStyles = styles = project_list_component$46template.ViewProjectListComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(project_list_component$46template.styles$ProjectListComponent, project_list_component$46template.ViewProjectListComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (project_list_component$46template.ViewProjectListComponent0.new = function(parentView, parentIndex) {
    this[_compView_4] = null;
    this[_SocialsComponent_4_5] = null;
    this[_appEl_5] = null;
    this[_NgFor_5_9] = null;
    this[_expr_0] = null;
    project_list_component$46template.ViewProjectListComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("project-list"));
  }).prototype = project_list_component$46template.ViewProjectListComponent0.prototype;
  dart.addTypeTests(project_list_component$46template.ViewProjectListComponent0);
  dart.setLibraryUri(project_list_component$46template.ViewProjectListComponent0, "package:periodicaidan/src/components/project_list/project_list_component.template.dart");
  dart.setFieldSignature(project_list_component$46template.ViewProjectListComponent0, () => ({
    __proto__: dart.getFields(project_list_component$46template.ViewProjectListComponent0.__proto__),
    [_compView_4]: dart.fieldType(socials_component$46template.ViewSocialsComponent0),
    [_SocialsComponent_4_5]: dart.fieldType(socials_component.SocialsComponent),
    [_appEl_5]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_5_9]: dart.fieldType(ng_for.NgFor),
    [_expr_0]: dart.fieldType(dart.dynamic)
  }));
  dart.defineLazy(project_list_component$46template.ViewProjectListComponent0, {
    /*project_list_component$46template.ViewProjectListComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_5$ = dart.privateName(project_list_component$46template, "_textBinding_5");
  const _textBinding_11 = dart.privateName(project_list_component$46template, "_textBinding_11");
  const _expr_1 = dart.privateName(project_list_component$46template, "_expr_1");
  const _expr_2 = dart.privateName(project_list_component$46template, "_expr_2");
  const _el_6 = dart.privateName(project_list_component$46template, "_el_6");
  const _handle_click_0_2 = dart.privateName(project_list_component$46template, "_handle_click_0_2");
  project_list_component$46template._ViewProjectListComponent1 = class _ViewProjectListComponent1 extends app_view.AppView$(project_list_component.ProjectListComponent) {
    build() {
      let _ctx = this.ctx;
      let doc = html.document;
      let _el_0 = doc[$createElement]("div");
      this.updateChildClass(html.HtmlElement._check(_el_0), "ui segment project-card");
      this.addShimC(html.HtmlElement._check(_el_0));
      let _el_1 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_1, "ui divided grid");
      this.addShimC(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "four wide column");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_3, "twelve wide wide column");
      this.addShimC(_el_3);
      let _el_4 = dom_helpers.appendElement(doc, _el_3, "h2");
      this.updateChildClass(html.HtmlElement._check(_el_4), "ui dividing header");
      this.addShimE(_el_4);
      _el_4[$append](this[_textBinding_5$].element);
      this[_el_6] = html.AnchorElement._check(dom_helpers.appendElement(doc, _el_3, "a"));
      this.updateChildClass(this[_el_6], "ui labeled icon button");
      dom_helpers.setAttribute(this[_el_6], "role", "button");
      dom_helpers.setAttribute(this[_el_6], "target", "_blank");
      this.addShimC(this[_el_6]);
      let _el_7 = dom_helpers.appendElement(doc, this[_el_6], "i");
      this.updateChildClass(html.HtmlElement._check(_el_7), "play icon");
      this.addShimE(_el_7);
      let _text_8 = dom_helpers.appendText(this[_el_6], " Demo");
      let _el_9 = dom_helpers.appendElement(doc, _el_3, "hr");
      this.updateChildClass(html.HtmlElement._check(_el_9), "ui hidden divider");
      this.addShimE(_el_9);
      let _el_10 = dom_helpers.appendElement(doc, _el_3, "p");
      this.addShimE(_el_10);
      _el_10[$append](this[_textBinding_11].element);
      _el_0[$addEventListener]("mouseenter", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseEnter')));
      _el_0[$addEventListener]("mouseleave", this.eventHandler1(html.Event, html.Event, dart.bind(_ctx, 'onMouseLeave')));
      _el_0[$addEventListener]("click", this.eventHandler1(html.Event, html.Event, dart.bind(this, _handle_click_0_2)));
      this.init1(_el_0);
    }
    detectChangesInternal() {
      let local_project = optimizations.unsafeCast(project.Project, this.locals[$_get]("$implicit"));
      this[_textBinding_5$].updateText(interpolate.interpolateString0(local_project.name));
      let currVal_0 = local_project.codeUrl;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0], currVal_0))) {
        dom_helpers.setProperty(this[_el_6], "href", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0] = currVal_0;
      }
      let currVal_1 = local_project.hasDemo;
      if (dart.test(app_view_utils.checkBinding(this[_expr_1], currVal_1))) {
        dom_helpers.updateClassBinding(this[_el_6], "green", currVal_1);
        this[_expr_1] = currVal_1;
      }
      let currVal_2 = !dart.test(local_project.hasDemo);
      if (dart.test(app_view_utils.checkBinding(this[_expr_2], currVal_2))) {
        dom_helpers.updateClassBinding(this[_el_6], "disabled", currVal_2);
        this[_expr_2] = currVal_2;
      }
      this[_textBinding_11].updateText(interpolate.interpolateString0(local_project.description));
    }
    [_handle_click_0_2]($36event) {
      let local_project = optimizations.unsafeCast(project.Project, this.locals[$_get]("$implicit"));
      local_project.openSourceCodeInNewTab();
    }
  };
  (project_list_component$46template._ViewProjectListComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_5$] = new text_binding.TextBinding.new();
    this[_textBinding_11] = new text_binding.TextBinding.new();
    this[_expr_0] = null;
    this[_expr_1] = null;
    this[_expr_2] = null;
    this[_el_6] = null;
    project_list_component$46template._ViewProjectListComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = project_list_component$46template._ViewProjectListComponent1.prototype;
  dart.addTypeTests(project_list_component$46template._ViewProjectListComponent1);
  dart.setMethodSignature(project_list_component$46template._ViewProjectListComponent1, () => ({
    __proto__: dart.getMethods(project_list_component$46template._ViewProjectListComponent1.__proto__),
    [_handle_click_0_2]: dart.fnType(dart.void, [dart.dynamic])
  }));
  dart.setLibraryUri(project_list_component$46template._ViewProjectListComponent1, "package:periodicaidan/src/components/project_list/project_list_component.template.dart");
  dart.setFieldSignature(project_list_component$46template._ViewProjectListComponent1, () => ({
    __proto__: dart.getFields(project_list_component$46template._ViewProjectListComponent1.__proto__),
    [_textBinding_5$]: dart.finalFieldType(text_binding.TextBinding),
    [_textBinding_11]: dart.finalFieldType(text_binding.TextBinding),
    [_expr_0]: dart.fieldType(dart.dynamic),
    [_expr_1]: dart.fieldType(core.bool),
    [_expr_2]: dart.fieldType(core.bool),
    [_el_6]: dart.fieldType(html.AnchorElement)
  }));
  const _compView_0$0 = dart.privateName(project_list_component$46template, "_compView_0");
  const _ProjectListComponent_0_5 = dart.privateName(project_list_component$46template, "_ProjectListComponent_0_5");
  project_list_component$46template._ViewProjectListComponentHost0 = class _ViewProjectListComponentHost0 extends app_view.AppView$(project_list_component.ProjectListComponent) {
    build() {
      this[_compView_0$0] = new project_list_component$46template.ViewProjectListComponent0.new(this, 0);
      this.rootEl = this[_compView_0$0].rootEl;
      this[_ProjectListComponent_0_5] = new project_list_component.ProjectListComponent.new();
      this[_compView_0$0].create(this[_ProjectListComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfProjectListComponent()).new(0, this, this.rootEl, this[_ProjectListComponent_0_5]);
    }
    detectChangesInternal() {
      this[_compView_0$0].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$0].destroyInternalState();
    }
  };
  (project_list_component$46template._ViewProjectListComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$0] = null;
    this[_ProjectListComponent_0_5] = null;
    project_list_component$46template._ViewProjectListComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = project_list_component$46template._ViewProjectListComponentHost0.prototype;
  dart.addTypeTests(project_list_component$46template._ViewProjectListComponentHost0);
  dart.setLibraryUri(project_list_component$46template._ViewProjectListComponentHost0, "package:periodicaidan/src/components/project_list/project_list_component.template.dart");
  dart.setFieldSignature(project_list_component$46template._ViewProjectListComponentHost0, () => ({
    __proto__: dart.getFields(project_list_component$46template._ViewProjectListComponentHost0.__proto__),
    [_compView_0$0]: dart.fieldType(project_list_component$46template.ViewProjectListComponent0),
    [_ProjectListComponent_0_5]: dart.fieldType(project_list_component.ProjectListComponent)
  }));
  project_list_component$46template.viewFactory_ProjectListComponent1 = function viewFactory_ProjectListComponent1(parentView, parentIndex) {
    return new project_list_component$46template._ViewProjectListComponent1.new(parentView, parentIndex);
  };
  project_list_component$46template.viewFactory_ProjectListComponentHost0 = function viewFactory_ProjectListComponentHost0(parentView, parentIndex) {
    return new project_list_component$46template._ViewProjectListComponentHost0.new(parentView, parentIndex);
  };
  project_list_component$46template.initReflector = function initReflector$2() {
    if (dart.test(project_list_component$46template._visited)) {
      return;
    }
    project_list_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(project_list_component.ProjectListComponent), project_list_component$46template.ProjectListComponentNgFactory);
    angular$46template.initReflector();
    socials_component$46template.initReflector();
    external$46template.initReflector();
    project$46template.initReflector();
  };
  dart.copyProperties(project_list_component$46template, {
    get ProjectListComponentNgFactory() {
      return project_list_component$46template._ProjectListComponentNgFactory;
    }
  });
  let C7;
  let C6;
  dart.defineLazy(project_list_component$46template, {
    /*project_list_component$46template.styles$ProjectListComponent*/get styles$ProjectListComponent() {
      return [project_list_component$46css$46shim.styles];
    },
    /*project_list_component$46template._ProjectListComponentNgFactory*/get _ProjectListComponentNgFactory() {
      return C6 || CT.C6;
    },
    /*project_list_component$46template.styles$ProjectListComponentHost*/get styles$ProjectListComponentHost() {
      return C2 || CT.C2;
    },
    /*project_list_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  const _appEl_1 = dart.privateName(socials_component$46template, "_appEl_1");
  const _NgFor_1_9 = dart.privateName(socials_component$46template, "_NgFor_1_9");
  let C8;
  socials_component$46template.ViewSocialsComponent0 = class ViewSocialsComponent0 extends app_view.AppView$(socials_component.SocialsComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:periodicaidan/lib/src/components/socials/socials_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendDiv(doc, parentRenderNode);
      this.updateChildClass(_el_0, "ui fluid blue vertical labeled icon buttons");
      this.addShimC(_el_0);
      let _anchor_1 = dom_helpers.appendAnchor(_el_0);
      this[_appEl_1] = new view_container.ViewContainer.new(1, 0, this, _anchor_1);
      let _TemplateRef_1_8 = new template_ref.TemplateRef.new(this[_appEl_1], C8 || CT.C8);
      this[_NgFor_1_9] = new ng_for.NgFor.new(this[_appEl_1], _TemplateRef_1_8);
      this.init0();
    }
    detectChangesInternal() {
      let _ctx = this.ctx;
      let firstCheck = this.cdState === 0;
      if (firstCheck) {
        if (_ctx.socials != null) {
          this[_NgFor_1_9].ngForOf = _ctx.socials;
        }
      }
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges)) {
        this[_NgFor_1_9].ngDoCheck();
      }
      this[_appEl_1].detectChangesInNestedViews();
    }
    destroyInternal() {
      this[_appEl_1].destroyNestedViews();
    }
    initComponentStyles() {
      let styles = socials_component$46template.ViewSocialsComponent0._componentStyles;
      if (styles == null) {
        socials_component$46template.ViewSocialsComponent0._componentStyles = styles = socials_component$46template.ViewSocialsComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(socials_component$46template.styles$SocialsComponent, socials_component$46template.ViewSocialsComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (socials_component$46template.ViewSocialsComponent0.new = function(parentView, parentIndex) {
    this[_appEl_1] = null;
    this[_NgFor_1_9] = null;
    socials_component$46template.ViewSocialsComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("socials"));
  }).prototype = socials_component$46template.ViewSocialsComponent0.prototype;
  dart.addTypeTests(socials_component$46template.ViewSocialsComponent0);
  dart.setLibraryUri(socials_component$46template.ViewSocialsComponent0, "package:periodicaidan/src/components/socials/socials_component.template.dart");
  dart.setFieldSignature(socials_component$46template.ViewSocialsComponent0, () => ({
    __proto__: dart.getFields(socials_component$46template.ViewSocialsComponent0.__proto__),
    [_appEl_1]: dart.fieldType(view_container.ViewContainer),
    [_NgFor_1_9]: dart.fieldType(ng_for.NgFor)
  }));
  dart.defineLazy(socials_component$46template.ViewSocialsComponent0, {
    /*socials_component$46template.ViewSocialsComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _textBinding_3 = dart.privateName(socials_component$46template, "_textBinding_3");
  const _expr_0$ = dart.privateName(socials_component$46template, "_expr_0");
  const _expr_1$ = dart.privateName(socials_component$46template, "_expr_1");
  const _el_0 = dart.privateName(socials_component$46template, "_el_0");
  const _el_1 = dart.privateName(socials_component$46template, "_el_1");
  socials_component$46template._ViewSocialsComponent1 = class _ViewSocialsComponent1 extends app_view.AppView$(socials_component.SocialsComponent) {
    build() {
      let doc = html.document;
      this[_el_0] = html.AnchorElement._check(doc[$createElement]("a"));
      this.updateChildClass(this[_el_0], "ui button");
      this.addShimC(this[_el_0]);
      this[_el_1] = dom_helpers.appendElement(doc, this[_el_0], "i");
      this.addShimE(this[_el_1]);
      let _text_2 = dom_helpers.appendText(this[_el_0], " ");
      this[_el_0][$append](this[_textBinding_3].element);
      this.init1(this[_el_0]);
    }
    detectChangesInternal() {
      let local_social = optimizations.unsafeCast(socials.Social, this.locals[$_get]("$implicit"));
      let currVal_0 = local_social.link;
      if (dart.test(app_view_utils.checkBinding(this[_expr_0$], currVal_0))) {
        dom_helpers.setProperty(this[_el_0], "href", app_view_utils.appViewUtils.sanitizer.sanitizeUrl(currVal_0));
        this[_expr_0$] = currVal_0;
      }
      let currVal_1 = interpolate.interpolateString1("icon ", local_social.icon, "");
      if (dart.test(app_view_utils.checkBinding(this[_expr_1$], currVal_1))) {
        this.updateChildClass(html.HtmlElement._check(this[_el_1]), currVal_1);
        this[_expr_1$] = currVal_1;
      }
      this[_textBinding_3].updateText(interpolate.interpolateString0(local_social.name));
    }
  };
  (socials_component$46template._ViewSocialsComponent1.new = function(parentView, parentIndex) {
    this[_textBinding_3] = new text_binding.TextBinding.new();
    this[_expr_0$] = null;
    this[_expr_1$] = null;
    this[_el_0] = null;
    this[_el_1] = null;
    socials_component$46template._ViewSocialsComponent1.__proto__.new.call(this, view_type.ViewType.embedded, parentView, parentIndex, 3);
    this.initComponentStyles();
  }).prototype = socials_component$46template._ViewSocialsComponent1.prototype;
  dart.addTypeTests(socials_component$46template._ViewSocialsComponent1);
  dart.setLibraryUri(socials_component$46template._ViewSocialsComponent1, "package:periodicaidan/src/components/socials/socials_component.template.dart");
  dart.setFieldSignature(socials_component$46template._ViewSocialsComponent1, () => ({
    __proto__: dart.getFields(socials_component$46template._ViewSocialsComponent1.__proto__),
    [_textBinding_3]: dart.finalFieldType(text_binding.TextBinding),
    [_expr_0$]: dart.fieldType(dart.dynamic),
    [_expr_1$]: dart.fieldType(core.String),
    [_el_0]: dart.fieldType(html.AnchorElement),
    [_el_1]: dart.fieldType(html.Element)
  }));
  const _compView_0$1 = dart.privateName(socials_component$46template, "_compView_0");
  const _SocialsComponent_0_5 = dart.privateName(socials_component$46template, "_SocialsComponent_0_5");
  socials_component$46template._ViewSocialsComponentHost0 = class _ViewSocialsComponentHost0 extends app_view.AppView$(socials_component.SocialsComponent) {
    build() {
      this[_compView_0$1] = new socials_component$46template.ViewSocialsComponent0.new(this, 0);
      this.rootEl = this[_compView_0$1].rootEl;
      this[_SocialsComponent_0_5] = new socials_component.SocialsComponent.new();
      this[_compView_0$1].create(this[_SocialsComponent_0_5], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfSocialsComponent()).new(0, this, this.rootEl, this[_SocialsComponent_0_5]);
    }
    detectChangesInternal() {
      let firstCheck = this.cdState === 0;
      if (!dart.test(app_view_utils.AppViewUtils.throwOnChanges) && firstCheck) {
        this[_SocialsComponent_0_5].ngOnInit();
      }
      this[_compView_0$1].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$1].destroyInternalState();
    }
  };
  (socials_component$46template._ViewSocialsComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$1] = null;
    this[_SocialsComponent_0_5] = null;
    socials_component$46template._ViewSocialsComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = socials_component$46template._ViewSocialsComponentHost0.prototype;
  dart.addTypeTests(socials_component$46template._ViewSocialsComponentHost0);
  dart.setLibraryUri(socials_component$46template._ViewSocialsComponentHost0, "package:periodicaidan/src/components/socials/socials_component.template.dart");
  dart.setFieldSignature(socials_component$46template._ViewSocialsComponentHost0, () => ({
    __proto__: dart.getFields(socials_component$46template._ViewSocialsComponentHost0.__proto__),
    [_compView_0$1]: dart.fieldType(socials_component$46template.ViewSocialsComponent0),
    [_SocialsComponent_0_5]: dart.fieldType(socials_component.SocialsComponent)
  }));
  socials_component$46template.viewFactory_SocialsComponent1 = function viewFactory_SocialsComponent1(parentView, parentIndex) {
    return new socials_component$46template._ViewSocialsComponent1.new(parentView, parentIndex);
  };
  socials_component$46template.viewFactory_SocialsComponentHost0 = function viewFactory_SocialsComponentHost0(parentView, parentIndex) {
    return new socials_component$46template._ViewSocialsComponentHost0.new(parentView, parentIndex);
  };
  socials_component$46template.initReflector = function initReflector$3() {
    if (dart.test(socials_component$46template._visited)) {
      return;
    }
    socials_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(socials_component.SocialsComponent), socials_component$46template.SocialsComponentNgFactory);
    angular$46template.initReflector();
    external$46template.initReflector();
    socials$46template.initReflector();
  };
  dart.copyProperties(socials_component$46template, {
    get SocialsComponentNgFactory() {
      return socials_component$46template._SocialsComponentNgFactory;
    }
  });
  let C10;
  let C9;
  dart.defineLazy(socials_component$46template, {
    /*socials_component$46template.styles$SocialsComponent*/get styles$SocialsComponent() {
      return [socials_component$46css$46shim.styles];
    },
    /*socials_component$46template._SocialsComponentNgFactory*/get _SocialsComponentNgFactory() {
      return C9 || CT.C9;
    },
    /*socials_component$46template.styles$SocialsComponentHost*/get styles$SocialsComponentHost() {
      return C2 || CT.C2;
    },
    /*socials_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(socials_component$46css$46shim, {
    /*socials_component$46css$46shim.styles*/get styles() {
      return ["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css\"); @import url(\"https://code.cdn.mozilla.net/fonts/fira.css\");@font-face {font-family:'Material Icons';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf\") format('truetype')}.material-icons._ngcontent-%ID%{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2Rm.ttf\") format('truetype')}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:700;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4Omb2Rm.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:italic;font-weight:400;font-display:swap;src:local('Libre Baskerville Italic'),local('LibreBaskerville-Italic'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQCQ.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:400;font-display:swap;src:local('Libre Baskerville'),local('LibreBaskerville-Regular'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxY.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:700;font-display:swap;src:local('Libre Baskerville Bold'),local('LibreBaskerville-Bold'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcU.ttf\") format('truetype')}.blue.buttons._ngcontent-%ID% > .ui.button._ngcontent-%ID%{background-color:#FD632F!important}.blue.buttons._ngcontent-%ID% > .ui.button:hover._ngcontent-%ID%{background-color:#f74002!important}.blue.buttons._ngcontent-%ID% > .ui.button:active._ngcontent-%ID%{background-color:#dd3902!important}"];
    }
  });
  dart.defineLazy(project_list_component$46css$46shim, {
    /*project_list_component$46css$46shim.styles*/get styles() {
      return ["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css\"); @import url(\"https://code.cdn.mozilla.net/fonts/fira.css\");@font-face {font-family:'Material Icons';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf\") format('truetype')}.material-icons._ngcontent-%ID%{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2Rm.ttf\") format('truetype')}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:700;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4Omb2Rm.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:italic;font-weight:400;font-display:swap;src:local('Libre Baskerville Italic'),local('LibreBaskerville-Italic'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQCQ.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:400;font-display:swap;src:local('Libre Baskerville'),local('LibreBaskerville-Regular'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxY.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:700;font-display:swap;src:local('Libre Baskerville Bold'),local('LibreBaskerville-Bold'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcU.ttf\") format('truetype')}@media screen AND (min-width:800px){.hide-on-mobile._ngcontent-%ID%{display:none!important}}@media screen AND (max-width:799px){.hide-on-desktop._ngcontent-%ID%{display:none!important}}#parent._ngcontent-%ID%{margin:-20px auto 30px;width:900px}#socials._ngcontent-%ID%{width:200px;margin-left:100px}"];
    }
  });
  project$46template.initReflector = function initReflector$4() {
  };
  hero_component$46template.ViewHeroComponent0 = class ViewHeroComponent0 extends app_view.AppView$(hero_component.HeroComponent) {
    static get _debugComponentUrl() {
      return dart.test(optimizations.isDevMode) ? "asset:periodicaidan/lib/src/components/hero/hero_component.dart" : null;
    }
    build() {
      let _rootEl = this.rootEl;
      let parentRenderNode = this.initViewRoot(_rootEl);
      let doc = html.document;
      let _el_0 = dom_helpers.appendElement(doc, parentRenderNode, "header");
      this.updateChildClass(html.HtmlElement._check(_el_0), "ui inverted vertical center aligned segment");
      dom_helpers.setAttribute(_el_0, "id", "hero");
      this.addShimE(_el_0);
      let _el_1 = dom_helpers.appendElement(doc, _el_0, "nav");
      this.updateChildClass(html.HtmlElement._check(_el_1), "ui huge secondary inverted pointing menu");
      this.addShimE(_el_1);
      let _el_2 = dom_helpers.appendDiv(doc, _el_1);
      this.updateChildClass(_el_2, "ui container hide-on-mobile");
      this.addShimC(_el_2);
      let _el_3 = dom_helpers.appendElement(doc, _el_2, "a");
      this.updateChildClass(html.HtmlElement._check(_el_3), "active item");
      dom_helpers.setAttribute(_el_3, "data-tooltip", "cd");
      dom_helpers.setAttribute(_el_3, "href", "/");
      this.addShimC(html.HtmlElement._check(_el_3));
      let _text_4 = dom_helpers.appendText(_el_3, "guest@github.io");
      let _el_5 = dom_helpers.appendDiv(doc, _el_2);
      this.updateChildClass(_el_5, "right menu");
      this.addShimC(_el_5);
      let _el_6 = dom_helpers.appendElement(doc, _el_5, "a");
      this.updateChildClass(html.HtmlElement._check(_el_6), "item");
      dom_helpers.setAttribute(_el_6, "href", "#");
      this.addShimC(html.HtmlElement._check(_el_6));
      let _text_7 = dom_helpers.appendText(_el_6, "about");
      let _text_8 = dom_helpers.appendText(_el_5, " ");
      let _el_9 = dom_helpers.appendElement(doc, _el_5, "a");
      this.updateChildClass(html.HtmlElement._check(_el_9), "item");
      dom_helpers.setAttribute(_el_9, "href", "#");
      this.addShimC(html.HtmlElement._check(_el_9));
      let _text_10 = dom_helpers.appendText(_el_9, "resume");
      let _text_11 = dom_helpers.appendText(_el_5, " ");
      let _text_12 = dom_helpers.appendText(_el_5, " ");
      let _el_13 = dom_helpers.appendElement(doc, _el_5, "a");
      this.updateChildClass(html.HtmlElement._check(_el_13), "item");
      dom_helpers.setAttribute(_el_13, "href", "#");
      this.addShimC(html.HtmlElement._check(_el_13));
      let _text_14 = dom_helpers.appendText(_el_13, "contact");
      let _el_15 = dom_helpers.appendDiv(doc, _el_0);
      this.updateChildClass(_el_15, "ui text");
      this.addShimC(_el_15);
      let _el_16 = dom_helpers.appendElement(doc, _el_15, "h1");
      this.updateChildClass(html.HtmlElement._check(_el_16), "ui inverted header");
      this.addShimE(_el_16);
      let _el_17 = dom_helpers.appendElement(doc, _el_16, "code");
      this.addShimE(_el_17);
      let _text_18 = dom_helpers.appendText(_el_17, "Aidan T. Manning");
      let _el_19 = dom_helpers.appendDiv(doc, _el_16);
      this.updateChildClass(_el_19, "ui sub header");
      this.addShimC(_el_19);
      let _text_20 = dom_helpers.appendText(_el_19, "An Overview");
      this.init0();
    }
    initComponentStyles() {
      let styles = hero_component$46template.ViewHeroComponent0._componentStyles;
      if (styles == null) {
        hero_component$46template.ViewHeroComponent0._componentStyles = styles = hero_component$46template.ViewHeroComponent0._componentStyles = style_encapsulation.ComponentStyles.scoped(hero_component$46template.styles$HeroComponent, hero_component$46template.ViewHeroComponent0._debugComponentUrl);
      }
      this.componentStyles = styles;
    }
  };
  (hero_component$46template.ViewHeroComponent0.new = function(parentView, parentIndex) {
    hero_component$46template.ViewHeroComponent0.__proto__.new.call(this, view_type.ViewType.component, parentView, parentIndex, 3);
    this.initComponentStyles();
    this.rootEl = html.HtmlElement._check(html.document[$createElement]("hero"));
  }).prototype = hero_component$46template.ViewHeroComponent0.prototype;
  dart.addTypeTests(hero_component$46template.ViewHeroComponent0);
  dart.setLibraryUri(hero_component$46template.ViewHeroComponent0, "package:periodicaidan/src/components/hero/hero_component.template.dart");
  dart.defineLazy(hero_component$46template.ViewHeroComponent0, {
    /*hero_component$46template.ViewHeroComponent0._componentStyles*/get _componentStyles() {
      return null;
    },
    set _componentStyles(_) {}
  });
  const _compView_0$2 = dart.privateName(hero_component$46template, "_compView_0");
  const _HeroComponent_0_5$ = dart.privateName(hero_component$46template, "_HeroComponent_0_5");
  hero_component$46template._ViewHeroComponentHost0 = class _ViewHeroComponentHost0 extends app_view.AppView$(hero_component.HeroComponent) {
    build() {
      this[_compView_0$2] = new hero_component$46template.ViewHeroComponent0.new(this, 0);
      this.rootEl = this[_compView_0$2].rootEl;
      this[_HeroComponent_0_5$] = new hero_component.HeroComponent.new();
      this[_compView_0$2].create(this[_HeroComponent_0_5$], this.projectedNodes);
      this.init1(this.rootEl);
      return new (ComponentRefOfHeroComponent()).new(0, this, this.rootEl, this[_HeroComponent_0_5$]);
    }
    detectChangesInternal() {
      this[_compView_0$2].detectChanges();
    }
    destroyInternal() {
      this[_compView_0$2].destroyInternalState();
    }
  };
  (hero_component$46template._ViewHeroComponentHost0.new = function(parentView, parentIndex) {
    this[_compView_0$2] = null;
    this[_HeroComponent_0_5$] = null;
    hero_component$46template._ViewHeroComponentHost0.__proto__.new.call(this, view_type.ViewType.host, parentView, parentIndex, 3);
    ;
  }).prototype = hero_component$46template._ViewHeroComponentHost0.prototype;
  dart.addTypeTests(hero_component$46template._ViewHeroComponentHost0);
  dart.setLibraryUri(hero_component$46template._ViewHeroComponentHost0, "package:periodicaidan/src/components/hero/hero_component.template.dart");
  dart.setFieldSignature(hero_component$46template._ViewHeroComponentHost0, () => ({
    __proto__: dart.getFields(hero_component$46template._ViewHeroComponentHost0.__proto__),
    [_compView_0$2]: dart.fieldType(hero_component$46template.ViewHeroComponent0),
    [_HeroComponent_0_5$]: dart.fieldType(hero_component.HeroComponent)
  }));
  hero_component$46template.viewFactory_HeroComponentHost0 = function viewFactory_HeroComponentHost0(parentView, parentIndex) {
    return new hero_component$46template._ViewHeroComponentHost0.new(parentView, parentIndex);
  };
  hero_component$46template.initReflector = function initReflector$5() {
    if (dart.test(hero_component$46template._visited)) {
      return;
    }
    hero_component$46template._visited = true;
    reflector.registerComponent(dart.wrapType(hero_component.HeroComponent), hero_component$46template.HeroComponentNgFactory);
    angular$46template.initReflector();
  };
  dart.copyProperties(hero_component$46template, {
    get HeroComponentNgFactory() {
      return hero_component$46template._HeroComponentNgFactory;
    }
  });
  let C12;
  let C11;
  dart.defineLazy(hero_component$46template, {
    /*hero_component$46template.styles$HeroComponent*/get styles$HeroComponent() {
      return [hero_component$46css$46shim.styles];
    },
    /*hero_component$46template._HeroComponentNgFactory*/get _HeroComponentNgFactory() {
      return C11 || CT.C11;
    },
    /*hero_component$46template.styles$HeroComponentHost*/get styles$HeroComponentHost() {
      return C2 || CT.C2;
    },
    /*hero_component$46template._visited*/get _visited() {
      return false;
    },
    set _visited(_) {}
  });
  dart.defineLazy(hero_component$46css$46shim, {
    /*hero_component$46css$46shim.styles*/get styles() {
      return ["@import url(\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css\"); @import url(\"https://code.cdn.mozilla.net/fonts/fira.css\");@font-face {font-family:'Material Icons';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/materialicons/v48/flUhRq6tzZclQEJ-Vdg-IuiaDsNZ.ttf\") format('truetype')}.material-icons._ngcontent-%ID%{font-family:'Material Icons';font-weight:normal;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:400;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmb2Rm.ttf\") format('truetype')}@font-face {font-family:'Roboto Slab';font-style:normal;font-weight:700;src:url(\"https://fonts.gstatic.com/s/robotoslab/v10/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoa4Omb2Rm.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:italic;font-weight:400;font-display:swap;src:local('Libre Baskerville Italic'),local('LibreBaskerville-Italic'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKhZrc3Hgbbcjq75U4uslyuy4kn0qNcWxEQCQ.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:400;font-display:swap;src:local('Libre Baskerville'),local('LibreBaskerville-Regular'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKnZrc3Hgbbcjq75U4uslyuy4kn0qNZaxY.ttf\") format('truetype')}@font-face {font-family:'Libre Baskerville';font-style:normal;font-weight:700;font-display:swap;src:local('Libre Baskerville Bold'),local('LibreBaskerville-Bold'),url(\"https://fonts.gstatic.com/s/librebaskerville/v7/kmKiZrc3Hgbbcjq75U4uslyuy4kn0qviTgY3KcU.ttf\") format('truetype')}code._ngcontent-%ID%{font-family:\"Fira Code\",\"Fira Mono\",Monaco,monospace!important}#hero._ngcontent-%ID%{height:700px;background:linear-gradient(rgba(22,17,44,0.3),rgba(22,17,44,0.8)),url(\"assets/vaporwaveshit.jpg\") no-repeat fixed center top;background-size:cover}.ui.text._ngcontent-%ID%{margin-top:250px}nav._ngcontent-%ID%{font-family:\"Fira Code\",\"Fira Mono\",Monaco,monospace!important}@media screen AND (min-width:800px){.hide-on-mobile._ngcontent-%ID%{display:none}}@media screen AND (max-width:799px){.hide-on-desktop._ngcontent-%ID%{display:none}}"];
    }
  });
  dart.trackLibraries("packages/periodicaidan/app_component.template", {
    "package:periodicaidan/src/components/footer/footer_component.template.dart": footer_component$46template,
    "package:periodicaidan/src/components/footer/footer_component.css.shim.dart": footer_component$46css$46shim,
    "package:periodicaidan/src/objects/external.template.dart": external$46template,
    "package:periodicaidan/src/objects/socials.template.dart": socials$46template,
    "package:periodicaidan/app_component.template.dart": app_component$46template,
    "package:periodicaidan/src/components/project_list/project_list_component.template.dart": project_list_component$46template,
    "package:periodicaidan/src/components/socials/socials_component.template.dart": socials_component$46template,
    "package:periodicaidan/src/components/socials/socials_component.css.shim.dart": socials_component$46css$46shim,
    "package:periodicaidan/src/components/project_list/project_list_component.css.shim.dart": project_list_component$46css$46shim,
    "package:periodicaidan/src/objects/project.template.dart": project$46template,
    "package:periodicaidan/src/components/hero/hero_component.template.dart": hero_component$46template,
    "package:periodicaidan/src/components/hero/hero_component.css.shim.dart": hero_component$46css$46shim
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/components/footer/footer_component.template.dart","src/components/footer/footer_component.css.shim.dart","src/objects/external.template.dart","src/objects/socials.template.dart","app_component.template.dart","src/components/project_list/project_list_component.template.dart","src/components/socials/socials_component.template.dart","src/components/socials/socials_component.css.shim.dart","src/components/project_list/project_list_component.css.shim.dart","src/objects/project.template.dart","src/components/hero/hero_component.template.dart","src/components/hero/hero_component.css.shim.dart"],"names":[],"mappings":"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","file":"app_component.template.ddc.js"}');
  // Exports:
  return {
    src__components__footer__footer_component$46template: footer_component$46template,
    src__components__footer__footer_component$46css$46shim: footer_component$46css$46shim,
    src__objects__external$46template: external$46template,
    src__objects__socials$46template: socials$46template,
    app_component$46template: app_component$46template,
    src__components__project_list__project_list_component$46template: project_list_component$46template,
    src__components__socials__socials_component$46template: socials_component$46template,
    src__components__socials__socials_component$46css$46shim: socials_component$46css$46shim,
    src__components__project_list__project_list_component$46css$46shim: project_list_component$46css$46shim,
    src__objects__project$46template: project$46template,
    src__components__hero__hero_component$46template: hero_component$46template,
    src__components__hero__hero_component$46css$46shim: hero_component$46css$46shim
  };
});

//# sourceMappingURL=app_component.template.ddc.js.map
