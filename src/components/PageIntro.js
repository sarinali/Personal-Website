import '../css/topbar.css'

function PageIntro({pageName, displayIndex, displayText}) {

    const displayTexts = displayText.map((text) =>
        <div className='aboutme-texts'>
        {text}
        </div>
        
    );
    return (
        <div className='page-header-parent'>
            
            <div className='page-header-container'>
                <div className='page-information'>
                    {/* <div className='page-index-display'>
                        <div>{displayIndex}</div>
                    </div> */}
                    <div className='page-name'>
                        <div>{pageName}</div>
                    </div>
                    <hr className='aboutme-line'></hr>
                </div>
                <div className='page-description'>
                    <div>{displayTexts}</div>
                </div>
            </div>
        
        </div>
    )
}

export default PageIntro;