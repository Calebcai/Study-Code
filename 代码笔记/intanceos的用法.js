//简单的说就是判断实例对象是否在构造函数的原型对象上

// 手动实现一个
var ins = function(left,right){
    leftValue = left.__proto__;
    rightValue = right.prototype;
    while(true){
        if(leftValue===null){
            return false
        }
        if(leftValue===rightValue){
            return true
        }
        rightValue = rightValue.__proto__;
    }
}