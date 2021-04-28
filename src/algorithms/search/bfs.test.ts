import bfs, { Edge } from './bfs';

interface GraphTestCase {
  rootNode: any
  edges: Edge[]
  answer: any[]
}

// test case from 'https://www.acmicpc.net/problem/1260'
const testCases: GraphTestCase[] = [
  {
    rootNode: 1,
    edges: [[1, 2], [1, 3], [1, 4], [2, 4], [3, 4],],
    answer: [1, 2, 3, 4]
  },
  {
    rootNode: 3,
    edges: [[5, 4], [5, 2], [1, 2], [3, 4], [3, 1],],
    answer: [3, 1, 4, 2, 5]
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
    expect(visited).toEqual(expect.arrayContaining(answer));
  })
  it.only('error with different order', () => {
    expect(2).toBeGreaterThan(1)
  })
})