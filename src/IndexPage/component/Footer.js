import React, { PropTypes } from 'react'
import styles from './IndexPage.css'

const Footer = (config) => <div className={styles.layout_footer}>
  {config.footerText}
</div>

export default Footer
