
    function carousel(info, arrt, arrlt) {
    
        var img = $(`${info}>ul>li`);
        var next = $(arrt);
        var pre = $(arrlt);
        var index = 0;
        
        pre.on('click', function (event) {
            index -= 1;
            if (index < 0) {
                index = img.length - 1;
            }
            img.fadeOut('fast');
            $(img[index]).fadeIn('slow');
        })
        next.on('click', function (event) {
            index += 1;
            if (index > img.length - 1) {
                index = 0;
            }
            img.fadeOut('fast');
            $(img[index]).fadeIn('slow');
        })
    }
