    // $(document).ready(function(){ 
    // $(document).bind("contextmenu",function(e){return false;});});
    // $(document).ready(function() {
    // $(document).bind("keydown",function(e){e=window.event||e; if(e.keyCode==116){e.keyCode = 0;return  false;} }); }); 
    // $(document).ready(function() {
    // $(document).bind("keydown",function(e){e=window.event||e; if(e.keyCode==118){e.keyCode = 0;return  false;} }); });
    // $(document).ready(function() {
    // $(document).bind("keydown",function(e){e=window.event||e; if(e.keyCode==122){e.keyCode = 0;return  false;} }); });
    // $(document).ready(function() {
    // $(document).bind("keydown",function(e){e=window.event||e; if(e.keyCode==123){e.keyCode = 0;return  false;} }); });
    // $(document).ready(function() {
    // $(document).bind("keydown",function(e){e=window.event||e; if(e.keyCode==83){e.keyCode = 0;return  false;} }); });
    console.log('%c', "padding:180px 180px;line-height:400px;background:url('https://ww2.sinaimg.cn/large/a15b4afegy1fo1tmhcqebj209f09ymxi.jpg') no-repeat;", "\nHey man! tealing code again！\nWhy don't you buy one?\nAdd QQ774740085\n\n");
    function urlEncode(String) {
        return encodeURIComponent(String).replace(/'/g,"%27").replace(/"/g,"%22");  
    }
    function urlDecode(String) {
        return decodeURIComponent(String).replace("%27","%27").replace(/"/g,/'/g);  
    }
    function GetQueryString(name) { 
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); 
        return null; 
    } 