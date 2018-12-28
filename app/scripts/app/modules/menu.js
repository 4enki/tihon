$(document).ready(function() {

  let Menu = $('._menu');

  $('._nav-hamburger').click(function (e) {
    e.preventDefault();
    Menu.toggleClass('is-open');
    $(this).toggleClass('is-active');
    return false;
  });

  $(window).scroll(function () {

    let mainScroll = $(this).scrollTop();
    let reviewBox = $("#review").offset().top;

    if (mainScroll >= reviewBox) {
      Menu.addClass('is-dark');
    } else {
      Menu.removeClass('is-dark');
    }

  });

});

// шпионский скролл в меню
    (function(){
        var lastId,
            topMenu = $("._spy-nav"),
            topMenuHeight = topMenu.outerHeight()+35,
            menuItems = topMenu.find("a"),
            scrollItems = menuItems.map(function(){
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });
        menuItems.click(function(e){
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 650);
            e.preventDefault();
        });
        $(window).scroll(function(){
            var fromTop = $(this).scrollTop()+topMenuHeight;
            var cur = scrollItems.map(function(){
                if ($(this).offset().top < fromTop)
                return this;
            });
            cur = cur[cur.length-1];
            var id = cur && cur.length ? cur[0].id : "";
            if (lastId !== id) {
                lastId = id;
                menuItems
                    .parent().removeClass("active")
                    .end().filter("[href='#"+id+"']").parent().addClass("active");
            }
        });
    })();
    // /шпионский скролл в меню
