$.register({
  rule:{
    host:/^openload\.co$/,
    path:/^\/f\/.*/
  },
  start:function(m){
    $.window.adblock=false;
    $.window.adblock2=false;
  },
  ready:function(){
  if($('#realdl>a').href)
    $.openLink($('#realdl>a').href);
  }
});