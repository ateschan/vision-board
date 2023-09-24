
//retreive data from local storage and format it
var incomingUniqueIdMap = localStorage.getItem("uniqueIdMap");
var incomingBlockContent = localStorage.getItem("blockContent");
console.log("THIS IS THE SHIT\n\n ############    block content below     ############# \n", incomingBlockContent,"\n\n\n ##############      ID tables below       ############## \n",incomingUniqueIdMap )

const deserializedUniqueIdMap  = deserialize(incomingUniqueIdMap);
const deserializedBlockContent = deserialize(incomingBlockContent);


let row1 = 0;
let row2 = 0;
let row3 = 0;
let rowct = [row1,row2,row3];


function addblock(self) {

    let parentBody = self.parentNode.parentNode;

    let row = 0;
    switch (parentBody.id) {
        case "body1":
            row = 0;
            break;

        case "body2":
            row = 1;
            break;

        case "body3":
            row = 2;
            break;

        default: throw "DID NOT FIND A VALID PARENTBODY ID";
    }


    if (rowct[row] < 6) {

        var title = document.createElement("box-title");
        var body = document.createElement("box-body");
        var button = document.createElement("BUTTON");
        var img = document.createElement("img");
        img.src = "./img/x.png";
        button.appendChild(img);

        button.onclick = function () { //funtion for killing the outer box continers
            Kill(this)
            rowct[row] -= 1;
        };
        var titleName = document.createElement("h1")
        titleName.textContent = 'Title';
        titleName.contentEditable = "true";
        var bodyName = document.createElement("p")
        bodyName.textContent = 'Description';
        bodyName.contentEditable = "true";


        body.appendChild(bodyName);
        title.appendChild(button);
        title.appendChild(titleName);

        if (parentBody) {
            // Find the div element with class "row" inside the "body1" div
            var rowDiv = parentBody.querySelector(".row");
            // Check if the "row" div exists before proceeding
            if (rowDiv) {
                // Create a new div element
                var blockContainer = document.createElement("div");
                const blockID = generateUniqueId();
                blockContainer.classList.add("block-container");
                // Add content to the new div (e.g., text)
                blockContainer.id = blockID;
                blockContainer.appendChild(title);
                blockContainer.appendChild(body);
                col = rowDiv.querySelector(".column");
                // Append the new div to the "row" div
                rowDiv.insertBefore(blockContainer, col);
            }
        }
        rowct[row] += 1;
        console.log(rowct);
    }
}

function Kill(e) {
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

function generateUniqueId() {
    return "block_" + Date.now();
}

function deserialize(str){
    var arrdata = JSON.parse(str);
    const mapdata = new Map(arrdata);
    return mapdata;
}

for (const [key, value] of deserializedUniqueIdMap) {
    arrayReassignment(key, value);
}

for (const [key, value] of deserializedBlockContent) {
    contentReassignment(key, value);
}


function arrayReassignment(arr, ids){
    rowID = undefined;
    let parentBody = undefined;
    let rowIndex = undefined;
    switch (arr.key) {
        case "array0":
            parentBody = document.getElementById("body1")
            rowIndex = 0;
            break;
        case "array1":
            parentBody = document.getElementById("body2")
            rowIndex = 1;
            break;
        case "array2":
            parentBody = document.getElementById("body3")
            rowIndex = 2;
            break;
        default:

            console.log("Not found: ", parentBody," is not a real rowID");
    }

    if (ids.length != 0){
            for(i = 0; i < ids.length; i++){
            rowct[rowIndex] += 1;
            
            var title = document.createElement("box-title");
            var body = document.createElement("box-body");
            var button = document.createElement("BUTTON");
            var img = document.createElement("img");
            img.src = "./img/x.png";
            button.appendChild(img);

            button.onclick = function () {
                Kill(this)
                rowct[row] -= 1;
            };
            
            var titleName = document.createElement("h1")
            titleName.textContent = 'Title';
            titleName.contentEditable = "true";
            var bodyName = document.createElement("p")
            bodyName.textContent = 'Description';
            bodyName.contentEditable = "true";
            body.appendChild(bodyName);
            title.appendChild(button);
            title.appendChild(titleName);

            if (parentBody) {
                var rowDiv = parentBody.querySelector(".row");
                if (rowDiv) {
                    var blockContainer = document.createElement("div");
                    blockContainer.classList.add("block-container");
                    blockContainer.id = ids[i];
                    blockContainer.appendChild(title);
                    blockContainer.appendChild(body);
                    col = rowDiv.querySelector(".column");
                    rowDiv.insertBefore(blockContainer, col);
                }
            }
        }
    }
}


function contentReassignment(arr, data){
    console.log(arr, data);
}
