import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/TP3_ADC/__docusaurus/debug',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug', '214'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/config',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/config', '876'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/content',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/content', '45d'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/globalData',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/globalData', '57d'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/metadata',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/metadata', '705'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/registry',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/registry', '92c'),
    exact: true
  },
  {
    path: '/TP3_ADC/__docusaurus/debug/routes',
    component: ComponentCreator('/TP3_ADC/__docusaurus/debug/routes', '205'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog',
    component: ComponentCreator('/TP3_ADC/blog', '470'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/archive',
    component: ComponentCreator('/TP3_ADC/blog/archive', '7aa'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/first-blog-post',
    component: ComponentCreator('/TP3_ADC/blog/first-blog-post', 'fda'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/long-blog-post',
    component: ComponentCreator('/TP3_ADC/blog/long-blog-post', 'c92'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/mdx-blog-post',
    component: ComponentCreator('/TP3_ADC/blog/mdx-blog-post', 'a68'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags',
    component: ComponentCreator('/TP3_ADC/blog/tags', 'ca1'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/docusaurus',
    component: ComponentCreator('/TP3_ADC/blog/tags/docusaurus', 'd2c'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/facebook',
    component: ComponentCreator('/TP3_ADC/blog/tags/facebook', 'bc4'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/hello',
    component: ComponentCreator('/TP3_ADC/blog/tags/hello', 'b54'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/tags/hola',
    component: ComponentCreator('/TP3_ADC/blog/tags/hola', '39f'),
    exact: true
  },
  {
    path: '/TP3_ADC/blog/welcome',
    component: ComponentCreator('/TP3_ADC/blog/welcome', '11b'),
    exact: true
  },
  {
    path: '/TP3_ADC/markdown-page',
    component: ComponentCreator('/TP3_ADC/markdown-page', '275'),
    exact: true
  },
  {
    path: '/TP3_ADC/docs',
    component: ComponentCreator('/TP3_ADC/docs', '4ed'),
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
    component: ComponentCreator('/TP3_ADC/', 'c98'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
