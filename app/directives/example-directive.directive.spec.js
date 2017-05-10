import directive from "./example-directive.directive";

describe('example test for the directive', () => {
    it('should set a random integer in the scope', () => {
        const instance = directive();
        const scope = {};

        instance.link(scope, {});

        expect(scope.name).toEqual(jasmine.any(Number));
    });
});
