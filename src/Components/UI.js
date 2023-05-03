import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Img from "../assets/Image.png";
import Img2 from '../assets/Image2.png';
import Img3 from '../assets/Image3.png';
import Img4 from '../assets/Image4.jpg';
import './UI.css';

const UI = () => {
    return(
        <div >
        
           
            <Row className="containers">
            <div className='bell'><i class="fa fa-bell"></i></div>
                <Col xl={3} className="navbars">
                    <img src={Img2} alt="img" className="image"/>
                {/* <ul className="ul">
                    <li><i class="fa fa-home" style={{fontSize:"24px"}}></i>Home</li>
                    <li><i class="fa fa-home" style={{fontSize:"24px"}}></i>Dashboard</li>
                    <li><i class="fa fa-users" style={{fontSize:"24px"}}></i>Users</li>
                    <li><i class="fa fa-calendar" style={{fontSize:"24px"}}></i>Calender</li>
                    <li><i class="fa fa-book" style={{fontSize:"24px"}}></i>Projects</li>
                    <li><i class="fa fa-question-circle" style={{fontSize:"24px"}}></i>Help</li>
                    <li><i class="fa fa-user" style={{fontSize:"24px"}}></i>John Smith</li>
                    <li><i class="fa fa-cog" style={{fontSize:"24px"}}></i>Settings</li>
                </ul> */}
                <input type="checkbox" id="toggle" />

                    <nav>

                        

                        <label class="navbar-toggler" for="toggle">
                            <span class="bar"></span>
                            <span class="bar"></span>
                            <span class="bar"></span>
                        </label>

                        <ul class="nav-list">
                            <li class="nav-item">
                            <a href="#" className="nav-link"><i class="fa fa-home" style={{fontSize:"24px"}}></i>Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><i class="fa fa-home" style={{fontSize:"24px"}}></i>Dashboard</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><i class="fa fa-users" style={{fontSize:"24px"}}></i>Users</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><i class="fa fa-calendar" style={{fontSize:"24px"}}></i>Calender</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><i class="fa fa-book" style={{fontSize:"24px"}}></i>Projects</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><i class="fa fa-question-circle" style={{fontSize:"24px"}}></i>Help</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><i class="fa fa-user" style={{fontSize:"24px"}}></i>John Smith</a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link"><i class="fa fa-cog" style={{fontSize:"24px"}}></i>Settings</a>
                            </li>
                        </ul>

                    </nav>
                </Col>

                <Col xl={3} className='col2' >
                <div className="Card">
                <h4>Hi John,</h4>
                <h2>Welcome back!</h2>
                <p>This page is designed to give some important information about the application.Let's make something together!</p>
                <img src={Img} alt="img" className='image2'/>
                </div>
                <div className="Card2">
                   <h4>Congratulations John</h4>
                   <p>You have completed 75% of your profile. Your current progress is great.</p>
                   <button>View Profile</button> 
                </div>
                </Col>

                <Col xl={6}  className='col23'>
                <div className='Wrapper'>
                    
                <div className="col1">
                <div className='Col3'>
                    <div className="icon"><i class="fa fa-thumbs-up"></i></div>
                    <div>
                    <h6 className='number'>26789</h6>
                    <p className="para">Likes</p>
                    </div>
                    <div className='arrows'><i class="fas fa-angle-up" style={{color:"green"}}></i></div>
                </div>
                <div className='Col3'>
                <div className="icon2"><i class="fa fa-heart"></i></div>
                    <div>
                    <h6 className='number'>26789</h6>
                    <p className="para">Likes</p>
                    </div>
                    <div className='arrows'><i class="fas fa-angle-right"></i></div>
                </div>
                <div className='Col3'>
                <div className="icon3" id="icon3"><i class="fa fa-smile"></i></div>
                    <div>
                    <h6 className='number'>26789</h6>
                    <p className="para">Likes</p>
                    </div>
                    <div className='arrows'><i class="fas fa-angle-down" style={{color:"red"}}></i></div>
                </div>
                </div>
                
                {/* <div className="innerWrapper"> */}
                <div className='Col4'>
                    
                <h4>Targets</h4>
                <div className="progressContent">
                <p>Views</p>
                <p>75%</p>
                </div>    
                <div className="w3-border">
                <div className="w3-grey" ></div>               
                </div>
                
                
                <div className="progressContent">
                <p>Followers</p>
                <p>50%</p>
                </div>    
                <div className="w3-border">
                <div className="w3-red" ></div>               
                </div>

                <div className="progressContent">
                <p>Income</p>
                <p>25%</p>
                </div>    
                <div className="w3-border">
                <div className="w3-orange" ></div>               
                </div>
                </div>
                
                
                </div>
                {/* </div> */}
                <div className='Wrapper'>
                <div className='Col5'>
                    <p style={{paddingTop:"20px"}}>Views</p>
                    <p>6258.85</p>
                    <img src={Img4} alt="img" />
                <div className="innerCard">
                <div className="icon3"><i class="fa fa-smile"></i></div>
                    <div>
                    <h6 className='number'>26789</h6>
                    <p className="para">Likes</p>
                    </div>
                    <div className='arrow'><i class="fas fa-angle-up"></i></div>
                </div>
                </div>
                <div className="cardWrapper">
                <h4>Meetings</h4>
                <div className='Col3'>
                    {/* <div className="icon"><i class="fa fa-thumbs-up"></i></div> */}
                    <img src={Img3} alt="img" style={{width:"40px",height:"40px",marginTop:"20px"}} />
                    <div>
                    <h6 className='number'>Emmy Anderson</h6>
                    <p className="para">08:00 - 10:00</p>
                    </div>
                    <div className='arrow'><i class="fas fa-angle-right"></i></div>
                </div>
                <div className='Col3'>
                <img src={Img3} alt="img" style={{width:"40px",height:"40px",marginTop:"20px"}} />
                    <div>
                    <h6 className='number'>Johy Mclain</h6>
                    <p className="para">14:00 16:00</p>
                    </div>
                    <div className='arrow'><i class="fas fa-angle-right "></i></div>
                </div>
                <div className='Col3'>
                <img src={Img3} alt="img" style={{width:"40px",height:"40px",marginTop:"20px"}} />
                    <div>
                    <h6 className='number'>Mara dach</h6>
                    <p className="para">14:00 - 15:00</p>
                    </div>
                    <div className='arrow'><i class="fas fa-angle-right"></i></div>
                </div>
                <div className='Col6'>
                    <i class="fa fa-plus"></i>
                </div>
                </div>
                
                </div>
                </Col>
            </Row>
           
        
        </div>
    )
} 
export default UI