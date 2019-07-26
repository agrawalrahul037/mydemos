import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    window.onscroll = () => {
      var d = document.documentElement;
      var offset = Math.floor(d.scrollTop + window.innerHeight);
      var height = d.offsetHeight;

      if (offset === height) {
        console.log('At the bottom');
        this.addUsers();
      }
    }
  }
  componentDidMount() {
    this.addUsers();
  }
  addUsers() {
    axios.get("http://www.mocky.io/v2/5d3a6bce2f0000f0b36ec06e").then(response => {
      //console.log(response);
      const nextUsers = response.data;
      this.setState({

        data: [
          ...this.state.data,
          ...nextUsers
        ]
      })
    })
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Place</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          {this.state.data.map(ob => <tr key={ob.SNO}>
            <td>{ob.SNO}</td>
            <td>{ob.FullName}</td>
            <td>{ob.Address}</td>
            <td>{ob.Age}</td>
          </tr>)}
        </table>
        <div>Loading ...</div>
      </div>
    );
  }
}

export default App;
