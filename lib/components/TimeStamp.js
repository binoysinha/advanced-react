import React, { PureComponent } from 'react';
import storeProvider from './storeProvider';

class TimeStamp extends PureComponent {
    static timeDisplay = (timestamp) => {
        return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit'});
    }
    // shouldComponentUpdate(nextProps) {
    //     return (
    //         this.timeDisplay(this.props.timestamp) !==
    //         this.timeDisplay(nextProps.timestamp)
    //     );
    // }    
    render() {
        return (
            <p>{this.props.timestampDisplay}</p>
        );
    }
}

function extraProps(store) {
    return {
        timestampDisplay: TimeStamp.timeDisplay(store.getState().timestamp)
    };
}


export default storeProvider(extraProps)(TimeStamp);