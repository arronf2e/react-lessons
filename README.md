# react-s1dvwe

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/react-s1dvwe)


# React hooks 学习记录

### Hook 是什么 ？

Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。比如 useState 是允许我们在 React function component 中添加 state 的 Hook。从 16.8.0 开始就可以使用稳定的 Hooks 了。

### Hook 使用规则

Hook 就是 JavaScript 函数，但是使用它们会有两个额外的规则

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用，是为了确保 Hook 在每一次渲染中都按照同样的顺序被调用，这让 react 能够在多次的 useState 和 useEffect 调用之间保持 hook 状态的正确。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用


### useState

```js
const [count, setCount] = useState(0)
```


### useEffect

```js
useEffect(()=> {
  return () => {
    // === componentWillUnmount  ，清除副作用
  }
}, [])
// 第二个参数如果是空数组，该 useEffect 的功能就和 componentDidMount 一样的，我们可以通过第二个参数来做一些性能优化，[]中的如果有 state 的值，那么只有该 state 改变的时候，该“副作用”才执行。
```

当你调用 useEffect 时，就是在告诉 React 在完成对 DOM 的更改后运行你的“副作用”函数

useEffect 可以看作是 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合，“副作用函数”可以有多个



### 自定义 Hook

通过自定义 Hook,可以将组件逻辑提取到可重用的函数中；必须以 use 开头

```js
function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null)
  // ...
  return isOnline
}

// 使用自定义 Hook
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)
}
```

### useContext

```js
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light)

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext)
  return (
    <button style={{
      background: theme.background, 
      color: theme.foreground
    }}>
      I am styled by theme context !
    </button>
  )
}

function ThemeContextApp() {
  return (
    <div>
      <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
      </ThemeContext.Provider >
    </div>
  )
}

export default ThemeContextApp
```

### useRef

```js
const inputEl = useRef(null)

function onButtonClick() {
  inputEl.current.focus()
}

return (
  <>
    <input ref={inputEl} type="text"/>
    <button onClick={onButtonClick}>Focus the input</button>
  </>
)
```