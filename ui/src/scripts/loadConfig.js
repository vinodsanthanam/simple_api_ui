var loadConfig = function(env){
  loadJS('config/'+env+'.js', {}, document.head);
};

loadConfig(environment);
