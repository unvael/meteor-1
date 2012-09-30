//Functions to run after the script tag has loaded
var startup = function(){
    //filepicker.setKey("DAVID_CHANG_API_KEY");
};

//If the script doesn't load
var local = function(){
};

//Generate a script tag
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//api.filepicker.io/v0/filepicker.js';
script.onload = startup;
script.onerror = local;

//Load the script tag
var head = document.getElementsByTagName('head')[0];
head.appendChild(script);

