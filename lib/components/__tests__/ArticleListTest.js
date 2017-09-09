import React from 'react';
import ArticleList from '../ArticleList';
//import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('ArticleList', () => {
    
    const testProps = {
        articles: {
            a: { id: 'a'},
            b: { id: 'b'}
        }
        // store: {
        //     lookUpAuthor: jest.fn(() => ({}))
        // }
    };
    it('renders correctly', () => {
        // const tree = renderer.create(
        //     <ArticleList 
        //         {...testProps}
        //     />
        // ).toJSON();
        // expect(tree).toMatchSnapshot();
        // expect(tree.children.length).toBe(2);
        const wrapper = shallow(
            <ArticleList
                {...testProps}
            />    
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('ArticleContainer').length).toBe(2);
    });
});