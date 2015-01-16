$(function() {
    var iframe = $('#video')[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {
        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
        player.api('play');
	$(iframe).show();
    });

    function onPause(id) {
        
    }

    function onFinish(id) {
        
    }

    function onPlayProgress(data, id) {
        
    }
});
