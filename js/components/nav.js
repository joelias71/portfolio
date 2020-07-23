export default class Nav extends React.Component {

    constructor(props) {
        super(props)
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
                    <a href="#" className="closebtn" onClick={e => this.closeNav()}>&times;</a>
                    <a href="#home">Home</a>
                    <a href="#portfolio">Projects</a>
                    <a href="#">Contact</a>
                </div>
                <span id="menu" onClick={e => this.openNav()}>&#9776;</span>
            </div>
        )
    }
} 