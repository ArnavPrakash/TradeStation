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
                            <button className='nav-button' onClick={() => {
                              
                            }}>
                                <div>
                                <BiSearch/>Find anything
                                </div>
                            </button>
                            <button className= 'nav-button' onClick={() => {
                         
                            }}>
                                <div><FaUsers/> Communities</div>
                            </button>
                            <button className= 'nav-button' onClick={() => {
                                
                            }}>
                                <div><FiMessageSquare/> Help and support</div>
                            </button>
                            </div>
                            <div className='gen'>GENERAL</div>
                            <div className='buttons'>
                            <button className={window.location.pathname.startsWith("/Homepage/home") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                navigate("/Homepage/home")
                            }} >
                                <div><AiFillHome/> Home</div>
                            </button>
                            <button className={window.location.pathname.startsWith("/Homepage/stocks") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                navigate("/Homepage/stocks")
                            }}>
                                <div><VscGraph/>Stocks & Funds</div>
                            </button>
                            <button className={window.location.pathname.startsWith("/Homepage/graph") ? 'nav-button active' : 'nav-button'} onClick={() => {
                                navigate("/Homepage/graph")
                            }}>
                                <div><VscGraph/>Advanced Chart</div>
                            </button>
                            </div>
                        </div>
                            <div className='bottom'>
                                <div className='hover' onClick={() => {
                                navigate("/Homepage/login")
                            }}>Login</div>
                                <div className='hover' onClick={() => {
                                navigate("/Homepage/signin")
                            }}>Sign Up</div>
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