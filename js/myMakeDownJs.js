$(function() {
    $('a').on('click', function(e) {
        $this = $(this).parent();
        $next = $this.find('>ul');
        $next.slideToggle();
        $this.toggleClass('open');
        $this.siblings().find('>ul').slideUp();
        $this.siblings().removeClass('open');
    });
});
$(function(){  
    $('a').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top-20;
                $('html,body').animate({
                  scrollTop: targetOffset
                },
                500);
                showMe(this);
                return false;
            }
        }
    });
});
var isindex=false;
var visitor='123';
var title=visitor;
var int = 0;
var obj = null;
function showMe(thisObj){
    var index = 0;
    if(int != 0){
        int = self.clearInterval(int);
        obj.style.color = "#000";
        int = 0;
    }
    obj = document.getElementById(thisObj.href.split("#")[1]);
    int = setInterval(function (){
        if(index >= 80){
            int = self.clearInterval(int);
            obj.style.color = "#000";
            int = 0;
        }
        var color = "#FFFFFF|#E8E8E8|#D1D1D1|#B9B9B9|#A2A2A2|#8B8B8B|#747474|#5D5D5D|#464646|#2E2E2E|#171717|#000000|#171717|#2E2E2E|#464646|#5D5D5D|#747474|#8B8B8B|#A2A2A2|#B9B9B9|#D1D1D1|#E8E8E8|#FFFFFF";
        color = color.split("|");
        obj.style.color = color[index%23]; 
        index++;       
        return false;
    }, 60);
}
$(function(){
    visitor=$('#qqname').val();
    $('#bu2').click(function(e) {
        var datas=$('h4 + p');
        if($('#txt3').val()!=''){
            for (var i = 0; i < datas.length; i++) {
                datas[i].innerText=decryptByDES(datas[i].innerText, $('#txt3').val()==''?'123':$('#txt3').val());
            }
        }   
    });
});
function decryptByDES(message, key) {        
    var keyHex = CryptoJS.enc.Utf8.parse(key);      
    var decrypted = CryptoJS.DES.decrypt({
        ciphertext: CryptoJS.enc.Hex.parse(message)
    }, keyHex, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });

    return decrypted.toString(CryptoJS.enc.GBK);
}   
$(function(){
    $.ajax({
        url:'http://r.pengyou.com/fcg-bin/cgi_get_portrait.fcg?uins=1357423913&callback=portraitCallBack',
        type:'POST', //GET
        async:true,    //或false,是否异步
        data:"{}",
        scriptCharset: "GBK",
        timeout:5000,    //超时时间
        dataType:'jsonp',    //返回的数据格式：json/xml/html/script/jsonp/text
        beforeSend:function(xhr){
            // console.log(xhr);
            // console.log('发送前');
        },
        success:function(data,textStatus){
            console.log('成功');
            console.log(data);
            console.log(textStatus);
            // console.log(jqXHR);
        },
        // error:function(xhr,textStatus){
        //     console.log('错误');
        //     console.log(xhr);
        //     console.log(textStatus);
        // },
        complete:function(){
            //console.log('结束');
        }
    });
});
function portraitCallBack(json) {
    var qqname=json['1357423913'][6];
    //console.log(qqname);
    $("#qqimg").attr('title',qqname); 
    $('#qqname').text(qqname);
}
function test() {
    $('#pwd').css("display","block");
}