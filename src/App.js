import KeyBoard from './components/KeyBoard.js'
import SelectStyle from './components/SelectStyle.js'
import { styled } from '@mui/system';
import React, { Component } from "react";

const StyledDiv = styled('div')({
  backgroundColor: "#ffd55a",
  display: "flex",
  flexWrap: "Wrap",
  flexDirection: "column",
  justifyContent: "center",
  margin: "100px 250px"
})

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: [],
      onClick: this.onClick,
      style: {
        fontSize: "20px",
        color: "black",
        fontFamily: "serif",
        fontWeight: "normal",
        fontStyle: "normal",
        textDecoration: "none"
      }
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick = (e) => {
    this.setState(e)
  }

  render() {
    return (
      <StyledDiv>
        <label style={{ whiteSpace: 'break-spaces' , backgroundColor: 'white', border: 1}}>
          {this.state.input.map((item, index) => (
            <span key={index} style={item.style}>{item.text}</span>
          ))}</label>
        <KeyBoard state={this.state} />
        <SelectStyle state={this.state}/>
      </StyledDiv>
    )
  }
}

export default App;