import '../css/projects.css'
import styled from 'styled-components'

function ProjectContainer({sourceImage, projectName, projectIndex, projectDate, buttonList, techList, background, description}) {
    const Wrapper = styled.div`
        height: 400px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: ${background}

        @media (max-width: 760px) {
            display: block
        }

    `

    return (
        <Wrapper>
            {/* <div className='poop'>
                <div className='project-image-container'>

                    <img src={sourceImage} alt='' className='project-image' id='image'></img>
                </div>
                    <div className='image-hover'></div>

            </div> */}
            <div class="projectimage-container">
                <div class="project-image">
                    <img src={sourceImage} width='auto' height='250px' alt='' className='project-source-image'></img>
                </div>
                <div class="overlay">
                    <div className='project-description'>{description}</div>
                </div>
                
            </div>
            {/* <div className='project-line-container'> */}
            <hr className='project-line'></hr>
            <div className='project-title-display'>
                <div>{projectName}</div>
            </div>
            <div className='project-details-wrapper'>
                <div className='project-detail-container'>
                    <div className='project-detail'>
                        <div className='project-index'>{"| 0" + projectIndex + "."}</div>
                    </div>
                    <div className='project-detail'>
                        <div className='project-title'>
                            {projectName}
                        </div>
                    </div>
                    <div className='project-detail'>
                        <div className='project-date'>{projectName}</div>
                    </div>
                <div className='project-buttons'>

                </div>
                    {buttonList.map((button) => {
                        console.log(button.type)
                        return (
                            <div>
                                <a href={button.link} className='individ-button'>
                                    <div>{button.buttonText}</div>
                                    <div>{button.text}</div>
                                </a>
                                {/* <div>{button.link}</div> */}
                                
                            </div>
                        )
                    })}
                </div>
                <div className='project-tech'>
                        {techList.map((tech) => {
                            return (
                                <div>
                                    <img src={tech} width='20' height = '20' alt=''></img>
                                </div>
                            )
                        })}
                
                </div>
            </div>
        </Wrapper>
    )
}

export default ProjectContainer;