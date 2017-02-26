 Zepto(function($){
 	var resume = function(){
 		this.$wrapper = $("#wrapper");
 		this.$parts = $("section.part");
 		this.init();
 		this.swipe();
  	};
 	resume.prototype = {
 		setHeight : function(){

 				var objs = {
 								avatar : $("#avatar"),
 								pDate1 : $("p.date").eq(0),
 								skills : $("#skills"),
 								skillsItem : $("#skills .skillsItem"),
 								head : $("head"),
 								html : $("html")
 							},
					objsW =	{						    
								avatarW : objs.avatar.width(),
							    dateBeforeW : objs.pDate1.width()*0.154,
							    skillsW : objs.skills.width()
					        };	
				this.$parts.each(function(){
					var $this = $(this);
					$this.height(objs.html.height());
				});		
				this.$wrapper.height(objs.html.height()*8);
				objs.avatar.height(objsW.avatarW);
				objs.head.append("<style>p.date::before{ height:"+ objsW.dateBeforeW +"px}</style>");
				objs.skillsItem.each(function(){
					var $this = $(this);
					var thisW = $this.css("width");
					$this.height(thisW).css({"lineHeight":thisW});
				});				
 		},
 		swipe : function(){

 			var _this = this;
 			var $wrapper = _this.$wrapper, $codeContent = $("#codeContent"),
 				wrapperTop = $wrapper.css("top").replace("px",""),
 				maxTop = _this.$parts.eq(0).height()*(-7),
 				timer = null;

 			_this.$parts.swipeUp(function(event)
 			{
 				if(event.target === $codeContent.get(0))
 				{
 					return false;
 				}
 				if(wrapperTop <= maxTop)
 				{
 					return false;
 				}				
 				var $this = $(this),
 					$next = $this.next();
 				
 				wrapperTop -= $this.height();				
 				$wrapper.css({"top":wrapperTop+"px"});

 				switch($this.index())
 				{
 					case(0):$this.find("p.resume").eq(0).removeClass("resumeRotate");
 							$this.find("p.CNName").addClass("nameToTop");
 							$next.find("header").addClass("IconRotate");
 							$next.find("#info-lists .info-list").attr("class","info-list");
 							break;
 					case(1):$this.find("header").removeClass("IconRotate");
 							$this.find("#info-lists .info-list").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								if(index%2===0)
 								{
 									$this.addClass("listOdd");
 								}else
 								{
 									$this.addClass("listEven");
 								}
 							});
 							$next.find("header").addClass("IconRotate");
 							$next.find("#expContent1 > *").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								timer = setTimeout(function(){
 									$this.removeClass("displayNone");
 								},index*1500);
 							});
 							// _this.jumpP();
 							break;
 					case(2):$this.find("header").removeClass("IconRotate");
  							$this.find("#expContent1 > *").each(function(){
 								$(this).addClass("displayNone");
 							}); 
 							$next.find("header").addClass("IconRotate");
 							$next.find("#expContent2 > *").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								timer = setTimeout(function(){
 									$this.removeClass("displayNone");
 								},index*1500);
 							});
 							break;
  					case(3):$this.find("header").removeClass("IconRotate");
  							$this.find("#expContent2 > *").each(function(){
 								$(this).addClass("displayNone");
 							}); 
 							$next.find("header").addClass("IconRotate");
 							$next.find("#codeContent").addClass("contentDisplay")
 							.find("#click").css({"opacity":1});
 							break;
 					case(4):$this.find("header").removeClass("IconRotate");
 							$this.find("#codeContent").removeClass("contentDisplay").css({"background":"#f4f0f0"}).scrollTop(0)
 							.find("#click").css({"opacity":0}).text("点");
 							$next.find("header").addClass("IconRotate");
 							$next.find("#skills .skillsItem").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								timer = setTimeout(function(){
 									$this.addClass("skillScale");
 								},index*1000*Math.random());
 							});
 							break;
 					case(5):clearTimeout(timer);
 					 		$this.find("header").removeClass("IconRotate");
 							$this.find("#skills .skillsItem").removeClass("skillScale");
 							$next.find("header").addClass("IconRotate");
 							$next.find("#honor-lists .honor-list").attr("class","honor-list");
 							break; 	
 					case(6):$this.find("header").removeClass("IconRotate");
 							$this.find("#honor-lists .honor-list").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								if(index%2===0)
 								{
 									$this.addClass("listOdd");
 								}else
 								{
 									$this.addClass("listEven");
 								}
 							});
 							$next.find("#contact > .contactItem").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								timer = setTimeout(function(){
 									$this.removeClass("contactScale");
 								},index*1000);
 							});
 							$next.find("#contact > p").removeClass("displayNone");
 							break;				
 					default:break;
 				} 		
 			});
 			_this.$parts.swipeDown(function(event){

  				if(event.target === $codeContent.get(0))
 				{
 					return false;
 				}
 				if(wrapperTop >= 0)
 				{
 					return false;
 				}				
 				var $this = $(this),
 					$prev = $this.prev();

 				wrapperTop += $this.height();
 				$wrapper.css({"top":wrapperTop+"px"});

 				switch($this.index())
 				{
 					case(1):$prev.find("p.resume").eq(0).addClass("resumeRotate");
 							$prev.find("p.CNName").removeClass("nameToTop");
 							$this.find("header").removeClass("IconRotate");
 							$this.find("#info-lists .info-list").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								if(index%2===0)
 								{
 									$this.addClass("listOdd");
 								}else
 								{
 									$this.addClass("listEven");
 								}
 							});
 							break;
 					case(2):$prev.find("header").addClass("IconRotate");
 							$prev.find("#info-lists .info-list").attr("class","info-list");
 							clearTimeout(timer);
 							$this.find("header").removeClass("IconRotate");
 							$this.find("#expContent1 > *").each(function(){
 									$(this).addClass("displayNone");
  							});
 							break;
  					case(3):$prev.find("header").addClass("IconRotate");
 							$prev.find("#expContent1 > *").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								timer = setTimeout(function(){
 									$this.removeClass("displayNone");
 								},index*300*Math.random()); 							
 							}); 
 							$this.find("header").removeClass("IconRotate");
 							$this.find("#expContent2 > *").each(function(){
 									$(this).addClass("displayNone");
  							});
 							break;
 					case(4):$prev.find("header").addClass("IconRotate");
 							$prev.find("#expContent2 > *").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								timer = setTimeout(function(){
 									$this.removeClass("displayNone");
 								},index*300*Math.random()); 							
 							}); 
 							// _this.jumpP();
 							$this.find("header").removeClass("IconRotate");
 							$this.find("#codeContent").removeClass("contentDisplay").css({"background":"#f4f0f0"}).scrollTop(0)
 							.find("#click").css({"opacity":0}).text("点");
 							break;
 					case(5):$prev.find("header").addClass("IconRotate");
 							$prev.find("#codeContent").addClass("contentDisplay")
 							.find("#click").css({"opacity":1});
 							clearTimeout(timer);
 							$this.find("header").removeClass("IconRotate");
 							$this.find("#skills .skillsItem").removeClass("skillScale");
  							break;
 					case(6):$prev.find("header").addClass("IconRotate");
 							$prev.find("#skills .skillsItem").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								timer = setTimeout(function(){
 									$this.addClass("skillScale");
 								},index*1000*Math.random());
 							});
 							$this.find("header").removeClass("IconRotate");
 							$this.find("#honor-lists .honor-list").each(function(){
 								var $this = $(this);
 								var index = $this.index();
 								if(index%2===0)
 								{
 									$this.addClass("listOdd");
 								}else
 								{
 									$this.addClass("listEven");
 								}
 							});
 							break; 	
 					case(7):$prev.find("header").addClass("IconRotate");
 							$prev.find("#honor-lists .honor-list").attr("class","honor-list");
 							clearTimeout(timer);
 							$this.find("#contact > .contactItem").addClass("contactScale");
 							$this.find("#contact > p").addClass("displayNone");
 							break;				
 					default:break; 				
 				}
 			});
 			$codeContent.tap(function(){
 				$(this).css({"background":"#ddd2d2","paddingTop":"-20px"}).find("#click").text("拉");
 			});
 		},
 		init : function(){
 			this.setHeight();
 			var $part1 = this.$parts.eq(0);
 			$part1.find("p.resume").eq(0).addClass("resumeRotate");
 			$part1.find("p.CNName").removeClass("nameToTop");
 		}
 	};
 	var myResume = new resume();
});
