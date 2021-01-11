import Post from './post'
import json from './assets/json.json'
// import xml from '.assets/data.xml'
import './babel.js'
import SiteLogo from  './assets/pen.png'
import './styles/styles.css'
import './styles/less.less'
import './styles/scss.scss'


const post = new Post('Webpack post title', SiteLogo)

console.log('Post to string:', post.toString());

console.log('JSON:', json);
// console.log('XML:', xml);