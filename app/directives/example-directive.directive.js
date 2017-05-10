//noinspection ES6UnusedImports
import style from "./example-directive.scss";
import template from "./example-directive.directive.html";

export default function exampleDirective() {
    return {
        restrict: 'E',
        // @TODO need to use template rather than template-url, for now,
        // @TODO as ngtemplate-loader otherwise breaks karma-webpack
        template: template,
        link: function (scope, element) {
            scope.name = Math.random();
        }
    };
};
