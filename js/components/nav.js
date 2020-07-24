export default class Nav extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            section: '#'
        }
    }

    openNav() {
        document.getElementById("mySidenav").style.width = (window.outerWidth < 1000)?"100%":"300px";
    }
      
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href={this.state.section} className="closebtn" onClick={e => this.closeNav()}>&times;</a>
                    <a href="#home" value="#home" onClick={e => this.setState({section: e.currentTarget.getAttribute("value")})}>Home</a>
                    <a href="#skills" value="#skills" onClick={e => this.setState({section: e.currentTarget.getAttribute("value")})}>Skills</a>
                    <a href="#portfolio" value="#portfolio" onClick={e => this.setState({section: e.currentTarget.getAttribute("value")})}>Projects</a>
                    <a href="#contact"value="#contact" onClick={e => this.setState({section: e.currentTarget.getAttribute("value")})}>Contact</a>
                </div>
                <span id="menu" onClick={e => this.openNav()}>&#9776;</span>
            </div>
        )
    }
} 