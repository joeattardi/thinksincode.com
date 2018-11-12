import React from 'react';

import profilePic from './joe-small.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5)
        }}
      >
        <img
          src={profilePic}
          alt={`Joe Attardi`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p>
          Hi, I'm <strong>Joe Attardi</strong>. I live in Billerica, MA and work as a Senior Software Engineer at
          Salesforce. <a href="https://twitter.com/joeattardi">Follow me on Twitter!</a>
        </p>
      </div>
    );
  }
}

export default Bio;
