angular.module('arbori.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.attributes = attributes;
  $scope.species = species; 
  $scope.selected_filters = [];

  $scope.$watch('selected_filters', function() {
    for (i = 1; i <= Object.keys($scope.species).length; i++) {
      $scope.species[i].relevance = 0;
      for (j = 1; j <= $scope.species[i].attribute_list.length; j++) {
        $scope.species[i].relevance = $scope.selected_filters.filter(function(n) {
            return $scope.species[i].attribute_list.indexOf(n) != -1;
        }).length;
      }
    }
  }, true);
})

.controller('FiltersCtrl', function($scope) {

  $scope.filterSelect = function(id) {
    $("#attribute_" + id).toggleClass("visible invisible");
    $("#caret_attribute_" + id).toggleClass("rotate90 rotate0");
  }

  $scope.filterCheck = function(attribute_id, attribute_value_id) {
    $("#attribute_value_" + attribute_value_id).
      toggleClass("ion-android-checkbox-outline-blank ion-android-checkbox-outline");
    $("#attribute_value_" + attribute_value_id).toggleClass("selected");
    var selected_attributes = $("#attribute_" + attribute_id) .children(".selected").length;
    $("#attribute_selected_count_" + attribute_id).html(selected_attributes > 0 ? selected_attributes : '');
    index = $scope.selected_filters.indexOf(attribute_value_id);
    if (index != -1) {
      $scope.selected_filters.splice(index, 1);
    } else {
      $scope.selected_filters.push(attribute_value_id);
    }
  }
})

.controller('SpeciesCtrl', function($scope, $stateParams) {
})

.controller('SpeciesDetailsCtrl', function($scope, $stateParams) {
  $scope.item = species[$stateParams.itemId];
})

.controller('SettingsCtrl', function($scope) {});
