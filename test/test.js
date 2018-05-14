(function () {
    'use strict';
    describe('pp-nav', function () {
        it('Should instantiate the component', function (done) {
            var nav = new PPNav();
            done();
        });
        it('Should read data into the component and turn it into a nav menu.', function (done) {
            var nav = new PPNav();
            nav.data = [
                {
                    "title": "Link 1",
                    "url": "/#1"
                },
                {
                    "title": "Link 2",
                    "url": "/#2"
                },
                {
                    "title": "Link 3",
                    "url": "/#3"
                },
                {
                    "title": "Link 4",
                    "url": "/#4"
                }
            ];
            var container = document.createElement('div');
            document.body.appendChild(container);
            container.appendChild(nav);
            done();
        });
    });
}());
