import React from 'react'
import ReactDOM from 'react-dom'

import KontactContainer from './kontact.container';
import CSS from './app.css'

const App = () => (
    <KontactContainer></KontactContainer>
)

ReactDOM.render(<App/>, document.getElementById('root'))