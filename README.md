# react-s1dvwe

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-s1dvwe)


# React hooks 学习记录

### Hook 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用


### useState

```js
const [count, setCount] = useState(0)
```


### useEffect

```js
useEffect(()=> {
  return () => {
    // === componentWillUnmount  
  }
}, [])
```

当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数