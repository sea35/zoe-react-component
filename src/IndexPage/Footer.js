import React, {PropTypes} from 'react'
import './IndexPage.css'

function Footer({config}) {
    return (
        <div className="zoe-react-component-layout-footer">
            {config.footerText}
        </div>
    )
}

export default Footer
