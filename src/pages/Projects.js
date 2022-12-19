import PageIntro from "../components/PageIntro";
import Firebase from '../assets/projects_assets/technologies/firebase.png'
import Flutter from '../assets/projects_assets/technologies/flutter.png';
import GMap from '../assets/projects_assets/technologies/gmap.png';
import Java from '../assets/projects_assets/technologies/java.png';
import ReactJS from '../assets/projects_assets/technologies/reactjs.png';
import Unity from '../assets/projects_assets/technologies/unity.png';
import Trails from '../assets/projects_assets/trails.png'
import UFound from '../assets/projects_assets/ufound.png'
import ProjectContainer from "../components/ProjectContainer";
import ProjectBundle from '../components/ProjectBundle'
import ProjectButton from "../components/ProjectButton";

function Projects() {
    const projects = [
        new ProjectBundle(
            Trails, 
            'Markham Trails', 
            '2022', 
            '0',
            [new ProjectButton(
                'https://play.google.com/store/apps/details?id=com.doriansarina.markhamtrails', 
                'Android'),
            new ProjectButton(
                'https://apps.apple.com/ca/app/markham-trails/id1640993603',
                'iOS'),
            ],
            [Flutter, GMap]
        ),
        new ProjectBundle(
            UFound, 
            'UFound', 
            '2022', 
            '1',
            [new ProjectButton(
                'https://github.com/sarinali/uoft-lost-and-found', 
                'GitHub'),
            new ProjectButton(
                'https://devpost.com/software/ufound',
                'Devpost'),
            ],
            [ReactJS, Firebase]
        ),
    ]
    return (
        <div className="project-body">
            <PageIntro
                    pageName={'Projects'}
                    displayIndex={'| 02'}
                    displayText={['Past or ongoing programming related projects. ', 'Lots to come!']}
                ></PageIntro>
            <div>
                {projects.map((project) => {
                    return (
                        <ProjectContainer sourceImage={project.image} projectName={project.title} projectIndex={project.index} projectDate={project.date} buttonList={project.buttonList} techList={project.techList}></ProjectContainer>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects;