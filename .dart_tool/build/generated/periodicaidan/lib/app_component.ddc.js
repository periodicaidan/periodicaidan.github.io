define(['dart_sdk', 'packages/periodicaidan/src/components/footer/footer_component'], function(dart_sdk, packages__periodicaidan__src__components__footer__footer_component) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const project = packages__periodicaidan__src__components__footer__footer_component.src__objects__project;
  const app_component = Object.create(dart.library);
  let JSArrayOfProject = () => (JSArrayOfProject = dart.constFn(_interceptors.JSArray$(project.Project)))();
  const CT = Object.create(null);
  const projects = dart.privateName(app_component, "AppComponent.projects");
  app_component.AppComponent = class AppComponent extends core.Object {
    get projects() {
      return this[projects];
    }
    set projects(value) {
      this[projects] = value;
    }
  };
  (app_component.AppComponent.new = function() {
    this[projects] = JSArrayOfProject().of([]);
  }).prototype = app_component.AppComponent.prototype;
  dart.addTypeTests(app_component.AppComponent);
  dart.setLibraryUri(app_component.AppComponent, "package:periodicaidan/app_component.dart");
  dart.setFieldSignature(app_component.AppComponent, () => ({
    __proto__: dart.getFields(app_component.AppComponent.__proto__),
    projects: dart.fieldType(core.List$(project.Project))
  }));
  dart.trackLibraries("packages/periodicaidan/app_component", {
    "package:periodicaidan/app_component.dart": app_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_component.dart"],"names":[],"mappings":";;;;;;;;;;;;IAwBgB;;;;;;;;qBAAW;EAIzB","file":"app_component.ddc.js"}');
  // Exports:
  return {
    app_component: app_component
  };
});

//# sourceMappingURL=app_component.ddc.js.map
