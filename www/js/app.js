angular.module('arbori', ['ionic', 'arbori.controllers', 'arbori.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'partials/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.filters', {
    url: '/filters',
    views: {
      'tab-filters': {
        templateUrl: 'partials/tab-filters.html',
        controller: 'FiltersCtrl'
      }
    }
  })

  .state('tab.items', {
      url: '/items',
      views: {
        'tab-items': {
          templateUrl: 'partials/tab-items.html',
          controller: 'ItemsCtrl'
        }
      }
    })
    .state('tab.item-detail', {
      url: '/items/:itemId',
      views: {
        'tab-items': {
          templateUrl: 'partials/item-detail.html',
          controller: 'ItemDetailCtrl'
        }
      }
    })

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'partials/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/filters');

});
