var app=angular.module("app",["ngRoute"]);app.config(["$routeProvider",function(t){t.when("/",{templateUrl:"./partials/index.html"}).when("/equipment",{templateUrl:"./partials/equipment.html"}).when("/contacts",{templateUrl:"./partials/contacts.html"}).otherwise({redirectTo:"/"})}]);