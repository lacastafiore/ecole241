//scroll reveal

if (document.documentElement.clientWidth > 768) {
    var controller = new ScrollMagic.Controller();

    $(".reveal-from-left").each(function () {

        var tween = TweenMax.from(this, .6, {
            x: -200
        }, .1);

        var tween2 = TweenMax.to(this, .6, {
            x: 0
        }, .1);

        var tweens = new TimelineMax();
        tweens.add(tween).add(tween2);

        new ScrollMagic.Scene({
                triggerElement: this,
                // triggerHook: "onEnter",
                offset: 40
            })
            .setTween(tweens)
            .addTo(controller)
            .duration(2000);
    });

    $(".reveal-from-right").each(function () {

        var tween = TweenMax.from(this, .6, {
            x: 200
        }, .1);

        var tween2 = TweenMax.to(this, .6, {
            x: 0
        }, .1);

        var tweens = new TimelineMax();
        tweens.add(tween).add(tween2);

        new ScrollMagic.Scene({
                triggerElement: this,
                // triggerHook: "onEnter",
                offset: 40
            })
            .setTween(tweens)
            .addTo(controller)
            .duration(2000);
    });

    $(".reveal-from-top").each(function () {

        var tween = TweenMax.from(this, .6, {
            y: -400
        }, .1);

        var tween2 = TweenMax.to(this, .6, {
            y: 0
        }, .1);

        var tweens = new TimelineMax();
        tweens.add(tween).add(tween2);

        new ScrollMagic.Scene({
                triggerElement: this,
                // triggerHook: "onEnter",
                offset: 40
            })
            .setTween(tweens)
            .addTo(controller)
            .duration(2000);
    });

    $(".reveal-from-bottom").each(function () {

        var tween = TweenMax.from(this, .6, {
            y: 400
        }, .1);

        var tween2 = TweenMax.to(this, .6, {
            y: 0
        }, .1);

        var tweens = new TimelineMax();
        tweens.add(tween).add(tween2);

        new ScrollMagic.Scene({
                triggerElement: this,
                // triggerHook: "onEnter",
                offset: 40
            })
            .setTween(tweens)
            .addTo(controller)
            .duration(2000);
    });

}