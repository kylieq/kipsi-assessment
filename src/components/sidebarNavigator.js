import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import '../styles.css';
import Panel from './panel';

export class SidebarNavigator extends React.Component {
  render() {
    return (
      <div className="App">
        <p style={{paddingLeft: '60px', paddingRight: '60px', paddingTop: '20px'}}>
          Note: Project names are listed in the Projects tab by default. 
          In the Expenses tab, you can enter any of the projects listed 
          and their corresponding expenses will be listed.
        </p>
        <Tabs>
          <TabList>
            <Tab>
              <p>Projects</p>
            </Tab>
            <Tab>
              <p>Expenses</p>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="panel-content">
              <Panel view="projects" />
            </div>
          </TabPanel>

          <TabPanel>
            <div className="panel-content">
              <Panel view="expenses" />
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default SidebarNavigator;
