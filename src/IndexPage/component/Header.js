/**
 * Created by sea35 on 2017/1/16.
 */
import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import styles from './Header.css'

const SubMenu = Menu.SubMenu

function Header({ location, logout }) {
  function handleClickMenu(item) {
    if (item.key === 'logout') {
      logout()
    }
  }
  return (
    <div className={styles.header}>
      <div className={styles.logo} >
        <img src="http://www.zysoft.com.cn/Skins/style/css/img/logo.png"></img>
      </div>
      <div className={styles.menu}>
          <ul>
            <li>部署平台</li>
            <li>运维平台</li>
            <li>运营平台</li>
          </ul>
      </div>

    </div>
  )
}

Header.propTypes = {
  location: PropTypes.object,
}

export default Header
