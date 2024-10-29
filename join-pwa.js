let url = window.location.href;
let id = window.location.pathname.replace('/j/', '');
let search = window.location.search;

if(/^\d+$/.test(id) === false){
    console.log( "join-pwa: " + url + " is not in expected format. Bailing out!");
} else {
    let newUrl = `https://app.zoom.us/wc/${id}/join${search}`;

    if(newUrl.includes("?")){
        newUrl += '&fromPWA=1';
    } else {
        newUrl += '?fromPWA=1';
    }
    console.log("Going to " + newUrl);
    window.location = newUrl;
}