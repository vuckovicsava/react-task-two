import React, { Component } from 'react';
import Title from './components/Title';
import User from './components/User';
import users from './data/users';

class App extends Component {

  state = {
    users
  }

  renderUsers = () => {
    return this.state.users.map(user => <User {...user} key={user.email}/>)
  }

  render() {
    return (
      <div className="App">
        <Title text="React Task Two" />
        {this.renderUsers()}
      </div>
    );
  }
}

export default App;
