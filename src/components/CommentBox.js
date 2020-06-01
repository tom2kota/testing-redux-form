import React, {Component} from "react";
import {connect} from "react-redux";
import {saveComment} from "actions";

class CommentBox extends Component {

    state = {comment: ''}

    handleChange = (event) => {
        this.setState({comment: event.target.value})
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);

        this.setState({comment: ''})
    }

    render() {
        return (
            <div className="column">
                <div className="ui icon header blue">
                    <i className="paper plane outline blue icon"/>
                    Add New Message
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <div className="ui search">
                            <div className="ui left icon input">
                                <input onChange={this.handleChange} value={this.state.comment}
                                       className="prompt"
                                       type="text"
                                       placeholder="Add message ..."
                                       autoComplete="off"/>
                                <i className="terminal blue icon"/>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="field">
                        <button className="ui fluid blue large labeled icon button">
                            <i className="add icon"/>
                            ADD MESSAGE
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = null

export default connect(mapStateToProps, {saveComment})(CommentBox)