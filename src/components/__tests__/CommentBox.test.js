import React from "react";
import {mount} from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;
beforeEach(() => wrapped = mount(<Root><CommentBox/></Root>))
afterEach(() => wrapped.unmount())

it('shows input field & button in CommentBox component', () => {
        expect(wrapped.find('input').length).toEqual(1);
        expect(wrapped.find('button').length).toEqual(1);
    }
)

describe('input field', () => {

    beforeEach(() => {
        wrapped.find('input').simulate('change', {
            target: {value: 'new comment'}
        });
        wrapped.update();
    })

    it('has input field that users can type in', () => {
        expect(wrapped.find('input').prop('value')).toEqual('new comment')
    })

    it('when form is submitted, input field gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('input').prop('value')).toEqual('')
    })

})
