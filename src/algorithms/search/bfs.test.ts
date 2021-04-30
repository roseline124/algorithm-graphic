import bfs, { Edge } from './bfs';

interface GraphTestCase {
  rootNode: any
  edges: Edge[]
  answer: any[]
}

const testCases: GraphTestCase[] = [
  {
    rootNode: 1,
    edges: [[1, 2], [1, 3], [1, 4], [2, 4], [3, 4]],
    answer: [1, 2, 3, 4]
  },
  {
    rootNode: 3,
    edges: [[5, 4], [5, 2], [1, 2], [3, 4], [3, 1]],
    answer: [3, 4, 1, 5, 2]
  },
  {
    rootNode: 1000,
    edges: [[999, 1000]],
    answer: [1000, 999]
  },
]

// test.each: https://dev.to/bgord/simplify-repetitive-jest-test-cases-with-test-each-310m
describe('BFS', () => {
  it.each(testCases)("%s", ({ edges, answer, rootNode }) => {
    const visited = bfs({ edges, rootNode })
    expect(visited).arrayEqualWithOrder(answer)
  })

  it('if no edges, return root node', () => {
    const rootNode = 1, edges = [], answer = [1]
    const visited = bfs({ edges, rootNode })
    expect(visited).arrayEqualWithOrder(answer)
  })
})