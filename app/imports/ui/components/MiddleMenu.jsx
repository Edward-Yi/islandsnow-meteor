import React from 'react';
import { Container, Menu, Dropdown } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="centermenu" widths={5}>
          <Container>
            <Dropdown item text="Men" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Women" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Kids" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text="Brands" icon="dropdown">
              <Dropdown.Menu>
                <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>Search</Menu.Item>
          </Container>
        </Menu>
    );
  }
}
