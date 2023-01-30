# Module 12: UFOs (Javascript and HTML)

## Overview: 
The purpose of this project was to create a website that displays a table of data that can be filtered by multiple fields. The data file is a list of UFO sightings reocorded in McMinnville, Minnesota. This project includes components built with Javascript &  HTML, CSS, and bootstrap.

## Results:
This webpage is rather simple, comprised of a header image, a introduction to the page, a table of all the data, and four filter fields on the left. 

![Main Table](https://github.com/ahualoh/UFOs/blob/main/web/static/images/UFO_main-table.png)

The filters can be used singularly, or together, meaning you can filter on more than one attribute. The four filters corresponds with the table fields: Date, City, State & Shape. The resulting table will display results that match ALL the filters applied. (The filters will apply once you click away from the filter box, or with the keystroke 'Enter' or 'Return', 'tab' etc... basically any action that will take your cursor out of the filter box).

Single Filter:
![Single Filter](https://github.com/ahualoh/UFOs/blob/main/web/static/images/UFO_filtered.png)

Multi-Filter: 
![Multi Filter](https://github.com/ahualoh/UFOs/blob/main/web/static/images/UFO_multi-filter.png)

## Summary:
One drawback of this webpage is its data is drawn from a static file, rather than from a live updated source, so it's only useful as it relates to the data file. 

Something that would improve this webpage is for the formatting of each filter field to be a little more inclusive... in general, everything entered into the filter boxes must be an EXACT match of text found in the cells of the data table. The states for example, just two letter searches, in colliquial usage should be capitalized like "CA" but the data text is "ca" and can only be filtered as such. 

![filter match](https://github.com/ahualoh/UFOs/blob/main/web/static/images/UFO_filterfield.png)

Another feature that could be useful is the ability to sort the table by any of the headers. An actual button to apply the filters, and another button to clear filter fields may also be beneficial. 