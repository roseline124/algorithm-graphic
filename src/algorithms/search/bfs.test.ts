import bfs from './bfs';

interface GraphTestCase {
  rootNode: GraphNode
  edges: Edge[]
  answer: GraphNode[]
}

const testCases: GraphTestCase[] = [
  {
    rootNode: { value: 1 },
    edges: [[{ value: 1 }, { value: 2 }], [{ value: 1 }, { value: 3 }], [{ value: 1 }, { value: 4 }], [{ value: 2 }, { value: 4 }], [{ value: 3 }, { value: 4 }]],
    answer: [{ value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }]
  },
  {
    rootNode: { value: 3 },
    edges: [[{ value: 5 }, { value: 4 }], [{ value: 5 }, { value: 2 }], [{ value: 1 }, { value: 2 }], [{ value: 3 }, { value: 4 }], [{ value: 3 }, { value: 1 }]],
    answer: [{ value: 3 }, { value: 4 }, { value: 1 }, { value: 5 }, { value: 2 }]
  },
  {
    rootNode: { value: 1000 },
    edges: [[{ value: 999 }, { value: 1000 }]],
    answer: [{ value: 1000 }, { value: 999 }]
  },
]

// test.each: https://dev.to/bgord/simplify-repetitive-jest-test-cases-with-test-each-310m
describe('BFS', () => {
  it.each(testCases)("%s", ({ edges, answer, rootNode }) => {
    const visited = bfs({ edges, rootNode })
    expect(visited).arrayEqualWithOrder(answer)
  })

  it('if no edges, return root node', () => {
    const rootNode = { value: 1 }, edges = [], answer = [rootNode]
    const visited = bfs({ edges, rootNode })
    expect(visited).arrayEqualWithOrder(answer)
  })

  // if more 1000 edges ?
})