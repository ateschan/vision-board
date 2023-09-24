

function save() {
    const uniqueIdMap = new Map();
    const blockContent = new Map();

    for (let i = 0; i < 3; i++) {
        const parentElement = document.getElementById("body" + (i + 1));
        // Select all child elements within the parent element
        const childElements = parentElement.querySelectorAll("*");

        // Create an array to store unique IDs
        const uniqueIds = [];

        // Iterate through child elements and extract their IDs
        childElements.forEach((element) => {
            const id = element.id;
            if (id && !uniqueIds.includes(id)) {
                uniqueIds.push(id);
            }
        });

        // Display the unique IDs
        uniqueIdMap.set({ key: 'array' + i }, uniqueIds);

        for (let i = 0; i < uniqueIds.length; i++) {

            var title = document.getElementById(uniqueIds[i]).querySelector("box-title");
            let titleContent = ""; //defaul value
            if (title) {
                var h1Element = title.querySelector("h1");
                titleContent = h1Element.textContent;
            }
            var body = document.getElementById(uniqueIds[i]).querySelector("box-body");
            let bodyContent = ""; //defaul value
            if (body) {
                var pElement = body.querySelector("p");
                bodyContent = pElement.textContent;
            }
            blockContent.set({ key: uniqueIds[i] }, `Title Content: ${titleContent} Body Content: ${bodyContent}`); //setting the content to the id
        }
    }

    if (uniqueIdMap && blockContent) {

        //Ok so it looks like I need to serielize this data into an array of key value pairs
        console.log("Saved!");

        //turns raw hashmap data into array, then string
        const uniqueIdMapArray = Array.from(uniqueIdMap);
        const uniqueIdMapString = JSON.stringify(uniqueIdMapArray);

        const blockContentArray = Array.from(blockContent);
        const blockContentString = JSON.stringify(blockContentArray);

        localStorage.setItem("uniqueIdMap", uniqueIdMapString);
        localStorage.setItem("blockContent", blockContentString);
    }
}