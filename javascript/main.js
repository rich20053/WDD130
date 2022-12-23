const linklist = [
    {
        label: "Resources",
        url: "resources.html"
    },
    {
        label: "Card",
        url: "card.html"
    },
    {
        label: "Troubleshooting",
        url: "troubleshooting.html"
    },
    {
        label: "Wireframe Example",
        url: "wireframeexample.html"
    },
    {
        label: "Positioning",
        url: "positioning.html"
    },
    {
        label: "Site Plan",
        url: "site-plan.html"
    },
    {
        label: "About Me",
        url: "aboutme.html"
    },
    {
        label: "Rate Date",
        url: "ratedate.html"
    },
    {
        label: "Whitewater",
        url: "whitewater.html"
    },
    {
        label: "Train Ride",
        url: "train.html"
    },
    {
        label: "Form",
        url: "iforms.html"
    },
    {
        label: "Indiana on the Road",
        url: "indiana.html"
    }
  ]

for (i=0; i<linklist.length; i++) {
    let line = document.createElement('li');
    let link = document.createElement('a');
    // Change the properties of the a element to contain the link for the week
    link.href = linklist[i].url;
    link.textContent = linklist[i].label;
    // Add/append the link element to the line item
    line.appendChild(link);
    
    //<li>Lesson 2:  <a href="./lesson2/design-principles.html">Design Principles</a></li>

    // Add/append the line item to the list
    document.querySelector('#TableOfContents').appendChild(line);
}






