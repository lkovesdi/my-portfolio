import React, { Component } from 'react';
import '../../App.css';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'

class Footer extends Component {

    state = {}

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        return (
            <div>
            <p className="footer text-align-left p-padding-footer thisWidth">take a look at my work</p>
            </div>
        )
    }
}

export default Footer;