import "../css/projects.css";
import styled from "styled-components";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";


function ProjectContainer({
  sourceImage,
  projectName,
  projectIndex,
  projectDate,
  buttonList,
  techList,
  background,
  description,
  isDark,
  textWidth
}) {
  const Wrapper = styled.div`
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: ${background};
    margin-bottom: 50px;
    @media (max-width: 760px) {
      display: block;
    }
  `;

  const Title = styled.div`
    font-size: 40px;
    color: ${isDark ? "white" : "black"};
    font-weight: bold;
  `;

  const Date = styled.div`
    color: ${isDark ? "white" : "black"};
    font-size: 20px;
  `

  const Index = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: ${isDark ? "#DE4736" : "#7F0019"};
  `;

  const ProjectTitleDisplay = styled.div`
    color: ${isDark ? "#DE4736" : "#7F0019"};
    
  `;

//   const ProjectDescription = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     ${'' /* width: 350px; */}
//     width: ${textWidth}
//   `;

  console.log(isDark)
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
          <img
            src={sourceImage}
            width="auto"
            height="250px"
            alt=""
            className="project-source-image"
          ></img>
        </div>
        <div className="overlay" id="a">
          <div className="project-description">{description}</div>
        </div>
      <div className="project-title-display" id="b">
        <div>{projectName}</div>
      </div>
      </div>
      {/* <div className='project-line-container'> */}
      <hr className="project-line"></hr>
      <div className="project-details-wrapper">
        <div className="project-detail-container">
          <div className="project-detail">
            <Index>{"| 0" + projectIndex + "."}</Index>
          </div>
          <div className="project-detail">
            <Title>{projectName}</Title>
          </div>
          <div className="project-detail">
            <Date>{projectDate}</Date>
          </div>
          <div className="project-buttons">

            {buttonList.map((button) => {
                return (
                    <div className="project-button-container">
                        <a href={button.link} className="individ-button">
                            <div>
                                <div className="project-button-title">{button.buttonText}</div>
                                <div className="project-button-text">{button.text}</div>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
        </div>
        <div className="project-tech">
          {techList.map((tech, index) => {
            let alphaCode1 = Math.random() * (129 - 97) + 97;
            let alphaCode2 = Math.random() * (129 - 97) + 97;
            let numCode1 = Math.floor(Math.random() * 11);
            let numCode2 =  Math.floor(Math.random() * 11);
            let suffix = String(alphaCode1) + String(alphaCode2) + String(numCode1) + String(numCode2);
            return (
              <div>
                <img src={tech.sourceImage} height="40" alt="" id={'button'+suffix} data-tooltip-content={tech.toolTip} className='individ-tech'></img>
                <ReactTooltip anchorId={'button'+suffix} />
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

export default ProjectContainer;
