//https://docs.google.com/spreadsheets/d/1vLwxHPStiqkVTWR_lU_gPAXaMS2kBTesNwyhy6wlUGE/pubhtml\


function redirect( hash, matches ){
    if (hash) {


        var redirect = matches.reduce(function (result, redirect) {
            var match = hash.match(redirect.match);
            if (match) {
                result = redirect.redirect.replace(/\$(\d)/, function (a, b) {
                    return match[b];
                });
            }
            return result;
        }, undefined);

        if (redirect) {
            window.location = redirect;
        }

    }
}


function regexizeMatch( item ){
    item.match = new RegExp(item.match);
    return item;
}

Tabletop.init({
    key: '1vLwxHPStiqkVTWR_lU_gPAXaMS2kBTesNwyhy6wlUGE',
    callback: function (data, tabletop) {
        redirect(location.hash.substr(1), data.map(regexizeMatch ))

    },
    simpleSheet: true
});
