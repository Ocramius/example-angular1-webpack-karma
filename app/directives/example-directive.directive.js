import style from "./example-directive.scss";
import template from "./example-directive.directive.html";

export default function exampleDirective() {
    return {
        restrict: 'E',
        template: template,
        link: function (scope, element) {
            scope.name = Math.random();
        }
    };
};
