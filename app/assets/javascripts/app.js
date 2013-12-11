var notesApp = angular.module('notesApp', ['ngResource']);

notesApp.controller('NotesCtrl', ['$scope', 'Notes', 'Note', function($scope, Notes, Note) {
  $scope.test = 'Notes';
  $scope.notes = Notes.query();

  $scope.createNote = function() {
    Notes.save($scope.newNote, function(note) {
      $scope.notes.push(note);
      $scope.newNote = {};
    }, function(fail) {
      alert('Too bad ' + fail.status);
    });
  }

  $scope.destroyNote = function(id) {
    Note.delete({ id: id },function(note) {
      $scope.notes = Notes.query();
      return false;
    }, function(fail) {
      alert('Too bad ' + fail.status);
    });
  }
}]);

notesApp.factory('Notes', ['$resource', function($resource) {
  return $resource('/notes');
}]);

notesApp.factory('Note', ['$resource', function($resource) {
  return $resource('/notes/:id');
}]);