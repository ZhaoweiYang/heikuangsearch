
var visted = 0;
$("#search").focus(function(){
	$("#searchSupplier").css("display","block"); 
	$("#search").css("margin-top","0px"); 
	$(this).css("background","white");
	$(this).css("color","black");
	$(this).attr("placeholder","");
	$("#searchSupplier a").css("color","white");
	
	if (visted==0) {
		$("#searchSupplier a").animate({height:"50px"});
		visted = 1;
	};
});
search = function(site,url) {
	$(site).click(function  () {
		_keyWord= $("#search").val();
		$(this).attr('href',url + _keyWord);
	});
}
search("#baidu","http://www.baidu.com/s?ie=UTF-8&wd=");
search("#google","http://gu1234.com/search?site=&source=hp&q=");
search("#xiami","http://www.xiami.com/search?key=");
search("#youku","http://www.soku.com/search_video/q_");
search("#souhu","http://news.sogou.com/news?query=");
search("#tmall","http://list.tmall.com/search_product.htm?q=");
search("#tudou","http://www.soku.com/t/nisearch/");


for (var i = 1; i < $("#searchSupplier li").length+1; i++) {
	$("[name="+i+"]").css("left",100*($("[name="+i+"]").attr('name')-1)+"px");
};


$("#search").keypress(function (e) {
	if ($("#search").val()=="") {
		return;
	};
	var key = e.which; 
	if (key == 13) {
		window.open("http://www.baidu.com/s?ie=UTF-8&wd="+$("#search").val(), "_blank")
	}
});
$("#searchSupplier a").hover(function(){
	$(this).css("width","80px");
});
