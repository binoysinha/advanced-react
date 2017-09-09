import React from 'react';
import PropTypes from 'prop-types';

// Customizable HOC functions
const storeProvider = (extraProps) => (Component) => {

    return class storeProvider extends React.Component {

        static displayName = `${Component.name}Container`;
        
        static contextTypes = {
            store: PropTypes.object
        };    

        render() {
            return (
                <Component 
                    {...this.props} 
                    {...extraProps(this.context.store, this.props)}
                    store={this.context.store} 
                />
            );
        }
    };    
};





export default storeProvider;