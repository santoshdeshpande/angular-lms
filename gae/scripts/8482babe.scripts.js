"use strict";var app=angular.module("angularLmsApp",["ngCookies","ngResource","ngSanitize","ngRoute"]);app.config(["$routeProvider","$locationProvider",function(a,b){a.when("/others",{templateUrl:"lms/views/announcements.html"}).when("/",{templateUrl:"lms/views/discussions.html",controller:"DiscussionCtrl"}).otherwise({redirectTo:"/"}),b.html5Mode(!0)}]),angular.module("angularLmsApp").controller("DiscussionCtrl",["$scope","$http",function(a){a.discussions=[{category:"General",forums:[{name:"Ask the Professor",latestPost:"03/03/2014 12:20PM EST",threadCount:30},{name:"Water Cooler",latestPost:"03/03/2014 10:20AM EST",threadCount:6},{name:"Driving the Learning Deeper With John Shatzer",latestPost:"03/03/2014 09:20AM EST",threadCount:1},{name:"VoiceThread Q&A",latestPost:"03/04/2014 11:28PM EST",threadCount:30}]},{category:"Session 1",forums:[{name:"Discussion Vision Statement & Assessment",latestPost:"02/11/2013 02:28PM EST",threadCount:89}]},{category:"Session 2",forums:[{name:"Discussion Rubrics",latestPost:"02/09/2014 06:30PM EST",threadCount:20}]},{category:"Session 3",forums:[{name:"Discussion - Hodges and Lindgard",latestPost:"02/23/2014 02:28PM EST",threadCount:17}]},{category:"Session 5",forums:[{name:"Discussion Types of Assessments",latestPost:"02/10/2013 02:18PM EST",threadCount:32}]}]}]),angular.module("angularLmsApp").controller("NavbarCtrl",["$scope","$location",function(a,b){a.menu=[{title:"Discussions",link:"/"},{title:"Overview",link:"/overview"},{title:"Sessions",link:"/sessions"},{title:"Announcements",link:"/announcements"},{title:"E-Reserve",link:"/reserve"},{title:"Teams",link:"/teams"},{title:"Resources",link:"/resources"},{title:"VoiceThread",link:"/voicethread"}],a.isActive=function(a){return a===b.path()}}]);
