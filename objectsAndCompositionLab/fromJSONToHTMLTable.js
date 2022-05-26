function JsonToHtmlTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ["<table>"];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push("</table>");
    function makeKeyRow(arr) {
        obj = arr[0]
        result = '   <tr>'
        for (let key of Object.keys(obj)) {
            result+= `<th>${escapeHtml(key)}</th>`
        }
        result += '</tr>'
        return result;
    }
    function makeValueRow(obj) { 
        result =  "   <tr>"

        for (let key of Object.keys(obj)) {
            result+= `<td>${escapeHtml(obj[key])}</td>`
        }
        result += '</tr>'
        return result;
    };
    function escapeHtml(value) { 
        const htmlEntities = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            '\'': '&#39;'
        };
        return String(value).replace(/([&<>\"'])/g, match => htmlEntities[match]);
    }
    console.log(outputArr.join('\n'));
}





JsonToHtmlTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)



console.log(`---------`)

JsonToHtmlTable(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`)
