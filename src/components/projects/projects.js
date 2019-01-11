import React, { Component } from 'react';
import './projects.css';

class Projects extends Component {

    onClickDiv = () => {
        return true;
    }

    render () {
        return (
            <div className='projects-body' id='projects'>
                <h1>Projects</h1>
                <div className='projects-container'>
                    <div>
                        <h2>CRIM</h2>
                        <div onClick={this.onClickDiv} className='project-card1 wow fadeIn' data-wow-delay='0.1s'>
                            <div className='overlay'>
                                <a href='https://github.com/galoncyryll/CRIM' target='_blank' rel="noopener noreferrer">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Face Recognition App</h2>
                        <div onClick={this.onClickDiv} className='project-card2 wow fadeIn' data-wow-delay='0.2s'>
                            <div className='overlay'>
                                <a href='https://github.com/galoncyryll/face-recognition-app' target='_blank' rel="noopener noreferrer">GitHub</a>
                                <a href='https://face-recognition-p.herokuapp.com/' target='_blank' rel="noopener noreferrer">Live Demo</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2>Portfolio</h2>
                        <div onClick={this.onClickDiv} className='project-card3 wow fadeIn' data-wow-delay='0.3s'>
                            <div className='overlay'>
                                <a href='https://github.com/galoncyryll/website-portfolio' target='_blank' rel="noopener noreferrer">GitHub</a>
                                <a href='#0'>Live Demo</a>
                            </div>
                        </div>
                    </div>
                   <div>
                        <h2>Robofriends</h2>
                        <div onClick={this.onClickDiv} className='project-card4 wow fadeIn' data-wow-delay='0.4s'>
                            
                            <div className='overlay'>
                                <a href='https://github.com/galoncyryll/robofriends' target='_blank' rel="noopener noreferrer">GitHub</a>
                                <a href='https://galoncyryll.github.io/robofriends/' target='_blank' rel="noopener noreferrer">Live Demo</a>   
                            </div>
                        </div>
                   </div>
                   <div>
                        <h2>cycycy bot (Discord bot)</h2>
                        <div onClick={this.onClickDiv} className='project-card5 wow fadeIn' data-wow-delay='0.5s'>
                            
                            <div className='overlay'>
                                <a href='https://github.com/galoncyryll/cycycy-bot' target='_blank' rel="noopener noreferrer">GitHub</a>
                                {/* <a href='https://galoncyryll.github.io/robofriends/' target='_blank' rel="noopener noreferrer">Live Demo</a>    */}
                            </div>
                        </div>
                   </div>
                </div>       
            </div> 
        );   
    }
}

export default Projects;