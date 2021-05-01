import * as d3 from 'd3'
import tw, { css } from 'twin.macro'
import flatten from 'lodash/flatten'
import uniqBy from 'lodash/uniqBy'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'

const CONTAINER_WIDTH = 400
const CONTAINER_HEIGHT = 300

interface GraphProps {
  rootNode: GraphNode
  edges: Edge[]
}

const Root = tw.div`
  flex items-center justify-center
`

const lineStyle = css`
  line {
    stroke: #ccc;
  }
`

const Graph: FC<GraphProps> = ({ rootNode, edges }) => {
  const nodes = uniqBy(flatten(edges), 'value')
  const links: d3.GraphLink[] = edges.map(edge => ({
    source: nodes.findIndex(node => node.value === edge[0].value),
    target: nodes.findIndex(node => node.value === edge[1].value),
  }))

  const [nodeGroup, setNodeGroup] = useState(null)
  const [linkGroup, setLinkGroup] = useState(null)

  const nodeRef = useRef(null)
  const linkRef = useRef(null)

  let u
  const updateLinks = () => {
    u = linkGroup.selectAll('line').data(links)

    u.enter()
      .append('line')
      .merge(u)
      .attr('x1', function (d) {
        return d.source.x
      })
      .attr('y1', function (d) {
        return d.source.y
      })
      .attr('x2', function (d) {
        return d.target.x
      })
      .attr('y2', function (d) {
        return d.target.y
      })

    u.exit().remove()
  }
  const updateNodes = () => {
    u = nodeGroup.selectAll('text').data(nodes)

    u.enter()
      .append('text')
      .text(function (d) {
        return d.value
      })
      .merge(u)
      .attr('x', function (d) {
        return d.x
      })
      .attr('y', function (d) {
        return d.y
      })
      .attr('dy', function (d) {
        return 5
      })

    u.exit().remove()
  }

  const ticked = () => {
    if (nodeGroup && linkGroup) {
      updateLinks()
      updateNodes()
    }
  }

  const simulation = d3
    .forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(-220))
    .force('center', d3.forceCenter(CONTAINER_WIDTH / 2, CONTAINER_HEIGHT / 2))
    .force('link', d3.forceLink().links(links))
    .on('tick', ticked)

  useEffect(() => {
    setNodeGroup(d3.select(nodeRef.current))
    setLinkGroup(d3.select(linkRef.current))

    simulation.force('link', d3.forceLink().links(links))
  }, [])

  return (
    <Root tw="p-18">
      <svg width={CONTAINER_WIDTH} height={CONTAINER_HEIGHT}>
        <g id="links" ref={linkRef} css={lineStyle}></g>
        <g id="nodes" ref={nodeRef}></g>
      </svg>
    </Root>
  )
}

export default Graph
