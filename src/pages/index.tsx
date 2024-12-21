import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text-center d-flex flex-column justify-content-center">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          Sua biblioteca ideal para integração fácil e recursos poderosos. 🚀
        </p>
        <div className={clsx(styles.buttons, 'd-flex justify-content-center')}>
          <Link
            className="button button--secondary button--lg button--rounded"
            to="/docs/intro">
            Comece com o Teca-Teca 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Bem-vindo ao ${siteConfig.title}`}
      description="Teca-Teca: Uma biblioteca poderosa para todas as suas necessidades.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
