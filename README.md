# Algorithm Graphic

## scripts

- `yarn dev`: if you suffer from infinite refresh loop, unregister service worker and reloading. ([releated issue](https://github.com/gatsbyjs/gatsby/issues/10074))
- `yarn test`: do test

## gatsby

- page layout: as mentioned in gatsby document, The "top level" component is the page itself. so, whenever pages change, react remount all children of layout component because of react conciliation. this invoke problems like breaking css transition and react state. therefore, use `gatsby-plugin-layout` to prevent layout component from unmounting. ([related issue](https://www.gatsbyjs.com/docs/how-to/routing/layout-components/))

- `gatsby-browser.js`: file to definite APIs to use in browser. and you can add global component like page layout.

- install [gatsby & tailwind & emotion](https://github.com/ben-rogerson/twin.examples/tree/master/gatsby-emotion)
  - utility-first css class naming: `.{property}{side}-{size}`

## check list for animated algorithm visualization

reference: https://corte.si/posts/code/visualisingsorting/index.html

- After what percentage of time is half of the array sorted?
- Can you find an element that moved about half the length of the array to reach its final destination?
- What percentage of the array was sorted after 80% of the sorting process? How about 20%?
- Does the number of sorted elements grow linearly or non-linearly with time (i.e. logarithmically or exponentially)?

- [ ] show how long it took to sort
- [ ] show sort process

## TODO

- [x] add tailwind emotion
- [x] add unit test environment https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/
- [ ] add router
- [ ] use page layout with `gatsby-plugin-layout`
