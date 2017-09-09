import React from 'react';

const styles = {
    article: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    title: {
        fontWeight: 'bold'
    },
    date: {
        color: '#888',
        fontSize: '0.8em'
    },
    body: {
        paddingLeft: 20
    },
    author: {
        paddingTop: 10,
        paddingBottom: 10
    }

};

const dateDisplay = (ds) => new Date(ds).toDateString();

const Article = ({ article, actions}) => {
    const author = actions.lookupAuthor(article.authorId);
    return (
        <div style={styles.article}>
            <div style={styles.title}>{article.title}</div>
            <div style={styles.date}>{dateDisplay(article.date)}</div>
            <div style={styles.author}>
                <a href={author.website}>
                    {author.firstName} {author.lastName}
                </a>    
            </div>
            <div style={styles.body}>{article.body}</div>
        </div>
    );
};

export default Article;