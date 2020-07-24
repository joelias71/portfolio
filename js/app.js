import Home from './components/home'
import Portfolio from './components/portfolio'
import Skills from './components/skills'

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Home />
                <Skills />
                <Portfolio />
            </div>
        )
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)