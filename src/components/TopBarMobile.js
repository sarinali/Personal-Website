import Sidebar from '../components/Sidebar';

function TopBarMobile() {
    return <div className='top'>
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'body'} />
    <div id="page-wrap"></div>
  </div>
}

export default TopBarMobile;