
// header height

$(".header").height($(window).height());
$(window).resize(function () {
	$(".header").height($(window).height())
});


$(".header .overlay").height($(window).height())
$(window).resize(function () {
	$(".header .overlay").height($(window).height())
});

// close button

$(".closeBtn").click(function () {
	$(".side-menu").css("width","0")
	$(".overlay .content").css("marginLeft","0")
});

// open button

$(".open").click(function () {
	$(".side-menu").css("width","20%")
	$(".overlay .content").css("marginLeft","20%")

});

// active class

$(".side-menu li").click(function () {
	$(this).addClass('active').siblings().removeClass("active")

});
$(".side-menu li a").click(function () {
	$("html").animate({scrollTop:$($(this).attr("href")).offset().top},1000)

});

// toggle h3

$(".duration .content div:first").css("display","block")

$(".duration h3").click(function () {
	$(this).next().slideToggle(500)
	$(".duration .content div").not($(this).next()).slideUp(500)
});

// Date

function countDown() {
	var date=new Date(),
		currentDate=new Date(2018, 10, 21),
		msDate=date.getTime(),
		msCurrent=currentDate.getTime(),
		msDifferance=msCurrent-msDate,

		seconds=Math.floor(msDifferance/1000),
		minutes=Math.floor(seconds/60),
		hours=Math.floor(minutes/60),
		days=Math.floor(hours/24)-30;

		hours%=24
		minutes%=60
		seconds%=60


		$(".count-down #day").html("<h2>"+days+" D</h2>")
		$(".count-down #hour").html("<h2>"+hours+" H</h2>")
		$(".count-down #minute").html("<h2>"+minutes+" M</h2>")
		$(".count-down #second").html("<h2>"+seconds+" S</h2>")

		setInterval(countDown,1000)
	}

	countDown()

	// count characters


	$("textarea").keyup(function () {
		

		if((100-$(this).val().length)<0){
			$(".num").text('your available character finished')
		}
		else{
			$(".num").text(100-$(this).val().length)
		}
	})