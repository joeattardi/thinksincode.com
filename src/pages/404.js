import React from 'react';
import Layout from '../components/Layout';

class NotFoundPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Not Found</h1>
        <p>Sorry, that page doesn't exist.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
