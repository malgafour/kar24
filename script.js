
    setTimeout(function() {
        $('#demo').typed({
          strings: [
           " هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص ."
          ],
          typeSpeed: 5,
          contentType: 'html'
        });
      }, 500);
 
    $(document).ready(function(){
          
        $("#more").click(function() {
            $('html, body').animate({
                scrollTop: $("#products").offset().top
            }, 2000);
        });
    })
