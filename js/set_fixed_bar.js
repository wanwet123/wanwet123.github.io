function set_fixed_bar(a,b,c){
       var $a=$(a),$b=$(b),$c=$(c),$w=$('.wrap');
       var $a_h = $a.outerHeight(true);
       var $b_h = $b.outerHeight(true);
       var $c_h = $c.outerHeight(true);
       var a1 = '<div class="a1" style="height:'+$a_h+'px;"></div>';
       var $c_next = $c.next();

       //头条存在的时候
       if($a.length>0){
         if($('.a1').length == 0){
            $(a).after(a1);
         }else{
            window.addEventListener('orientationchange' in window?'orientationchange':'resize',function(){
               var $a_h = $a.outerHeight(true);
               $('.a1').height($a_h);
            },false)
            //return;
         }
         if($(b).length>0){
           var $b_t = $(b).length?$a_h:0;
           $b.css('top',$b_t);
         }else{
           $w.css('margin-top',0);
         }
         
       }else{
         //如果头条和标题栏都不存在
         if(!$b.length){
           $w.css('margin-top',0);
         }
       }
       //获取滑动悬浮框的offset().top
       if($(c).length>0){
         var $c_t = $(c).offset().top;
         var $scroll_t = $c_t - ($a_h+$b_h);
         document.addEventListener('scroll',function(){
           var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
           if(scrollTop >= $scroll_t){
              $c.addClass('fixed_hd').css({
                'top':$a_h+$b_h
              });
              $c_next.css('margin-top',$c_h)
           }else{
              $c.removeClass('fixed_hd');
              $c_next.css('margin-top',0);
           }
         },false);
       }
    }
    
    set_fixed_bar('#toutiao','.head_fixed','.tab_hd');
    document.addEventListener('DOMContentLoaded',function(){
      set_fixed_bar('#toutiao','.head_fixed','.tab_hd');
    },false);
    
    $(window).resize(function(){
       set_fixed_bar('#toutiao','.head_fixed','.tab_hd');
    });
    
    /*window.addEventListener('orientationchange' in window?'orientationchange':'resize',function(){
       set_fixed_bar('#toutiao','.head_fixed','.tab_hd');
    },false);*/








    /*function set_fixed_bar(a,b,c){
       var $a=$(a),$b=$(b),$c=$(c),$w=$('.wrap');
       var $a_h = $a.outerHeight(true);
       var $b_h = $b.outerHeight(true);
       var $c_h = $c.outerHeight(true);
       var a1 = '<div class="a1" style="height:'+$a_h+'px;"></div>';
       var $c_next = $c.next();

       //头条存在的时候
       if($a.length>0){
         console.log('头条存在！');
         if($('.a1').length == 0){
            $(a).after(a1);
         }else{
            return;
         }
         
         if($(b).length>0){
           var $b_t = $(b).length?$a_h:0;
           $b.css('top',$b_t);
         }else{
           $w.css('margin-top',0);
         }
         
       }else{
         console.log('头条不存在！');
         //如果头条和标题栏都不存在
         if(!$b.length){
           console.log('顶部标题栏也不存在');
           $w.css('margin-top',0);
         }
       }
       //获取滑动悬浮框的offset().top
       if($(c).length>0){
         var $c_t = $(c).offset().top;
         var $scroll_t = $c_t - ($a_h+$b_h);
         console.log($c_t+' ,'+$scroll_t);
         document.addEventListener('scroll',function(){
           console.log(2);
           var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
           if(scrollTop >= $scroll_t){
              console.log('停止'); 
              $c.addClass('fixed_hd').css({
                'top':$a_h+$b_h
              });
              $c_next.css('margin-top',$c_h)
           }else{
              console.log('给我走开！');
              $c.removeClass('fixed_hd');
              $c_next.css('margin-top',0);
           }
         },false);
       }
    }

    document.addEventListener('DOMContentLoaded',function(){
      set_fixed_bar('#toutiao','.head_fixed','.tab_hd');
    },false);
    
    $(window).resize(function(){
       set_fixed_bar('#toutiao','.head_fixed','.tab_hd');
    });
*/