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

    closeInSection(e) {
        this.setState({section: e.currentTarget.getAttribute("value")})
        if(window.outerWidth < 1000) this.closeNav()
    }

    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href={this.state.section} className="closebtn" onClick={e => this.closeNav()}>&times;</a>
                    <a href="#home" value="#home" onClick={e => this.closeInSection(e)}>Home</a>
                    <a href="#skills" value="#skills" onClick={e => this.closeInSection(e)}>Skills</a>
                    <a href="#portfolio" value="#portfolio" onClick={e => this.closeInSection(e)}>Projects</a>
                    <a href="#contact"value="#contact" onClick={e => this.closeInSection(e)}>Contact</a>
                </div>
                <span id="menu" onClick={e => this.openNav()}>&#9776;</span>
            </div>
        )
    }
} 