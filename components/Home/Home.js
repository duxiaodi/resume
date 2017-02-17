import React, { Component, PropTypes } from 'react';
import style from './home.css';
import { hashHistory } from 'react-router';

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll(event) {
        if (event.deltaY > 0) {
            //console.log('向下滚动',);
            hashHistory.push('/education');
        } else {
            //console.log('向上滚动');
        }

    }
    render() {
        return (
            <div id="home" className={style.home} onWheel={this.handleScroll}>
                <div className={style.home1}>
                    <img id="avatar" className={style.image} src="img/08.jpg" />
                    <h1 id="title" className={style.title}>杜 迪</h1>
                    <p id="subtitle" className={style.signal}>一腔热血的激情 · 一夜失眠的创意 · 一个像素的执着</p>
                    <h4>前端工程师</h4>

                    <h6><a href="http://duxiaodi.github.com">github</a></h6>
                    <p>15055160265@163.com</p>
                </div>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;