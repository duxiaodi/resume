import React, {Component} from 'react';
import style from './professtions.css';
class Professtions extends Component {
    render() {
        return (
            <div id="professtions" className={style.professtions}>
                <h1 className={style.prof_title}>擅长技术</h1>
                <div className={style.tag_panel}>
                    <div className={style.tag +' '+style.expert}>HTML</div>
                    <div className={style.tag +' '+style.familiar}>HTML5</div>
                </div>
                <div className={style.tag_panel}>
                    <div className={style.tag +' '+style.expert}>CSS</div>
                    <div className={style.tag +' '+style.expert}>CSS3</div>
                    <div className={style.tag +' '+style.familiar}>LESS</div>
                </div>
                <div className={style.tag_panel}>
                    <div className={style.tag +' '+style.expert}>JavaScript</div>
                    <div className={style.tag +' '+style.expert}>JQuery</div>
                    <div className={style.tag +' '+style.expert}>Bootstrap</div>
                    <div className={style.tag +' '+style.familiar}>React</div>
                    <div className={style.tag +' '+style.familiar}>React Native</div>
                </div>
                <div className={style.tag_panel}>
                    <div className={style.tag +' '+style.expert}>NodeJs</div>
                    <div className={style.tag +' '+style.familiar}>C/C++</div>
                </div>                               
            </div>
        );
    }
}

export default Professtions;