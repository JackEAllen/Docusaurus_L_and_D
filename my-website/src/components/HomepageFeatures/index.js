import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'What is IBEX',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        IBEX is a controls system software.
        The objective of the IBEX project is to create a new control system 
        for the neutron & muon instruments at ISIS to replace the SECI 
        control system previously used at ISIS. 
        The new control system employs a modern, layered and distributed architecture, 
        enabling the development of loosely-coupled client and server applications.
      </>
    ),
  },
  {
    title: 'The Docs',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Please take a look at the Docs to view more in-depth information about 
        IBEX and the devices we support and develop for.
        The <code>docs</code> will contain everything needed 
        for you as a user or a developer of IBEX.
      </>
    ),
  },
  {
    title: 'Support',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        For support, please take a look at the <code>docs</code> common 
        troubleshooting page. If you are still unable to resolve your 
        problem, contact a member of the team for additional help.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}