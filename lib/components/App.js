import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
// import Perf from 'react-addons-perf';
// if(typeof window !== 'undefined') {
//     window.Perf = Perf;
// }

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import TimeStamp from './TimeStamp';

class App extends PureComponent {
    static childContextTypes = {
        store: PropTypes.object
    };

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    appState = () => {
        const { articles, searchTerm } = this.props.store.getState();
        return { articles, searchTerm};
    }
    state = this.appState();

    onStoreChange = () => {
        this.setState(this.appState);
    }

    componentDidMount() {
        this.props.store.startClock();
        this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
        // setImmediate(() => {
        //     Perf.start();
        // });

        // setTimeout(() => {
        //     Perf.stop();
        //     Perf.printWasted();
        // },5000);
    }
    
    componetWillUnmount() {
        this.props.store.unsubscribe(this.subscriptionId);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     return (
    //         nextState.articles !== this.state.articles
    //         || nextState.searchTerm !== this.state.searchTerm
    //     );
    // }

    render() {
        let { articles, searchTerm } = this.state;
        const searchRE = new RegExp(searchTerm, 'i');
        if(searchTerm) {
            articles = pickBy(articles, (value) => {
                return value.title.match(searchRE)
                    || value.body.match(searchRE);
            });
        }
        return (
            <div>
                <TimeStamp />
                <SearchBar />    
                <ArticleList
                    articles={articles}
                />
                {/* {ArticleList ({articles})} */}
            </div>    
        );
    }
}

export default App;