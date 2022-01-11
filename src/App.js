import React, { Component } from 'react';
import './App.css';
import Utama from './components/Utama';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class App extends Component {
  render() {
    return (
      <div calssName="demo-big-content">
        <Layout>
          <Header className="header-color" title="Responsi" scroll>
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/welcome">Welcome Booth</Link>
              <Link to="/covid">Update Covid</Link>
              <Link to="/tentangsaya">Tentang Saya</Link>
            </Navigation>
          </Header>
          <Drawer title="Responsi">
            <Navigation>
              <Link to="/beranda">Beranda</Link>
              <Link to="/welcome">Welcome Booth</Link>
              <Link to="/covid">Update Covid</Link>
              <Link to="/tentangsaya">Tentang Saya</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
              <Utama />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;