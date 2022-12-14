import '../css/topbar.css'

function PageIntro({pageName, displayIndex, displayText}) {

    const displayTexts = displayText.map((text) =>
        <div>{text}</div>
    );
    return (
        <div className='page-header-parent'>
            
            <div className='page-header-container'>
                <div className='page-information'>
                    <div className='page-index-display'>{displayIndex}</div>
                    <div className='page-name'>{pageName}</div>
                </div>
                <div className='page-description'>{displayTexts}</div>
            </div>
        
        </div>
    )
}

export default PageIntro;