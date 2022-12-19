import '../css/projects.css'
import styled from 'styled-components'

function ProjectContainer({sourceImage, projectName, projectIndex, projectDate, buttonList, techList, background}) {
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
                    <div>as,dkfjalskdfjlasdkjf</div>
                </div>
                <hr className='project-line'></hr>
            </div>
            <div className='project-details-wrapper'>
                <div className='project-name'>{projectName}</div>
                <div className='project-index'>{projectIndex}</div>
                <div className='project-index'>{projectDate}</div>
                <div className='project-buttons'>
                    {buttonList.map((button) => {
                        console.log(button.type)
                        return (
                            <div>
                                <div>{button.link}</div>
                                <div>{button.buttonText}</div>
                                <div>{button.text}</div>
                            </div>
                        )
                    })}
                </div>
                <div className='project-tech'>
                        {techList.map((tech) => {
                            return (
                                <div>
                                    <img src={tech} width='20' height = '20'></img>
                                </div>
                            )
                        })}
                </div>
            </div>
        </Wrapper>
    )
}

export default ProjectContainer;