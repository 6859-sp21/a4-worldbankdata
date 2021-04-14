**Overall theme**
I was interested in telling one of India’s many stories in a fun and interactive way. It was a way for me to learn more about my home country as well as learn visualization techniques. I decided to start with the assessment of the economic growth that India has seen in the last few decades. 
In A2: Exploratory data analysis, I had taken up a similar topic where I compared India’s growth to China’s and based on correlation studies identified some interesting trends that separate the two countries. For instance, the number of researchers and patents being published by both countries since their economic growths starting diverging. 
My intention is to develop my A4 work more and use it as step towards the final project. I thus have designed a scrolly-telling themed visualization where a user can compare the GDP as well as GDP per capita of India to different countries of the world. Both of these are interactive visualizations that allow a “local analysis” of the visualization itself, and also fit in the broader theme of telling India’s economic story. 

**Rationale for design decisions**

As I am telling a story, the scrolly telling format was the best suited for the job. The idea is to take the user on a journey through time and let them see how events unfolded in the past, for now, through data. 
The story is an investigative assessment of a trend that is being seen and what it might be trying to tell us. We see India’s GDP amongst the top 10 countries in the world, however, India’s GDP is at #143, amongst the poorest. To highlight this, I provide two interactive and animated visualizations, one for comparing GDPs and the other for comparing GDP per capita. 

To make sure that the user has a seamless experience in the exploratory process, these are some of the design decisions that I made:

1.	Animated line chart which progresses through time as the user lands on the visualization or updates the query. This is a fun and eye-catchy way to pique the interest of the user
2.	Ensuring sufficient line thickness for the plots to allow for easy viewing and easy selection to see tooltips or to click to remove. 
3.	Provided tooltips in case the user wants to investigate some points on the charts. 
4.	Color coded the tooltips to match the color of the line, which is in turn color coded with the label of the country. 
5.	Highlighted important information which can be potentially misleading. For instance, there were many countries for which data values were missing in the past and are shown as 0. It has been clearly pointed out that those values are most likely 0 due to non-availability of the data. 
6.	4 buttons to plot some quick summary graphs that the users are generally interested in. People are generally interested in seeing the comparison with the richest/poorest countries. 
7.	Added a special button just to plot data for India as the main theme of the visualization is conveying India’s story
8.	While plotting single line curves, the name of the country is written in big bold letters in the backdrop. While plotting multiple lines, the names of the countries are instead highlighted next to the line itself, allowing for easy viewing. The names of the countries and lines have also been color coded for ease of viewing and association.
9.	I was earlier considering to draw circles on top of the smooth line to highlight the locations of the datapoints
10.	 I was also split between using d3.curveLinear vs d3.curveNatural to depict the paths. The linear function returns a jagged looking line, however true to the data being represented. d3.curveNatural returns a perfectly smooth and good looking line. However, at some locations while interpolation, it caused the GDP to go below 0. I thus decided to stick with d3.curveLinear in spirit of communicating data truthfully. 
11.	Organized the countries in descending order of their 2019 GDP (or GDP per capita) in the selection lists. This allows another dimension for exploration to the user. 




**Development process**
As I worked alone on the project, the most challenging part was making sure I stick to one clear goal as it is easy to digress (being the only person, I would’ve been flexible to switch mid-way). 
Something that I realized was that no dataset is the “best” datasets and every dataset has a story to tell. I realized this after the initial two assignments, A0 and A1. We spent more than two weeks looking at a dataset which had around 100 datapoints. 

I also wanted to leave this course with not just the knowledge that I am gaining in the process but also a product that I can boast of. Thus, the intention is to link my assignments as far as possible and make a good product by the end of the class. 

With this in mind, I decided to interactively tell the story of a part of what I had done in A2. I will tie in the remaining part of the story as a part of the final project. 

The most time consuming part for me was learning HTML,CSS, Javascript and D3, all together, in a span of 2 weeks. In terms of man-hours I would have worked more than  50 hours in total. However, that is because I had to learn and use the tools at the same time.  

Scrolly-telling and unrolling line charts took a lot of time. 
![image](https://user-images.githubusercontent.com/70688232/114652587-2a244b00-9cb4-11eb-9274-669c2946f611.png)
