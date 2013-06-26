//Functions to run after the script tag has loaded
var loadFilePicker = function(key, cb) {
  var version = 'v1';

  if(Object.prototype.toString.call(key) === '[object String]'){
    var filepickerLoadCallback = function(){
      filepicker.setKey(key) && cb();
    }

    //If the script doesn't load
    var filepickerErrorCallback = function(error){
        if(typeof console !== undefined) {
            console.log(error);
        }
    };

    //Generate a script tag
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//api.filepicker.io/' + version + '/filepicker.js';
    script.onload = filepickerLoadCallback;
    script.onerror = filepickerErrorCallback;

    //Load the script tag
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
  } else {
    console.log('Please enter a valid API key');
  }
};
