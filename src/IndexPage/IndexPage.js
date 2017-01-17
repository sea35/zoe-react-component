import React, {Component} from 'react';
import {Icon} from 'antd';
import {Header, Sider, Bread, Footer} from "./component";
import styles from './component/IndexPage.css';


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: true
    }
  }

  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  render() {
    const collapse = this.state.collapse;
    return (
      <div className={styles.layout}>
        <Header />
        <div className={collapse ? [styles.layout_aside,styles.layout_aside_collapse].join(" ") : styles.layout_aside}>
          <aside className={styles.layout_sider}>
            <Sider collapse={collapse} menu={this.props.menu} />
            <div className={styles.aside_action} onClick={this.onCollapseChange.bind(this)}>
              {collapse ? <Icon type="right" /> : <Icon type="left" />}
            </div>
          </aside>
          <div className={styles.layout_main}>
            <div className={styles.layout_container}>
            <Bread location={this.props.location} menu={this.props.menu}/>
              <div className={styles.layout_content}>
                {this.props.children}
              </div>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

IndexPage.propTypes = {};

export default IndexPage;
