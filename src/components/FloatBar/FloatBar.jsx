import React, { useState } from 'react';
import "./FloatBar.css";

const FloatBar = () => {
    const [activeCategory, setActiveCategory] = useState('opt-1');

    const handleCategoryChange = (categoryId) => {
        setActiveCategory(categoryId);
    };

    return (
        <div className="float">
            <div className="projects-section-line">
                <div className="projects-status">
                    <div className="item-status">
                        <span className="status-number">45</span>
                        <span className="status-type">In Progress</span>
                    </div>
                    <div className="item-status">
                        <span className="status-number">24</span>
                        <span className="status-type">Upcoming</span>
                    </div>
                    <div className="item-status">
                        <span className="status-number">62</span>
                        <span className="status-type">Total Projects</span>
                    </div>
                </div>
            </div>

            <div className="page-content">
                <div className="header">Today Tasks</div>
                <div className="content-categories">
                    <div className="label-wrapper">
                        <input
                            className="nav-item"
                            name="nav"
                            type="radio"
                            id="opt-1"
                            checked={activeCategory === 'opt-1'}
                            onChange={() => handleCategoryChange('opt-1')}
                        />
                        <label className="category" htmlFor="opt-1">
                            Completed
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <input
                            className="nav-item"
                            name="nav"
                            type="radio"
                            id="opt-2"
                            checked={activeCategory === 'opt-2'}
                            onChange={() => handleCategoryChange('opt-2')}
                        />
                        <label className="category" htmlFor="opt-2">
                            OverDue
                        </label>
                    </div>
                    <div className="label-wrapper">
                        <input
                            className="nav-item"
                            name="nav"
                            type="radio"
                            id="opt-3"
                            checked={activeCategory === 'opt-3'}
                            onChange={() => handleCategoryChange('opt-3')}
                        />
                        <label className="category" htmlFor="opt-3">
                            Upcoming
                        </label>
                    </div>
                    {/* <div className="label-wrapper">
                        <input
                            className="nav-item"
                            name="nav"
                            type="radio"
                            id="opt-4"
                            checked={activeCategory === 'opt-4'}
                            onChange={() => handleCategoryChange('opt-4')}
                        />
                        <label className="category" htmlFor="opt-4">
                            Links
                        </label>
                    </div> */}
                </div>

                <div className="tasks-wrapper">
                    {/* Render tasks based on the active category */}
                    {activeCategory === 'opt-1' && (
                        <div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-1" defaultChecked />
                                <label htmlFor="item-1">
                                    <span className="label-text">Dashboard Design Implementation</span>
                                </label>
                                <span className="tag approved">Approved</span>
                            </div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-2" defaultChecked />
                                <label htmlFor="item-2">
                                    <span className="label-text">Create a userflow</span>
                                </label>
                                <span className="tag progress">In Progress</span>
                            </div>
                            <div class="task">
                                <input class="task-item" name="task" type="checkbox" id="item-3" />
                                <label for="item-3">
                                    <span class="label-text">Application Implementation</span>
                                </label>
                                <span class="tag review">In Review</span>
                            </div>
                            <div class="task">
                                <input class="task-item" name="task" type="checkbox" id="item-4" />
                                <label for="item-4">
                                    <span class="label-text">Create a Dashboard Design</span>
                                </label>
                                <span class="tag progress">In Progress</span>
                            </div>
                            <div class="task">
                                <input class="task-item" name="task" type="checkbox" id="item-5" />
                                <label for="item-5">
                                    <span class="label-text">Create a Web Application Design</span>
                                </label>
                                <span class="tag approved">Approved</span>
                            </div>
                            {/* Add more tasks for the 'All' category */}
                        </div>
                    )}

                    {activeCategory === 'opt-2' && (
                        <div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-4" />
                                <label htmlFor="item-4">
                                    <span className="label-text">Create a Dashboard Design</span>
                                </label>
                                <span className="tag progress">In Progress</span>
                            </div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-5" />
                                <label htmlFor="item-5">
                                    <span className="label-text">Create a Web Application Design</span>
                                </label>
                                <span className="tag approved">Approved</span>
                            </div>
                            {/* Add more tasks for the 'Important' category */}
                            <div class="task">
                                <input class="task-item" name="task" type="checkbox" id="item-4" />
                                <label for="item-4">
                                    <span class="label-text">Create a Dashboard Design</span>
                                </label>
                                <span class="tag progress">In Progress</span>
                            </div>
                            <div class="task">
                                <input class="task-item" name="task" type="checkbox" id="item-5" />
                                <label for="item-5">
                                    <span class="label-text">Create a Web Application Design</span>
                                </label>
                                <span class="tag approved">Approved</span>
                            </div>
                            <div class="task">
                                <input class="task-item" name="task" type="checkbox" id="item-6" />
                                <label for="item-6">
                                    <span class="label-text">Interactive Design</span>
                                </label>
                                <span class="tag review">In Review</span>
                            </div>
                        </div>
                    )}

                    {activeCategory === 'opt-3' && (
                        <div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-7" />
                                <label htmlFor="item-7">
                                    <span className="label-text">Dashboard Design Implementation</span>
                                </label>
                                <span className="tag waiting">Waiting</span>
                            </div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-8" />
                                <label htmlFor="item-8">
                                    <span className="label-text">Create a userflow</span>
                                </label>
                                <span className="tag waiting">Waiting</span>
                            </div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-9" />
                                <label htmlFor="item-9">
                                    <span className="label-text">Application Implementation</span>
                                </label>
                                <span className="tag waiting">Waiting</span>
                            </div>
                            <div className="task">
                                <input className="task-item" name="task" type="checkbox" id="item-10" />
                                <label htmlFor="item-10">
                                    <span className="label-text">Create a Dashboard Design</span>
                                </label>
                                <span className="tag waiting">Waiting</span>
                            </div>
                        </div>
                    )}

                    {/* Add subsections for other categories similarly */}
                </div>

                {/* Uncomment the line below if you want to include the "Upcoming Tasks" section */}
                {/* <div className="header upcoming">Upcoming Tasks</div> */}
            </div>
        </div>
    );
};

export default FloatBar;
