


//Preloader


	$(window).load(function() {
		$("#status").fadeOut();
		$("#preloader").delay(350).fadeOut("slow");
	}) 

	
	
	
//Home Background Slider	
	
        $(function(){

            $.mbBgndGallery.buildGallery({
                containment:"#home",
                timer:2000,
                effTimer:6000,
                controls:"#controls",
                grayScale:false,
                shuffle:true,
                preserveWidth:false,
                effect:"zoom",
//              effect:{enter:{transform:"scale("+(1+ Math.random()*2)+")",opacity:0},exit:{transform:"scale("+(Math.random()*2)+")",opacity:0}},

                // If your server allow directory listing you can use:
                // (however this doesn't work locally on your computer)

                //folderPath:"testImage/",

                // else:

                 images:[
                 "images/1.jpg",
                 "images/2.jpg",
                 "images/3.jpg"
                 ],

                onStart:function(){},
                onPause:function(){},
                onPlay:function(opt){},
                onChange:function(opt,idx){},
                onNext:function(opt){},
                onPrev:function(opt){}
            });


        });	
	
	
//Home fit screen	

//Home text rotator	
	
$(".rotator > div:gt(0)").hide();
setInterval(function() { 
  $('.rotator > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('.rotator');
},  3000);
