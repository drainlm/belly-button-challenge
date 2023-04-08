// Initialize page with D3
function init() {
    d3.json(url).then((data) => {
    console.log(data);

    // Extract names from data
    let names = data.names
    console.log(names);

    // Use D3 to select the drop down menu
    let dropdownMenu = d3.select("#selDataset");
    names.forEach((X)=>{
     dropdownMenu.append("option").text(X)
    });

// Initialize Plots and Demographic Info with first subject ID
    plots(names[0])
    table(names[0])
});

}

// Function To Create Plots
function plots(input_id) {

    d3.json(url).then((data) => {

// Create Horizontal Bar Chart

    // Initialize arrays
    let sample = data.samples.filter((sample) => sample.id === input_id)[0];
    let otu_ids = [];
    let sample_values = [];
    let otu_labels = [];

    // For loop to populate arrays
    for (let i = 0; i < 10 && i < sample.otu_ids.length; i++) {
      otu_ids.push(`OTU ${sample.otu_ids[i]}`);
      sample_values.push(sample.sample_values[i]);
      otu_labels.push(sample.otu_labels[i]);
    }

        // Reverse the arrays 
        otu_ids.reverse();
        sample_values.reverse();
        otu_labels.reverse()

    // barTraceData for Top 10 OTU chart
    let barTraceData = [{
        x: sample_values,
        y: otu_ids,
        text: otu_labels, 
        type: 'bar',
        orientation: 'h',
    }];

    // Apply layout
    let barLayout = {
        title: "Top 10 OTUs",
    };

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", barTraceData, barLayout);

// Create Bubble Chart

    // bubbleTraceData for Bubble Chart
    let bubbleTraceData = [{
        x: sample.otu_ids,
        y: sample.sample_values,
        text: sample.otu_labels,
        mode: 'markers',
        marker: {
          size: sample.sample_values,
          color: sample.otu_ids,
          colorscale: 'Earth'
        }
    }];

    // Apply layout
    let bubbleLayout = {
        xaxis: {title: 'OTU ID'},
    };

        // Render the plot to the div tag with id "bubble"
        Plotly.newPlot("bubble", bubbleTraceData, bubbleLayout);

//Create Gauge Chart
        
    // Extract metadata and get the washing frequency
    let metadata = data.metadata;
    let metasample = metadata.filter((x) => x.id == input_id)[0];
    let washFrequency = metasample.wfreq;

    // Gauge Chart data
    let gaugeData = [{
        domain: { x: [0, 1], y: [0, 1] },
        value: washFrequency,
        title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per week"},
        type: "indicator",
        mode: "gauge+number",
        gauge: {
            axis: { range: [0, 9] },
    }
}];

// Gauge Chart layout
let gaugeLayout = { width: 600, height: 500, margin: { t: 0, b: 0 } };

    // Render the plot to the div tag with id "gauge"
Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    });
}

// Function To Demographic Info Table
function table(input_id){
    d3.json(url).then((data) => {
        console.log(data);
    
        // Extract metadata from data
        let metadata = data.metadata
        console.log(metadata);
    
        // Filter metadata to match the input_id
        let metasample = metadata.filter((x) => x.id == input_id)[0];
        console.log(metasample)
    
        // Use D3 to select the metadata info
        let metainfo = d3.select("#sample-metadata");
        metainfo.html("")

        // Iterate through each key-value pair in the metasample
        Object.entries(metasample).forEach(entry => {
            const [key, value] = entry;
            console.log(key, value);
            metainfo.append("h5").text(`${key}:${value}`)

          });

    });
    
}

// Function to change on dropdown menu selection
function optionChanged(x){
    // Update Plots with subject ID selection
    plots(x)
    // Update Demographic Info with subject ID selection
    table(x)

}

  init();