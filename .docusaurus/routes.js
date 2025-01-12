import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TP3_ADC/__docusaurus/debug',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug', '7b8'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/config',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/config', '71c'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/content',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/content', '078'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/globalData',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/globalData', '81f'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/metadata',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/metadata', '180'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/registry',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/registry', 'a27'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/routes',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/routes', 'c8a'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog',
    component: ComponentCreator('/TP3_ADC/blog', 'ad3'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/archive',
    component: ComponentCreator('/TP3_ADC/blog/archive', '011'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/first-blog-post',
    component: ComponentCreator('/TP3_ADC/blog/first-blog-post', '9bc'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/long-blog-post',
    component: ComponentCreator('/TP3_ADC/blog/long-blog-post', '53e'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/mdx-blog-post',
    component: ComponentCreator('/TP3_ADC/blog/mdx-blog-post', '833'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags',
    component: ComponentCreator('/TP3_ADC/blog/tags', '47a'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/docusaurus',
    component: ComponentCreator('/TP3_ADC/blog/tags/docusaurus', '0a6'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/facebook',
    component: ComponentCreator('/TP3_ADC/blog/tags/facebook', '2a7'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/hello',
    component: ComponentCreator('/TP3_ADC/blog/tags/hello', '6c6'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/hola',
    component: ComponentCreator('/TP3_ADC/blog/tags/hola', '46b'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/welcome',
    component: ComponentCreator('/TP3_ADC/blog/welcome', '122'),
    exact: true
  },
  {
    path: '/TP3_ADC/livros',
    component: ComponentCreator('/TP3_ADC/livros', '5c6'),
    exact: true
  },
  {
    path: '/TP3_ADC/markdown-page',
    component: ComponentCreator('/TP3_ADC/markdown-page', '74c'),
    exact: true
  },
  {
    path: '/TP3_ADC/sobre',
    component: ComponentCreator('/TP3_ADC/sobre', '7ea'),
    exact: true
  },
  {
    path: '/TP3_ADC/docs',
    component: ComponentCreator('/TP3_ADC/docs', 'a3f'),
    routes: [
      {
        path: '/TP3_ADC/docs/category/tutorial---basics',
        component: ComponentCreator('/TP3_ADC/docs/category/tutorial---basics', 'f5a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/category/tutorial---extras',
        component: ComponentCreator('/TP3_ADC/docs/category/tutorial---extras', 'a7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/intro',
        component: ComponentCreator('/TP3_ADC/docs/intro', 'c47'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-basics/congratulations', '022'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-basics/create-a-blog-post', '6ba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-basics/create-a-document', '687'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-basics/create-a-page', '17a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-basics/deploy-your-site', 'c4c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-basics/markdown-features', 'c1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-extras/manage-docs-versions', '1c3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/TP3_ADC/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/TP3_ADC/docs/tutorial-extras/translate-your-site', '6fa'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/TP3_ADC/',
    component: ComponentCreator('/TP3_ADC/', 'e69'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
