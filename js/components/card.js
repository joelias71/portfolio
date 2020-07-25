export default class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="flip-card card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <p>hola</p>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        )
    }
} 