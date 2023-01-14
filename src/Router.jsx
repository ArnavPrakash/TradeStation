import { ReactComponent as ChevronRight } from './assets/chevron-right.svg';
import './sidebar.css';
import user from './assets/user.png'
import {FaUserCircle,FaUsers} from 'react-icons/fa';
import {CgUserlane} from 'react-icons/cg';
import {BiSearch} from 'react-icons/bi';
import {FiMessageSquare} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {VscGraph} from 'react-icons/vsc';
import {MdOutlineForum} from 'react-icons/md';
import {TbMessages} from 'react-icons/tb';


function Routed() {
		return (
            <div className="App">
    
                <main>
                    <div className="nav-panel">
                        <div className="nav-panel-top">
                            <div className='app-info' >
                                <h2>Hello {<CgUserlane/>}, </h2>
                                <div style={{'scale':'3'}}><FaUserCircle/></div>
                            </div>
                            <div className='buttons'>
                            <button className={window.location.pathname.startsWith("/session/home") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/home")
                            }}>
                                <div>
                                <BiSearch/>Find anything
                                </div>
                                <ChevronRight className="chevron" />
                            </button>
                            <button className={window.location.pathname.startsWith("/session/usermanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/usermanagement")
                            }}>
                                <div><FaUsers/> Communities</div>
                                <ChevronRight className="chevron" />
                            </button>
                            <button className={window.location.pathname.startsWith("/session/unitmanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/unitmanagement")
                            }}>
                                <div><FiMessageSquare/> Help and support</div>
                                <ChevronRight className="chevron" />
                            </button>
                            </div>
                            <div className='gen'>GENERAL</div>
                            <div className='buttons'>
                            <button className={window.location.pathname.startsWith("/session/ordermanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/ordermanagement")
                            }} >
                                <div><AiFillHome/> Home</div>
                                <ChevronRight className="chevron" />
                            </button>
                            <button className={window.location.pathname.startsWith("/session/warehousemanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/warehousemanagement")
                            }}>
                                <div><VscGraph/> Stocks & Funds</div>
                                <ChevronRight className="chevron" />
                            </button>
    
    
    
                            <button className={window.location.pathname.startsWith("/session/issuemanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/issuemanagement")
                            }}>
                                <div><TbMessages/>Forum</div>
                                <ChevronRight className="chevron" />
                            </button>
                            </div>
                        </div>
                            <div className='bottom'>
                                <div>Login</div>
                                <div>Sign Up</div>
                            </div>
                    </div>
                </main>
            </div>
        );
}

export default Routed