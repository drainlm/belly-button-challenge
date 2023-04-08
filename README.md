# Belly Button Biodiversity Dashboard

This project creates an interactive dashboard to visualize belly button biodiversity data. The dashboard contains a drop-down menu that allows the test subject ID to be selected, a horizontal bar chart for the top 10 OTUs ([Operational Taxonomic Units](https://en.wikipedia.org/wiki/Operational_taxonomic_unit)) found in the selected subject, a bubble chart for the OTUs in the selected subject, and a table to display the select subject's demographic information.

The dataset is imported and initialized with D3 and the charts are rendered using the Plotly library.

![1680924908943](image/README/1680924908943.png)

[Belly Button Biodiversity Dashboard](https://drainlm.github.io/belly-button-challenge/)

### Drop Down Menu for Test Subject ID No.

This drop down menu allows the user to select a test subject ID number to display that data subject's data.

![1680924937094](image/README/1680924937094.png)

### Horizontal Bar Chart

The horizontal bar chart displays the top 10 OTUs found in the selected subject. The otu_id is labeled on the left, the sample_values is the value in the bar chart, and the otu_labels are included as hovertext and can be seen when the user lays their cursor over each bar.

![1680924950100](image/README/1680924950100.png)

### Bubble Chart

The bubble chart displays each sample for the selected subject. The otu_ids go along the x-axis and have different marker colors, the sample values are indicated by the y-axis and marker size, and the otu_labels are included as hovertext and can be seen when the user lays their cursor over each bubble.

![1680924964872](image/README/1680924964872.png)

### Demographic Info

The selected subject's demographic information is displayed here including the id number, ethnicity, gender, age, location, belly button type, and wash frequency.

![1680924977788](image/README/1680924977788.png)

### Gauge Chart

The bonus.js includes this final plot, which displays the selected subject's washing frequency in a gauge chart.

![1680927395723](image/README/1680927395723.png)
