import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import Layout from '../components/Layout';

export default class NotFoundPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Not Found</h1>
        <p>Sorry, that page doesn't exist.</p>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
