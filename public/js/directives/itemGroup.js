app.directive('itemGroup', function() {
  return {
    restrict: 'EA',
    templateUrl: '/js/views/itemGroup.tpl.html',
    scope: {
      data: '=',
    }
  };
});
