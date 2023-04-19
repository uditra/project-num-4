import React, { Component } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import LanguageIcon from '@mui/icons-material/Language';
import BackspaceIcon from '@mui/icons-material/Backspace';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';

const StyledButton = styled(Button)({
    textTransform: "none",
    color: "#1a237e",
    backgroundColor: "#6dd47e",
})

class Key extends Component {

    constructor(props) {
        super(props);
        this.state = props.state
        this.state.title = props.title
    }

    handleShift = () => {
        const layoutName = this.props.state.layoutName;
        const language = this.props.state.language;
        if (language === "english") {
            this.props.state.onClick({
                layoutName: layoutName === "english" ? "ENGLISH" : "english"
            });
        } else {
            this.props.state.onClick({
                layoutName: layoutName === "hebrew" ? "HEBREW" : "hebrew"
            });
        }
    }

    handleLanguage = () => {
        const language = this.props.state.language;
        this.props.state.onClick({
            layoutName: language === "english" ? "hebrew" : "english",
            language: language === "english" ? "hebrew" : "english"
        });
    }

    onClick = () => {
        if (this.props.title === "{shift}") {
            this.handleShift()
        } else if (this.props.title === "{language}") {
            this.handleLanguage()
        } else if (this.props.title === "{bksp}") {
            let array = [...this.props.state.input]
            array.pop()
            this.props.state.onClick({ input: array})
        } else if (this.props.title === "{space}") {
            this.props.state.onClick({ input: [...this.props.state.input, { text: " " , style: this.props.state.style }] })
        } else if (this.props.title === "{enter}") {
            this.props.state.onClick({ input: [...this.props.state.input, { text: "\n" , style: this.props.state.style }]})
        } else {
            this.props.state.onClick({ input: [...this.props.state.input, { text: this.props.title, style: this.props.state.style }] })
        }
    }

    render() {
        switch (this.props.title) {
            case "{language}":
                return (
                    < StyledButton onClick={this.onClick} variant="contained">
                        <LanguageIcon />
                    </StyledButton >
                )
            case "{bksp}":
                return (
                    <StyledButton onClick={this.onClick} variant="contained">
                        <BackspaceIcon />
                    </StyledButton >
                )
            case "{space}":
                return (
                    <StyledButton onClick={this.onClick} variant="contained">
                        <SpaceBarIcon />
                    </StyledButton >
                )
            case "{shift}":
                return (
                    <StyledButton onClick={this.onClick} variant="contained">
                        <ArrowUpwardIcon />
                    </StyledButton >
                )
            case "{enter}":
                return (
                    <StyledButton onClick={this.onClick} variant="contained">
                        <SubdirectoryArrowLeftIcon />
                    </StyledButton >
                )
            default:
                return (
                    <StyledButton onClick={this.onClick} title={this.props.title} variant="contained"> {this.props.title}</StyledButton>
                )
        }
    }
}

export default Key