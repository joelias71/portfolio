export default class Skills extends React.Component {

    render() {
        return (
            <div className="skills" id="skills">
                <div className="skill-card">
                    <i className="fa fa-desktop"></i>
                    <p>Frontend</p>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3 | SASS</li>
                        <li>Javascript</li>
                        <li>React | Redux</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <i className="fa fa-server"></i>
                    <p>Backend</p>
                    <ul>
                        <li>Java</li>
                        <li>Node js</li>
                        <li>Express</li>
                        <li>Spring</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <i className="fa fa-database"></i>
                    <p>Databases</p>
                    <ul>
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Oracle</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="skill-card">
                    <i className="fa fa-cloud"></i>
                    <p>Tools</p>
                    <ul>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>Jest</li>
                        <li>Gradle | Maven</li>
                    </ul>
                </div>
            </div>
        )
    }
}