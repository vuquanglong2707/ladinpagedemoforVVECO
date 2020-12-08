/////////////////////Tinh Tien////////////////////////
$('#soluong').on('change', function() {

    TinhTien();
   
});


function TinhTien() {
    var soluong = 0;
    var giatien = 0;
    if ($('#soluong') != null) {
        soluong = $('#soluong').val();
    }


    if ($('#dongia') != null) {
        giatien = $('#dongia').val();
    }
    var tt = soluong * giatien;
    $('#money_text').val(tt);
    $('#money_text').empty();
    $("#money_text").append(`${tt}`);
    

}

$(document).ready(function() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'http://landapi.vveco.vn/api/product',
        headers: {'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMyIsImlhdCI6MTYwNzQ1MTE4OCwiZXhwIjoxNjA4MDU1OTg4fQ.H_x_67cUcPvHXBxKkacQgjTnbiM8BCImez6D-zx8F-Hs97GXvJJWwgKUVlz8mQTNcnCB06EqfHiczNT7sL-pRw"},
        success: function(data) {
            var objProduct = data.data;
            var lstImages = objProduct[2].images;
            var Name_product = objProduct[2].title;
            var Contents = objProduct[2].content;
            var sale_price=objProduct[2].saleprice;
            var Pri = objProduct[2].variations;
            // var variationss = objProduct.variations[0];
        
            

            for (var k = 0; k < lstImages.length; k++) {
                if (k === 0) {
                    $(".slider-single").append(`
                    <div>
                        <img src="${lstImages[0]}" alt="">
                    </div>
                    `);
                    $(".slider-nav").append(`
                    <div>
                        <img src="${lstImages[0]}" alt="">
                    </div>
                     `);
                } else {
                    $(".slider-single").append(`
                        <div>
                            <img src="${lstImages[k]}" alt="">
                        </div>
                    `);
                    $(".slider-nav").append(`
                        <div>
                            <img src="${lstImages[k]}" alt="">
                        </div>
                     `);
                }
            }
            $('.slider-single').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: false,
                adaptiveHeight: true,
                infinite: false,
                useTransform: true,
                speed: 400,
                autoplay: true,
                autoplaySpeed: 2000,        
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
            });
            $('.slider-nav')
    .on('init', function(event, slick) {
        $('.slider-nav .slick-slide.slick-current').addClass('is-active');
    })
    .slick({
        slidesToShow: 7,
        slidesToScroll: 7,
        dots: false,
        focusOnSelect: false,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }, {
            breakpoint: 420,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }]
    });

    $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
    $('.slider-nav').slick('slickGoTo', currentSlide);
    var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
    $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function(event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });

    $("#Name-product").append(`	
    <br>	
    <h3 id="caption" style="font-size:25px;text-align:center;"><b>${Name_product}</b> </h3>
    `);
     ///Tiêu đề sản phẩm
    $("#captions").append(`		
        
        <p>${Contents}</p>
    `);
    $("#price2").append(`		
    <span>${sale_price}</span>
    `);
    // Set ảnh hiển thị thêm
    for (var j = 0; j < 3; j++) {
        $("#bonus").append(`        
            <div class="col-12 more-img">
                <img src="${lstImages[j]}">
            </div>
        `);
    }
    var arrs = []
    for (var k = 0; k < Pri.length; k++) {
        arrs[k] = Pri[k].properties[0].value;
    }
    let ans = deduplicate(arrs);
    function deduplicate(arrs) {
        return arrs.filter((value, index, arrs) => arrs.indexOf(value) === index);
    }
    $("#property1").append(`
    <option disabled selected>${ Pri[0].properties[0].keyname}</option>
    `);
    for (var k = 0; k < ans.length; k++) {
        $("#property1").append(`
        <option >${ans[k]}</option>
        `);
    }
    //Check thay doi
    $('#property1' || '#property2').on('change', function() {
        for (var k = 0; k < Pri.length; k++) {
            if ($('#property1').val() === Pri[k].properties[0].value ) {
                var dongia = Pri[k].price;
                $('#dongia').val(dongia);
                $("#dongia").append(`${dongia}`);
                // $("#ProductId").val(objProduct.id);
                // $("#ProductId").append(`${objProduct.id}`);
                // $("#VariantId").val(Pri[k].id);
                // $("#VariantId").append(`${Pri[k].id}`);
                // $("#Quantity").val(Pri[k].quantity);
                // $("#Quantity").append(`${Pri[k].quantity}`);
                // $("#Weight").val(Pri[k].weight);
                // $("#Weight").append(`${Pri[k].weight}`);
                // $("#Price").val(Pri[k].price);
                // $("#Price").append(`${Pri[k].price}`);
                // $("#Money").val(Pri[k].price);
                // $("#Money").append(`${Pri[k].price}`);
                //alert(typeof parseInt($('#weight').val()));
            }
        }
    })
    
}
    });

});