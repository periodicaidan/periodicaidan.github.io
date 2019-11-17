define(['dart_sdk', 'packages/http/http', 'packages/http/src/base_client', 'packages/angular/src/core/change_detection/change_detection'], function(dart_sdk, packages__http__http, packages__http__src__base_client, packages__angular__src__core__change_detection__change_detection) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__http.http;
  const response = packages__http__src__base_client.src__response;
  const lifecycle_hooks = packages__angular__src__core__change_detection__change_detection.src__core__metadata__lifecycle_hooks;
  const project$ = Object.create(dart.library);
  const socials_component = Object.create(dart.library);
  const socials = Object.create(dart.library);
  const external = Object.create(dart.library);
  const footer_component = Object.create(dart.library);
  const project_list_component = Object.create(dart.library);
  const hero_component = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $open = dartx.open;
  const $add = dartx.add;
  const $target = dartx.target;
  const $classes = dartx.classes;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOrOfMapOfString$dynamic = () => (FutureOrOfMapOfString$dynamic = dart.constFn(async.FutureOr$(MapOfString$dynamic())))();
  let ResponseToFutureOrOfMapOfString$dynamic = () => (ResponseToFutureOrOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOrOfMapOfString$dynamic(), [response.Response])))();
  let JSArrayOfSocial = () => (JSArrayOfSocial = dart.constFn(_interceptors.JSArray$(socials.Social)))();
  let JSArrayOfProject = () => (JSArrayOfProject = dart.constFn(_interceptors.JSArray$(project$.Project)))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let JSArrayOfMapOfString$String = () => (JSArrayOfMapOfString$String = dart.constFn(_interceptors.JSArray$(MapOfString$String())))();
  let ProjectToNull = () => (ProjectToNull = dart.constFn(dart.fnType(core.Null, [project$.Project])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: socials.Social.prototype,
        [icon$]: "github",
        [link$]: "https://github.com/periodicaidan",
        [name$0]: "GitHub"
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: socials.Social.prototype,
        [icon$]: "twitter",
        [link$]: "https://twitter.com/periodicaidan",
        [name$0]: "Twitter"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: socials.Social.prototype,
        [icon$]: "mail",
        [link$]: "mailto:periodicaidan@gmail.com",
        [name$0]: "Email"
      });
    }
  });
  const name$ = dart.privateName(project$, "Project.name");
  const description$ = dart.privateName(project$, "Project.description");
  const imageUrl$ = dart.privateName(project$, "Project.imageUrl");
  const codeUrl$ = dart.privateName(project$, "Project.codeUrl");
  const demoUrl$ = dart.privateName(project$, "Project.demoUrl");
  project$.Project = class Project extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get imageUrl() {
      return this[imageUrl$];
    }
    set imageUrl(value) {
      super.imageUrl = value;
    }
    get codeUrl() {
      return this[codeUrl$];
    }
    set codeUrl(value) {
      super.codeUrl = value;
    }
    get demoUrl() {
      return this[demoUrl$];
    }
    set demoUrl(value) {
      super.demoUrl = value;
    }
    get hasDemo() {
      return this.demoUrl[$isNotEmpty];
    }
    static github(repoName, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let imageUrl = opts && 'imageUrl' in opts ? opts.imageUrl : "";
      let demoUrl = opts && 'demoUrl' in opts ? opts.demoUrl : "";
      return async.async(project$.Project, function* github() {
        let t0;
        let codeUrl = "https://github.com/periodicaidan/" + dart.str(repoName);
        let githubApiUrl = "https://api.github.com/repos/periodicaidan/" + dart.str(repoName);
        let repo = (yield http.get(githubApiUrl).then(MapOfString$dynamic(), dart.fn(res => FutureOrOfMapOfString$dynamic()._check(convert.json.decode(res.body)), ResponseToFutureOrOfMapOfString$dynamic())));
        name = (t0 = name, t0 == null ? repoName : t0);
        let description = core.String._check(repo[$_get]("description"));
        return new project$.Project.new(name, description, imageUrl, codeUrl, demoUrl);
      });
    }
    openSourceCodeInNewTab() {
      html.window[$open](this.codeUrl, "_blank");
    }
  };
  (project$.Project.new = function(name, description, imageUrl, codeUrl, demoUrl) {
    this[name$] = name;
    this[description$] = description;
    this[imageUrl$] = imageUrl;
    this[codeUrl$] = codeUrl;
    this[demoUrl$] = demoUrl;
    ;
  }).prototype = project$.Project.prototype;
  dart.addTypeTests(project$.Project);
  dart.setMethodSignature(project$.Project, () => ({
    __proto__: dart.getMethods(project$.Project.__proto__),
    openSourceCodeInNewTab: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(project$.Project, () => ({
    __proto__: dart.getGetters(project$.Project.__proto__),
    hasDemo: core.bool
  }));
  dart.setLibraryUri(project$.Project, "package:periodicaidan/src/objects/project.dart");
  dart.setFieldSignature(project$.Project, () => ({
    __proto__: dart.getFields(project$.Project.__proto__),
    name: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    imageUrl: dart.finalFieldType(core.String),
    codeUrl: dart.finalFieldType(core.String),
    demoUrl: dart.finalFieldType(core.String)
  }));
  const socials$ = dart.privateName(socials_component, "SocialsComponent.socials");
  socials_component.SocialsComponent = class SocialsComponent extends core.Object {
    get socials() {
      return this[socials$];
    }
    set socials(value) {
      super.socials = value;
    }
    ngOnInit() {
      dart.global.Semantic.setSticky();
      html.window.resizeBy(0, 0);
    }
  };
  (socials_component.SocialsComponent.new = function() {
    this[socials$] = JSArrayOfSocial().of([socials.github, socials.email, socials.twitter]);
    ;
  }).prototype = socials_component.SocialsComponent.prototype;
  dart.addTypeTests(socials_component.SocialsComponent);
  socials_component.SocialsComponent[dart.implements] = () => [lifecycle_hooks.OnInit];
  dart.setMethodSignature(socials_component.SocialsComponent, () => ({
    __proto__: dart.getMethods(socials_component.SocialsComponent.__proto__),
    ngOnInit: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(socials_component.SocialsComponent, "package:periodicaidan/src/components/socials/socials_component.dart");
  dart.setFieldSignature(socials_component.SocialsComponent, () => ({
    __proto__: dart.getFields(socials_component.SocialsComponent.__proto__),
    socials: dart.finalFieldType(core.List$(socials.Social))
  }));
  const name$0 = dart.privateName(socials, "Social.name");
  const link$ = dart.privateName(socials, "Social.link");
  const icon$ = dart.privateName(socials, "Social.icon");
  socials.Social = class Social extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get link() {
      return this[link$];
    }
    set link(value) {
      super.link = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      super.icon = value;
    }
  };
  (socials.Social.new = function(name, link, icon) {
    this[name$0] = name;
    this[link$] = link;
    this[icon$] = icon;
    ;
  }).prototype = socials.Social.prototype;
  dart.addTypeTests(socials.Social);
  dart.setLibraryUri(socials.Social, "package:periodicaidan/src/objects/socials.dart");
  dart.setFieldSignature(socials.Social, () => ({
    __proto__: dart.getFields(socials.Social.__proto__),
    name: dart.finalFieldType(core.String),
    link: dart.finalFieldType(core.String),
    icon: dart.finalFieldType(core.String)
  }));
  let C0;
  let C1;
  let C2;
  dart.defineLazy(socials, {
    /*socials.github*/get github() {
      return C0 || CT.C0;
    },
    /*socials.twitter*/get twitter() {
      return C1 || CT.C1;
    },
    /*socials.email*/get email() {
      return C2 || CT.C2;
    }
  });
  footer_component.FooterComponent = class FooterComponent extends core.Object {
    currentYear() {
      let today = new core.DateTime.now();
      return today.year;
    }
  };
  (footer_component.FooterComponent.new = function() {
    ;
  }).prototype = footer_component.FooterComponent.prototype;
  dart.addTypeTests(footer_component.FooterComponent);
  dart.setMethodSignature(footer_component.FooterComponent, () => ({
    __proto__: dart.getMethods(footer_component.FooterComponent.__proto__),
    currentYear: dart.fnType(core.int, [])
  }));
  dart.setLibraryUri(footer_component.FooterComponent, "package:periodicaidan/src/components/footer/footer_component.dart");
  const projects$ = dart.privateName(project_list_component, "ProjectListComponent.projects");
  project_list_component.ProjectListComponent = class ProjectListComponent extends core.Object {
    get projects() {
      return this[projects$];
    }
    set projects(value) {
      this[projects$] = value;
    }
    onMouseEnter(event) {
      let target = html.HtmlElement.as(event[$target]);
      target[$classes].add("raised");
    }
    onMouseLeave(event) {
      let target = html.HtmlElement.as(event[$target]);
      target[$classes].remove("raised");
    }
  };
  (project_list_component.ProjectListComponent.new = function() {
    this[projects$] = JSArrayOfProject().of([]);
    let projects = JSArrayOfMapOfString$String().of([new (IdentityMapOfString$String()).from(["repo", "dart_tdlib", "name", "TDLib for Dart"]), new (IdentityMapOfString$String()).from(["repo", "meme", "name", "Mobile Enigma Machine Emulator (MEME)"]), new (IdentityMapOfString$String()).from(["repo", "selfishserver", "name", "Selfish Server"]), new (IdentityMapOfString$String()).from(["repo", "reify", "name", "Reify"])]);
    for (let project of projects) {
      project$.Project.github(project[$_get]("repo"), {name: project[$_get]("name")}).then(core.Null, dart.fn(proj => {
        this.projects[$add](proj);
        dart.global.Semantic.refreshSticky();
      }, ProjectToNull()));
    }
  }).prototype = project_list_component.ProjectListComponent.prototype;
  dart.addTypeTests(project_list_component.ProjectListComponent);
  dart.setMethodSignature(project_list_component.ProjectListComponent, () => ({
    __proto__: dart.getMethods(project_list_component.ProjectListComponent.__proto__),
    onMouseEnter: dart.fnType(dart.void, [html.Event]),
    onMouseLeave: dart.fnType(dart.void, [html.Event])
  }));
  dart.setLibraryUri(project_list_component.ProjectListComponent, "package:periodicaidan/src/components/project_list/project_list_component.dart");
  dart.setFieldSignature(project_list_component.ProjectListComponent, () => ({
    __proto__: dart.getFields(project_list_component.ProjectListComponent.__proto__),
    projects: dart.fieldType(core.List$(project$.Project))
  }));
  const header = dart.privateName(hero_component, "HeroComponent.header");
  hero_component.HeroComponent = class HeroComponent extends core.Object {
    get header() {
      return this[header];
    }
    set header(value) {
      super.header = value;
    }
  };
  (hero_component.HeroComponent.new = function() {
    this[header] = "periodicaidan";
    ;
  }).prototype = hero_component.HeroComponent.prototype;
  dart.addTypeTests(hero_component.HeroComponent);
  dart.setLibraryUri(hero_component.HeroComponent, "package:periodicaidan/src/components/hero/hero_component.dart");
  dart.setFieldSignature(hero_component.HeroComponent, () => ({
    __proto__: dart.getFields(hero_component.HeroComponent.__proto__),
    header: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/periodicaidan/src/components/footer/footer_component", {
    "package:periodicaidan/src/objects/project.dart": project$,
    "package:periodicaidan/src/components/socials/socials_component.dart": socials_component,
    "package:periodicaidan/src/objects/socials.dart": socials,
    "package:periodicaidan/src/objects/external.dart": external,
    "package:periodicaidan/src/components/footer/footer_component.dart": footer_component,
    "package:periodicaidan/src/components/project_list/project_list_component.dart": project_list_component,
    "package:periodicaidan/src/components/hero/hero_component.dart": hero_component
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../../objects/project.dart","../socials/socials_component.dart","../../objects/socials.dart","footer_component.dart","../project_list/project_list_component.dart","../hero/hero_component.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAEO,YAAA,AAAQ;IAAU;kBAK7B;UACC;UACD;UACA;AAJoB;;AAMvB,sBAAU,AAA4C,+CAAT,QAAQ;AACrD,2BAAe,AAAsD,yDAAT,QAAQ;AACnD,oBAAO,MAAM,AAC/B,SADwC,YAAY,8BAC/C,QAAC,OAAQ,uCAAA,AAAK,oBAAO,AAAI,GAAD;AAET,QAAvB,QAAY,KAAL,IAAI,QAAJ,OAAQ,QAAQ;AAChB,6CAAc,AAAI,IAAA,QAAC;AAE1B,cAAO,0BAAQ,IAAI,EAAE,WAAW,EAAE,QAAQ,EAAE,OAAO,EAAE,OAAO;MAC9D;;;AAGgC,MAA9B,AAAO,mBAAK,cAAS;IACvB;;mCArBmB,MAAW,aAAkB,UAAe,SAAc;IAA1D;IAAW;IAAkB;IAAe;IAAc;;EAAQ;;;;;;;;;;;;;;;;;;;;;ICElE;;;;;;;AAQG,MAAX;AACY,MAArB,AAAO,qBAAS,GAAG;IACrB;;;IAVmB,iBAAU,sBAC3B,gBACA,eACA;;EAQJ;;;;;;;;;;;;;;;;ICzBe;;;;;;IACA;;;;;;IACA;;;;;;;iCAEK,MAAW,MAAW;IAAtB;IAAW;IAAW;;EAAK;;;;;;;;;;;;;MAGzC,cAAM;;;MACN,eAAO;;;MACP,aAAK;;;;;;ACDH,kBAAiB;AACrB,YAAO,AAAM,MAAD;IACd;;;;EACF;;;;;;;;;ICKgB;;;;;;iBAgCU;AAClB,mBAAsB,oBAAb,AAAM,KAAD;AACU,MAA5B,AAAO,AAAQ,MAAT,eAAa;IACrB;iBAEwB;AAClB,mBAAsB,oBAAb,AAAM,KAAD;AACa,MAA/B,AAAO,AAAQ,MAAT,kBAAgB;IACxB;;;IAxCc,kBAAW;AAGnB,mBAAW,kCACb,yCACE,QAAQ,cACR,QAAQ,oBAEV,yCACE,QAAQ,QACR,QAAQ,2CAEV,yCACE,QAAQ,iBACR,QAAQ,oBAEV,yCACE,QAAQ,SACR,QAAQ;AAIZ,aAAS,UAAW,SAAQ;AAMtB,MALI,AACL,wBADY,AAAO,OAAA,QAAC,gBAAe,AAAO,OAAA,QAAC,0BACtC,QAAC;AACkB,QAAlB,AAAS,oBAAI,IAAI;AAEE,QAAf;;;EAGjB;;;;;;;;;;;;;;ICvCM;;;;;;;;mBAAS;;EACjB","file":"footer_component.ddc.js"}');
  // Exports:
  return {
    src__objects__project: project$,
    src__components__socials__socials_component: socials_component,
    src__objects__socials: socials,
    src__objects__external: external,
    src__components__footer__footer_component: footer_component,
    src__components__project_list__project_list_component: project_list_component,
    src__components__hero__hero_component: hero_component
  };
});

//# sourceMappingURL=footer_component.ddc.js.map
