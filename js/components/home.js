import Nav from './nav'

export default class Home extends React.Component {

    render() {
        return (
            <section id="home" className="home">
                <Nav />
                <div className="container">
                    <div className="css-typing">
                        <p>Welcome</p>
                        <p>I'm Jorge Elias</p>
                        <p>Fullstack software engineer</p>
                    </div>
                </div>
            </section>
        )
    }
} 