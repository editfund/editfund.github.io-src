import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import * as React from 'react';
import cytoscape from 'cytoscape';
import { useState, useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="/img/logo.svg" alt="" />
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://edit.fund/buy/index.html">
            购买
          </Link>
        </div>
      </div>
    </header>
  );
}

const CytoscapeMemo = React.memo((props) => {
  useEffect(() => {
    let cy = cytoscape({
      container: document.getElementById('cy'),

      boxSelectionEnabled: false,
      autounselectify: true,

      style: cytoscape.stylesheet()
        .selector('node')
        .css({
          'content': 'data(name)',
          'text-valign': 'center',
          'color': 'white',
          'text-outline-width': 2,
          'text-outline-color': '#888',
          'background-color': '#888'
        })
        .selector(':selected')
        .css({
          'background-color': 'black',
          'line-color': 'black',
          'target-arrow-color': 'black',
          'source-arrow-color': 'black',
          'text-outline-color': 'black'
        }),

      elements: {
        nodes: [
          { data: { id: 'desktop', name: 'Cytoscape', href: 'http://cytoscape.org' } },
          { data: { id: 'js', name: 'Cytoscape.js', href: 'http://js.cytoscape.org' } }
        ],
        edges: [
          { data: { source: 'desktop', target: 'js' } }
        ]
      },

      layout: {
        name: 'grid',
        padding: 10
      }
    });

    console.log(window.cy);

    cy.on('tap', 'node', function () {
      try { // your browser may block popups
        window.open(this.data('href'));
      } catch (e) { // fall back on url change
        window.location.href = this.data('href');
      }
    });
  });
  return (
    <div style={{height: '300px',height: '300px',overflow: 'hidden'}} id="cy">
      {console.log("Parent render")}
    </div>
  );
});

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <CytoscapeMemo />
      </main>
    </Layout>
  );
}
