import First from '../assets/home_assets/1.JPG';
import Second from '../assets/home_assets/2.JPG'
import Third from '../assets/home_assets/3.JPG'
import Fourth from '../assets/home_assets/4.JPG'
import Fifth from '../assets/home_assets/5.JPG'
import Sixth from '../assets/home_assets/6.JPG'
import Seventh from '../assets/home_assets/7.JPG'
import Eighth from '../assets/home_assets/8.JPG'
import Ninth from '../assets/home_assets/9.JPG'
import Tenth from '../assets/home_assets/10.JPG'
// import Eleventh from '../assets/home_assets/11.JPG'
import ImageBundle from '../ImageBundle'
import '../css/home.css';
import styled from "styled-components";

function MediaContainer() {
    let componentList = [
        new ImageBundle(First, 1, '一', 'i romanticize walking home during golden hour on this street'),
        new ImageBundle(Second, 2, '二', 'reminds me of the streets of my parents hometown, 广州 (guangzhou)'),
        new ImageBundle(Third, 3, '三', 'this is what my bedroom feels like when im in it'),
        new ImageBundle(Fourth, 4, '四', 'pov: i am one of the rats in ratatouille looking for remy'),
        new ImageBundle(Fifth, 5, '五', 'reminds me of the days walking home alone from high school at 6pm from wind ensemble sun setting carrying my instrument case'),
        new ImageBundle(Sixth, 6, '六', 'how i imagine i look when i apply my chanel rouge coco 31 in the morning'),
        new ImageBundle(Seventh, 7, '七', 'this is what my bedroom looks like at all times'),
        new ImageBundle(Eighth, 8, '八', 'the vibe feels just right, the clouds and the rain, the feeling of being happy alone'),
        new ImageBundle(Ninth, 9, '九', 'i imagine myself getting off work and walking home to this view'),
        new ImageBundle(Tenth, 10, '十', 'this is bilgewater from runeterra aestheticized'),
        // new ImageBundle(Eleventh, 11, '十一', 'piltover from arcane! (where is jayce??)'),
    ];

    let index = Math.floor(Math.random() * 10) + 1;
    return (
        <div className='media-container'>
                <div className='image-container'>
                    <img src={componentList[index].component} alt='' className='image'></img>
                </div> 
                <div className='index-label'>{componentList[index].index}</div>
                <div className='character-label'>{componentList[index].hanYuChar}</div>
                <div className='dot-label'>。</div>
                <div className='text-label'>{componentList[index].blurb}</div>
                <hr className='separator'></hr>
                <div className='icon-container'>
                    <div>图片{componentList[index].index}</div>
                    <div>image {componentList[index].index}</div>
                </div>
            </div>
    )
}

export default MediaContainer;