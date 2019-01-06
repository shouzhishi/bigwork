function animate(obj,json,callback){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var isStop = true;
			for (var attr in json){
				if(attr=='opacity'){
					var now = parseInt(getStyle(obj,attr)*100);
				}else{
					var now = parseInt(getStyle(obj,attr));
				}
				
				var speed = (json[attr]-now)/5;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				if (attr=='opacity') {
					obj.style[attr]=(now+speed)/100;
				}else{
					obj.style[attr]=now+speed+'px';
				}
				
				var current = now+speed;
				if(json[attr]!=current){
					isStop = false;
				}
			}					
			if(isStop){
				clearInterval(obj.timer)
				callback&&callback();
			}
	 	},10)
	
	}
	function animate1(obj,json,callback){		
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){	
			var isStop = true;
			for (var attr in json){
					var now = parseInt(getStyle(obj,attr));
				}
				
				var speed = -1;//(json[attr]-now)/5;
				//speed = speed>0?Math.ceil(speed):Math.floor(speed);
				
					//obj.style[attr]=now+speed+'px';
					obj.style[attr]=now+speed+'px';
				var current = now+speed;
				if(json[attr]!=current){
					isStop = false;
				}
								
			if(isStop){
				clearInterval(obj.timer)
				callback&&callback();
			}

	 	},20)
	}

	function getStyle(obj,style){
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			obj.currentStyle[style];
		}		
	}
window.onload = function(){
		var cover = document.getElementById('cover');
		window.onscroll = function(){
			var st = document.documentElement.scrollTop || document.body.scrollTop;
			if(st > 100){
				cover.style.position = 'fixed'
				
			}else{
				cover.style.position = 'static'
				
			}
		}
		
	}
	function next1(){
		index1++;
		console.log(index1);
		animate1(slider1,{top:-26*index1},function(){
			if(index1 == 13){
				slider1.style.top = '0px';
				index1 = 0;
			}
		});
}	
	
	function next(){
		index++;
		navChange()
		animate(slider,{left:-800*index},function(){
			if(index == 7){
				slider.style.left = '-800px';
				index = 1;
			}
		});
	};
	function previous(){
		index--;
		navChange()
		animate(slider,{left:-800*index},function(){
			if(index == 0){
				slider.style.left = '-4800px';
				index = 6;
			}
		});
	};
	function navChange(){
		for(var i = 0;i<oNavlist.length;i++)
			oNavlist[i].className = '';
		if(index == 7){
			oNavlist[0].className = 'active';
		}
		else if(index == 0){
			oNavlist[5].className = 'active';
		}
		else{
			oNavlist[index - 1].className = 'active';
		}
		
	}