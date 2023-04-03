import React, { Component } from 'react'

export default class BlogPost extends Component {
  render() {
    let post = this.props.post;

    return (
        <div className="d-flex align-items-center me-5">
        <div className="flex-shrink-0">
            <img
                width={150}
                height={150}
                className="mr-3"
                src={post.image}
                alt="photo"
            />
        </div>
        <div className="flex-grow-1 ms-3">
            <h5>{post.title}</h5>
            <p>{post.description}</p>
        </div>
        </div>
    )
  }
}
