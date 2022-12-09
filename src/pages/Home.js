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
import Eleventh from '../assets/home_assets/11.JPG'
import ImageBundle from '../ImageBundle'



function Home() {
    let componentList = [
        new ImageBundle(First, 1, '一'),
        new ImageBundle(Second, 2, '二'),
        new ImageBundle(Third, 3, '三'),
        new ImageBundle(Fourth, 4, '四'),
        new ImageBundle(Fifth, 5, '五'),
        new ImageBundle(Sixth, 6, '六'),
        new ImageBundle(Seventh, 7, '七'),
        new ImageBundle(Eighth, 8, '八'),
        new ImageBundle(Ninth, 9, '九'),
        new ImageBundle(Tenth, 10, '十'),
        new ImageBundle(Eleventh, 11, '十一'),
    ];

    let index = Math.floor(Math.random() * 11) + 1;
    return (
        <div>
            {/* <img src={componentList[index].component}></img> */}
        </div>
    )
}

export default Home;