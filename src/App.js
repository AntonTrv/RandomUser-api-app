import React from 'react'
import AddUsers from './components/AddUsers'
import ListOfUsers from './components/ListOfUsers'
import MoreButton from './components/MoreButton'
import Header from './components/Header'
import './scss/App.scss'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      users: [],
      error:false
    }

    this.getUsers = this.getUsers.bind(this)
    this.clearUsers = this.clearUsers.bind(this)
  }


  getUsers() {
    const url = 'https://randomuser.me/api/?results=6';
    fetch(url)
    .then((respond)=>respond.json())
    .then((data)=> this.setState({users: [...this.state.users, ...data.results]}))
    .catch(error => this.setState({ error, isLoading: false }));
    this.setState({loading:true})

  }

  clearUsers() {
    this.setState({users: [],error:false})
  }


  componentDidMount(){
    this.setState({loading: false})
  }

    render() {
      const {users,error} = this.state
      const getUsers =this.getUsers
      const clearUsers = this.clearUsers
      return(

        <div className='app'>
          <Header/>
          <AddUsers handleClick={getUsers}/>
          <ListOfUsers data={users}/>
          {users.length ? <MoreButton handleClick={getUsers} clear={clearUsers}/> : ''}
          {error ? <h2 style={{margin:'auto', display:'flex', justifyContent:'center'}}>Error</h2> : ''}
        </div>

      )
    }
}

export default App
