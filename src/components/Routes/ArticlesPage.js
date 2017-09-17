import React, { Component } from 'react'
import ArticleList from '../ArticleList'
import Article from '../Article'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'

class ArticlesPage extends Component {
    static propTypes = {

    };

    static contextTypes = {
        language: PropTypes.object
    }


    render() {
        console.log('---', 2)
        return (
            <div>
                <ArticleList path={this.props.match.path} />
                <Route path={`${this.props.match.path}/:id`} children={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
        console.log('MATCH', match)
        if (!match) return <h2>{this.context.language.noArticle}</h2>
        return <Article id={match.params.id} isOpen key={match.params.id} />
    }
}

export default ArticlesPage