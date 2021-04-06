import React, { Component } from 'react'
import { addAuthor } from '../actions'
import uuid from 'uuid'
import { connect } from 'react-redux'

export class AuthorInput extends Component {
  state = { authorName: '', }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = e => {
    e.preventDefault()
    const author = {...this.state, id: uuid() }
    this.props.addAuthor(author)
    this.setState({ authorName: '' })
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleOnSubmit(e)}>
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

export default connect(null, { addAuthor })(AuthorInput)
