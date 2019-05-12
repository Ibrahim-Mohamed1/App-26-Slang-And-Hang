import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            words: []
        }
    }

    getWords = (search) => {
        if (search === undefined) {
            return null
        } else {
            axios.get(`https://vschool-cors.herokuapp.com?url=http://api.urbandictionary.com/v0/define?term=${search}`).then(res => {
                this.setState({
                    words: res.data.list
                })
            }).catch(function(error) {
                window.location.reload()
              })
        }
    }

    render() {
        return (
            <Provider value={{
                getWords: this.getWords,
                ...this.state
            }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>{value => <C {...value}{...props} />}</Consumer>
}