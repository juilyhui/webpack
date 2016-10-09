
// 把Greeter模块返回的节点插入页面。

// var greeter = require('./Greeter.js');
//
// document.getElementById('root').appendChild(greeter());



// 使用ES6的模块定义和渲染Greeter模块

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css'; // 使用require导入css文件

render(<Greeter />, document.getElementById('root'));
