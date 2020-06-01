import React from "react";
import {shallow} from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;
beforeEach(() => wrapped = shallow(<App/>))
it('shows a Comment Box in App component', () => expect(wrapped.find(CommentBox).length).toEqual(1))
it('shows a Comment List in App component', () => expect(wrapped.find(CommentList).length).toEqual(1))
