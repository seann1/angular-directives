studentRoster.controller('StudentsCtrl', function StudentsCtrl($scope) {
  $scope.students = [];
  $scope.hobbies = [];
  $scope.addStudent = function() {
    $scope.students.push({"name": $scope.studentName});
    $scope.hobbies.push({"hobby": $scope.studentHobby});
    $scope.studentName = null;
  };
});
