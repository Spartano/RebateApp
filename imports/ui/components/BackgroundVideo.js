import React from 'react';


export default class BackgroundVideo extends React.Component {
    render() {
        return (
            <div className="fullscreen-bg">
                <video loop autoPlay poster="" className="fullscreen-bg__video" 
                style={{top: `${this.props.position}vh`}}> 
                    <source src="/lonely-item-bg.mp4" type="video/mp4" />
                </video>  
            </div>
        )
    }
}

