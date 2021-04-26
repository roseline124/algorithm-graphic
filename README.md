# Algorithm Graphic

## gatsby run

- `yarn dev`: if you suffer from infinite refresh loop, unregister service worker and reloading. ([releated issue](https://github.com/gatsbyjs/gatsby/issues/10074))

## gatsby

- page layout: as mentioned in gatsby document, The "top level" component is the page itself. so, whenever pages change, react remount all children of layout component because of react conciliation. this invoke problems like breaking css transition and react state. therefore, use `gatsby-plugin-layout` to prevent layout component from unmounting. ([related issue](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/))

- `gatsby-browser.js`: file to definite APIs to use in browser. and you can add global component like page layout.

- install [gatsby & tailwind & emotion](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion)
  - utility-first css class naming: `.{property}{side}-{size}`

## TODO

- [ ] add router
- [ ] styling with tailwind css
- [ ] use page layout with `gatsby-plugin-layout`
