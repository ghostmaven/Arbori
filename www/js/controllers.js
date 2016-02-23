angular.module('arbori.controllers', [])

.controller('FiltersCtrl', function($scope) {

  $scope.attributes = attributes;

  $scope.filterSelect = function(id) {
    // $(".attribute-values").not("#attribute_" + id).addClass("hide");
    // Rotate the caret in intitial position on all attributes exept the one clicked.
    // $(".caret-attribute").not("#caret_attribute_" + id).removeClass("rotate90");
    // Show/hide attribute values
    if($("#attribute_" + id).hasClass("hide")) {
      $("#attribute_" + id).toggleClass("hide show");
      $("#attribute_" + id).transition({
        scale: [1],
        duration: 500,
        easing: 'in',
        complete: function() {}
      });
    } else {
      $("#attribute_" + id).transition({
        scale: [0],
        duration: 500,
        easing: 'in',
        complete: function() {
          $("#attribute_" + id).toggleClass("hide show");
        }
      });
    }
    $("#caret_attribute_" + id).toggleClass("rotate90 rotate0");
  }

  $scope.filterCheck = function(attribute_id, attribute_value_id) {
    $("#attribute_value_" + attribute_value_id).
      toggleClass("ion-android-checkbox-outline-blank ion-android-checkbox-outline");
    $("#attribute_value_" + attribute_value_id).toggleClass("selected");
    var selected_attributes = $("#attribute_" + attribute_id) .children(".selected").length;
    $("#attribute_selected_count_" + attribute_id).html(selected_attributes > 0 ? selected_attributes : '');
  }
})

.controller('SpeciesCtrl', function($scope) {
  $scope.species = species;
})

.controller('SpeciesDetailsCtrl', function($scope, $stateParams) {
  $scope.item = {
    "id": 1,
    "binomial_name": "Taxus baccata",
    "common_name": "Tisă",
    "description": "Tisa (Taxus baccata) este un arbore puțin înalt (cca. 12 m).",
    "genus_id": 1,
    "attribute_list": [1, 3, 5]
  }
})

.controller('SettingsCtrl', function($scope) {});
