let dataset, svg
let salarySizeScale, salaryXScale, categoryColorScale
let simulation, nodes
let categoryLegend, salaryLegend




d3.csv('https://raw.githubusercontent.com/geetkalra/weblab/master/recent-grads.csv', function(d){
    return {
        Major: d.Major,
        Total: +d.Total,
        Men: +d.Men,
        Women: +d.Women,
        Median: +d.Median,
        Unemployment: +d.Unemployment_rate,
        Category: d.Major_category,
        ShareWomen: +d.ShareWomen, 
        HistCol: +d.Histogram_column,
        Midpoint: +d.midpoint
    };
}).then(data => {
    dataset = data
    console.log(dataset)
    // createScales()
    setTimeout(drawInitial(), 100)
})





function drawInitial(){
  

    let svg = d3.select("#vis")
                    .append('svg')
                    .attr('width', 1000)
                    .attr('height', 950)
                    .attr('opacity', 1)

    
    
    svg.append('g').append('image').attr('class', 'nehruModi')
    .attr('xlink:href', 'https://raw.githubusercontent.com/6859-sp21/a4-worldbankdata/main/nehruModi.png')
    .attr('width', 1000)
    .attr('height', 950)
    .attr('opacity', 1)

    svg.append('g').append('image').attr('class', 'plot1')
    .attr('xlink:href', 'https://github.com/6859-sp21/a4-worldbankdata/blob/main/plot1.png')
    .attr('width', 1000)
    .attr('height', 950)
    .attr('opacity', 0)

    svg.append('g').append('image').attr('class', 'plot2')
    .attr('xlink:href', '/https://github.com/6859-sp21/a4-worldbankdata/blob/main/plot2.png')
    .attr('width', 1000)
    .attr('height', 950)
    .attr('opacity', 0)

    svg.append('g').append('image').attr('class', 'plot3')
    .attr('xlink:href', 'https://github.com/6859-sp21/a4-worldbankdata/blob/main/plot3.png')
    .attr('width', 1000)
    .attr('height', 950)
    .attr('opacity', 0)

    svg.append('g').append('image').attr('class', 'plot4')
    .attr('xlink:href', 'https://github.com/6859-sp21/a4-worldbankdata/blob/main/plot4.png')
    .attr('width', 1000)
    .attr('height', 950)
    .attr('opacity', 0)

    svg.append('g').append('image').attr('class', 'plot5')
    .attr('xlink:href', 'https://github.com/6859-sp21/a4-worldbankdata/blob/main/plot5.png')
    .attr('width', 1000)
    .attr('height', 950)
    .attr('opacity', 0)

    svg.append('g').append('image').attr('class', 'plot6')
    .attr('xlink:href', 'https://github.com/6859-sp21/a4-worldbankdata/blob/main/plot6.png')
    .attr('width', 1000)
    .attr('height', 950)
    .attr('opacity', 0)
}


function plottype(plotType){
    let svg = d3.select('#vis').select('svg')
    if (plotType == "plot1") {
        svg.select('.plot1').transition().duration(2000).attr('opacity', 1)
        svg.select('.plot2').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot3').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot4').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot5').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot6').transition().duration(1000).attr('opacity', 0)
        svg.select('.nehruModi').transition().duration(1000).attr('opacity', 0)
    }
    if (plotType == "plot2"){
        svg.select('.plot1').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot2').transition().duration(2000).attr('opacity', 1)
        svg.select('.plot3').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot4').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot5').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot6').transition().duration(1000).attr('opacity', 0)
        svg.select('.nehruModi').transition().duration(1000).attr('opacity', 0)
    }
    if (plotType == "plot3"){
        svg.select('.plot1').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot2').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot3').transition().duration(2000).attr('opacity', 1)
        svg.select('.plot4').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot5').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot6').transition().duration(1000).attr('opacity', 0)
        svg.select('.nehruModi').transition().duration(1000).attr('opacity', 0)
    }
    if (plotType == "nehruModi"){
        svg.select('.plot1').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot2').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot3').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot4').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot5').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot6').transition().duration(1000).attr('opacity', 0)
        svg.select('.nehruModi').transition().duration(2000).attr('opacity', 1)
    }
    if (plotType == "plot4"){
        svg.select('.plot1').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot2').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot3').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot4').transition().duration(1000).attr('opacity', 1)
        svg.select('.plot5').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot6').transition().duration(1000).attr('opacity', 0)
        svg.select('.nehruModi').transition().duration(2000).attr('opacity', 0)
    }
    if (plotType == "plot5"){
        svg.select('.plot1').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot2').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot3').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot4').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot5').transition().duration(1000).attr('opacity', 1)
        svg.select('.plot6').transition().duration(1000).attr('opacity', 0)
        svg.select('.nehruModi').transition().duration(2000).attr('opacity', 0)
    }
    if (plotType == "plot6"){
        svg.select('.plot1').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot2').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot3').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot4').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot5').transition().duration(1000).attr('opacity', 0)
        svg.select('.plot6').transition().duration(1000).attr('opacity', 1)
        svg.select('.nehruModi').transition().duration(2000).attr('opacity', 0)
    }
}   




//Cleaning Function
//Will hide all the elements which are not necessary for a given chart type 

function clean(chartType){

    let svg = d3.select('#vis').select('svg')
    if (chartType !== "isScatter") {
        svg.select('.scatter-x').transition().attr('opacity', 0)
        svg.select('.scatter-y').transition().attr('opacity', 0)
        svg.select('.best-fit').transition().duration(200).attr('opacity', 0)
    }
    if (chartType !== "isMultiples"){
        svg.selectAll('.lab-text').transition().attr('opacity', 0)
            .attr('x', 1800)
        svg.selectAll('.cat-rect').transition().attr('opacity', 0)
            .attr('x', 1800)
    }
    if (chartType !== "isFirst"){
        svg.select('.first-axis').transition().attr('opacity', 0)
        svg.selectAll('.small-text').transition().attr('opacity', 0)
            .attr('x', -200)
    }
    if (chartType !== "isHist"){
        svg.selectAll('.hist-axis').transition().attr('opacity', 0)
    }
    if (chartType !== "isBubble"){
        svg.select('.enrolment-axis').transition().attr('opacity', 0)
    }
}





//Image functions





//First draw function

function draw1(){
 
    let svg = d3.select("#vis")
                    .select('svg')
                    .attr('width', 1000)
                    .attr('height', 950)
    
    clean('none')
    plottype('nehruModi')

}


function draw2(){
    let svg = d3.select("#vis").select('svg')
    
    clean('none')
    plottype('plot1')
  
}

function draw3(){
    let svg = d3.select("#vis").select('svg')
    clean('none')
    // clean('isMultiples')
    plottype('plot2')
   
}

function draw5(){
    
    let svg = d3.select('#vis').select('svg')
    // clean('isMultiples')
    clean('none')
    plottype('plot4')

    
   
}



function draw6(){
    // simulation.stop()
    
    let svg = d3.select("#vis").select("svg")
    clean('none')
    plottype('plot5')
    
   
}

function draw7(){
    let svg = d3.select('#vis').select('svg')
    clean('none')
    plottype('plot6')
    

}

function draw4(){
    let svg = d3.select('#vis').select('svg')

    // clean('isHist')
    clean('none')
    plottype('plot3')
    
}

function draw8(){
    clean('none')
        
}

//Array of all the graph functions
//Will be called from the scroller functionality

let activationFunctions = [
    draw1,
    draw2,
    draw3,
    draw4,
    draw5, 
    draw6, 
    draw7,
    draw8
]

//All the scrolling function
//Will draw a new graph based on the index provided by the scroll


let scroll = scroller()
    .container(d3.select('#graphic'))
scroll()

let lastIndex, activeIndex = 0

scroll.on('active', function(index){
    d3.selectAll('.step')
        .transition().duration(500)
        .style('opacity', function (d, i) {return i === index ? 1 : 0.1;});
    
    activeIndex = index
    let sign = (activeIndex - lastIndex) < 0 ? -1 : 1; 
    let scrolledSections = d3.range(lastIndex + sign, activeIndex + sign, sign);
    scrolledSections.forEach(i => {
        activationFunctions[i]();
    })
    lastIndex = activeIndex;

})

scroll.on('progress', function(index, progress){
    if (index == 2 & progress > 0.7){

    }
})
