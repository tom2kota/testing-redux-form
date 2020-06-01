import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default () => (
    <div className="ui container">
        <h3 className="ui header center aligned blue" style={{paddingTop: '20px'}}>React Redux Form</h3>

        <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
                <div className="middle aligned row">
                    <CommentBox/>
                    <CommentList/>
                </div>
            </div>
        </div>
    </div>
)

