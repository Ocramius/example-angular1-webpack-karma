import style from "./example-directive.scss";

export default function exampleDirective() {
    return {
        restrict: 'E',
        template: '<span class="an-example-directive">Example Directive with a random number {{name}}</span>',
        link: function (scope, element) {
            scope.name = Math.random();
        }
    };
};
