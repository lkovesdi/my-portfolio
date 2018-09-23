import React, { Component } from 'react';
import logo from '../../logo.svg';
import '../../App.css';
import Paper from '@material-ui/core/Paper';
import data from '../../data/data.js';


class Main extends Component {

    constructor() {
        super();
        this.state = {
          Medias: []
        };
       }
        
       componentDidMount() {
            this.setState({
            Medias: data
          });
       }


    render() {
        return (
            <Paper className="mainPaper">

            <ul>
        { this.state.Medias.map(Medias =>
            <React.Fragment>
            <li>{Medias.name}</li>
            <li>{Medias.url}</li>
            </React.Fragment> )}
      </ul>

            </Paper>
        )
    }
}


export default Main;