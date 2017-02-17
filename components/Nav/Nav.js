import React, { Component, PropTypes } from 'react';
import style from './nav.css';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div id="nav" className={style.left}>
                    <ul>
                        <li className={style.list} title="首页">
                            <Link to='/'>
                                <span id="homepage" className={style.circle}></span>
                            </Link>
                        </li>
                        <li className={style.list} title="教育">
                            <Link to='/education'>
                                <span id="education" className={style.circle}></span>
                            </Link>
                        </li>
                        <li className={style.list} title="技能">
                            <Link to='/professtions'>
                                <span id="professtions" className={style.circle}></span>
                            </Link>
                        </li>
                        <li className={style.list} title="工作">
                            <Link to='/work'>
                                <span id="job" className={style.circle}></span>
                            </Link>
                        </li>
                        <li className={style.list} title="项目">
                            <Link to='/project'>
                                <span id="project" className={style.circle}></span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {
                        React.cloneElement(this.props.children, {
                            key: this.props.location.pathname
                        })
                    }
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

Nav.propTypes = {

};

export default Nav;
