/**
 * Created by sea35 on 2017/1/16.
 */
import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import './Header.css'

const SubMenu = Menu.SubMenu

function Header({ location, logout ,config}) {
  function handleClickMenu(item) {
    if (item.key === 'logout') {
      logout()
    }
  }
  return (
    <div className="zoe-react-component-header">
      <div className="zoe-react-component-logo" >
        <img src={config.logoSrc}></img>
      </div>
      <div className="zoe-react-component-menu">
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
