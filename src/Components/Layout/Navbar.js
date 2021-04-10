import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from "react-router-dom";

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'weather' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item
            name='weather'
            active={activeItem === 'weather'}
            onClick={this.handleItemClick}
             as={Link}
            to="/forecast"
          />
          <Menu.Item
            name='chat'
            active={activeItem === 'chat'}
            onClick={this.handleItemClick}
             as={Link}
            to="/chats"
          />
          <Menu.Item
            name='dashboard'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
             as={Link}
            to="/dashboard"
          />
          <Menu.Item
            name='Map'
            active={activeItem === 'Map'}
            onClick={this.handleItemClick}
             as={Link}
            to="/map"
          />
        </Menu>
      </Segment>
    )
  }
}
