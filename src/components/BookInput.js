import React, { Component } from 'react';
import { addBook } from '../actions';
import uuid from 'uuid';
import { connect } from 'react-redux';

export class BookInput extends Component {

    state = {
        title: '',
        authorName: ''
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleOnSubmit = event => {
        event.preventDefault();

        const book = {...this.state, id: uuid() };

        this.props.addBook(book);

        this.setState({
            title: '',
            authorName: ''
        });
    }

    render() {
        return(
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <p><input
                type="text"
                name="title"
                placeholder="book title"
                value={this.state.title}
                onChange={(event) => this.handleOnChange(event)}
                />
            </p>
            <p><input
                type="text"
                name="authorName"
                placeholder="author name"
                value={this.state.authorName}
                onChange={(event) => this.handleOnChange(event)}
                />
            </p>

            <input type="submit" />
        </form>
        );
    }
};

export default connect(null, { addBook })(BookInput);
