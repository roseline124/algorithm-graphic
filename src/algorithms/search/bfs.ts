export type Edge = FixedLengthArray<[any, any]>

interface GraphSearchArgs {
  edges: Edge[]
  rootNode: any
}

const visited: any[] = []
const queue: any[] = []

/**
 * BFS: Breadth First Search(너비 우선 탐색)
 * 
 * 1. 루트 노드를 현재 노드로 저장
 * 2. 현재 노드와 인접한 각 노드 방문 
 * 3. 방문한 적 없으면 visited 표시 후, 큐에 추가
 * 4. 현재 노드에 인접한 노드를 모두 방문했으면 큐에서 다음 노드를 제거해 현재 노드로 만듦
 * 5. 현재 노드에 인접한 노드를 모두 방문하고 큐에 더 이상 노드가 없으면 종료
 */
const bfs = ({ edges, rootNode }: GraphSearchArgs) => {
  if (!visited.includes(rootNode)) visited.push(rootNode)
  const connectedNodes = edges.filter(edge => edge[0] === rootNode || edge[1] === rootNode)
    .map(edge => edge[0] === rootNode ? edge[1] : edge[0])

  for (const node of connectedNodes) {
    if (visited.includes(node)) continue
    visited.push(node)
    queue.push(node)
  }

  const currentNode = queue.splice(0, 1)
  if (!queue.length) return visited

  bfs({ edges, rootNode: currentNode })
}

export default bfs