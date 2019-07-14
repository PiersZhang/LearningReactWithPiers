## 涉及到的知识
1. [es6解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#%E9%BB%98%E8%AE%A4%E5%80%BC_2) 
   常用解构操作
   ```JavaScript
    // 解构数组
    var foo = ["one", "two", "three"];
    var [one, two, three] = foo;
    console.log(one); // "one"
    console.log(two); // "two"
    console.log(three); // "three"

    // 将剩余数组赋值给一个变量
    var [a, ...b] = [1, 2, 3];
    console.log(a); // 1
    console.log(b); // [2, 3]

    // 解构对象
    var o = {p: 42, q: true};
    var {p, q} = o;
    console.log(p); // 42
    console.log(q); // true

    // 结构对象设置默认值
    var {a = 10, b = 5} = {a: 3};
    console.log(a); // 3
    console.log(b); // 5

    // 函数参数默认值
    function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
        console.log(size, cords, radius);
    }
    drawES2015Chart({
        cords: { x: 18, y: 30 },
        radius: 30
    });

    // 解构嵌套对象和数组
    const metadata = {
    title: 'Scratchpad',
    translations: [
        {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
    };
    let {
    title: englishTitle, // 重命名
    translations: [
        {
        title: localeTitle, // 重命名
        },
    ],
    } = metadata;
    console.log(englishTitle); // "Scratchpad"
    console.log(localeTitle);  // "JavaScript-Umgebung"

    // For of 迭代和解构
    var people = [
    {
        name: 'Mike Smith',
        family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
        },
        age: 35
    },
    {
        name: 'Tom Jones',
        family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
        },
        age: 25
    }
    ];
    for (var {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
    }
    // "Name: Mike Smith, Father: Harry Smith"
    // "Name: Tom Jones, Father: Richard Jones"
   ```
2. Fragment标签讲解
加上最外层的DIV，组件就是完全正常的，但是你的布局就偏不需要这个最外层的标签怎么办?比如我们在作Flex布局的时候,外层还真的不能有包裹元素。这种矛盾其实React16已经有所考虑了，为我们准备了<Fragment>标签

3. 在用map循环时，需要设置一个不同的值，这个时React的要求。我们可以暂时用index+item的形式来实现
    ```JavaScript
        <ul>
            {
                this.state.list.map((item,index)=>{
                    return <li key={index+item}>{item}</li>
                })
            }
        </ul>
    ```
4. JSX中的html解析问题
如果想在文本框里输入一个`<h1>`标签，并进行渲染。默认是不会生效的，只会把`<h1>`标签打印到页面上，这并不是我想要的。如果工作中有这种需求，可以使用dangerouslySetInnerHTML属性解决。具体代码如下：
    ```JavaScript
    <ul>
        {
            this.state.list.map((item,index)=>{
                return (
                    <li 
                        key={index+item}
                        onClick={this.deleteItem.bind(this,index)}
                        dangerouslySetInnerHTML={{__html:item}}
                    >
                    </li>
                )
            })
        }
    </ul> 
    ```

