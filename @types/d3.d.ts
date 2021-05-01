import * as d3 from 'd3';

declare module 'd3' {
  type GraphLink = d3.SimulationLinkDatum<d3.SimulationNodeDatum>
}

