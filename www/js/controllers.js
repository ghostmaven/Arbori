angular.module('arbori.controllers', [])

.controller('FiltersCtrl', function($scope) {
  $scope.attributes = [
    {
      "id": 1,
      "attribute_name": "Tip frunză",
      "description": "description",
      "parent_attribute_id": 0,
      "attribute_values": [
        {
          "id": 1,
          "attribute_value": "Aciculară"
        },
        {
          "id": 2,
          "attribute_value": "Solziformă"
        }
      ]
    },
    {
      "id": 2,
      "attribute_name": "Tip frunză aciculară",
      "description": "description",
      "parent_attribute_id": 1,
      "attribute_values": [
        {
          "id": 3,
          "attribute_value": "Neînțepătoare"
        },
        {
          "id": 4,
          "attribute_value": "Înțepătoare"
        }
      ]
    },
    {
      "id": 3,
      "attribute_name": "Dispunere frunză aciculară",
      "description": "description",
      "parent_attribute_id": 1,
      "attribute_values": [
        {
          "id": 5,
          "attribute_value": "Solitară",
        },
        {
          "id": 6,
          "attribute_value": "Grupate câte 2"
        },
        {
          "id": 7,
          "attribute_value": "Grupate câte 3"
        },
        {
          "id": 8,
          "attribute_value": "Grupate câte 5"
        },
        {
          "id": 9,
          "attribute_value": "Grupate în smocuri (>5)"
        },
        {
          "id": 10,
          "attribute_value": "Grupate în verticil (10-30)"
        },
        {
          "id": 11,
          "attribute_value": "Grupate în verticil (10-30)"
        }
      ]
    },
    {
      "id": 4,
      "attribute_name": "Lungime ace",
      "description": "description",
      "parent_attribute_id": 1,
      "attribute_values": [
        {
          "id": 12,
          "attribute_value": "3-10 cm"
        },
        {
          "id": 13,
          "attribute_value": "3-7 cm"
        },
        {
          "id": 14,
          "attribute_value": "5-10 cm"
        },
        {
          "id": 15,
          "attribute_value": "7-10 cm"
        },
        {
          "id": 16,
          "attribute_value": "10-18 cm"
        },
        {
          "id": 17,
          "attribute_value": "8-14 cm"
        },
        {
          "id": 18,
          "attribute_value": "5-19 cm"
        },
        {
          "id": 19,
          "attribute_value": "10-25 cm"
        },
        {
          "id": 20,
          "attribute_value": "12-28 cm"
        },
        {
          "id": 21,
          "attribute_value": "2-4 cm"
        },
        {
          "id": 22,
          "attribute_value": "1-3 cm"
        },
        {
          "id": 23,
          "attribute_value": "6-12(25) cm"
        },
        {
          "id": 24,
          "attribute_value": "8-15 cm"
        }
      ]
    }
  ];

  $scope.filterSelect = function(id) {
    // $(".attribute-values").not("#attribute_" + id).toggleClass("display-none");
    $(".caret-attribute").not("#caret_attribute_" + id).removeClass("rotate90");
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

.controller('ItemsCtrl', function($scope) {
  $scope.items = [
    {
      "id": 1,
      "binomial_name": "Taxus baccata",
      "common_name": "Tisă",
      "description": "Tisa (Taxus baccata) este un arbore puțin înalt (cca. 12 m).",
      "genus_id": 1,
      "attribute_list": [1, 3, 5]
    }
  ]
})

.controller('ItemDetailCtrl', function($scope, $stateParams) {})

.controller('SettingsCtrl', function($scope) {});
