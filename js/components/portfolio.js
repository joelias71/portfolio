import Card from './card'

export default class Portfolio extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section id="portfolio" className="portfolio">
                <div className="content">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </section>
        )
    }
} 