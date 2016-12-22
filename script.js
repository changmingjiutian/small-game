// 18对（36张）图片的隐含位置
var map = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,
9,9,10,10,11,11,12,12,13,13,14,14,15,15,16,16,17,17,18,18];

var finished = 0;//完成的数量
var finishedArray = [];//记录图片的状态，（true已完成 false未完成）
var oktoclick;//是否允许单击图片
var click1,click2;//单击过的两张图片数组下标，click1是第一张，click2是第二张
var clickCount = 0;//单击此书


/*初始化函数*/
function init() {

	// 获得按钮
	var startBtn = document.getElementById('startBtn');

	startBtn.value = '游戏进行中';
	startBtn.disabled = true;
	startBtn.style.color = '#666';

	// 默认所有图片都是未完成，所有图片都是默认图片img0.gif
	for (var i = 0;i < 36;i ++) {
		finishedArray[i] = false;
		document.getElementById('img' + i).src = 'img0.gif';
	}

	finished = 0;//完成数量清零
	oktoclick = true;//设置图片允许单击

	scramble();//混淆图片位置

	// console.log(map);
}

// 混淆图片未知函数
function scramble() {

	var r;//0-35的随机下标
	var temp;//临时变量

	// 产生随机数
	for (var i = 0;i < 36;i ++) {
		r = parseInt( (35 - 0 + 1) * Math.random() + 0);

		// 随机交换位置
		temp = map[i];
		map[i] = map[r];
		map[r] = temp;
	}
}

/*显示图片的函数*/
function showImage(imgNum) {

	// 根据下标获得图片的对象
	var imgObj = document.getElementById('img' + imgNum);
	// 根据下标显示map数组中对应的图片
	imgObj.src = 'img' + map[imgNum] + '.gif';
}

