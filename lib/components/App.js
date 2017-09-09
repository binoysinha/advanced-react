import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import axios from 'axios';
//import DataApi from 'state-api';
import ArticleList from './ArticleList';

class App extends Component {
    static childContextTypes = {
        store: PropTypes.object
    };
    
    getChildContext() {
        return {
            store: this.props.store
        };
    }
    state = this.props.store.getState();
    
    // async componentDidMount() {
    //     const resp = await axios.get('/data');
    //     const api = new DataApi(resp.data);
    //     this.setState(() => ({
    //         articles: api.getArticles(),
    //         authors: api.getAuthors()
    //     }));
    // }

    // articleActions = {
    //     lookupAuthor: (authorId) => this.state.authors[authorId]
    // }
    render() {
        return (
            <ArticleList
                articles={this.state.articles}
                store={this.props.store}
            />    
        );
    }
}

export default App;