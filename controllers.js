var intouch = angular.module('IntouchApp', ['ngMaterial']);

intouch.controller('StartPageLogoController', function(){
    var self = this;

    self.src = 'intouch_white.png';


    self.passRecowery = function() {
        window.alert('Test');
    }
});