import Button from './btn'

export default class Contact extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="contact" className="contact">
                <p className="title">You want to know more about me ?</p>
                <Button href="doc/jorge_elias_cv.pdf" text="Download CV" download={true} />
                <div className="icons">
                    <a href="https://github.com/joelias71" className="fa fa-github"></a>
                    <a href="https://mx.linkedin.com/in/jelias7" className="fa fa-linkedin"></a>
                </div>
                <p>© 2020 | Jorge Elias</p>
            </section>
        )
    }
} 