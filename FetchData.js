import React from "react";

export default class FetchData extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    } else if (!this.state.person) {
      return <div>didn't get a person</div>;
    } else {
      return (
        <div>
          <img src={this.state.person.picture.large} />
          <div>
            name: {this.state.person.name.first} {this.state.person.name.last}
          </div>
          <div>email: {this.state.person.email}</div>
        </div>
      );
    }
  }
}
