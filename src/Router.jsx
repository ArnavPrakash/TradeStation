import { ReactComponent as ChevronRight } from './assets/chevron-right.svg';
import './sidebar.css';
import { Outlet, useNavigate, useLocation, useOutlet } from 'react-router-dom'
import user from './assets/user.png'
import {FaUserCircle,FaUsers} from 'react-icons/fa';
import {CgUserlane} from 'react-icons/cg';
import {BiSearch} from 'react-icons/bi';
import {FiMessageSquare} from 'react-icons/fi';
import {AiFillHome} from 'react-icons/ai';
import {VscGraph} from 'react-icons/vsc';
import {MdOutlineForum} from 'react-icons/md';
import {TbMessages} from 'react-icons/tb';
import ComponentPart from '../src/componants/ComponentPart'

function Routed() {
    const location = useLocation();
    const outlet = useOutlet();
    const navigate = useNavigate();
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
                            </button>
                            <button className={window.location.pathname.startsWith("/session/usermanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/usermanagement")
                            }}>
                                <div><FaUsers/> Communities</div>
                            </button>
                            <button className={window.location.pathname.startsWith("/session/unitmanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/unitmanagement")
                            }}>
                                <div><FiMessageSquare/> Help and support</div>
                            </button>
                            </div>
                            <div className='gen'>GENERAL</div>
                            <div className='buttons'>
                            <button className={window.location.pathname.startsWith("/session/ordermanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/ordermanagement")
                            }} >
                                <div><AiFillHome/> Home</div>
                            </button>
                            <button className={window.location.pathname.startsWith("/Homepage/graph") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                navigate("/Homepage/graph")
                            }}>
                                <div><VscGraph/> Stocks & Funds</div>
                            </button>
                            <button className={window.location.pathname.startsWith("/session/issuemanagement") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                // navigate("/session/issuemanagement")
                            }}>
                                <div><TbMessages/>Forum</div>
                            </button>
                            </div>
                        </div>
                            <div className='bottom'>
                                <div>Login</div>
                                <div>Sign Up</div>
                            </div>
                    </div>
                    <div className="content">
						<Outlet />
					</div>
                </main>
                
            </div>
        );
}

export default Routed