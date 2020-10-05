import React, { Component } from "react";

class TopLinks extends Component {
  renderList = (list) => {
    let res = [];
    list.forEach((val, index) => {
      res.push(
        <a
          href={`https://${val[0]}`}
          key={index}
          className="list-group-item list-group-item-action"
          target="_blank"
          rel="noopener noreferrer"
        >
          {val[0]}
          <span
            style={{ float: "right" }}
            className="badge badge-primary badge-pill bpill"
          >
            {val[1]}
          </span>
        </a>
      );
    });
    return res;
  };
  render() {
    const { data } = this.props;
    let sortable = [];
    for (let [key, value] of data) {
      sortable.push([key, value]);
    }
    sortable.sort((a, b) => {
      return b[1] - a[1];
    });
    return (
      <React.Fragment>
        <h2 style={{ textAlign: "center", color: "#309eb6" }}>
          The top shared domains are:
        </h2>
        <div className="list-group">{this.renderList(sortable)}</div>
      </React.Fragment>
    );
  }
}

export default TopLinks;
