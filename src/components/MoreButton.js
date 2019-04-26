import React from 'react'
import PropTypes from 'prop-types'
import '../scss/moreButton.scss'

const MoreButton = ({handleClick, clear}) =>
<div className='more-clear'>
<button onClick={handleClick}><span>more</span></button>
<button onClick={clear}><span>clear</span></button>
</div>

MoreButton.propTypes ={
  handleClick: PropTypes.func,
  clear: PropTypes.func
}

export default MoreButton;
