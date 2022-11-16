# Fylgja 11ty starter template

[![Netlify Status](https://api.netlify.com/api/v1/badges/59a6ac0c-8b33-40dc-88eb-7549a1158e74/deploy-status)](https://app.netlify.com/sites/11ty-fylgja/deploys)
![License](https://img.shields.io/github/license/fylgja/11ty-starter-template?color=%23234&style=flat-square)

11ty starter template build using Fylgja CSS.

This 11ty starter is based on our very own site [fylgja.dev](https://fylgja.dev/),
but slimmed down so it is just bare bones version,
with just enough things without adding to much.

> Demo: https://11ty-fylgja.netlify.app/

## How to use

Simply click to big green button named **Use this template**,
and you can start building your site,
in your very own repo.

## Config

This 11ty package uses 1 file to handle most site specific information,
you find it in `src/_data/meta.js`.

Besides that this starter has a few configs for building the site.
The only thing you need to change is the site url found in `src/_data/env.js`,
but if you do need to add more,
the `eleventy.js` config and the [Eleventy site](https://www.11ty.dev/) are your best picks to checkout.

## Includes

This 11ty started is build with the newest version of 11ty, 
and comes packing with;

- Fylgja CSS
- Eleventy Sass Compiler
- PostCSS
- Rollup
- Html Dialog with outside click close support
- Eleventy Img & Navigation
- Prebuild head with;
  - OG & Twitter tags
  - Support for loading page specific CSS and Javascript
  - and more..
- Offline page with service worker

_For more information on what is also included,_
_see the `package.json`_
