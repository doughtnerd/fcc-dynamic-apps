module.exports = function(app){
    
    app.get('/', function(req, res){
        var pollArr = [{image:"http://azuretwilight.org/images/themes/azure_twilight/background_space_purple.png", link:"http://google.com", title:"test", description:"this is a long description this is a long description"}, {image:"http://azuretwilight.org/images/themes/azure_twilight/background_space_purple.png", link:"http://google.com", title:"test", description:"hello"}, {image:"http://azuretwilight.org/images/themes/azure_twilight/background_space_purple.png", link:"http://google.com", title:"test", description:"hello"}, {image:"http://azuretwilight.org/images/themes/azure_twilight/background_space_purple.png", link:"http://google.com", title:"test", description:"hello"}, {image:"http://azuretwilight.org/images/themes/azure_twilight/background_space_purple.png", link:"http://google.com", title:"test", description:"hello"}];
        var logged = true;
        var settings = {pollList:pollArr, isLogged:logged};
        //res.render(__dirname + '/client/index.html');
        res.render("index.jade", settings);
    });
}