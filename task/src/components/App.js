import React, { Component } from "react";
import UserInfo from "./user-info";
const people = {
  jan: [],
  feb: [],
  mar: [],
  apr: [],
  may: [],
  jun: [],
  jul: [],
  aug: [],
  sept: [],
  oct: [],
  nov: [],
  dec: []
};
export default class App extends Component {
  state = {
    data: [],
    months: [],
    jan: false,
    feb: false,
    mar: false,
    apr: false,
    may: false,
    jun: false,
    jul: false,
    aug: false,
    sept: false,
    oct: false,
    nov: false,
    dec: false
  };
  componentDidMount() {
    fetch("https://yalantis-react-school-api.yalantis.com/api/task0/users")
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  sortItems = (a, b) => {
    return a - b;
  };
  handleMonth = () => {
    const { data } = this.state;
    if (!data) return;
    let arr = [];
    const { jan } = this.state;
    const month = data.map(({ dob, firstName, lastName }) => {
      const person = `${firstName} ${lastName}`;
      const date = new Date(dob);
      const months = date.getMonth() + 1;
      arr.push(months);
      let unique = arr.filter(this.onlyUnique).sort(this.sortItems);
      this.setState({
        months: [...unique]
      });
      this.checkMonth(months, person);
    });
  };
  checkMonth = (months, person) => {
    switch (months) {
      case 1:
        return people.jan.push(person);
      case 2:
        return people.feb.push(person);
      case 3:
        return people.mar.push(person);
      case 4:
        return people.apr.push(person);
      case 5:
        return people.may.push(person);
      case 6:
        return people.jun.push(person);
      case 7:
        return people.jul.push(person);
      case 8:
        return people.aug.push(person);
      case 9:
        return people.sept.push(person);
      case 10:
        return people.oct.push(person);
      case 11:
        return people.nov.push(person);
      case 12:
        return people.dec.push(person);
      default:
        break;
    }
  };

  hoverUsers = month => {
    switch (month) {
      case 1:
        this.setState({ jan: !this.state.jan });
        break;
      case 2:
        this.setState({ feb: !this.state.feb });
        break;
      case 3:
        this.setState({ mar: !this.state.mar });
        break;
      case 4:
        this.setState({ apr: !this.state.apr });
        break;
      case 5:
        this.setState({ may: !this.state.may });
        break;
      case 6:
        this.setState({ jun: !this.state.jun });
        break;
      case 7:
        this.setState({ jul: !this.state.jul });
        break;
      case 8:
        this.setState({ aug: !this.state.aug });
        break;
      case 9:
        this.setState({ sept: !this.state.sept });
        break;
      case 10:
        this.setState({ oct: !this.state.oct });
        break;
      case 11:
        this.setState({ nov: !this.state.nov });
        break;
      case 12:
        this.setState({ dec: !this.state.dec });
        break;
      default:
        break;
    }
  };

  render() {
    const {
      jan,
      feb,
      mar,
      apr,
      may,
      jun,
      jul,
      aug,
      sept,
      oct,
      nov,
      dec
    } = people;

    return (
      <div>
        <button onClick={this.handleMonth}> click</button>
        <div>{this.handleMonth}</div>
        <ul>
          {this.state.months.map(month => (
            <>
              <li
                onMouseEnter={() => this.hoverUsers(month)}
                onMouseLeave={() => this.hoverUsers(month)}
              >
                {month}
              </li>
            </>
          ))}
        </ul>
        {this.state.jan && <UserInfo users={jan} />}
        {this.state.feb && <UserInfo users={feb} />}
        {this.state.mar && <UserInfo users={mar} />}
        {this.state.apr && <UserInfo users={apr} />}
        {this.state.may && <UserInfo users={may} />}
        {this.state.jun && <UserInfo users={jun} />}
        {this.state.jul && <UserInfo users={jul} />}
        {this.state.aug && <UserInfo users={aug} />}
        {this.state.sept && <UserInfo users={sept} />}
        {this.state.oct && <UserInfo users={oct} />}
        {this.state.nov && <UserInfo users={nov} />}
        {this.state.dec && <UserInfo users={dec} />}
      </div>
    );
  }
}
