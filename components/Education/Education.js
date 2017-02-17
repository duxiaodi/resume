import React, { Component, PropTypes } from 'react';
import style from './education.css';
import { hashHistory } from 'react-router';

class Education extends Component {
    constructor(props, context) {
        super(props, context);
         this.handleScroll = this.handleScroll.bind(this);
    }
     handleScroll(event) {
        if (event.deltaY > 0) {
            //console.log('向下滚动',);
            hashHistory.push('/professtions');
        } else {
            //console.log('向上滚动');
            hashHistory.push('/');
        }

    }
    render() {
        return (
            <div id="edu" className={style.edu} onWheel={this.handleScroll}>
                <div>
                    <h1 className={style.school}>教育经历</h1>
                    <ul className={style.list}>
                        <li>
                            <span className={style.heart}></span>
                            <h4>2013 ~ 2016 : 安徽大学  硕士  计算机应用技术</h4>
                        </li>
                        <li>
                            <span className={style.heart}></span>
                            <h4>2009 ~ 2013 : 安徽大学江淮学院  计算机科学与技术</h4>
                        </li>
                    </ul>
                </div>
                <div className={style.prize}>
                    <h4>获得奖项:</h4>
                    <ul className={style.prizeList}>
                        <li>
                            2015 ~ 2016 ： 安徽大学优秀奖学金
                         </li>
                        <li>
                            2014 ~ 2015 ： 安徽大学三等学金
                         </li>
                        <li>
                            2013 ~ 2014 ： 安徽大学二等奖学金
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

Education.propTypes = {

};

export default Education;