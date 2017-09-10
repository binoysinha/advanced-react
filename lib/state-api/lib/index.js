class StateApi {
    constructor(rawData) {
        this.data = {
            articles: this.mapIntoObject(rawData.articles),
            authors: this.mapIntoObject(rawData.authors),
            searchTerm: '',
            timestamp: new Date()
        };
        this.subscription = {};
        this.lastSubscriptionId = 0;

        setTimeout(() => {
            const fakeArticle = {
                ...rawData.articles[0],
                id: 'fakeArticleId'
            };

            this.data = {
                ...this.data,
                articles: {
                    ...this.data.articles,
                    [fakeArticle.id]: fakeArticle
                }
            };
        }, 5000);

    }
    mapIntoObject(arr) {
        return arr.reduce((acc, curr) => {
            acc[curr.id] = curr;
            return acc;
        }, {});
    }
    lookUpAuthor = (authorId) => this.data.authors[authorId];

    getState = () => this.data;

    subscribe = (cb) => {
        this.lastSubscriptionId++;
        this.subscription[this.lastSubscriptionId] = cb;
        return this.lastSubscriptionId;
    }

    unSubscribe = (subscriptionId) => {
        delete this.subscription[subscriptionId];
    }

    notifySubscribers = () => {
        Object.values(this.subscription).forEach((cb) => cb());
    }

    mergeWithState = (stateChange) => {
        this.data = {
            ...this.data,
            ...stateChange
        };
        this.notifySubscribers();
    }
    setSearchTerm = (searchTerm) => {
        this.mergeWithState({
            searchTerm
        });
    }

    startClock = () => {
        setInterval(() => {
            this.mergeWithState({
                timestamp: new Date()
            });
        }, 1000);
    }
        
}

export default StateApi;