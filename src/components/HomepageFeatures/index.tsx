import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Img: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Gerencie Livros Facilmente',
    Img: require('@site/static/img/book.png'), 
    description: (
      <>
        A Teca-Teca oferece ferramentas simples para cadastrar, listar e organizar livros, permitindo um gerenciamento eficiente e descomplicado.
      </>
    ),
  },
  {
    title: 'Controle de Empréstimos e Leitores',
    Img: require('@site/static/img/lend.png'),  
    description: (
      <>
        Gerencie leitores e controle facilmente os empréstimos de livros. Tudo funciona diretamente no terminal para uma operação prática.
      </>
    ),
  },
  {
    title: 'Foco na Persistência de Dados',
    Img: require('@site/static/img/teacher.png'),
    description: (
      <>
        O sistema persiste dados de livros, leitores, reservas e funcionários, garantindo segurança e confiabilidade para sua biblioteca.
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} className={styles.featureSvg} />
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
