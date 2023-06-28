import React, { useState } from 'react';
import { SidebarData } from './SidebarData';
import { Outlet, useNavigate, } from 'react-router-dom';
import '../App.css';
import TopNew from './TopNew';
import { AiOutlineMenu,AiFillChrome } from "react-icons/ai";


const Layout = () => {
    const navigate = useNavigate();
    const [isopen,setIsopen]=useState(false)

    const Toggle = () => setIsopen(!isopen);
    return (
        <div>
            <div className='row'>
                <TopNew />

                <div className='col-3'>
                    <div style={{width: isopen ? "250px" : "50px"}} className='sidebar'>
                        <div className='bare d-flex me-1 mt-1'>
                            <AiFillChrome className='me-4' />
                            <h2><b>Logo</b></h2>&emsp;
                        <AiOutlineMenu onClick={Toggle} />
                        </div>
                      

                        <ul className='sidebarList'>

                            {SidebarData.map((val, key) => {

                                return <li key={key}
                                    className='row'
                                    onClick={() => {
                                        navigate(val.Link);
                                    }}
                                >
                                    <div id='icon'>{val.icon}</div>
                                    <div style={{display: isopen ? "" : "none"}} id='title'>{val.title}</div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className='col-9'>
                    <Outlet />
                   
                </div>
            </div>
        </div>
    );
}

export default Layout;
