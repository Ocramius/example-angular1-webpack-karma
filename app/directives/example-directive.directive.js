export default function exampleDirective() {
    return {
        restrict: 'A',
        template: '<span class="an-example-directive">Example Directive with a random number {{name}}</span>',
        link: function (scope, element) {
            scope.name = Number.random();
        }
    };
};
