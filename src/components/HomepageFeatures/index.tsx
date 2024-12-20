import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Fácil de Integrar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default, // Você pode trocar para a imagem que preferir
    description: (
      <>
        A Teca-Teca foi projetada para ser facilmente integrada aos seus projetos. Com uma instalação simples, você pode começar a usar a biblioteca rapidamente.
      </>
    ),
  },
  {
    title: 'Foco na Simplicidade',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default, // Troque conforme necessário
    description: (
      <>
        A Teca-Teca permite que você foque no que realmente importa: construir a sua aplicação. Ela cuida de detalhes técnicos e funcionalidades que economizam tempo.
      </>
    ),
  },
  {
    title: 'Totalmente Personalizável',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default, // Troque para a imagem que preferir
    description: (
      <>
        A Teca-Teca é construída sobre React, permitindo que você personalize facilmente sua estrutura e aproveite todos os benefícios do React em sua aplicação.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
