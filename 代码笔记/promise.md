### Promise   async/await的理解
在js中，我们时常有一些需求，当我们需要异步的完成一个任务的时候，就例如方块的移动，我们需要让他先右移在下移，如果他是同步执行的则会达不到所想要的效果
我们用回调的时候可能由于回调过于复杂，（先让方块右下左上）这样移动的时候，我们会用回调一层一层的嵌套，这样可能会陷入回调地狱，过于复杂的回调不利于代码的可读性，还不利于后期的维护

promise对象（类）便应用而生

  -  Promise对象的三种状态 pending 、resolve 和 reject  
  - then 方法
  - then的返回值，会返回一个新的 Promise 对象, 但是状态会有几种情况:
    - then 的回调函数中没有返回值，then就会返回一个状态为: resolved 的 promise 对象
    - then 的回调函数返回值是 非 promise 的值, then就会返回一个状态为: resolved 的 promise 对象，另外会把返回值，传递给 下一个 then
    - then 的回调函数返回值是 promise 对象，then 就直接返回这个  promise 对象，具体的状态可以由我们自己定义,具体传递的值，也由我们自己定义
```
function a(){
    return new Promise(resolve,reject)=>{
        console.log('1111');
    }
}
a().then(res,rej)=>{
    console.log('1111');
}.catch(err){
    //err
}
```
来康康promise的嵌套
```
let ele = document.querySelector(".box");
    move(ele, "left", 200).then(res=>{
        // console.log(res);
        return move(ele, "top", 200);
    }).then(res=>{
        // console.log(res);
        return move(ele, "left", 0);
    }).then(res=>{
        return move(ele, "top", 0);
    }).then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err);
    })
```
我们可以用then获取他函数的回调，来进行一层一层的then，如果有错误的话最后可以返回一个catch来捕获异常 以此来简化回调的嵌套

async/await的出现又简化了promise (是基于promise的) 后面都是new一个promise对象
```
 // es7 语法；
    async function myfn() {

        try {
            // await  后面一定要跟一个  promise对象 ；
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(1111);
                    //  resolve();
                    reject("错误");
                }, 1000);
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(2222);
                    resolve();
                }, 2000);
            })
            await new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(3333);
                    resolve();
                }, 1000);
            })
        }catch(err){
            console.log(err);
        }
        
    }

```
用async和await改造后的方块移动
```
async function fn() {
        try {
            await move(ele, "left", 200);
            await move(ele, "top", 200);
            await move(ele, "left", 0);
            let res = await move(ele, "top", 0);
            console.log(res); //返回resolve状态
        } catch (err) {
            console.log(err);
        }
    }
```
这样就可以实现异步的执行

promise下的方法
+ all方法 同时返回对顺序没有要求，如果中间有一个reject则不会往下执行
+ race方法 先返回输出速度最快的值