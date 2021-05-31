import React, { Component } from 'react'

export default class SearchPanel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="input-group mb-3 w-50 m-auto">
        <input
          onChange={(event) => {
            this.props.updateData(event.target.value)
          }}
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1" />
      </div>
    )
  }
}
