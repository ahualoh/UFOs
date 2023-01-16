// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Building Table-build function
function buildTable(data) {
    // Clear out any existing data
    tbody.html("");
}

// Append Data to table rows
// Loop through each object in the data and append a row and cells for each value in the row
data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and...
    Object.values(dataRow).forEach((val) => {
      // add each value as a table cell (td)
        let cell = row.append("td");
        cell.text(val);
        }
    );
  });

