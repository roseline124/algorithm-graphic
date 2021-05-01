import isEqual from 'lodash/isEqual';

/**
 * BFS: Breadth First Search(너비 우선 탐색)
 * 
 * 1. 루트 노드를 현재 노드로 저장
 * 2. 현재 노드와 인접한 각 노드 방문 
 * 3. 방문한 적 없으면 visited 표시 후, 큐에 추가
 * 4. 현재 노드에 인접한 노드를 모두 방문했으면 큐에서 다음 노드를 제거해 현재 노드로 만듦
 * 5. 현재 노드에 인접한 노드를 모두 방문하고 큐에 더 이상 노드가 없으면 종료
 */

const bfs = ({ edges, rootNode, visited = [], queue = [] }: GraphSearchInput) => {
  if (!visited.find(node => isEqual(node, rootNode))) visited.push(rootNode)
  const connectedNodes = edges.filter(edge => isEqual(edge[0], rootNode) || isEqual(edge[1], rootNode))
    .map(edge => isEqual(edge[0], rootNode) ? edge[1] : edge[0])

  for (const node of connectedNodes) {
    if (visited.find(visitedNode => isEqual(visitedNode, node))) continue
    visited.push(node)
    queue.push(node)
  }

  const currentNode = queue.splice(0, 1)[0]
  if (!queue.length) return visited || []

  return bfs({ edges, rootNode: currentNode, visited, queue })
}

export default bfs