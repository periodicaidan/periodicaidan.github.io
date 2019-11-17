Portfolio Source Code
===

This is the source code for my [personal portfolio](https://periodicaidan.github.io).

This is made with [AngularDart](https://angulardart.dev/), which is exactly what it sounds like: The Angular frontend framework but written in Dart instead of TypeScript. I chose Angular specifically because I can use it with Dart, and I prefer Dart over JavaScript or TypeScript. I'm not big in to frontend frameworks, but I wanted some experience so I can say I've used one. And a situation where I don't have control over the backend is probably the most compelling case scenario for using one.

The branch structure is a bit odd. GitHub only allows user pages to host from the `master` branch. So I primarily commit source code to the `source` branch, which I've set as the default one, build it into the `deployment` branch locally, push both to GitHub at once, and then merge `deployment` into `master` once I'm pleased enough with the new version.
