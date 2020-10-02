import Button from './btn'

export default class Card extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <div className="flip-card card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <div className="header">
                            <i className={this.props.icon}/>
                            <p>{this.props.title}</p>
                        </div>
                        <ul>
                            {this.props.stack.map(skill => <li key={skill}>{skill}</li>)}
                        </ul>
                    </div>
                    <div className="flip-card-back">
                        <p>{this.props.description}</p>
                        <Button text="View Source Code" href={this.props.linkRepo} download={false} />
                    </div>
                </div>
            </div>
        )
    }
} 