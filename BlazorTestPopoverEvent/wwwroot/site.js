//this function show correctly the popover but the event inside not work
popover: function popover(selector, contentSelector) {
    $(selector).popover({
        html: true,   
        sanitize: false,
        content: function () {
            return $(contentSelector).html();
        },
        //container: 'app'
    })
}

//this function is supposed to be the correction but im unable to make it work
//popover: function popover(selector, contentSelector) {
//    var contentParent;

//    $(selector).popover({
//        html: true,
//        sanitize: false,
//        content: function () {
//            return $(contentSelector);
//        },
//    }).on('show.bs.popover', function () {
//        contentParent = $(contentSelector).parent();
//    }).on('hide.bs.popover', function () {
//        contentParent.append($(contentSelector));
//    });
//}