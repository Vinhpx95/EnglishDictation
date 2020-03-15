var hierarchy = [
    {
        title: "Elementary",
        type: "elementary",
        children: [
            {
                title: "Questions",
                type: "questions",
                children: 5,
            },
            {
                title: "Numbers and Letters",
                type: "numbersandletters",
                children: 4
            },
            {
                title: "People",
                type: "people",
                children: 0
            },
            {
                title: "Places and Weather",
                type: "placesandweather",
                children: 0
            },
            {
                title: "Commands and Requests",
                type: "commandsandrequests",
                children: 0
            },
            {
                title: "Common Expressions",
                type: "commonexpressions",
                children: 0
            },
            {
                title: "Quantities",
                type: "quantities",
                children: 0
            },
            {
                title: "Currency",
                type: "currency",
                children: 0
            },
            {
                title: "Telephone",
                type: "telephone",
                children: 0
            },
            {
                title: "Quotes",
                type: "ruotes",
                children: 0
            }
        ]
    },
    {
        title: "Intermediate",
        type: "intermediate",
        children: []
    },
    {
        title: "Advanced",
        type: "ddvanced",
        children: []
    }
];

/**
 * Create breadcrumb
 * 
 * @param levelIndex: Index of Level object in hierarchy array
 * @param lessionIndex: Index of Lession in Level
 * @param exercise: Exercise name
 * @param parent: Parent
 */
function GetBreadCrumb(levelIndex, lessionIndex, exercise, parent) {
    let html = `
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb blue-grey lighten-4">
                <li class="breadcrumb-item"><a class="black-text" href="/">All level</a></li>
    `;
    let level = hierarchy[levelIndex];
    let lession = null;
    if(lessionIndex > -1) lession = level.children[lessionIndex];
    if(lession){
        if(exercise && exercise > 0){
            html += `
                <li class="breadcrumb-item"><a class="black-text" href="/pages/${level.type}/index.php">${level.title}</a></li>
                <li class="breadcrumb-item"><a class="black-text" href="/pages/${level.type}/${lession.type}/index.php">${lession.title}</a></li>
                <li class="breadcrumb-item active">${exercise}</li>
            `;
            parent.url = `/pages/${level.type}/${lession.type}`;
            parent.children = lession.children;
        }
        else
            html += `
                <li class="breadcrumb-item"><a class="black-text" href="/pages/${level.type}/index.php">${level.title}</a></li>
                <li class="breadcrumb-item active">${lession.title}</li>
            `;
    }else{
        html += `<li class="breadcrumb-item active">${level.title}</li>`;
    }
    html += `
        </ol>
            </nav>
    `;
    return html;
}