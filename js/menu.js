// Elementary
var elementary = { 
    title: "Elementary",
    icon: "far fa-lightbulb",
    type: "elementary",
    lessions: [
        { // 0
            title: "Questions",
            icon: "fas fa-question",
            children: 5,
            type: "questions"
        },
        { // 1
            title: "Numbers and Letters",
            icon: "fas fa-sort-numeric-up-alt",
            children: 4,
            type: "numbersandletters"
        },
        { // 2
            title: "People",
            icon: "fas fa-user-friends",
            children: 0,
            type: "people"
        },
        { // 3
            title: "Places and Weather",
            icon: "fas fa-smog",
            children: 0,
            type: "placesandweather"
        },
        { // 4
            title: "Commands and Requests",
            icon: "fab fa-accusoft",
            children: 0,
            type: "commandsandrequests"
        },
        { // 5
            title: "Common Expressions",
            icon: "fab fa-creative-commons-sampling",
            children: 0,
            type: "commonexpressions"
        },
        { // 6
            title: "Quantities",
            icon: "fas fa-calculator",
            children: 0,
            type: "quantities"
        },
        { // 7
            title: "Currency",
            icon: "fas fa-yen-sign",
            children: 0,
            type: "currency"
        },
        { //8
            title: "Telephone",
            icon: "fas fa-phone-square-alt",
            children: 0,
            type: "telephone"
        },
        { // 9
            title: "Quotes",
            icon: "fas fa-quote-right",
            children: 0,
            type: "quotes"
        }
    ]
};
// Intermediate
var intermediate = {
    title: "Intermediate",
    icon: "fab fa-affiliatetheme",
    type: "intermediate",
    lessions: []
}
// Advanced
var advanced = {
    title: "Advanced",
    icon: "fas fa-award",
    type: "advanced",
    lessions: []
}

var menu = [elementary, intermediate, advanced];
/**
 * Generate menu
 * @param {*} menuType Type of menu: Menu in Homepage - 1, Menu in Level page - 2, Menu in Lession page - 3
 * @param {*} levelIndex Level index
 * @param {*} lessionIndex Lession Index
 */
function GenerateMenuHtml(menuType, levelIndex, lessionIndex) {
    let title = "", content = "", level;
    switch(menuType){
        case 1:
            title = "English Dictation";
            for(let i = 0; i < menu.length; i++){
                content += GenerateLevel(menu[i]);
            }
            break;
        case 2:
            level = menu[levelIndex];
            title = level.title;
            content = GenerateLessionsInLevelHtml(level.type, level.lessions);
            break;
        case 3:
            level = menu[levelIndex];
            let lession = level.lessions[lessionIndex];
            title = lession.title;
            content = GenerateExercisesHTML(level.type, lession.type, lession.children);
            break;
    }
    let html = `
        <div class="treeview-animated w-100 border">
            <h6 class="pt-3 pl-3">${title}</h6>
            <hr>
            <ul class="treeview-animated-list mb-3">
    `;
    html += content;
    html += `  
        </ul>
    </div>
    `;
    return html;
}
/**
 * Generate Level
 * @param {*} level Level object
 */
function GenerateLevel(level) {
    let html = `
        <li class="treeview-animated-items go-detail-container">
            <a class="closed">
                <i class="fas fa-angle-right"></i>
                <span><i class="${level.icon} ic-w mx-1"></i>${level.title}</span>
            </a>
            <a href="/pages/${level.type}/index.php" class="far fa-hand-point-right go-detail" onmouseover="DetailHover(this)" onmouseout="DetailHoverOut(this)"></a>
    `;
    if(level.lessions.length > 0){
        html += `<ul class="nested">`;
        html += GenerateLessionsInLevelHtml(level.type, level.lessions);
        html += `</ul>`;
    }

    html += `</li>`;
    return html;
}
/**
 * Generate all lessions in Level
 * @param {*} levelType Level type
 * @param {*} lessions List of lessions
 */
function GenerateLessionsInLevelHtml(levelType, lessions) {
    if (lessions.length == 0) return "";
    let html = ``;
    for (let i = 0; i < lessions.length; i++) {
        html += GenerateOneLessionHtml(levelType, lessions[i]);
    }
    return html;
}

/**
 * Generate lession Html
 * @param {*} levelType Level type
 * @param {*} lession Lession object
 */
function GenerateOneLessionHtml(levelType, lession) {
    let html = `
    <li class="treeview-animated-items go-detail-container">
        <a class="closed">
            <i class="fas fa-angle-right"></i>
            <span><i class="${lession.icon} ic-w mx-1"></i>${lession.title}</span>
        </a>
        <a href="/pages/${levelType}/${lession.type}/index.php" class="far fa-hand-point-right go-detail" onmouseover="DetailHover(this)" onmouseout="DetailHoverOut(this)"></a>
    `;
    if (lession.children > 0) {
        html += `<ul class="nested">`;
        html += GenerateExercisesHTML(levelType, lession.type, lession.children);
        html += `</ul>`;
    }

    html += `</li>`;
    return html;
}

var badges = ["badge-pill badge-dark", "badge-default", "badge-primary", "badge-success", "badge-info",
    "badge-warning", "badge-danger", "badge-pill pink", "badge-pill light-blue", "badge-pill indigo",
    "badge-pill purple", "badge-pill orange", "badge-pill green", "indigo", "cyan", "orange", "badge-pill teal",
    "badge-pill green", "badge-pill purple", "badge-pill badge-default", "badge-pill badge-primary",
    "badge-pill badge-secondary", "badge-pill badge-success", "badge-pill badge-danger",
    "badge-pill badge-warning", "badge-pill badge-info", "badge-pill badge-light"];
/**
 * Get exercise html
 * @param {*} levelType Level type
 * @param {*} lessionType Lession type
 * @param {*} num number of item in lession (children)
 */
function GenerateExercisesHTML(levelType, lessionType, num) {
    if (num < 1) return "";
    let html = ``;
    for (let i = 1; i <= num; i++) {
        let badge = i < 27 ? badges[i] : badges[(i % 27)];
        let url = `/pages/${levelType}/${lessionType}/${i}/index.php`;
        html += `
            <li>
                <div class="treeview-animated-element excercise" data-url="${url}"> 
                    <span class="badge ${badge}">${i}</span> Let's go
                </div>
            </li>
        `;
    }
    return html;
}

/**
 * Hover hand poiter event
 * @param {*} e 
 */
function DetailHover(e){
    let a = $(e).closest('.go-detail-container').children('a.closed');
    a.addClass('go-detail-background');
}
/**
 * Hover out hand poiter event
 * @param {*} e 
 */
function DetailHoverOut(e){
    let a = $(e).closest('.go-detail-container').children('a.closed');
    a.removeClass('go-detail-background');
}

/**
 * Add click event when clicking exercise item
 */
document.addEventListener("click", function(e){
    if(e.target.classList.contains("excercise")){
        let url = $(e.target).data("url");
        window.location.href = url;
    }
});
