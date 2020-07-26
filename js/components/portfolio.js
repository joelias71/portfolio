import Card from './card'
import {data} from '../data/data'

export default class Portfolio extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const projectList = data.map(project => (
            <Card
                key={project.id}
                title={project.title}
                icon={project.icon}
                linkRepo={project.linkRepo}
                stack={project.stack}
                description={project.description}
            />
        ))

        return (
            <section id="portfolio" className="portfolio">
                <div className="content">
                    { projectList }
                </div>
            </section>
        )
    }
} 