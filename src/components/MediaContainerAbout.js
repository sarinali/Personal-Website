function MediaContainerAbout({imageList, chineseCaption, caption, title}) {
    const images = imageList.map((image) =>
        <img src={image} alt='' className="image"></img>
    );
    return (
        <div className="media-body">
            <div className="image-media">
                <div className="image-grid">
                    {imageList.map((image) => {
                        return (
                            <img src={image} alt='' className="image"></img>
 
                        )
                    })}

                </div>
                    <div className="chinese-caption">{chineseCaption}</div>
                    <div className="caption">{caption}</div>
                    <div className="title">{title}</div>
            </div>
            <div>alskdfjlkdj</div>
        </div>
    )
}

export default MediaContainerAbout;