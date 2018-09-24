import PropTypes from 'prop-types'
import React, { Component } from 'react'
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
import Footer from "../footer/Footer";
import logo from "../../logo.svg";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = () => (
    <Container>
        <video src="./BackgroundMove.mp4" className="b-bgvideo" autoPlay="true" loop="true" muted />
    </Container>
)

// const HomepageHeading = ({ mobile }) => (
//     <container>
//     </container>
// )

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                {/*<Visibility*/}
                    {/*once={false}*/}
                    {/*onBottomPassed={this.showFixedMenu}*/}
                    {/*onBottomPassedReverse={this.hideFixedMenu}*/}
                {/*>*/}
                    {/*<Segment*/}
                        {/*className="transparent_back"*/}
                        {/*inverted*/}
                        {/*textAlign='center'*/}
                        {/*horizontal*/}
                    {/*>*/}
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <header className="App-header noPadding">
                                <img src={logo} className="noPadding App_logo_mobile" alt="logo" />
                            </header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <Menu
                                className="transparent_back"
                                // fixed={fixed ? 'top' : null}
                                inverted={!fixed}
                                pointing={!fixed}
                                secondary={!fixed}
                                size='large'
                            >
                                <Container className="transparent_back centerthis">
                                    <Menu.Item
                                        as='a'
                                        className="no_borders mt-5"
                                        onClick={() =>
                                            window.open(
                                                "https://github.com/lkovesdi",
                                                "_blank"
                                            )
                                        }
                                    >
                                        <i className="fab fa-github fa-4x icon_padding centerthis"></i>
                                    </Menu.Item>
                                    <Menu.Item
                                        as='a'
                                        className="no_borders"
                                        onClick={() =>
                                            window.open(
                                                "https://www.behance.net/lkovesdi",
                                                "_blank"
                                            )
                                        }
                                    >
                                        <i className="fab fa-behance fa-4x icon_padding centerthis"></i>
                                    </Menu.Item>
                                    <Menu.Item
                                        as='a'
                                        className="no_borders"
                                        onClick={() =>
                                            window.open(
                                                "https://linkedin.com/in/lkovesdi",
                                                "_blank"
                                            )
                                        }
                                    >
                                        <i className="fab fa-linkedin fa-4x icon_padding centerthis"></i>
                                    </Menu.Item>
                                    <Menu.Item
                                        as='a'
                                        className="no_borders"
                                        onClick={() =>
                                            window.open(
                                                "https://twitter.com/lkovesdi",
                                                "_blank"
                                            )
                                        }
                                    >
                                        <i className="fab fa-twitter fa-4x icon_padding centerthis"></i>
                                    </Menu.Item>
                                    <Menu.Item
                                        as='a'
                                        className="no_borders"
                                        onClick={() =>
                                            window.open(
                                                "mailto:lkovesdi@outlook.com"
                                            )
                                        }
                                    >
                                        <i className="far fa-envelope-open fa-4x icon_padding centerthis"></i>
                                    </Menu.Item>

                            </Container>
                        </Menu>
                        </Grid.Column>
                        <Grid.Column className="noPadding">
                            <p className="white_text pt-20">laszlo kovesdi • ux/ui design & front-end developer</p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                        <HomepageHeading />
                    {/*</Segment>*/}
                {/*</Visibility>*/}

                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Sidebar.Pushable>
                    <Sidebar
                        className="transparent_back"
                        as={Menu}
                        animation='scale down'
                        inverted
                        vertical
                        visible={sidebarOpened}>
                        {/*<Menu.Item as='a' active>*/}
                            {/*Home*/}
                        {/*</Menu.Item>*/}

                        <Menu.Item
                            as='a'
                            className="no_borders"
                            onClick={() =>
                                window.open(
                                    "https://github.com/lkovesdi",
                                    "_blank"
                                )
                            }
                        >
                            <i className="fab fa-github fa-5x icon_padding"></i>
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            className="no_borders"
                            onClick={() =>
                                window.open(
                                    "https://www.behance.net/lkovesdi",
                                    "_blank"
                                )
                            }
                        >
                            <i className="fab fa-behance fa-5x icon_padding"></i>
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            className="no_borders"
                            onClick={() =>
                                window.open(
                                    "https://linkedin.com/in/lkovesdi",
                                    "_blank"
                                )
                            }
                        >
                            <i className="fab fa-linkedin fa-5x icon_padding"></i>
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            className="no_borders"
                            onClick={() =>
                                window.open(
                                    "https://twitter.com/lkovesdi",
                                    "_blank"
                                )
                            }
                        >
                            <i className="fab fa-twitter fa-5x icon_padding"></i>
                        </Menu.Item>
                        <Menu.Item
                            as='a'
                            className="no_borders"
                            onClick={() =>
                                window.open(
                                    "mailto:lkovesdi@outlook.com"
                                )
                            }
                        >
                            <i className="far fa-envelope-open fa-5x icon_padding"></i>
                        </Menu.Item>
                    </Sidebar>

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{ minHeight: '100vh' }}
                    >
                        <Segment
                            className="cover_page"
                            inverted
                            textAlign='center'
                            vertical
                        >
                            <Container>
                                <div>
                                <Grid divided='vertically'>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <h2 className="App-title">Laszlo Kovesdi</h2>
                                </header>
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2} className="small_padding">
                                    <Grid.Column>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <p className="float-right text-align-right translate_title">
                                            ux/ui design & front-end developer</p>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={1}>
                                    <Menu inverted pointing secondary size='large' className="footer_nav">
                                        <Menu.Item onClick={this.handleToggle} className="centerThis">
                                            <i className="fas fa-angle-left fa-3x"></i>
                                            <Footer />
                                        </Menu.Item>
                                    </Menu>
                                </Grid.Row>
                                </Grid>
                                </div>
                            </Container>
                            <HomepageHeading mobile />
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <MobileContainer>{children}</MobileContainer>
        <DesktopContainer>{children}</DesktopContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const HomepageLayout = () => (
    <ResponsiveContainer />

)
export default HomepageLayout