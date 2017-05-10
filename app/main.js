import angular from "angular";
import exampleDirective from "./directives/example-directive.directive";

const mainModule = angular.module('mainModule', []);

mainModule.directive('example-directive', exampleDirective);
