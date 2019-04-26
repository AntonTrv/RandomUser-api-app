import React from 'react'
import PropTypes from 'prop-types'
import User from './User'
import '../scss/listOfUsers.scss'

const ListOfUsers = ({data}) =>
<div className="listOfUsers-wrapper">
{data.map((user,i)=>
<User key={i} {...user}/>)}
</div>

ListOfUsers.propTypes ={
  data: PropTypes.array
}

export default ListOfUsers;
