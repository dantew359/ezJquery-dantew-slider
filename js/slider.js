    $(function(){
        $(".sl").on('click',function(){
            $('.sl').css({borderTop:'none'})
            $(this).css({borderTop:'2px solid red'})
            var newsrc = $(this).attr('src');
            console.log(newsrc);
            $(".bg-sl").attr("src",newsrc);
            $(".main-sl").fadeOut(
                function(){
                    $(".bg-sl").css({zIndex:'1'}).attr("src",newsrc);
                    $(".main-sl").css({display:'block'}).attr("src",newsrc);
                });
            
            
            
        })
    })