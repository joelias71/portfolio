import Nav from './nav'

export default class Home extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="home" className="home">
                <Nav />
                <div className="container">
                    <div className="css-typing">
                        <p>Welcome</p>
                        <p>I'm Jorge Elias</p>
                        <p>I´m a fullstack software engineer</p>
                    </div>
                </div>
            </section>
        )
    }
} 