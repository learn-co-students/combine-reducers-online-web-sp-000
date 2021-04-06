import React, { Component } from 'react'
import { addBook } from '../actions'
import uuid from 'uuid'
import { connect } from 'react-redux'

export class BookInput extends Component {
  state = { title: '', authorName: '' }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    const book = {...this.state, id: uuid() }
    this.props.addBook(book)
    this.setState({ title: '', authorName: '' })
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
        <p>
          <input
            type="text"
            onChange={(e) => this.handleOnChange(e)}
            name="title"
            value={this.state.title}
            placeholder="book title" />
        </p>
        <p>
          <input
            type="text"
            onChange={(e) => this.handleOnChange(e)}
            name="authorName"
            value={this.state.authorName}
            placeholder="author name" />
        </p>
        <input type="submit" />
      </form>
    )
  }
}

export default connect(null, { addBook })(BookInput)
