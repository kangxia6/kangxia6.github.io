var logo = document.querySelector('.logo');
var dingbu = document.querySelector('.dingbu');
var zhu1 = document.querySelector('.zhu1');
var cs = document.querySelector('.cs');
var gy = document.querySelector('.guanyu');
var tc = document.querySelector('.tanchuang');
var end = document.querySelector('.end');
var bottom = document.querySelector('.bottom');
var box = document.querySelector('.box');
var time = document.querySelector('.time');
var a = 1;

//logo的点击事件
logo.onclick = function() {

	//	logo.addEventListener('animationend',function(){
	//		logo.style.animation='none';
	//	});
	if(a == 0) {
		dingbu.style.animation = 'dingbu 1s linear forwards';
		zhu1.style.animation = 'zhu1 1s linear forwards';
		bottom.style.animation = 'zhu1 1s linear forwards';
		logo.style.animation = 'logo2 1s linear forwards';

		a = 1;
	} else {
		dingbu.style.animation = 'dingbu1 1s linear forwards';
		zhu1.style.animation = 'zhu11 1s linear forwards';
		bottom.style.animation = 'zhu11 1s linear forwards';
		logo.style.animation = 'logo 1s linear forwards';

		//		logo.style.left='50px';
		a = 0;
	}
};
//end

//time的点击事件
time.onclick = function() {

	if(a == 0) {

		box.style.display = 'none';
		a = 1;
	} else {
		box.style.display = 'block';

		a = 0;
	}
};
//end
//时间
var t=setInterval(function(){
			var sj=document.querySelector('.shijian');
			var date = new Date();
			var h=date.getHours();
			var f=date.getMinutes();
			var m=date.getSeconds();
			sj.innerHTML=h+':'+f+':'+m;
		})

//弹窗的打开,关闭
gy.onclick = function() {
	tc.style.display = 'flex';
}

end.onclick = function() {
	tc.style.display = 'none';
}
//end

//查看代码弹窗的打开,关闭
var ck = document.querySelector('.btn2');
var end1 = document.querySelector('.end1');
var tc1 = document.querySelector('.tanchuang1');
var jdtck = document.querySelector('.jdtck');
ck.onclick = function() {
	tc1.style.display = 'flex';
}

end1.onclick = function() {
	tc1.style.display = 'none';
}
//end
排行榜
function changebox(n) {
	var i = 1;
	while(true) {
		try {
			document.getElementById("a" + i).style.display = 'none';
			document.getElementById("b" + i).style.display = 'block';
		} catch(e) {
			break;
		}
		i++;
	}
	document.getElementById("a" + n).style.display = 'block';
	document.getElementById("b" + n).style.display = 'none';
}