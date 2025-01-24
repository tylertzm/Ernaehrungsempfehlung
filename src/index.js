import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './react/App'

const rootDomElement = document.getElementById('app')
const root = ReactDOM.createRoot(rootDomElement)

// We use createElement to make this a pure JavaScript file,
// because we don't like JSX in our .js files )
root.render(React.createElement(App))
