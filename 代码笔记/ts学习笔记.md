### 元组
限定的数组
`let user:[string,number] = ['viking',20]`
push的时候只能push这个限定的类型

### 接口interface
限定对象
```javascript
interface IPerson{
    readonly id:number; 定义了只读属性，不能被修改
    name:String;
    age?:number  //这个问号是可选属性 可有课不有
}
let viking:IPerson ={
    id:1;
    name:'viking';
    age:20
}
```
### 联合类型
`let ns: number | string`
- 可以访问共有属性的方法
- 类型断言
```javascript
  function get(input:string | number):number{
      const str = input as string;
      if(str.length){
          return str.length
      }else{
          const number = input as number
          reuturn number.toString().length
      }
  }
```
### 类class
+ 面向对象：封装 继承 多态
+ static定义的方法不需要实例化直接在类上调用即可
+ public private protected
  - private 只能在函数内部访问活动
  - protected 继承的类也可以访问，其他外部变量不能访问
+ readonly 只读

### 类和接口
类可以通过implements来使用接口 (如果俩个类没有共同父类的时候)
```typescript
interface Radio{
    sw(t:boolean):void
}
interface Beet{
    ccc():void
}
//interface的继承
interface RadioBeet extends Radio{
    ccc():void
}

class Car implements Radio{
    sw(t:boolean){

    }
}
// class cellPhone implements Radio,Beet{
//     sw(t:boolean){
        
//     }
//     ccc(){

//     }
// }
class cellPhone implements RadioBeet{
    sw(t:boolean){
        
    }
    ccc(){

    }
}
```

### ts中的箭头函数
是函数的返回

### 枚举
```typescript
enum Direction{
    Up,
    Down,
    Left,
    Right
}
//自动从0开始 递增，就是up为0

```

### 泛型
泛型用来解决 函数传参与返回值如果是不确定的，就在使用的时候来指定对应的类型

```javascript
//这个T相当于占位符
function echo<T>(arg:T):T{
    return arg
}

// eg:
function swap<T,U>(tuple:[T,U]):[U,T]{
    return [tuple[1],tuple[0]]
}
const res = swap(['string',123])
// res[1]就可以使用string的方法
```

```javascript
interface IwithLenth{
    length:number //只要你有length属性就可以，不管 你是字符串还是什么 
}

function echo<T extends IwithLenth>(arg:T):T{
    return arg
}
//这样没有length属性的会报错如数字
```
在接口上的应用
```javascript
interface keyPair<T,U>{
    key:T,
    value:U
}
let kp1:keyPair<number,string> = {key:1,value:'string'}
let kp2:keyPair<string,number> = {key:'str',value:2}
let arr:number[] = [1,2,3]
let arrT:Array<number> = [1,2,3]
```
在类上的应用
```javascript
class Queue<T>{
    private data = [];
    push(item:T){
        return this.data.push(item)
    }
    pop():T{
        return this.data.shift()
    }
}
const queue = new Queue<number>()
```

### 类型别名
```javascript
type Plus = (x:number,y:number) => number
let sum = Plus

type s = string | number
let res:s = '123'
res = 123

type decr = 'Up' | 'Down' | 'left'
let toWhere:decr = 'Up'
```