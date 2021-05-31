import { React, Component } from 'react'
import 'bootstrap/scss/bootstrap.scss'
import { Card } from "./components/Card";
import SearchPanel from "./components/SearchPanel";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=16',
      posts: [],
      searchValue: ''
    }
  }

  updateData = (value) => {
    this.setState({searchValue: value})
  }

  getData = (url) => {
    fetch(url)
      .then(result => result.json())
      .then(data => {
        this.setState({posts: data})
      })
  }

  handleFilter(value) {
    value.filter((item) => {
        item.body.includes(this.searchValue)
      }
    )
  }

  componentDidMount() {
    this.getData(this.state.url)
  }

  render() {
    const spinnerStyle = {
      top: 'calc(50% - 40px)',
      left: 'calc(50% - 40px)',
      width: '80px',
      height: '80px'
    }
    const posts = this.state.posts
    const loader =
      <div className="spinner-border position-fixed"
           role="status"
           style={spinnerStyle}>
        <span className="visually-hidden">Loading...</span>
      </div>

    let forRender = posts.map(({id, title, body}) =>
      <Card
        key={id}
        title={title}
        body={body}
      />
    )

    return (
      <div className="App m-3">
        <div className="container">
          <div className="row">
            <SearchPanel updateData={this.updateData}
                         onChange={this.handleFilter(this.state.posts)} />
          </div>
          <div className="row">
            {forRender.length ? forRender : loader}
          </div>
        </div>
      </div>

    )
  }
}
