function MediaContainerAbout({imageList, chineseCaption, caption, title, itemIndex, itemTitle, descriptionList, link}) {
    // const images = imageList.map((image) =>
    //     <img src={image} alt='' className="image"></img>
    // );
    return (
        <div className="media-body">
            <div className="image-media">
                <div className="image-grid">
                    {imageList.map((image) => {
                        return (
                            <img src={image} alt='' className="image-about"></img>
                        )
                    })}

                </div>
                    <div className="chinese-caption">{chineseCaption}</div>
                    <div className="caption">{caption}</div>
                    <div className="title">{title}</div>
            </div>
           
            <div className="about-text-container">
                <div className="about-item-index">
                    <div>{itemIndex}</div>
                </div>
                <div className="about-item-title">
                    <div>{itemTitle}</div>
                </div>
                <div className="about-item-description">
                    {descriptionList.map((text) => {
                        return (
                            <div className="about-text">
                                <div>{text}</div>
                            </div>
                        )
                    })}

                    <a href={link} className='about-link'>
                        <div>{link}</div>
                    </a>
                </div>

            </div>
        </div>
    )
}

export default MediaContainerAbout;