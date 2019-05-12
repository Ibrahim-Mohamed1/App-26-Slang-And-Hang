import React, { Component } from 'react';
import { withData } from './DataProvider';
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      search: ""
    }
  }

  componentDidMount() {
    this.props.getWords()
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      search: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.getWords(this.state.search)
    this.setState({
      search: ""
    })
  }

  render() {
    const styles = {
      form: {
        textAlign: "center",
        zoom: 2.3
      },
      button: {
        display: "block",
        margin: "auto",
        marginTop: ".5em",
        zoom: 1,
        border: "magenta solid",
        borderRadius: 5,
        outline: "none",
        backgroundColor: "#00000000",
        color: 'black',
      },
      title: {
        textAlign: "center",
        width: "8 0%",
        display: "block",
        margin: "auto",
        color: "white",
        fontSize: 55,
        fontFamily: "cursive"
      },
      box: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(305px, 1fr))",
        gridTemplateRows: 'auto',
        justifyContent: 'center',
        gridGap: 5,
        marginTop: 20,
      }
    }
    const mappedWords = this.props.words.map(word => {
      return (
        <div key={word.definition} style={{ border: "solid black", textAlign: 'center', borderRadius: 10, backgroundColor: "#ffffff8c" }}>
          <h1 style={{ color: 'blue', textAlign: "center" }}>{word.word}</h1>
          <h3 style={{ padding: 7, color: "black" }}><span style={{ color: "magenta" }}>DEFINITION:</span> {word.definition}</h3>
          <h3 style={{ padding: 7, color: "black" }}><span style={{ color: "magenta" }}>EXAMPLE:</span> {word.example}</h3>
        </div>
      )
    })
    return (
      <div>
        <h1 style={{ ...styles.title, color: 'black', textAlign: 'center', padding: 0, margin: 5 }}>Slang <span style={{ color: "blue" }}>&</span> Hang</h1>
        <h4 style={{ color: 'black', textAlign: 'center', padding: 0, margin: 5 }}>Understand the youth's slang!</h4>
        <form style={styles.form} onSubmit={this.handleSubmit} action="">
          <input
            style={{ outline: "none", borderRadius: 4, border: "white solid", textAlign: "center" }}
            type="text"
            name="search"
            value={this.state.search}
            onChange={this.handleChange}
            autoFocus
            autoComplete='off'
            placeholder="Search Slang Word"
            required
          />
          <button className='button' style={styles.button}>Search</button>
        </form>
        <div style={styles.box}>
          {mappedWords}
        </div>
      </div>
    );
  }
}

export default withData(App);