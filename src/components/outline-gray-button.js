import React from 'react'

import PropTypes from 'prop-types'

import './outline-gray-button.css'

const OutlineGrayButton = (props) => {
  return (
    <div className={`outline-gray-button-container ${props.rootClassName} `}>
      <button className="outline-gray-button-button button buttonSmall">
        {props.button}
      </button>
    </div>
  )
}

OutlineGrayButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

OutlineGrayButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default OutlineGrayButton
