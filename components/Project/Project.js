import React, {Component} from 'react';
import style from './project.css';
class Project extends Component {
    render() {
        return (
            <div id="project" className={style.project}>
                <h1 className={style.experience}>项目经验</h1>
                <h4 className={style.descripte}>2016.03 - 至今 《睦邻》APP研发</h4>
                <ul>
                    <li>
                        <h5 className={style.technology}>采用技术：</h5>
                        <p className={style.tec_descripte}>JQuery,js,Cordova,JsRender,AppFramework,Jsjac,HTML5,CSS3</p>
                    </li>
                    <li>
                        <h5 className={style.pro_descripteTitle}>项目描述:</h5>
                            <ul className={style.pro_descripte}>
                                <li>1、负责公司移动端产品《睦邻》手机APP中的好友搜索、添加、同意、删除功能开发。</li>
                                <li>2、好友列表界面设计、实现、更新、排序功能开发。</li>
                                <li>3、APP内好友圈、评论，点赞功能开发。</li>
                                <li>4、聊天发消息添加即发即见功能，两秒后收不到服务器回执消息前转圈效果，发送不成功，消息前出现感叹号效果功能实现</li>
                                <li>5、聊天发消息已送达到对方消息前出现对勾功能效果实现</li>
                                <li>6、APP内偶发BUG检查和修改。</li>
                            </ul>
                       
                    </li>
                </ul>
            </div>
        );
    }
}

export default Project;