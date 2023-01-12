import MediaContainer from "../components/MediaContainer";
import HomeImage from "../components/HomeImage";
import Mode from "../Mode";

function Home() {
  // const BackGroundImageDiv = styled.div`
  //     background-image: url('../assets/home_assets/1.JPG');
  //     height: 500px;
  //     width: 500px;
  // `;
  return (
    <div className="home-wrapper">
        <div className="home-text">
            <div className="home-intro-en">
                <div className={`home-intro-en-${Mode.curMode}`}>My name is<br></br>Sarina!</div>
            </div>
            <div className="home-intro-cn">
                <div className={`home-intro-cn-${Mode.curMode}`}>我叫李晶!</div>
            </div>
            <div class="wrapper">
           <div className="home-words-intro">I am a</div>
           <div class="words">
             <span className="individ-word">student</span>
             <span className="individ-word">developer</span>
             <span className="individ-word">lifter</span>
             <span className="individ-word">artist</span>
             <span className="individ-word">student</span>
           </div>
         </div>
            <div className="home-p1">
                <div className="home-text-p1">
                I'm a CS student @UofT! I'm a student-learning-to-be-developer. 
                </div>
            </div>
            <div className="home-p1">
                <div className="home-text-p1">
                <br></br>I like cs, lifting, cooking, fashion, music and sleeping. I'm working hard to attend more hackathons, get an internship, obtain a 4.0, squat 225lbs, finish my side projects, cook more and online shop.
                </div>
            </div>
        </div>
        <HomeImage></HomeImage>
    </div>
  )

//   return (
//     <div className="home-wrapper">
//       <div className="home-introduction">
//         <div className="home-name-english-wrapper">
//           <div className="home-english-intro">My name is </div>
//           <div className="home-english-name">Sarina Li!</div>
//         </div>
//         <div className="home-name-chinese-wrapper">
//           <div className="home-chinese-intro">我叫</div>
//           <div className="home-chinese-name">李晶！</div>
//         </div>
//         <div class="wrapper">
//           <div className="home-words-intro">I am a</div>
//           <div class="words">
//             <span className="individ-word">student</span>
//             <span className="individ-word">developer</span>
//             <span className="individ-word">lifter</span>
//             <span className="individ-word">artist</span>
//             <span className="individ-word">student</span>
//           </div>
//         </div>
//         <div className="home-description-intro">
//           I am a
//           <b className="bold-description"> student-learning-to-be-developer</b>{" "}
//           with an interest in <b className="bold-description">creating</b>,{" "}
//           <b className="bold-description">learning</b> and{" "}
//           <b className="bold-description">building</b>! Creating: experiences
//           and technology, Learning: anything and everything I can get my hands
//           on, Building: technology and life experiences!
//         </div>
//       </div>
//       <div className="home-body">
//         <div className="media-wrapper">
//           <div className="media-parent">
//             <div className="media">
//               <MediaContainer></MediaContainer>
//             </div>
//           </div>
//           <div className="disclaimer">*images not drawn by me!!</div>
//         </div>
//         <div className="home-text">
//           <div className="page-index">| 01</div>
//           <div className="welcome">Welcome Home.</div>
//           <div className="line-container">
//             <hr className="line"></hr>
//           </div>
//           <div className="paragraph-item">My name is Sarina Li!</div>
//           <div className="paragraph-item">
//             I am a student @<b> UofT CS. </b>
//             Welcome to
//             <b> sarinali.me</b>, I hope you enjoy your stay here!
//           </div>
//           <div className="paragraph-item">
//             I like cs, lifting, cooking, fashion, music and sleeping. I’m
//             working hard to attend more hackathons, get an internship, obtain a
//             4.0, squat 225lbs, finish my side projects, cook more and online
//             shop.
//           </div>
//           <div className="paragraph-item">
//             <b>What I would DIE for rn: </b>
//             Attend SIGGRAPH 2023!!!!
//           </div>
//           <div className="paragraph-item">
//             <b>Biggest Goal in the Entire World: </b>
//             Work at Apple!!!!! And bench 135lbs
//           </div>
//           <div className="paragraph-item">
//             Nice having you here, feel free to explore my site!
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}

export default Home;
