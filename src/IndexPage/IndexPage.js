import React, {Component} from 'react';
import {Icon,Spin} from 'antd';
import {Header, Sider, Bread, Footer,Login} from "./";
import './IndexPage.css';

const configText ={
    name: 'ZOE OPS',
    footerText: 'ZoeNet 版权所有 © 2016 由 ZoeNet架构部支持',
    logoSrc:"http://www.zysoft.com.cn/Skins/style/css/img/logo.png",
    logoText:'ZOE OPS'
};
class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true,
      login:false
    }
    this.loginClick=this.loginClick.bind(this);
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }
  loginClick(values){
      console.log(values);
     this.setState({login:true});
  }
  render() {
    const collapse = this.state.collapse;
    const config = this.props.configText || {...configText};
    const loginProps={
        ...config,
        loginClick:this.loginClick
    }
    return (
        <div>{this.state.login?
      <div className="zoe-react-component-layout">
        <Header config={config}/>
        <div className={collapse ? ["zoe-react-component-layout-aside","zoe-react-component-layout-aside-collapse"].join(" ") : "zoe-react-component-layout-aside"}>
          <aside className="zoe-react-component-layout-sider">
            <Sider collapse={collapse} menu={this.props.menu} />
            <div className="zoe-react-component-aside-action" onClick={this.onCollapseChange.bind(this)}>
              {collapse ? <Icon type="right" /> : <Icon type="left" />}
            </div>
          </aside>
          <div className="zoe-react-component-layout-main">
            <div className="zoe-react-component-layout-container">
            <Bread location={this.props.location} menu={this.props.menu}/>
              <div className="zoe-react-component-layout-content">
                {this.props.children}
              </div>
            </div>
            <Footer config={config}/>
          </div>
        </div>
      </div>
      :<div><Login {...loginProps}/></div>}</div>
    );
  }
}

IndexPage.propTypes = {

};

export default IndexPage;
