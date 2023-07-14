import React from 'react';
import './Project.css';

function ProjectBox({ boxshadow, date, backgroundColor, contentHeader, contentSubheader, progress, participants, daysLeft, daysLeftColor }) {
    return (
        <div className="project-box" style={{ backgroundColor, boxShadow: boxshadow }}>
            <div className="project-box-header">
                <span>{date}</span>
                <div className="more-wrapper">
                    <button className="project-btn-more">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-more-vertical"
                        >
                            <circle cx="12" cy="12" r="1" />
                            <circle cx="12" cy="5" r="1" />
                            <circle cx="12" cy="19" r="1" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="project-box-content-header">
                <p className="box-content-header">{contentHeader}</p>
                <p className="box-content-subheader">{contentSubheader}</p>
            </div>
            <div className="box-progress-wrapper">
                <p className="box-progress-header">Progress</p>
                <div className="box-progress-bar">
                    <span className="box-progress" style={{ width: `${progress}%`, backgroundColor: daysLeftColor }}></span>
                </div>
                <p className="box-progress-percentage" style={{ color: daysLeftColor }}>{progress}%</p>
            </div>
            <div className="project-box-footer">
                <div className="participants">
                    {participants.map((participant, index) => (
                        <img key={index} src={participant} alt="participant" />
                    ))}
                    <button className="add-participant" style={{ color: daysLeftColor }}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-plus"
                        >
                            <path d="M12 5v14M5 12h14" />
                        </svg>
                    </button>
                </div>
                <div className="days-left" style={{ color: daysLeftColor }}>
                    {daysLeft} Days Left
                </div>
            </div>
        </div>
    );
}

function ProjectSection() {
    return (
        <div className="project-section">
            <div className="project-boxes jsGridView">
                <div className="project-box-wrapper">
                    <ProjectBox
                        date="December 10, 2020"
                        backgroundColor="#fee4cb"
                        contentHeader="Web Designing"
                        contentSubheader="Prototyping"
                        progress={60}
                        participants={[
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                            'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                        ]}
                        daysLeft="2"
                        daysLeftColor="#f6a609"
                        boxshadow="0 2px 6px 0 rgba(136, 148, 171, .2), 0 24px 20px -24px rgba(71, 82, 107, .1)"
                    />
                </div>
                <div className="project-box-wrapper">
                    <ProjectBox
                        date="December 10, 2020"
                        backgroundColor="#e9e7fd"
                        contentHeader="Testing"
                        contentSubheader="Prototyping"
                        progress={50}
                        participants={[
                            'https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80',
                            'https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                        ]}
                        daysLeft="2"
                        daysLeftColor="#8c7ae6"
                        box-shadow="0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1)"
                    />
                </div>

                <div className="project-box-wrapper">
                    <ProjectBox
                        date="December 10, 2020"
                        backgroundColor="#fff"
                        contentHeader="Svg Animations"
                        contentSubheader="Prototyping"
                        progress={80}
                        participants={[
                            'https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                            'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                        ]}
                        daysLeft="2"
                        daysLeftColor="black"
                        box-shadow="0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1)"
                    />
                </div>
                <div className="project-box-wrapper">
                    <ProjectBox
                        date="December 10, 2020"
                        backgroundColor="#ffd3e2"
                        contentHeader="UI Development"
                        contentSubheader="Prototyping"
                        progress={20}
                        participants={[
                            'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                            'https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                        ]}
                        daysLeft="2"
                        daysLeftColor="#ff6b81"
                        box-shadow="0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1)"
                    />
                </div>
                <div className="project-box-wrapper">
                    <ProjectBox
                        date="December 10, 2020"
                        backgroundColor="#c8f7dc"
                        contentHeader="Data Analysis"
                        contentSubheader="Prototyping"
                        progress={60}
                        participants={[
                            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                            'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
                        ]}
                        daysLeft="2"
                        daysLeftColor="#00b894"
                        box-shadow="0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1)"
                    />
                </div>
                <div className="project-box-wrapper">
                    <ProjectBox
                        date="December 10, 2020"
                        backgroundColor="#d5deff"
                        contentHeader="Web Designing"
                        contentSubheader="Prototyping"
                        progress={40}
                        participants={[
                            'https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
                            'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80',
                        ]}
                        daysLeft="2"
                        daysLeftColor="#1e90ff"
                        box-shadow="0 2px 6px 0 rgba(136,148,171,.2),0 24px 20px -24px rgba(71,82,107,.1)"
                    />
                </div>
            </div>
        </div>
    );
}

export default function TeamM() {
    return (
        <div className='proj'>
              <header>
                        <h1>Ongoing Projects</h1>
              </header>

            <ProjectSection />
            {/* <MessagesSection /> */}

        </div>
    )
}
