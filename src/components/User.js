import React from 'react'
import PropTypes from 'prop-types'
import '../scss/user.scss'


const User = ({cell, picture, name, location, email, nat}) =>
<section className="user">
<img src={picture.medium} alt=""/>
<h2>{name.first} {name.last}</h2>
<span className="location">{location.city}, {nat}</span>
<span>{email}</span>
<span>{cell}</span>
</section>

User.propTypes = {
  cell: PropTypes.string,
  picture: PropTypes.object,
  name: PropTypes.object,
  location: PropTypes.object,
  email: PropTypes.string,
  nat: PropTypes.string
}

export default User
