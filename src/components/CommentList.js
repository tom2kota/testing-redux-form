import React, {Component} from "react";
import {connect} from "react-redux";
import shortid from 'shortid';

class CommentList extends Component {

    renderComments() {
        return this.props.comments.map(comment => <li className="item" key={shortid.generate()}><i
            className="right blue triangle icon"/> {comment}</li>)
    }

    render() {
        return (
            <div className="column">
                <div className="ui icon blue header">
                    <i className="comment alternate outline blue icon"/>
                    Display Message
                </div>
                <div className="ui padded segment">
                    <div className="ui link list left aligned header large content"
                         style={{
                             overflow: 'scroll',
                             whiteSpace: 'wrap',
                             height: 'calc(100vh - 300px)',
                         }}>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            margin: 0
                        }}> {this.renderComments()}</ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({comments: state.comments})

export default connect(mapStateToProps)(CommentList)