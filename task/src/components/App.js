import React, { Component } from "react";
import UserInfo from "./user-info";
const people = {
  Jan: [],
  Feb: [],
  Mar: [],
  Apr: [],
  May: [],
  Jun: [],
  Jul: [],
  Aug: [],
  Sept: [],
  Oct: [],
  Nov: [],
  Dec: []
};
export default class App extends Component {
  state = {
    data: [],
    months: [],
    Jan: false,
    Feb: false,
    Mar: false,
    apr: false,
    may: false,
    jun: false,
    jul: false,
    aug: false,
    sept: false,
    oct: false,
    nov: false,
    dec: false,
    btn: true
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
    const month = data.map(({ dob, firstName, lastName }) => {
      const person = `${firstName} ${lastName}`;
      const date = new Date(dob);
      const months = date.toLocaleString("en", { month: "short" });
      arr.push(months);
      let unique = arr.filter(this.onlyUnique).sort(this.sortItems);
      this.setState({
        months: [...unique]
      });
      this.checkMonth(months, person);
      this.setState({ btn: false });
    });
  };
  checkMonth = (month, person) => {
    if (month === "Jan") people.Jan.push(person);
    if (month === "Feb") people.Feb.push(person);
    if (month === "Mar") people.Mar.push(person);
    if (month === "Apr") people.Apr.push(person);
    if (month === "May") people.May.push(person);
    if (month === "Jun") people.Jun.push(person);
    if (month === "Jul") people.Jul.push(person);
    if (month === "Aug") people.Aug.push(person);
    if (month === "Sept") people.Sept.push(person);
    if (month === "Oct") people.Oct.push(person);
    if (month === "Nov") people.Nov.push(person);
    if (month === "Dec") people.Dec.push(person);
    else {
      return <p> value undefined</p>;
    }
  };

  hoverUsers = month => {
    if (month === "Jan") this.setState({ jan: !this.state.jan });
    if (month === "Feb") this.setState({ feb: !this.state.feb });
    if (month === "Mar") this.setState({ mar: !this.state.mar });
    if (month === "Apr") this.setState({ apr: !this.state.apr });
    if (month === "May") this.setState({ may: !this.state.may });
    if (month === "Jun") this.setState({ jun: !this.state.jun });
    if (month === "Jul") this.setState({ jul: !this.state.jul });
    if (month === "Aug") this.setState({ aug: !this.state.aug });
    if (month === "Sept") this.setState({ sept: !this.state.sept });
    if (month === "Oct") this.setState({ oct: !this.state.oct });
    if (month === "Nov") this.setState({ nov: !this.state.nov });
    if (month === "Dec") this.setState({ dec: !this.state.dec });
  };

  render() {
    const {
      Jan,
      Feb,
      Mar,
      Apr,
      May,
      Jun,
      Jul,
      Aug,
      Sept,
      Oct,
      Nov,
      Dec
    } = people;
    if (this.state.btn) {
      return (
        <div className=" mt-5 text-center">
          <button
            onClick={this.handleMonth}
            className="btn btn-info btn-lg text-center"
          >
            Months
          </button>
        </div>
      );
    }
    return (
      <div className="d-flex flex-row">
        {this.state.months.map(month => (
          <p
            className="mr-5"
            onMouseEnter={() => this.hoverUsers(month)}
            onMouseLeave={() => this.hoverUsers(month)}
          >
            {month}
          </p>
        ))}
        <div className="d-flex flex-column">
          <div className="font-weight-bold"> Users</div>
          {this.state.jan && <UserInfo users={Jan} />}
          {this.state.jan && <UserInfo users={Jan} />}
          {this.state.feb && <UserInfo users={Feb} />}
          {this.state.mar && <UserInfo users={Mar} />}
          {this.state.apr && <UserInfo users={Apr} />}
          {this.state.may && <UserInfo users={May} />}
          {this.state.jun && <UserInfo users={Jun} />}
          {this.state.jul && <UserInfo users={Jul} />}
          {this.state.aug && <UserInfo users={Aug} />}
          {this.state.sept && <UserInfo users={Sept} />}
          {this.state.oct && <UserInfo users={Oct} />}
          {this.state.nov && <UserInfo users={Nov} />}
          {this.state.dec && <UserInfo users={Dec} />}
        </div>
      </div>
    );
  }
}
