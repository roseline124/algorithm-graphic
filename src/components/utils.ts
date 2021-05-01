import flatten from 'lodash/flatten'
import uniqBy from 'lodash/uniqBy'

export const getNodesAndLinksFromEdges = (edges: Edge[]) => {
  const nodes = uniqBy(flatten(edges), 'value')
  const links = edges.map(edge => ({
    source: nodes.findIndex(node => node.value === edge[0].value),
    target: nodes.findIndex(node => node.value === edge[1].value),
  }))

  return {
    nodes, links
  }
}