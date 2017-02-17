import React, { Component } from 'react';
import style from './work.css';
class Work extends Component {
    render() {
        return (
            <div id="work" className={style.work}>
                <h1 className={style.work_title}>工作经历</h1>
                <h4 className={style.company}>2016.03 – 至今 上海睦邻信息科技有限公司</h4>
                <h6 className={style.position}>WEB前端开发工程师</h6>
                <div className={style.prize}>
                    <h4 className={style.job}>工作描述：</h4>
                    <ul className={style.work_describe}>
                        <li>
                            1、公司跨平台移动APP《睦邻》开发:《睦邻》是给予互联网+建立的社区教育、社区商业、社区医疗健康、社区养老、社区物业、社区公益组织等社区分享平台。
                         </li>
                        <li>
                            2、《睦邻》app，ios发布到app store,安卓发布到应用宝
                         </li>
                        <li>
                            3、App 二维码扫描下载生成
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Work;