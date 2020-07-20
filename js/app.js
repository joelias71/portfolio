export default class App extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
            <div>
                <h1>Hola Mundo</h1>
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