import React, { Component } from "react";
import { styled } from '@mui/system';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";

const StyledDiv = styled('div')({
    backgroundColor: "#ffd55a",
    display: "flex",
    flexWrap: "Wrap",
    flexDirection: "row",
    justifyContent: "center",
    width: '100%'
})
const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    margin: "1.5rem"
})

const StyledButton = styled(Button)({
    textTransform: "none",
    color: "#1a237e",
    backgroundColor: "#6dd47e",
    margin: "0.5rem"
})

class StylesAndSpecial extends Component {

    constructor(props) {
        super(props);
        this.state = props.state
    }

    handleColor = (e) => {

        this.props.state.onClick({
            style: {
                ...this.props.state.style,
                color: e.target.value
            }
        })
    }

    handleFontSize = (e) => {
        this.props.state.onClick({
            style: {
                ...this.props.state.style,
                fontSize: e.target.value
            }
        })
    }

    handleFontFamily = (e) => {
        this.props.state.onClick({
            style: {
                ...this.props.state.style,
                fontFamily: e.target.value
            }
        })
    }

    handlefontWeight = (e) => {
        this.props.state.onClick({
            style: {
                ...this.props.state.style,
                fontWeight: e.target.value,
            }
        })
    }

    handlefontStyle = (e) => {
        this.props.state.onClick({
            style: {
                ...this.props.state.style,
                fontStyle: e.target.value
            }
        })
    }
    handleTextDecoratione = (e) => {
        this.props.state.onClick({
            style: {
                ...this.props.state.style,
                textDecoration: e.target.value
            }
        })
    }

    handleUpperToLower = (e) => {
        this.props.state.input.forEach(element => {
            let asciiNum = element.text.charCodeAt(0)
            if (91 > asciiNum && asciiNum > 64) {
                element.text = String.fromCharCode(asciiNum + 32)
            }
        });
        this.props.state.onClick({ input: this.props.state.input })
    }

    handleLowerToUpper = (e) => {
        this.props.state.input.forEach(element => {
            let asciiNum = element.text.charCodeAt(0)
            if (123 > asciiNum && asciiNum > 96) {
                element.text = String.fromCharCode(asciiNum - 32)
            }
        });
        this.props.state.onClick({ input: this.props.state.input })
    }

    handleClearAll = (e) => {
        this.props.state.onClick({ input: [] })
    }

    render() {
        return (
            <StyledDiv>
                <StyledBox>
                    <label style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"}}>colors</label>
                    <div>
                        <StyledButton onClick={this.handleColor} value={"red"} variant="contained" style={{ color: "red", fontWeight: "bold", border: 3, borderStyle: "solid", borderColor: "red" }}>red</StyledButton>
                        <StyledButton onClick={this.handleColor} value={"blue"} variant="contained" style={{ color: "blue", fontWeight: "bold", border: 3, borderStyle: "solid", borderColor: "blue" }}>blue</StyledButton>
                        <StyledButton onClick={this.handleColor} value={"green"} variant="contained" style={{ color: "green", fontWeight: "bold", border: 3, borderStyle: "solid", borderColor: "green" }}>green</StyledButton>
                        <StyledButton onClick={this.handleColor} value={"black"} variant="contained" style={{ color: "black", fontWeight: "bold", border: 3, borderStyle: "solid" }}>black</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox>
                    <label style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"}}>font size</label>
                    <div>
                        <StyledButton onClick={this.handleFontSize} value={"15px"} variant="contained" style={{ fontSize: "15px" }}>15px</StyledButton>
                        <StyledButton onClick={this.handleFontSize} value={"20px"} variant="contained" style={{ fontSize: "20px" }}>20px</StyledButton>
                        <StyledButton onClick={this.handleFontSize} value={"25px"} variant="contained" style={{ fontSize: "25px" }}>25px</StyledButton>
                        <StyledButton onClick={this.handleFontSize} value={"30px"} variant="contained" style={{ fontSize: "30px" }}>30px</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox>
                    <label style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"}}>font family</label>
                    <div>
                        <StyledButton onClick={this.handleFontFamily} value={"fantasy"} variant="contained" style={{ fontFamily: "fantasy" }}>fantasy</StyledButton>
                        <StyledButton onClick={this.handleFontFamily} value={"serif"} variant="contained" style={{ fontFamily: "serif" }}>serif</StyledButton>
                        <StyledButton onClick={this.handleFontFamily} value={"monospace"} variant="contained" style={{ fontFamily: "monospace" }}>monospace</StyledButton>
                        <StyledButton onClick={this.handleFontFamily} value={"cursive"} variant="contained" style={{ fontFamily: "cursive" }}>cursive</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox>
                    <label style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"}}>font weight</label>
                    <div>
                        <StyledButton onClick={this.handlefontWeight} value={"bold"} variant="contained" style={{ fontWeight: "bold" }}>bold</StyledButton>
                        <StyledButton onClick={this.handlefontWeight} value={"normal"} variant="contained" style={{ fontWeight: "normal" }}>normal</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox>
                    <label style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"}}>font style</label>
                    <div>
                        <StyledButton onClick={this.handlefontStyle} value={"italic"} variant="contained" style={{ fontStyle: "italic" }}>italic</StyledButton>
                        <StyledButton onClick={this.handlefontStyle} value={"normal"} variant="contained" style={{ fontStyle: "normal" }}>normal</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox>
                    <label style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"}}>text decoration</label>
                    <div>
                        <StyledButton onClick={this.handleTextDecoratione} value={"underline"} variant="contained" style={{ textDecoration: "underline" }}>underline</StyledButton>
                        <StyledButton onClick={this.handleTextDecoratione} value={"none"} variant="contained" style={{ textDecoration: "none" }}>none</StyledButton>
                    </div>
                </StyledBox>
                <StyledBox>
                    <label style={{ display: "flex", justifyContent: "center" , fontWeight: "bold"}}>special actions</label>
                    <div>
                        <StyledButton onClick={this.handleUpperToLower} variant="contained" >Lower all</StyledButton>
                        <StyledButton onClick={this.handleLowerToUpper} variant="contained" >Upper all</StyledButton>
                        <StyledButton onClick={this.handleClearAll} variant="contained" >Clear all</StyledButton>
                    </div>
                </StyledBox>
            </StyledDiv>
        )
    }
}

export default StylesAndSpecial