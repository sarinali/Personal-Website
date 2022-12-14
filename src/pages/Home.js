import MediaContainer from "../components/MediaContainer";


function Home() {
    
    
    // const BackGroundImageDiv = styled.div`
    //     background-image: url('../assets/home_assets/1.JPG');
    //     height: 500px;
    //     width: 500px;
    // `;

    return (
        <div className='home-body'>
            <div className='media-wrapper'>
                <div className="media-parent">
                    <div className="media">
                        <MediaContainer></MediaContainer>
                    </div>

                </div>
                    <div className='disclaimer'>*images not drawn by me!!</div>
            </div>
            <div className='home-text'>
                <div className='page-index'>| 01</div>
                <div className="welcome">Welcome Home.</div>
                <div className="line-container">
                    <hr className="line"></hr>
                </div>
                <div className="paragraph-item">
                    My name is Sarina Li! 
                </div>
                <div className="paragraph-item">
                    I am a student @
                    <b> UofT CS. </b>
                     Welcome to 
                     <b> sarinali.me</b>
                     , I hope you enjoy your stay here! 
                </div>
                <div className="paragraph-item">
                I like cs, lifting, cooking, fashion, music and sleeping. I’m working hard to attend more hackathons, get an internship, obtain a 4.0, squat 225lbs, finish my side projects, cook more and online shop. 
                </div>
                <div className="paragraph-item">
                <b>What I would DIE for rn: </b>
                     Attend SIGGRAPH 2023!!!!
                </div>
                <div className="paragraph-item">
                <b>Biggest Goal in the Entire World: </b>
                     Work at Apple!!!!! And bench 135lbs
                </div>
                <div className="paragraph-item">
                    Nice having you here, feel free to explore my site! 
                </div>
            </div>
        </div>
    )
}

export default Home;