import React from 'react'
import './graph.css'
import * as d3 from 'd3'


export default function Graph({ date, imc }) {


    const newDate = date.map((d) => {
        d = new Date(d)
        return { "date": `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()}` }
    })
    const newImc = imc.map((i) => {
        return { "imc": i }
    })
    // console.log(newDate,newImc);
    const finalValue = []
    for (let i = 0; i < imc.length; i++) {
        finalValue.push({ ...newDate[i], ...newImc[i] })


    }
    console.log('finalValue', finalValue);
    // const min = d3.min(finalValue, d => d.imc)
    // const max = d3.max(finalValue, d => d.imc)
    //const extent = d3.extent(finalValue,d=>d.imc)   
    const margin = {top:20,right:20,bottom:100,left:100}
    const graphWidth = 1000 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;
   
    const svgContainer = d3.select('.svg-container')
    const svg = svgContainer.append('svg')
        .attr('height', 600)
        .attr('width', 1000)

    const graph = svg.append('g')
            .attr('width',graphWidth)
            .attr('height',graphHeight)
            .attr("transform", `translate(${margin.left},${margin.right})`)
           

    const groupX = graph.append('g')
    .attr('transform',`translate(0,${graphHeight})` )
    
    
    const groupY = graph.append('g')


    const y = d3.scaleLinear()
        .domain([10, 45])
        .range([graphHeight, 0])


    const x = d3.scaleBand()
        .domain(finalValue.map(item => item.date))
        .range([0, 700])
        .paddingInner(0.01)
        .paddingOuter(0.02)
        
    // console.log(x('20-12-2021'));
    // console.log(x('22-2-2022'));

    const rects = graph.selectAll('rect')
        .data(finalValue)
        

    rects.enter()
        .append('rect')
        .text(function (d) {
            return d.date
        })
        .attr('width', x.bandwidth())
        .attr('height', function (d) {
            return graphHeight - y(d.imc )
        })
        .style('fill', '#7094E0')
        .attr("x", function (d) { return x(d.date) })
        .attr('y',function(d){return y(d.imc)})
       
        

    const axeX = d3.axisBottom(x)
    
    const axeY = d3.axisLeft(y)

    groupX.call(axeX)
    groupY.call(axeY)

    console.log(rects);





    return (
        <div className='svg-container'>

        </div>
    )
}



// {
//     imc.map((elm,i) => (
//          <p key={i}>{elm}</p>
//      )
//      )
//  }
//  <div>
//  {
//     newDate.map((elm,i) => (
//          <p key={i}>{elm}</p>
//      )
//      )
//  }

// </div>