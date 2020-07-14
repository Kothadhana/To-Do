let app=angular.module("MyApp",[]);
app.controller('MyCtrl',function($scope){
  $scope.newItem="Enter the task";
  $scope.Items=[
]
 $scope.clearNewItem=function(){
   $scope.newItem="";
 }
 $scope.removeAllItems=function(){
   $scope.Items.length=0;
 }
  $scope.addItem=function(){
    //console.log("Added "+$scope.newItem)
    if($scope.newItem.length>0 && $scope.newItem!="Enter the task")
    {
      $scope.Items.push({
        name: $scope.newItem,
        checked: false
      });
      $scope.newItem="Enter the task";
      //console.log($scope.Items)
    }

 }

});
