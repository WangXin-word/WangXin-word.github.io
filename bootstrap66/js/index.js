$(function(){
    //1.轮播图
    $(window).on('resize',function(){
        //1.窗口的宽度
        var clientW = $(window).width();
        //1.设置零界点
        var isShowBigImage = clientW>=900;
        //3.获取所有的item
        var $allItems = $('#lk_carousel .carousel-item');
        //4.遍历
        $allItems.each(function(index,item){
            //4.1 取出图片路径
            var src = isShowBigImage?$(item).data('lg-img'):$(item).data('sm-img');
            //  var imgUrl = `url(${src})`;
              var imgUrl = "url"+"("+src+")";
             //4.2设置背景
            $(item).css({
                backgroundImage:imgUrl
            });
            if(!isShowBigImage){
                // var imgEle = `<img src = '${src}'>`;
                var imgEle = "<"+"img"+" "+"src"+ "="+src+">";
                console.log(imgEle);
                $(item).empty().append(imgEle);
            }
            else{
                $(item).empty();
            }
        });
    });
    $(window).trigger('resize');

    //3添加轮播图滑动
     let startX = 0, endX = 0;
     let carouselInner = $('#lk_carousel .carousel-inner')[0];
     let $carousel = $('#lk_carousel');
     let carousel = $carousel[0];

     carouselInner.addEventListener('touchstart',  function(e){
        startX = e.targetTouches[0].clientX;
     });
     carouselInner.addEventListener('touchmove', function(e){
        endX = e.targetTouches[0].clientX;
        if (endX - startX > 0) {  // 上一张
            $carousel.carousel('prev');
        } else if (endX - startX < 0) { // 下一张
            $carousel.carousel('next');
         }
     });

     //超出内容处理
     $(window).on('resize',function(){
         var $ul = $('#lk_product .nav');
         var $allLis = $('.nav-item',$ul);
         var totalW = 0;// 所有li的宽度
         $allLis.each(function(index, item){
             totalW += $(item).width();
     })
     // 获取父标签的宽度
     var parentW = $ul.parent().width();
     // console.log(parentW);
     if(totalW > parentW){
         $ul.css({
             width: totalW + 'px'
         })
     }else {
         $ul.removeAttr('style');
     }
 }).trigger('resize');

    //工具的提示
    $('[data-toggle="tooltip"]').tooltip();
});