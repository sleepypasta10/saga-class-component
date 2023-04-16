import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>User Maintenance</h1>
        <h3>{this.props.users.status}</h3>
        
        {/* {JSON.stringify(this.props.users)} */}
        <button onClick={this.props.constFunc}>Click Me</button>
        <button onClick={this.props.getDataFunc}>Get Data</button>
        {this.props.users.listUsers.map((i, index) => {
          return (
            <h2 key={index}>{i.id} : {i.first_name}</h2>
            )
          })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    users: state.stateUsers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    constFunc: () => {
      dispatch({ type:'abc', payload: "bla bla"})
    },

    getDataFunc: () => {
      dispatch({
        type: "COUNT"
      })
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App)

