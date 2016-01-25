//判断arr是否为一个数组，返回一个bool值
var arr=new Array();
function isArray(arr){
   var arr=[1,2,3];
}
   alert(typeof arr);// typeof操作符可以检测Function，String、Number、Undefined类型，而Array类型则返回"object"
   alert(arr instanceof Array);   //方法1：instanceof操作符。返回true
   alert(arr.constructor == Array);//方法2：对象的constructor属性。返回true
   alert(object.prototype.toString.call(arr)=="[object Array]");// 方法3：可以检测出所有类型,返回true。
