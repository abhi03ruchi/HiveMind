import React from 'react';
import './Team.css';
export default function TeamM() {
    return (
        <div className='teamM'>
                <main>
                    <header>
                        <h1>Team Members</h1>
                        {/* <p>7 Online Now</p>
                        <p>View all members</p> */}
                    </header>

                    <section>
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">Carrie Burton</p>
                            <p className="card__country">New Zealand</p>
                            <p className="card__article">New CSS properties min(), max(), and clamp()</p>
                        </div>
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/men/30.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">TK Samuels</p>
                            <p className="card__country">India</p>
                            <p className="card__article">Different Approaches to Responsive CSS Motion Path</p>
                        </div>
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/women/63.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">Rachel McKenna</p>
                            <p className="card__country">United Kingdom</p>
                            <p className="card__article">The Cost of Javascript Frameworks</p>
                        </div>
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/men/60.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">Stuart Neilson</p>
                            <p className="card__country">USA</p>
                            <p className="card__article">Creating Morphing Animations with CSS clip-path</p>
                        </div>
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">Jamie Forrest</p>
                            <p className="card__country">USA</p>
                            <p className="card__article">Updates to Form Controls and Focus</p>
                        </div>
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">Eli Cohen</p>
                            <p className="card__country">Israel</p>
                            <p className="card__article">Create Diagonal Layouts Like It’s 2020</p>
                        </div>
                        <div className="card">
                            <img src="https://randomuser.me/api/portraits/women/35.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">Sara Khan</p>
                            <p className="card__country">Japan</p>
                            <p className="card__article">Create Diagonal Layouts Like It’s 2020</p>
                        </div>
                        <div className="card">
                            {/* <img src="https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Authors photo" className="card__avatar" /> */}
                            <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Authors photo" className="card__avatar" />
                            <p className="card__name">Annabelle Rio</p>
                            <p className="card__country">France</p>
                            <p className="card__article">Create Diagonal Layouts Like It’s 2020</p>
                        </div>
                    </section>
                </main>
        </div>
    )
}
