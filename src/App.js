import logo from './logo.svg';
import './App.css';
import React from 'react';
import Table from './components/Table';
import  employees from './employees.json';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          sorted: false,
          filtered: false,
          employees
      }
      this.handleSortClick = this.handleSortClick.bind(this);
      this.handleFilterClick = this.handleFilterClick.bind(this);
  }
  handleSortClick() {
      // run only if sorted false
      if (!this.state.isSorted) {
          console.log("Sorted via last name")
          const employees = this.state.employees.slice().sort((x, y) => {
              if (x.last < y.last) return -1;
              else if (x.last > y.last) return 1;
              else return 0;
          });
          this.setState(state => ({
              employees
          }));
      } else {
          console.log("Data unsorted")
          this.setState(state => ({
              employees
          }));
      }
      this.setState(state => ({
          isSorted: !state.isSorted,
      }));
  }
  handleFilterClick() {
      // only filter when unfiltered
      if (!this.state.isFiltered) {
          const employees = this.state.employees.filter(employee => employee.email.includes(".org"));
          this.setState(state => ({
              employees
          }));
      } else {
          this.setState(state => ({
              employees
          }));
      }
      this.setState(state => ({
          isFiltered: !state.isFiltered,
      }));
  }
  render() {
      return (
        <div>
             <h1>Employee Directory</h1>
              <div className="btn-group mb-3">
                  <button type="button" datatoggle="tooltip" title="By last name" className="btn btn-primary btn-outline-dark" onClick={this.handleSortClick}>
                      {this.state.isSorted ? 'Show' : 'Sort'}
                  </button>
                  <button type="button" datatoggle="tooltip" title="For @gmail.com" className="btn btn-primary btn-outline-dark" onClick={this.handleFilterClick}>
                      {this.state.isFiltered ? 'Show' : 'Filter'}
                  </button>
              </div>
              <Table slaveArray={this.state.employees}></Table>
        </div>
           
      );
  }
}

export default App;
