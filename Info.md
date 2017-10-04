## Live Projects

- [TD Ameritrade](https://www.tdameritrade.com)
- [TD Living Styleguide](https://invest.ameritrade.com/lsg/internal/index.html)
- [Marriot Hotel](http://marriott.com)
- [Marriott Hotel Websites](http://marriott.com/wasss)
- [AOL Advertising](http://advertising.aol.com)
- [AOL Adlearn OP](http://www.adlearnop.com)


## DEV Tools

- **Languges** - Html5, CSS3, Javascript
- **Frameworks** - AngularJs, JQuery, Bootstrap, SASS, MAVO, DrupalCMS
- **Web Accessibility** - WAVE, NVDA, Chromevox. 
- **Build** - Gulp, Jenkins
- **Packages** - Browserify, UglifyJs2, Pug/Jade, JSHint, CSSLint, CssNano, autoprefixer
- **VCS** - Git, SVN
- **Coding/Command line** - Sublime, Bracket, Emmet, Console2, GIT bash
 - **Miscellaneous** - Jira (Project/bug tracking), Crucible (Code Review), Trello (Agile Sprint Board),

## Research

- [CSS blog](http://css-weekly.com/issue-273)
- [html5 blog](https://frontendfoc.us/issues)
- [Javascript blog](http://javascriptweekly.com/issues/333)
- [Smashing Magazine](https://www.smashingmagazine.com)
- [API](https://www.programmableweb.com)
- [API Directory](https://www.programmableweb.com/apis/directory)
- *Others** - css-tricks, sixrevisions, techcrunch, sitepoint, tutsplus, techrepublic, geek.com

// 
- MobileAppDev
- Prototyper and supersonic by appgyver, firebase, Sencha/Appcelerator, intel XDK, Phonegap/Cordova

//
- Rem implementation strategy
- This will be used for web elements that can change with browser resizing
- Add Rem to root
- create Rem mixin
- modify all pix definitions using mixin in .styl files
- Pixel perfect - Actual dimension remains the same in all browser sizes
- fluid-elastic - Actual dimension changes with browser resizing

//
- Javascript
- Workshops -  http://nodeschool.io/#workshoppers
- Online Books/Tutorials - [Angular 4 - From Theory to Practice](https://codecraft.tv/courses/angular/quickstart/overview/), http://speakingjs.com/es5/index.html, http://jstherightway.org, http://www.webmonkey.com/tutorials, http://www.xul.fr/javascript/, http://addyosmani.com/resources/essentialjsdesignpatterns/book/ https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- Books (on 4shared)- Pragmatic Programmer, javascript design pettern by Addy osmani(link above under online tutorial), JavaScript: The Good Parts, Pro JavaScript Design Patterns
- Js interview questions - stackoverflow.com/questions/1684917/what-questions-should-a-javascript-programmer-be-able-to-answer
- Javascript code should always be minified and obfuscated before deployment for security reasons.
- undefine vs null. [var foo; console.log(typeof(foo)); ==> *Undefined*]; [var foo=null; console.log(typeof(foo)); ==> *object*]; [var foo=0; console.log(typeof(foo)); ==> *number*]; [var foo=""; console.log(typeof(foo)); ==> *string*]. undefine(variable declared but not assigned) vs null(variable declared and assigned a value of "null")
- Hoisting is a concept in Javascript that moves all variables to the top of the code before other part of the execution proceeds. Which means you can make reference to a variable before it is declared(or declared down the line), without getting an exception.
- Due to lexical scoping, any function in Javascript can be a closure and it does not have to only be an inner function. Closures are functions that remember the variables passed to them from their external environment or function. Meaning those variables are preserved and can be referenced again and again unlike local variables which are deleted when execution completes. 
- Private functions vs closures - Closures usually maintains a link to a variable from their parent function while in a private funtion, all variables are localized and does not have any link to the variable from its parent function. [function fa() { var a; function fb() {a+1}; return fb} ==> *fb is a Closure*]; [function fa() { var a; function fb() {var b; b+1}; return fb} ==> *fb is a Private Function*]
- [Promises vs Callback](https://scotch.io/tutorials/javascript-promises-for-dummies) - Similarities => Callback functions are useful for single threaded asynchronous operations that nest those functions within one another as parameters. You pass the result of one operation as a argument. Promises lets you improve on such operation by writing your code as if they are sychronous operation. Differences => Promises provides more manageable code(using keywords like resolve, reject, then and catch) over callbacks and promises makes it smooth and easy to catch errors at every step when one of the promises are rejected and can perform a separate operation based on the caught error.
- Immediately invoked function Expression [(IIFE)](http://adripofjavascript.com/blog/drips/an-introduction-to-iffes-immediately-invoked-function-expressions.html) are functions that are self-executing anonymous functions, without any call made to them. IIFE are very useful for data privacy so as to protect any interference from other external funtions. They also prevent their variable from being hoisted in a global space.
- JSON (referred to as JS Object Notation) is an Object/array format for storing and sharing data between browser and server.
- AJAX vs REST - (1. Request) Ajax makes request to server for part of DOM or some data While REST most often requests just data and web services. (2. Response) Whatever response AJAX gets is targeted for DOM update while REST response result can be transversed and used in anyway desired. (3. Implementaion) REST can be implemented through multiple ways or protocols but if using HTTP, Ajax is usually the preferred technique to go by, especially if it is for the web. (4. Methods) Unlike REST which uses POST, GET, PUT and DELETE, Ajax uses just the POST and GET method.(5. Consumption) Ajax is mostly consumed by the client(end user) while REST is mostly consumed by other developers for their software.
- Asynchronous request lets the app continue processing other activities while it waits for feedback(informed through call back) about its request to the server.  While Synchronous halts other processes until its request to the serve is complete.


// API and REST API
 - API is a communication interface for two applications. Through it(API), Third parties can write programs that interface easily with other companies data and services.
 - Say for example that I need to consume a vendor's data/web services within my application software so I can make it useful for my clients, I'll need to go find that vendor's api and its supporting documentation to help me properly implement it within With my application through their resource url and httpRequest( like GET in this case). Also lets say I want to promote my company's business data or business services within other vendors application, all I need is to just create an api(interface)  and supporting documentation to help those other vendors consume my business data or services within their application. 
- With cloud use on the rise, **APIs are emerging to expose web services. Keep in mind that your target users when developing APIs are other developers that want to consume the data and web services that you expose to them through the API**. REST is a logical choice for building APIs that allow users to connect and interact with cloud services. 
 - Through API you can expose data like company store locations/listing, product inventory, order status, social interactions, etc. And also expose services that are repeatable business tasks like check customer credit, open new account, etc **This provides the opportunity to promote a company and its assets through other developer's application**.
 - Frameworks/languages to design/document (or build/sync) the api endpoint with data from your application include but not limited to NodeJs-ExpressJS, Python Django, Microsoft's WebAPI, Swagger, .Net Nancy, Ruby Sinatra, PHP Slim, Zend Apigility.
 - Such APIs can be accessed and consumed through any language/framework that can make http Request to/from the server.
 - A REST API, also referred to as a RESTful web service -- is based on REpresentational State Transfer (REST) technology, an architectural style and approach to communications often used in web services development through the use of uri's and HTTP request(Could be other protocols but mainly http). The URI should only be identifying the nouns(data entities) while the HTTP request handles the verbs(POST, GET, PUT, DELETE).
- REST means encoding which entity you want to retrieve or manipulate in the URL itself (usually via an ID) and encoding what action you want to perform on it in the HTTP method used (POST for Creating, GET for Retrieving, PUT for Updating, DELETE for Deleting).
 - Only POST is non-idempotent, meaning it does NOT produce the same result at the endpoint when multiple requests are sent for the same resource but it instead creates separate multiple endpoint results.
 - Idempotency requirement states that system must be designed in a way that they can consume the same resource multiple times without causing a stale or invalid state.
 - You can implement REST API through any language that can make http request to the server through the following algorithmic process:
 Have a resource url that points to the endpoint and review its accompanying documentation. The url should contain the resource path and maybe parameters to trim down the result. These parameters can also be passed to the resource url through a form input and parsed in the code as part of the url. Make an http request to the server to locate the endpoint and perform a CRUD operation through this HttpRequest verbs (GET,POST,PUT,DELETE) depending on what you intend to do. You can transverse the result whichever way you want in the code and output the result to the UI or insert it into the url for other API call.
-  To implement REST through Angular 4, import the HttpClientModule into App module, import HttpClient into AppComponent or preferred component, invoke ngOnInit, create the http GET or POST request, this returns an observable which can be subscribed to by an observer function to transverse the returned data whichever way you want.
 - AJAX vs REST - Ajax is a web technique, REST is an architectural style. REST is not protocol-specific but AJAX is an HTTP technique. AJAX is one of those techniques by which access to a REST API can be implemented through HttpRequest (through the HTTP protocol)
 - SOAP vs REST - SOAP is a protocol whicle REST is an architectural style. Caching is possible with REST not SOAP. REST is more of a Web service while SOAP is more of SOAP services. Instead of comparing it to a protocol, it is better to compare REST to RPC which is an architectural style that SOAP-services most often defaults to. RPC - Remote Procedure Call.
 
 [Read More](https://softwareengineering.stackexchange.com/questions/205999/when-to-use-rest-to-handle-requests-vs-using-ajax-to-handle-requests) 
- [API](https://www.programmableweb.com)
- [API Directory](https://www.programmableweb.com/apis/directory)
- API Tools - Chrome plugin extension (JSON formatter and postman), http://jsonplaceholder.typicode.com/, 


// Angular 4
- Angular is the plaform for building fast, scalable apps. In Angular, the class Logics are decoupled(or loosely coupled) from the template through its MVC framework. This decoupling makes the application to be unit testable.
- Angular Component = Directives + Template (through data binding and the metadata decorator). Directives = Class logics + Selector metaddata. Class logic most often handles the Model/Controller logics. Other parts of Angular are Services, Router. Use angularCLI to manage your project.
- Angular 4 is an upgrade from Angular 2. But 2 was a complete re-write of Angular 1.x aka AngularJS. 
- What has changed from Angular 1.x to Angular 2(4) - Component not controller, bootstrap not ng-app, ngFor not ngRepeat, is faster, is class-based. Typescript not Javascript, module imports as needed.
- Typescript is preferred because it is easier to read and refactor for large projects(Class-based), Easier to debug(strongly typed), has class-inheritance not prototypical inheritance and has decorators. 
- Decorators (functions that modifies other functions without impacting the original code block).
- An entire Angular 4 project are bootstrapped through main.ts to run in the browser. main.ts [points to] > appModule [which registers, declare all components and imports other modules] > all the Component class used in the project [then app.component.ts uses the metadata like selector, templateUrl, styleUrls annotations points to] > <approot> element in index.html, custom markups in app.component.html and appp.component.css respectively
- The angular CLI helps to manage the entire project from app installation to running the localhost server and build for dev/prod.
- Module - Modules are utility logics with a set of  related funtionalities. They are usually imported from the angular packages when required for the component.
- Component - A component is an encapsulation of template, model and typescript class that are exposed to the Angular application through a component decorator  and metadata. In otherwords, Components contain the HTML template view, behavior logic and data model. Every angular application contains at least one component called the root component. Components sometimes contain multiple smaller more manageable components.
- Directives - These are instructions in the DOM used to modify elements and/or extend their behaviors. It extends HTML INTO the web application that it really should be. Directives can be structural directives to alter the DOM or can be attribute directives to alter appearance and behavior. While some are native to Angular, custom directives can also be created.
- Services - Almost anything can be a service. A service is simply a class with a narrow, well-defined purpose that has nothing to do with the view or UI. It should do something specific and do it well. For example - logging service, http service, validation service, data caching, application configuration, etc.  Components are big consumers of services. Component classes should be lean. They don’t fetch data from the server, validate user input, store browser data(cache) or log directly to the console. They delegate such tasks to services. Typically a component should only deal with the user experience and the display of properties and use services to perform heavy behind the scenes operations.
- Routers - Handles single page navigation through url hash fragments.
- Other features and services - Data binding, Templates, Metadata, Routers, Pipes(formerly filters)
- Data binding - Handles communication between the component and the view. Synchronize data between Model and View - two-way binding, property binding, event binding and String interpolation
- Templates - This is the part that the client sees. Dynamically update the view with changing contents
- Dependency injection - Pull in required services into the controller before they become available to the component.
- Observables is a wrapper around a stream of data. It uses the observer to execute some code when a particular stream of data is received. The observer need to subscribe to the observable stream of invent in order for the observer to be triggered.
- ngOnInit() is invoked only once and that is right after the first instantiation of a directive's data-bound properties and before any of its children have been checked. ngAfterViewInit() is invoked after a component's view, and its children's views has been fully instantiated. 
 - ngOnInit vs Construtor() - constructor() is a default method of Typescript class while ngOnInit is usually implemented with Angular lifecycle hook(onInit which is imported from the Angular core module). The constructor method is like you are instantiating a new class from the parent class. When using this two in Angular, it is better to do every initialization/declaration in the ngOnInit and reserve the constructor method for service calls. This makes debugging easier.
 - Understanding AOT Compilation through Build with AOT vs Build without AOT - Build without AOT leads to a situation whereby JIT compiler invoking the angular compiler at run time. Build without AOT handles parsing, transpilation, minification, and bundling.
Build with AOT flag goes further to resolve Angular specific feature tasks that are in the code. Tasks like component-template binding, change detection or dependency injection systems and more so the Angular compiler dont have to be loaded to perform this feature task at run time. Build with AOT removes the Angular compiler and library files from the bundling which helps the browser move straight to creating views at runtime, thereby improving performance and reducing payload size. AOT is baked into the --prod flag in Angular 4.
The ahead-of-time (AOT) compiler can catch template errors early and improve performance by compiling at build time instead of waiting till run time before these are caught. With AOT, the compiler runs once at build time using one set of libraries; with JIT it runs every time for every user at runtime using a different set of libraries. The compiler inlines external HTML templates and CSS style sheets within the application JavaScript, eliminating separate ajax requests for those source files.
https://angular.io/guide/aot-compiler
https://blog.nrwl.io/angular-is-aot-worth-it-8fa02eaf64d4
- Pipes - Used for transforming the view outputs. For example - date pipi, text transform pipe. Multiple pipe is called Pipe Chaining.
- Install nodejs with package manager option >> (anywhere) npm install -g @angular/cli >> (under desired folder path) ng new ProjectFolderName >> cd into ProjectFolderName >> ng serve (or first run "ng install" if "ng serve" doesn't work)
- Angular vs ReactJS - React changes native html attribute names, for example class is classnames while Angular is built on Typescript. Angular is more suitable for companies with big teams, is more scalable, has free open source license unpatented like reactJS, Angular has steeper(greater) learning curve, takers longer development time due to lots of syntax load. There's no best tool, just use what suits company need. If you like simplicity, choose Vue or ReactJS.
- Typescript is a strongly Typed and class-based Javascript.

// URLs (Angular)
- [Angular Schematics explained](https://medium.com/@feloy/creating-your-own-application-template-for-angular-cli-95e22319cc24)
- [ng-packagr for packaging custom libraries](https://medium.com/@ngl817/building-an-angular-4-component-library-with-the-angular-cli-and-ng-packagr-53b2ade0701e)
- [Do more with Angular cli](https://github.com/angular/angular-cli/wiki/stories)
- [Chrome dev tool 2 and lighthouse](https://developers.google.com/web/updates/2017/05/devtools-release-notes#lighthouse)
- [Quick Overview](https://codequs.com/p/Hyvz4TBK/angular-2-tutorial-the-architecture-of-an-angular-2-application/)
- [Quick overview using Dart instead of Typescript](https://webdev.dartlang.org/angular/guide/architecture)
- [AngularJs 1 vs Angular 2](https://thinkster.io/tutorials/differences-between-angular-1-and-2)
- [AngularJs 1 vs Angular 2](https://dzone.com/articles/typed-front-end-with-angular-2)
- [Angular 2 vs Angular 4](https://www.youtube.com/watch?v=qqk1g7CdYIE)
- [Angular 2 vs Angular 4](http://angularjs.blogspot.com/2017/03/angular-400-now-available.html)
- [Detailed Documentation](https://angular.io/)
- [Angular vs Reactjs](https://hackernoon.com/angular-vs-react-the-deal-breaker-7d76c04496bc)
- [CRUD operation](https://www.youtube.com/watch?v=DAUlZO2RALw&t=319s)
- [Angular HTTP testing](https://github.com/angular/angular/issues/18499)
- [Unit testing HttpClient in Angular 4.3 through Jasmine](https://stackoverflow.com/questions/45446680/unit-testing-httpclientmodule-in-angular-4-3-undefined-return-value-from-httpte)


// GIT Commands
- list directories - git ls-files | xargs -n 1 dirname | uniq
- git checkout -f master - Checkout master and lose unstaged changes for current branch
- git stash - store unstaged changes for current branch before changing to another branch or master
- git reset HEAD~  - undo the last commit and leave changes unstaged
- git reset --soft HEAD~  - undo the last commit and leave changes staged
- git add <file or filepath>
- git commit -m "write commit message here"
- git push -u origin branchName (or => push -u origin master ) - Push branch to remote repo. First checkout master before issuing command
- git remote add origin urlToAdd - Add path for remote repo to local repo
- 


//
VsCode

Ctrl+P - navigate to any file or symbol by typing its name
Ctrl+Shift+Tab - cycle through the last set of files opened
Ctrl+Shift+P - go directly to the editor commands
Ctrl+Shift+O - navigate to a specific symbol in a file
Ctrl+G - navigate to a specific line in a file


// 
Cloud Computing

- Google Cloud Compute Engine - It's Iaas, provision multiple private VMs, on a network of systems, having Persistent Disk, with Load balancing, connect and configure as desired, HTTP and JSON API(for Command line tool, developer console and more), develop and run applications with same access to all features, Automated process, distributed systems. 

- Windows Azure -  It's Iaas + Paas together in one, provision and configure the VM infrastratures and Platform services you wish to work with, Quickly create and deploy projects without the rigorous IIS server process, Develop, run, test and publish apps in the azure cloud instead of localhost, customize the azure in visual studio 2015 or 16, specify vms to allocate to scale, review web role settings

//
- VCS / GIT
- Git Setup - http://rogerdudler.github.io/git-guide/, http://git-scm.com/
- GIT Explained - http://readwrite.com/2013/09/30/understanding-github-a-journey-for-beginners-part-1, http://rogerdudler.github.io/git-guide/, http://git-scm.com/

//
- CSS
- Setting up stylus - http://blog.teamtreehouse.com/getting-started-stylus
- vh, vw, vmin, vmax are percentage values relative to the viewport while x% is a percentage value relative to native/natural pixel value of 16px
- http://bricss.net/
- Stylus - http://blog.teamtreehouse.com/getting-started-stylus and https://github.com/stylus/stylus


//
- Links
- Job site- linkedIn, cyberCoders, indeed, careerBuilder, Dice
- Online Tutorials - http://www.webmonkey.com/tutorials, youtube.com

//
- Dev Tools
- Text Editors - [Atom](https://atom.io), [Brackets](http://brackets.io), [Sublime Text](http://sublimetext.com)
- Console2 Terminal Download (http://sourceforge.net/projects/console/) - (Use with any shell of choice, maybe Bash)
- [Console2 Terminal Setup](http://lifehacker.com/5834755/how-can-i-make-the-windows-command-prompt-better#) (Go to Edit >> settings and add this under shell so as to point to GIT bash ("C:\Program Files (x86)\Git\bin\sh.exe" --login -i)
- [Bash Shell download](http://www.gnu.org/software/bash/)
- [Bash shell explained](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/)

// Research Study
- Angular vs ReactJS

// Great Research Study urls
https://scotch.io/tutorials/javascript-promises-for-dummies
https://hackernoon.com/angular-vs-react-the-deal-breaker-7d76c04496bc


// Setting up gulp locally
1. Use existing or create a list of package dependencies in package.json to download required packages
2. Put this package.json in the project directory
3. Type "npm install" to install all the packages dependencies
4. Create gulpfile.js in your project directory to contain a list of task that you want to run on your project 
5. You can also create custom tasks that has names like html, styles, etc
6. In package.json, make sure to add  "gulp": "gulp" under "script":{}. This will enable you to type "npm run gulp" to run all your task locally.
7. In package.json, You could also add "<task>": "gulp <task>" under "script":{}. With this you can run "npm run <task>"
8. If you do not do item 6 and 7 above, default way to run your gulp task locally will be ./node_modules/.bin/gulp <task>
9. To make your index page automatically serve to the localhost and also sync to the browser, you have to at least do a one time initiation of "npm run gulp serve".

//Commands
npm install --save gulp-<package> - Install a package and add it to the dependencies list in package.json
npm uninstall <package>
npm run gulp - To run gulp locally
npm view <package> version - View version number for any particular gulp task
npm ls - list of all gulp package/module
other useful packages - cssLint, 


// Brackets shortcut
- Goto any file - ctrl shift O
- Edit CSS inline - ctrl E
- Find and replace - ctrl H and ctrl Shift H
- bracket select similar word shortcut - ctrl B


// Brackets Plugin 
Copy plugins setting from dropbox to new installation (Bracket Menu > help > Show extension Folder)
- For Customwork, settings are moveToolBarToSide, toggleSidebar, splitButton, ScrollWheel-20
- Typescript
- Base16 Monokai Light Panels (See under Themes > under Extension manager)
- Brackets Tree Icons
- Emmet
- Accessibility
- Sass hint


Tools and Frameworks
**********
- Bracket, Chrome, firefox
- Bootstrap3, and html boilerplate
- Node, Git, Console2, then configure console 2 to use git shell and icon (C:\Windows\SysWOW64\cmd.exe /c ""C:\Program Files\Git\bin\sh.exe" --login -i")
- Ruby, sass
- Yeoman & generators - configure file paths
- Gulp @@include, autoprefixer, CssLint, libSass, liveReload
- VS, sitecore Habitat


File Organization
************
//Project - Themes - html, styles, js

//html
index.html, renderings, partials, 

renderings - home.html, accounts.html, info.text (@@includes of the partials)
partials -- contents, regions, patterns
Contents - home-main.html, accounts-main.html, info.text
regions -- header.html, footer.html, sidebar.html, main.html
patterns -- base.html, widgets, modules, (At the top of base.html - Basic html elements that have been styled and reusable across board)
html-utils - dom-head.html

//styles

style-utils -- variables.scss, mixins.scss, ie.scss


//
 - ********************************************************************
- But you are a chosen generation, a royal priesthood, a holy nation, GOd's peculiar people, that you may proclaim the praises of Him who called you out of darkness into His marvelous light; 1 Peter 2:9
- Having your conduct always honorable among men, that though they speak against you as evildoers, they may by your good works which they observe, glorify God in the day of visitation. 1 Peter 2:12
- Blessed be the God and Father of our Lord Jesus Christ, who according to His abundant mercy has begotten us again to a living hope through the resurrection of Jesus Christ from the dead  1 Peter 1:3
- But without faith it is impossible to please Him, for he who comes to God must believe that He is, and that He is a rewarder of those who diligently seek Him. Hebrews 11:6
- Looking unto Jesus, the author and finisher of our faith, who for the joy that was set before Him endured the cross, despising the shame, and has sat down at the right hand of the throne of God. Hebrews 12:2
- Now no chastening seems to be joyful for the present, but painful; nevertheless, afterward it produces the peaceable fruit of righteousness to those who have been trained by it. Hebrews 12:11
- Jesus Christ is the same yesterday, today, and forever. Hebrews 13:8
- **********************************************************************
- And walk in love, just as Christ loved us and gave Himself for us, an offering and sacrifice to God for a sweet-smelling savour. Ephesians 5:2
- Put on the whole armour of God, that ye may be able to stand against the wiles of the devil. Ephesians 6:11
- For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do Ephesians 2:10
- See then that you walk circumspectly, not as fools but as wise, 16 redeeming the time, because the days are evil. Ephesians 5:15-16
- Armor of God - Ephesians 6:10-18
- But the fruit of the Spirit is love, joy, peace, longsuffering, kindness, goodness, faithfulness, 23 gentleness, self-control. Against such there is no law. Galatians 5:22
- Christ has redeemed us from the curse of the law, having become a curse for us (for it is written, “Cursed is everyone who hangs on a tree”). Galatians 3:13
- Do not be deceived, God is not mocked; for whatever a man sows, that he will also reap. 8 For he who sows to his flesh will of the flesh reap corruption, but he who sows to the Spirit will of the Spirit reap everlasting life. Galatians 6:7-8
- And let us not grow weary of doing good, for in due season we shall reap if we do not lose heart. Galatians 6:9
- The Spirit Himself bears witness with our spirit that we are children of God Romans 8:16
- Now if we are children, then we are heirs--heirs of God and co-heirs with Christ, if indeed we suffer with Christ in order that we may also share in his glory. Romans 8:17
- For I consider that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us Romans 8:18
- Yet in all these things we are more than conquerors through Him who loved us. Romans 8:37
- For I am convinced that neither death nor life, nor angels nor principalities nor powers, nor things present nor things to come, 39 nor height nor depth, nor any other created thing, shall be able to separate us from the love of God which is in Christ Jesus our Lord. Romans 8:38-39
- For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord. Romans 6:23
- Read Romans 8:31-39
- Lest Satan should get an advantage of us: for we are not ignorant of _is devices. 2 Corinthians 2:11
- But I discipline my body and bring it into subjection, so when I have preached to others, I myself may not become disqualified. 1 Corinthians 9:27 (Notes: Bringing myself under subjection to the law of God through Christ)
- For you know the grace of our Lord Jesus Christ, that though He was rich, yet for your sakes He became poor, that you through His poverty might become rich. 2 Corinthians 8:9
- And God is able to make all grace abound toward you, that you, always having all sufficiency in all things, may have an abundance for every good work. 2 Corinthians 9:8
- Do you not know that you are the temple of God and that the Spirit of God dwells in you? 1st Corinth 3:16
- Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own? 20 For you were bought at a price; therefore glorify God in your body[c] and in your spirit, which are God’s. 1 Corinthians 6:19-20 
- if you confess with your mouth the Lord Jesus and believe in your heart that God has raised Him from the dead, you will be saved. 10 For with the heart one believes unto righteousness, and with the mouth confession is made unto salvation. Romans 10:9-10
- Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven. Matthew 5:16
- - For whoever desires to save his life will lose it, but whoever loses his life for My sake and the gospel’s will save it. Mark 8:35
- For whoever exalts himself will be humbled, and he who humbles himself will be exalted. Luke 14:11
- I say to you, though he will not rise and give to him because he is his friend, yet because of his persistence he will rise and give him as many as he needs. Luke 11:8
- The thief does not come except to steal, to kill, and to destroy. I have come that they may have life, and that they may have it more abundantly. John 10:10
- These things He said, and after that He said to them, “Our friend Lazarus sleeps, but I go that I may wake him up.” John 11:11
- Jesus said to him, “I am the way, the truth, and the life. No one comes to the Father except through Me. John 14:6
- Rejoice always, 17 pray without ceasing, 18 in everything give thanks; for this is the will of God in Christ Jesus for you. 1 Thessalonians 5:16-18
- Do not quench the Spirit. 20 Do not despise prophecies. 21 Test all things; hold fast what is good. 22 Abstain from every form of evil. 1 Thessalonians 5:19-22
- Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God; Philippians 4:6
- For God is able to supply all your needs according to His riches in glory Philippians 4:19
-  I can do all things through Christ who strengthens me. Philippians 4:13
- Command those who are rich in this present age not to be haughty, nor to trust in uncertain riches but in the living God, who gives us richly all things to enjoy. 1 Timothy 6:17
- Confess your trespasses to one another, and pray for one another, that you may be healed. The effective, fervent prayer of the righteous avails much. James 5:16
- But He gives more grace. Therefore He says: “God resists the proud, But gives grace to the humble". James 4:6
- In a loud voice they were saying: "Worthy is the Lamb, who was slain, to receive power and wealth and wisdom and strength and honor and glory and praise!" Revelations 5:12
- But those who wait on the Lord Shall renew their strength; They shall mount up with wings like eagles, They shall run and not be weary, They shall walk and not faint. isaiah 40:31
- For I know the thoughts that I think toward you, saith the Lord, thoughts of peace, and not of evil, to give you an expected end. Jeremiah 29:11
- He who covers his sins will not prosper, but whoever confesses and forsakes them will have mercy. Proverbs 28:13
- Therefore know that the Lord your God, He is God, the faithful God who keeps covenant and mercy for a thousand generations with those who love Him and keep His commandments; Deutronomy 7:9
- Seek the Lord while He may be found, Call upon Him while He is near. Isaiah 55:6
- There is a way that seems right to a man but the end thereof is destruction Prov 14:12
- So I will restore to you the years that the swarming locust has eaten, The crawling locust, The consuming locust, And the chewing locust, My great army which I sent among you. Joel 2:25
- Now we exhort you, brethren, comfort the fainthearted, uphold the weak, be patient with all” (1Thessalonians 5:14)
- More verses - https://www.biblegateway.com/blog/2009/05/the-100-most-read-bible-verses-at-biblegatewaycom/
- 

//Slaves and Children in Christ
- Or do you not know that your body is the temple of the Holy Spirit who is in you, whom you have from God, and you are not your own? 20 For you were bought at a price; therefore glorify God in your body[c] and in your spirit, which are God’s. 1 Corinthians 6:19-20 
- And having been set free from sin, you became slaves of righteousness. Romans 6:18 The Spirit Himself bears witness with our spirit that we are children of God Romans 8:16
- Live as free people, but do not use your freedom as a cover-up for evil; live as God’s slaves 1 peter 2:16
-  But now having been set free from sin, and having become slaves of God, you have your fruit to holiness, and the end, everlasting life. Romans 6:22
- For he who is called in the Lord while a slave is the Lord’s freedman. Likewise he who is called while free is Christ’s slave. 1 Chorinthians 7:22
-  You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love. Galatians 5:13
- Obey them not only to win their favor when their eye is on you, but as slaves of Christ, doing the will of God from your heart. Ephesians 6:6
- The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance. 2 Peter 3:9, Also read Genesis 12:1-4 and Jer 29:11
- No one can serve two masters. Either you will hate the one and love the other, or you will be devoted to the one and despise the other. You cannot serve both God and money. Matthew 6:24
- So you are no longer a slave, but God's child; and since you are his child, God has made you also an heir. Galatians 4:7
- Now if we are children, then we are heirs--heirs of God and co-heirs with Christ, if indeed we suffer with Christ in order that we may also share in his glory. Romans 8:17
- For I consider that the sufferings of this present time are not worthy to be compared with the glory which shall be revealed in us Romans 8:18
- The earth belongs to the Lord and we must honor Him by tendering(treating with respect) everything and people that our father have placed here on the earth. Psalm 24:1
- Were you called while a slave? Do not be concerned about it; but if you can be made free, rather use it. 1 Corinthians 7:21
- And you shall know the truth, and the truth shall make you free. John 8:32
- Therefore if the Son makes you free, you shall be free indeed. John 8:36
- saying, “Father, if it is Your will, take this cup away from Me; nevertheless not My will, but Yours, be done.” luke 22:42

- God never gives up on us and we must strive to make our own lives better. God can restore all the lost years 

//
Devotion
- For we are not called unto greatness but unto faithfulness. Greatness is only a side reward for being faithful.
- People will be people but I will be Christ. Situations will be situations but I will choose the mind of Christ.
- Situations will always arise, feelings will always be aroused, but how you arrest them and react is what determines your character.
- The level of emotional control(self-control) determines the level of closeness to God. Put your emotions under check and prevent the devil from using it against you.
- Use what God has blessed you with as a means to encourage and lift others up, not as a means to brag or put people down
- If you don't  follow the manufacturer's manual, everything will be in error.
- God our Father at creation have placed a seed in us and we do not bear fruit unless we tend and cultivate the seed that God has placed in us.
- Jesus is our “brand,” for we are being conformed to His image (Rom. 8:29). We attract others to Christ when we put on His attributes, which include tender mercies, kindness, humility, meekness, long suffering (Col. 3:12), and, above all, love (v.14).
- Do not look at things from a distorted negative view. Look at it from a positive and Godly perspective. John 11:11
- Faith is believing that God is present even when all we hear is troubles. Rom. 8:38-39
- We must know who we are in Christ 1 Peter 2:9
- Always have an attitude of gratitude, Praising God at all time makes His unending mercies available, and His mercy is probably all the is needed to enjoy a glorious ending in life. Proclaiming God’s mercy and faithfulness silences discontentment, think about the good things that He has done not the ones yet to be seen. O Lord, grow in me an attitude of fullness in You. In all of life situation, never speak against God.
- When you pray, be helpless before God because Prayer is the child’s helpless cry to the Father’s attentive ear. Psalm 121:1
- Resting in God always, even when the tide is against me.
- Help me to remember, like Jeremiah, that my hope comes from You, not from my circumstances.
- It is the same rain that falls on bitterleaf that also falls on sugarcane. Choose your destiny wisely.
- Do not store up earthly treasures for yourself but pursue heavenly treasures instead. Our character is the Bible that other people read. Let your life reflect Jesus to people. Self-Denial
- GPS GoodAlwaysGentle PatientWithPeep StrictOnSelf
- NotUsedToTheseButBringsGreatBenefitOnceUsedToIt
- YouCanTrainYourselfToBecomeAnythingMeaningful
- Self-Denial ! Self-Denial !! Self-Denial !!!
- Responsibility! Responsibility!! Responsibility!!!
- HappyReservedGoodBoldHealthySleepExerciseEatWealthyWorkStudySaveAboveAllDisciplinePlanExecute
- GPSS Gentle on People, Strict on Self (Self-Denial)
- ThoughnotBornGoodButHaveGotToTeachSelfToBecomeGoodElseTheBadCharactersMayleadOneToHell
- MakeTheRightChoicesTodayToPreventTheRegretsOfTomorrow


//
**Truth and Power Ministries**
Ultimate End Result -- Resources needed -- Actions Steps
Hapiness and Salvation -- Truth and Power -- Practice and Devotion


//
Sikhism/Christianity
The fate of people vulnerable to the Five Thieves ('Pānj Chor') is separation from God. These thieves are Ego, anger, greed, attachment, and lust are known as the Five Thieves. They robb people of their Happiness and Salvation. Intense Self-Denial and relentless devotion to God is the only way this situation can be remedied. Devotion to God makes you an embodiment of Truth and Power. **Truth and Power Ministries**


//
- https://www.appthemes.com/themes/hirebee/

