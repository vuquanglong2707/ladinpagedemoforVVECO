// /////////////////////Tinh Tien////////////////////////

// function unformatNumber(number){
//     return accounting.unformat(number, ",");
// }

// function formatNumber(number){
//     return accounting.formatNumber(number, 0, ".", ",");;
// }

// $('#soluong').on('change', function() {
//     TinhTien();
// });


// function TinhTien() {
//     var quantity = parseFloat($('#soluong').find(":selected").val());
//     var giatien = $('#Price').val();

//     console.log(quantity + "=" + giatien);

//     var tt = quantity * giatien;
//     $('#Money').val(tt);

//     $('#Quantity').val(quantity);

//     $('#money_text').text(formatNumber(tt) + 'đ');
// }

// var Pri;
// var objProduct;
// $('#property1, #property2').on('change', function() {

//     for (var k = 0; k < Pri.length; k++) {
//         if ($('#property1').val() === Pri[k].properties[0].val && Pri[k].properties[1].val === $('#property2').val()) {
//             var dongia = Pri[k].price;
//             $('#dongia').val(dongia);
//             $("#ProductId").val(objProduct.id);
//             $("#ProductId").append(`${objProduct.id}`);
//             $("#VariantId").val(Pri[k].id);
//             $("#VariantId").append(`${Pri[k].id}`);
//             $("#Weight").val(Pri[k].weight);
//             $("#Weight").append(`${Pri[k].weight}`);
//             $("#Price").val(Pri[k].price);
//             $("#Price").append(`${Pri[k].price}`);
//             $("#Money").val(Pri[k].price);
//             $("#Money").append(`${Pri[k].price}`);
//             //alert(typeof parseInt($('#weight').val()));
//         }
//     }

//     TinhTien();
// });

// // var API_ENDPOINT = 'https://pos.vveco.vn';
// // // var API_ENDPOINT = 'http://localhost:9997';
// // var shop_token = 'ta8dmOBDFv0z24ziIxO7SG0HEffslDCJ';
// // var warehouse_id = '5';
// // var product_id = '1431';
// // var order_channel = '36';
// $(document).ready(function() {
//     $.ajax({
//     type: 'GET',
//     dataType: 'json',
//     url: 'http://landapi.vveco.vn/api/product/byid?id=3',
//     headers: {'Authorization': "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMyIsImlhdCI6MTYwNzQ1MTE4OCwiZXhwIjoxNjA4MDU1OTg4fQ.H_x_67cUcPvHXBxKkacQgjTnbiM8BCImez6D-zx8F-Hs97GXvJJWwgKUVlz8mQTNcnCB06EqfHiczNT7sL-pRw"},
//     success: function(data) {
//             objProduct = data.data;
//             // alert(objProduct.name);
//             var lstImages = objProduct.images;
//             var Name_product = objProduct.name;
//             var titles = objProduct.desc.replace(/(?:\r\n|\r|\n)/g, '<br>');;
//             var Pricess = objProduct.originPrice;
//             Pri = objProduct.variants;
//             var Pric = Pri[0].price;
//             var Property = Pri[0].properties;
//             var AllCategoriess = objProduct.categories;
//             var videotest;
//             var Khuyenmai1;
//             var Khuyenmai2;
//             ////Set đơn giá

//             for (var i = 0; i < objProduct.categories.length; i++) {
//                 // alert(objProduct.categories[i]);
//                 $("#categories").val(objProduct.categories[i]);
//                 $("#categories").append(`${objProduct.categories[i]}`);
//             }
//             // alert(Pri[1].properties[1].key);



//             ////Thêm khuyến mãi
//             if (Khuyenmai1 != null) {
//                 $('.promotion').append(`
//                 <h2 style="font-size: 1.5em;">Ưu đãi siêu hấp dẫn</h2>
//                 <hr style="height: 1px; background-color: black;">
//                 <p>${Khuyenmai1}</p>
//                 <p>${Khuyenmai2}</p>
//             `)
//             }

//             // for (var k = 0; k < Pri.length; k++) {
//             //     for (var j = 0; j < Pri[k].properties.length; j++) {
//             //         $("#property1").append(`
//             //         <option >${Pri[k].properties[0].val}</option>
//             //         `);
//             //         $("#property2").append(`
//             //         <option >${Pri[k].properties[1].val}</option>
//             //         `);
//             //     }
//             // }
//             // console.log(Pri.properties[0].val)
//             var arrs = []
//             var arrs2 = []
//             for (var k = 0; k < Pri.length; k++) {
//                 arrs[k] = Pri[k].properties[0].val;
//             }
//             for (var k = 0; k < Pri.length; k++) {
//                 arrs2[k] = Pri[k].properties[1].val;
//             }
//             let ans = deduplicate(arrs);
//             let ans2 = deduplicate(arrs2);

//             function deduplicate(arrs) {
//                 return arrs.filter((value, index, arrs) => arrs.indexOf(value) === index);
//             }

//             function deduplicate2(arrs2) {
//                 return arrs2.filter((value, index, arrs2) => arrs2.indexOf(value) === index);
//             }

//             for (var k = 0; k < ans.length; k++) {
//                 $("#property1").append(`
//                 <option >${ans[k]}</option>
//                 `);
//             }
//             for (var k = 0; k < ans2.length; k++) {
//                 $("#property2").append(`
//                 <option >${ans2[k]}</option>
//                 `);
//             }

//             setSlider(lstImages);

//             //Set ảnh hiển thị thêm
//             for (var j = 0; j < 3; j++) {
//                 if (lstImages[j].startsWith('https://cf.shopee.vn')) {
//                     $("#bonus").append(`        
//                         <div class="col-12 more-img">
//                             <img src="${lstImages[j]}">
//                         </div>
//                     `);
//                 } else {
//                     $("#bonus").append(`        
//                         <div class="col-12 more-img">
//                             <img src="https://pos.vveco.vn${lstImages[j]}">
//                         </div>
//                     `);
//                 }

//             }
//             ////////Tên sản phẩm
//             $("#Name-product").append(`	
//             <br>	
//             <h3 id="caption" style="font-size:25px;text-align:center;"><a href=""><b>${Name_product}</b> </a> </h3>
//             `);
//             /////Tiêu đề sản phẩm
//             $("#captions").append(`		
                
//                 <p>${titles}</p>
//             `);
//             /////// giá gốc
//             $("#prices").append(`		
//                 <span class="line-through">${Pricess}đ</span>
//             `);
//             //////Gía khuyến mãi
//             var sale_price = formatNumber(Pric);
//             $("#price2").append(`		
//                 <span>${sale_price}</span>
//             `);

//             var money_save = formatNumber(Pric / 0.6 * 0.4);

//             $('#money_save').text(`Tiết kiệm ${money_save} vnđ`);
//             /// thông tin chi tiết sản phẩm

//             ////////Thêm mô tả bằng video
//             if (videotest != null) {
//                 $("#videoinfo").append(`
            
//                     <h2>Video mô tả thêm về sản phẩm</h2>
//                     <hr style="height: 1px; background-color: black;">
//                     <video controls>
//                         <source src="${videotest}" type="video/mp4">
//                         <source src="${videotest}" type="video/ogg">
//                     </video>
//                 `);
//             }

//         }
//     });
    


// //Set anh cho slider

// // function setSlider(lstImages){
// //     for (var k = 0; k < lstImages.length; k++) {
// //             if (k === 0) {
// //                 $(".slider-single").append(`
// //                 <div>
// //                     <img src="${lstImages[0]}" alt="">
// //                 </div>
// //                 `);
// //                 $(".slider-nav").append(`
// //                 <div>
// //                     <img src="${lstImages[0]}" alt="">
// //                 </div>
// //                  `);
// //             } else {
// //                 $(".slider-single").append(`
// //                     <div>
// //                         <img src="${lstImages[k]}" alt="">
// //                     </div>
// //                 `);
// //                 $(".slider-nav").append(`
// //                     <div>
// //                         <img src="${lstImages[k]}" alt="">
// //                     </div>
// //                  `);
// //             }
// //         }

// //     $('.slider-single').slick({
// //     slidesToShow: 1,
// //     slidesToScroll: 1,
// //     arrows: true,
// //     fade: false,
// //     adaptiveHeight: true,
// //     infinite: false,
// //     useTransform: true,
// //     speed: 400,
// //     autoplay: true,
// //     autoplaySpeed: 2000,        
// //     cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
// // });

// // $('.slider-nav')
// //     .on('init', function(event, slick) {
// //         $('.slider-nav .slick-slide.slick-current').addClass('is-active');
// //     })
// //     .slick({
// //         slidesToShow: 7,
// //         slidesToScroll: 7,
// //         dots: false,
// //         focusOnSelect: false,
// //         infinite: false,
// //         responsive: [{
// //             breakpoint: 1024,
// //             settings: {
// //                 slidesToShow: 5,
// //                 slidesToScroll: 5,
// //             }
// //         }, {
// //             breakpoint: 640,
// //             settings: {
// //                 slidesToShow: 4,
// //                 slidesToScroll: 4,
// //             }
// //         }, {
// //             breakpoint: 420,
// //             settings: {
// //                 slidesToShow: 3,
// //                 slidesToScroll: 3,
// //             }
// //         }]
// //     });

// //     $('.slider-single').on('afterChange', function(event, slick, currentSlide) {
// //     $('.slider-nav').slick('slickGoTo', currentSlide);
// //     var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
// //     $('.slider-nav .slick-slide.is-active').removeClass('is-active');
// //         $(currrentNavSlideElem).addClass('is-active');
// //     });

// //     $('.slider-nav').on('click', '.slick-slide', function(event) {
// //         event.preventDefault();
// //         var goToSingleSlide = $(this).data('slick-index');

// //         $('.slider-single').slick('slickGoTo', goToSingleSlide);
// //     });

// // }




// ///////Set up tỉnh thành quận huyện phường xã

// function fetchProvince(){
//         $.ajax({
//         url: 'https://pos.vveco.vn/pos/api/province',
//         type: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             var general = data.body;
//             for (var i = 0; i < general.length; i++) {
//                 // $('#tinhthanh').val(general[i].name)
//                 $('#tinhthanh').append(`
//                     <option  value="${general[i].id}">${general[i].name}</option>
//                 `)
//             }
//         }

//     })
// }

// $('#tinhthanh').on('change', function() {
//     updateDistrict();
// });


// function updateDistrict(){
//     var link = API_ENDPOINT + "/pos/api/district/" + $('#tinhthanh').find(":selected").val();
//     $.ajax({
//         url: link,
//         type: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             $('#quanhuyen').empty();
//             var quanhuyens = data.body;
//             for (var k = 0; k < quanhuyens.length; k++) {
//                     $('#quanhuyen').append(`
//                         <option value="${quanhuyens[k].id}">${quanhuyens[k].name}</option>
//                     `)
                
//             }
//             updateWard();
//         }
//     })
// }

// $('#property1' && '#property2' && '#soluong').on('change', function() {
//     console.log('ID PRODUCT:' + $('#ProductId').val());
// });
// $('#quanhuyen').on('change', function() {
//     updateWard();
// });

// function updateWard(){
//     var link2 = API_ENDPOINT + "/pos/api/ward/" + $('#quanhuyen').find(":selected").val();
//     $.ajax({
//         url: link2,
//         type: 'GET',
//         dataType: 'json',
//         success: function(data) {
//             $('#xaphuong').empty();
//             var xaphuong = data.body;
//             for (var n = 0; n < xaphuong.length; n++) {
//                 // $('#xaphuong').val(xaphuong[n].name)
//                 $('#xaphuong').append(`
//                             <option value="${xaphuong[n].id}">${xaphuong[n].name}</option>
//                 `)
//             }
//         }
//     });
// }


// function order_validate(){
//     $("#order_card_div_row").validate({
//         rules: {
//             sellist1: {
//                 required: true,
//             },
//             sellist2: {
//                 required: true,
//             },
//             soluong: {
//                 required: true,
//             },
//             name: {
//                 required: true, 
//             },
//             phone: {
//                 required: true,
//             },
//             tinhthanh: {
//                 required: true,
//             },
//             quanhuyen: {
//                 required: true,
//             },
//             xaphuong: {
//                 required: true,
//             },
//             diachi: {
//                 required: true,
//             }
//         },
//         highlight: function(element) {
//             $(element).parent().addClass('has-error');
//         },
//         unhighlight: function(element) {
//             $(element).parent().removeClass('has-error');
//           },
//     });
    
//     return $("#order_div_row").valid();
// }

// $("#order_div_row").on('submit', function(e){
//     e.preventDefault();
//  });

// $('.submit').on('click', function() {
//     if(!order_validate()){
//         return;
//     }


// //     var quantity = parseFloat($('#soluong').find(":selected").val());
// //     var price = parseFloat($('#Price').val());
// //     var money = quantity * price;
// //     var invoice = {
// //         "orderChannel": order_channel,
// //         'warehouseId': warehouse_id,
// //         "details": [{
// //             "productId": $('#ProductId').val(),
// //             "variantId": $('#VariantId').val(),
// //             "quantity": $('#soluong').find(":selected").val(),
// //             "price": $('#Price').val(),
// //             "money": money + '',
// //         }],
// //         "totalMoney": unformatNumber($('#Money').val()),
// //         "shopShipMoney": "0",
// //         "paidMoney": "0",
// //         "discountPercent": "0",
// //         "discountMoney": "0",
// //         "cashMoney": unformatNumber($('#Money').val()),
// //         "innerNote": '',
// //         "printNote": $('#note').val(),
// //         "customerPhone": $('.phone-number').val(),
// //         "customerName": $('.name').val(),
// //         "customerDob": "",
// //         "customerFulladdress": $('.diachi').val(),
// //         "customerProvince": $('#tinhthanh').find(":selected").text(),
// //         "customerDistrict": $('#quanhuyen').find(":selected").text(),
// //         "customerWard": $('#xaphuong').find(":selected").text(),
// //         "customerProvinceID": $('#tinhthanh').find(":selected").val(),
// //         "customerDistrictID": $('#quanhuyen').find(":selected").val(),
// //         "customerWardID": $('#xaphuong').find(":selected").val(),
// //         "channelSource": "Landing Page",
// //     }

//     // $.ajax({
//     //     url: API_ENDPOINT + '/pos/api/landingpage/create/order?shop_token='+shop_token,
//     //     type: 'POST',
//     //     contentType: 'application/json',
//     //     dataType: 'json',
//     //     data: JSON.stringify(invoice),
//     //     success: function(data) {

//     //        Swal.fire(
//     //           'Đặt hàng thành công',
//     //           'Shop sẽ liên hệ với bạn trong thời gian sớm nhất!',
//     //           'success'
//     //         );
//     //     },
//     //     error: function(error) {
//     //         console.log(error);
//     //         alert("Lỗi rồi");
//     //     }
//     // });
// // })