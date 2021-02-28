window.onload = function() {
    //considering there aren't any hashes in the urls already
    if(!window.location.hash) {
        //setting window location
        window.location = window.location + '#';
        //using reload() method to reload web page
        window.location.reload();
    }
}