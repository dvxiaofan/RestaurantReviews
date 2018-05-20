
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    var address = streetStr + ', ' + cityStr;

    $greeting.text(`So, you want to live at ${address}?`);

    var streetviewURL = `http://maps.googleapis.com/maps/api/streetview?size=600x300&location=${address} `;

    $body.append(`<img class="bgimg" src=" ${streetviewURL} ">`);

    var nytimesUrl = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${cityStr}&api-key=9ff44f221b134b42a8f25ee15a006df6`;
    $.getJSON(nytimesUrl, data => {
        $nytHeaderElem.text(`New York Times Articles About ${cityStr}`);

        var articles = data.response.docs;
        articles.map(article => {
            $nytElem.append(`<li class="article">
                    <a href="${article.web_url}">${article.headline.main}</a>
                    <p>${article.snippet}</p>
                </li>`)
        });
    }).fail(err => {
        $nytHeaderElem.text(`New York Times Articles Could Not Be Loaded`);
    })


    return false;
};

$('#form-container').submit(loadData);
