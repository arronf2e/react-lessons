import React, { useContext } from 'react'

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

console.log(ThemeContext,'ThemeContext')

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

function ThemedButton() {
  const theme = useContext(ThemeContext)

  console.log(theme, 'theme')

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