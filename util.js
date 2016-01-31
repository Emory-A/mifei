//判断arr是否为一个数组，返回一个bool值

function isArray(arr){
   return arr instanceof Array;   //方法1：instanceof操作符。返回true
   return arr.constructor === Array;//方法2：对象的constructor属性。返回true
   return Object.prototype.toString.call(arr)==="[object Array]";// 方法3：可以检测出所有类型,返回true。
}
// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn){
   return typeof fn ==="function";
   return fn instanceof Function;
   return fn.constructor ===Function;
   return Object.prototype.toString.call(fn) ==="[object Function]";
}
/*
      typeof方法：number, string, boolean, function, undefined可以被正确检测出；
                  null，array，json，date,reg,error 全部被检测为 object类型；
                  typeof 区分不出 json和array类型，输出都是 object；
      instanceof 方法：array、function、json、date、reg、error可以检测为true；
                       number、string、boolean、undefined、null检测为false;
                       null 和 undefined 检测不成object或其他类型
                       因此，要用instanceof 方法，首先判断 是否为null和undefined类型。
      constructor 方法：除了null和undefined ，其他类型均能使用constructor判断
                        但被判断的array必须在当前页面声明，例如对应子页面的Array 用父页面来判断，会返回false。
      prototype 方法：  Object.prototype.toString.call(变量) 可以检测出所有类型；
                        例如 Object.prototype.toString.call(date)； //返回[object Date]

*/
--------------------------------------------------------------------------------------------------------------------
// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src){
  var  o;  //result
  if(Object.prototype.toString.call(src)===“[object Array]”{
   o = [ ]; //判断是否是数组，并赋初始值
}  else {
   o = { }；
}
  for (var i in src){
  if(src.hasOwnProperty(i)){   //排除继承属性
    if(typeof src[i]===“object”){
         o[i]=cloneObject(src[i]);  //递归赋值
       } else{
         o[i]=src[i] ;//直接赋值
       }
    }
  }
return o;
}
------------------------------------------------------------------------------------------------------------------------------
  // 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
function uniqArray(arr){
    var  newArr = [ ]; //新建空数组
    for(var i in arr){
     if(newArr.indexOf(arr[i])==-1) {  //如果新数组不存在当前元素

       newArr.push(arr[i]); //在新数组中加入当前元素
      }
   }
   return newArr;    //返回新数组
}
      
// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
function each(arr, fn) {
    for(var i in arr){
       fn(arr[i],i);
    }
}                
   
// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
   var count=0;
   for(var i in Object){
      if(object.hasOwnProperty(i)){
         count ++;
      }
   }
   return count;
}
             
                
                
                
