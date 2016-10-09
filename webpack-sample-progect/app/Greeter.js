
// var config = require('./config.json');
//
// // 一个用来返回包含问候信息的html元素的函数。
//
// module.exports = function(){
//     var greet = document.createElement('div');
//     // greet.textContent = 'Hi there and greeting!';
//     greet.textContent = config.greetText;
//     return greet;
// }


import React, {Component} from 'react';
import config from './config.json';

import styles from './Greeter.css'; // 导入 Greeter.css 样式


class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter
