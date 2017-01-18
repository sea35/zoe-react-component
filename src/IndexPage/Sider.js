/**
 * Created by sea35 on 2017/1/16.
 */
import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'
import  './IndexPage.css'

const getMenus = function (menuArray, parentPath,collapse) {
  parentPath = parentPath || '/'
  return menuArray.map(item => {
    if (!!item.child) {
      return (
        <Menu.SubMenu key={item.key} title={<span>{item.icon ? <Icon type={item.icon} /> : ''} {item.name}</span>}>
          {getMenus(item.child, parentPath + item.key + '/')}
        </Menu.SubMenu>
      )
    } else {
      return (
        <Menu.Item key={item.key}>
          <Link to={parentPath + item.key}>
            {item.icon ? <Icon type={item.icon} /> : ''}
            {!collapse && <span className="nav_text">{item.name}</span>}
          </Link>
        </Menu.Item>
      )
    }
  })
}

function Sider({ location,collapse ,menu}) {
  return (
    <div>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['index']}>
        {getMenus(menu,'/',collapse)}
      </Menu>
    </div>
  )
}

Sider.propTypes = {
  location: PropTypes.object,
}

export default Sider
