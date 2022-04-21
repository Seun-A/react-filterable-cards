import { Component } from 'react'
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people : [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => this.setState({ people: users }))
  }

  render() {
    // We don't want to actually modify the state monster array, in case we need the unmodified array later
    // So we use DESTRUCTURING to make a new array using the filter method
    const { people, searchField } = this.state;
    const filteredPeople = people.filter(person => person.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>React Filter People</h1>
        <SearchBox
          placeholder='Search People' 
          handleChange={e => {this.setState({searchField: e.target.value}, () => console.log(this.state))}}
        />
        <CardList people={filteredPeople}/> 
      </div>
    );
  }
}


export default App;