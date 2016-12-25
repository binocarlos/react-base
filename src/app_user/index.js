import 'react-toolbox/lib/commons.scss'
import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import AppBar from 'react-toolbox/lib/app_bar'
import { IconButton } from 'react-toolbox/lib/button'
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/layout'

ReactDOM.render(
  (
    <Layout>
      <Panel>
        <AppBar
          title="react-base"
        />
        <div style={{ flex: 1, overflowY: 'auto' }}>
          the is the user app
        </div>
      </Panel>
    </Layout>
  ),
  document.getElementById('mount')
)