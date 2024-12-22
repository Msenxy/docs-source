# 这是二

## 这是三

### 这是四

#### 这是四

##### 这是五

###### 这是六

这是普通文本

这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本这是长文本This is fucking long article这是长文本这是长文本这是长文本这是长文本这是长文本123

中文en

en中文

中文123

123中文

en123

123en

中文en中文123中文en123en

中e中1中e1e

**这是加粗**

_这是斜体_

> 这是引用

1. 这是有序列表1
2. 这是有序列表2
3. 这是有序列表3

- 这是无序列表1
- 这是无序列表2
- 这是无序列表3

`print("这是代码")`

---

**_这是斜体加粗_**

[这是链接](https://www.baidu.com)

![这是图片](https://www.baidu.com/img/flexible/logo/pc/result@2.png)

| 表格       | 表格       |
| ---------- | ---------- |
| 这是表格11 | 这是表格12 |
| 这是表格21 | 这是表格22 |

```typescript twoslash
const person = { name: 'Alice', age: 30 }
//    ^^^^^^
```

```typescript
// 这是什么东西 and 这又是什么东西
// Using 'typeof' to infer types
const person = { name: 'Alice', age: 30 }
//     ^^^
type PersonType = typeof person // { name: string; age: number }

// 'satisfies' to ensure a type matches but allows more specific types
type Animal = { name: string }
const dog = { name: 'Buddy', breed: 'Golden Retriever' } satisfies Animal

// Generics with 'extends' and default values
function identity<T extends number | string = string>(arg: T): T {
    return arg
}

let str = identity() // Default type is string
let num = identity(42) // T inferred as number

// 'extends' with interface and class
interface HasLength {
    length: number
}

function logLength<T extends HasLength = string>(arg: T): void {
    console.log(arg.length)
}

logLength('Hello') // OK: string has length (default is string)
logLength([1, 2, 3]) // OK: array has length
// logLength(123);      // Error: number doesn't have length

// 'typeof' with functions
function add(x: number, y: number): number {
    return x + y
}

type AddFunctionType = typeof add // (x: number, y: number) => number

// Generic interfaces with 'extends' and default types
interface Box<T extends object = { message: string }> {
    content: T
}

let defaultBox: Box = { content: { message: 'Hello' } } // Uses default type
let customBox: Box<{ status: number }> = { content: { status: 200 } }

// Complex example with 'satisfies' and default generics
type Task = {
    title: string
    description?: string
    completed: boolean
}

const myTask = {
    title: 'Learn TypeScript',
    completed: false,
    priority: 'High'
} satisfies Task // Allows priority but ensures Task structure

// Generic function with default type
function wrapInArray<T = string>(value: T): T[] {
    return [value]
}

const stringArray = wrapInArray() // Default to string
const numberArray = wrapInArray(42) // T inferred as number

/**
 * Combines two generic types into a tuple.
 *
 * @template T - The first type.
 * @template U - The second type.
 * @param {T} first - The first value.
 * @param {U} second - The second value.
 * @returns {[T, U]} A tuple containing both values.
 */
function combine<T, U>(first: T, second: U): [T, U] {
    return [first, second]
}
```

这是脚注 [^1]

~~这是删除线~~

[^1] 这是教主 1 的内容
