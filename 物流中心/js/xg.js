var main=function () {
    var init=function () {
        dh();

    }
    var dh=function () {

        $("#barType").on('click', 'li', function () {
            $(this).addClass('active').siblings('li').removeClass('active');
        })
        $("#ji").click(function () {
            $(".shuju").html('寄件数据')
        })
        $(".pai").click(function () {
            $(".shuju").html('派件数据')
        })
        $('#fangda').on('click', function () {
            if ($(this).siblings('ul').is(":hidden")) {
                $(this).addClass('active').siblings('ul').show();
            } else {
                $(this).removeClass('active').siblings('ul').hide();
            }
        })
        $(".title").on('click', 'span',function () {
            $(this).addClass('act').siblings('span').removeClass('act');
            $('#totalProfit').eq($(this).index()).html('123,456.5元');

        })
        $(".zhichu").click(function(){
            $(".data-number").html(function(){
                return "5201314.5元";
            });
        });
        $('#btnn').on('click', function () {
            if ($('.right-top').children('.right-top-chart').is(':hidden')) {
                $(this).children('span').html('图表');
                $('.right-top').children('.right-top-chart').show().siblings('.data-box').hide();

            } else {
                $(this).children('span').html('表格');
                $('.right-top').children('.data-box').show().siblings('.right-top-chart').hide();
            }
        })
        $("#a").click(function () {
            $(".tanchuceng").css("display","block")
        })
        $("#b").click(function () {
            $(".tanchucenga").css("display","block")
        })
        $("#c").click(function () {
            $(".tanchucengb").css("display","block")
        })
        $("#d").click(function () {
            $(".tanchucengc").css("display","block")
        })
        $("#e").click(function () {
            $(".tanchucengd").css("display","block")
        })
        $("#f").click(function () {
            $(".tanchucenge").css("display","block")
        })
        $("#btnnnn").click(function () {
            $(".lay").css("display","block")
        })
        $(".close").click(function () {
            $(".lay").css("display","none")
        })
        $(".close").click(function () {
            $(".tanchuceng").css("display","none")
        })
        $(".close").click(function () {
            $(".tanchucenga").css("display","none")
        })
        $(".close").click(function () {
            $(".tanchucengb").css("display","none")
        })
        $(".close").click(function () {
            $(".tanchucengc").css("display","none")
        })
        $(".close").click(function () {
            $(".tanchucengd").css("display","none")
        })
        $(".close").click(function () {
            $(".tanchucenge").css("display","none")
        })

        $(".city-btn li").click(function () {
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            $('.city-box-bottom ul').eq($(this).index()).css("display","block");
            $('.city-box-bottom ul').eq($(this).index()).siblings().css("display","none");
        })
        $("#addSet").click(function () {
            $("#name_a").html($("#zhiban").val());
            $("#lea_a").html($("#fuze").val());
            $(".lay").css("display","none")


        })



    }
    return{
        init:init
    }
}()