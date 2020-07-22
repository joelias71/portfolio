import Home from './components/home'

export default class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Home />
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