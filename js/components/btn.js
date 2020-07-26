export default class Button extends React.Component {
    render(){
        return(
            <div>
                <a className="btn draw-border" href={this.props.href} download={this.props.download}>{this.props.text}</a>
            </div>
        )
    }
}