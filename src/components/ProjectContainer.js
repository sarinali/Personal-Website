import '../css/projects.css'

function ProjectContainer({sourceImage, projectName, projectIndex, projectDate, buttonList, techList}) {
    return (
        <div className="projectcontainer-wrapper">
            {/* <div className='poop'>
                <div className='project-image-container'>

                    <img src={sourceImage} alt='' className='project-image' id='image'></img>
                </div>
                    <div className='image-hover'></div>

            </div> */}
            <div class="container">
                <div class="content">
                    <img src={sourceImage} width='auto' height='200px'></img>
                </div>
                <div class="overlay">
                    <div>as,dkfjalskdfjlasdkjf</div>
                </div>
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
        </div>
    )
}

export default ProjectContainer;