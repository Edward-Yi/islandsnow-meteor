import React from 'react';
import { Grid, Divider, List, Input } from 'semantic-ui-react';

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
        <Grid columns={3}>
          <Grid.Column>
            NAVIGATION
            <Divider />
            <List>
              <List.Item>About Us</List.Item>
              <List.Item>Videos</List.Item>
              <List.Item>Store Locations</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            MAIN MENU
            <Divider />
            <List>
              <List.Item>Men</List.Item>
              <List.Item>Women</List.Item>
              <List.Item>Kids</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            CONNECT
            <Divider />
            <List>
              <List.Item>Sign up for the latest updates</List.Item>
            </List>

            <Input action={{ color: 'black', content: 'Join' }} placeholder='Enter email address'></Input>
          </Grid.Column>
        </Grid>
        </div>
    );
  }
}

export default Footer;
