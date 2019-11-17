define(['dart_sdk', 'packages/angular/src/bootstrap/modules', 'packages/periodicaidan/app_component', 'packages/periodicaidan/app_component.template'], function(dart_sdk, packages__angular__src__bootstrap__modules, packages__periodicaidan__app_component, packages__periodicaidan__app_component$46template) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const run = packages__angular__src__bootstrap__modules.src__bootstrap__run;
  const app_component = packages__periodicaidan__app_component.app_component;
  const app_component$46template = packages__periodicaidan__app_component$46template.app_component$46template;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  main.main = function main$() {
    run.runApp(app_component.AppComponent, app_component$46template.AppComponentNgFactory);
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;AAIkC,IAAhC,uCAAU;EACZ","file":"main.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
