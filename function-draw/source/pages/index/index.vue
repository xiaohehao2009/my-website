<template>
	<view class="content">
		<uni-popup ref="popup" type="center">
			<view style="width:74%;background-color:white;margin:10vh auto 0;padding:30upx;height:70vh;">
				<scroll-view scroll-y="true" style="height:100%">
					<view class="">
						<view class="tip">
							注意：
							<view class="tip_desc"><text style="color: #82a6f5;">当函数没有绘制成功时，可能是函数不符合规范</text></view>
						</view>
						<view class="tip">
							特殊字母：
							<view class="tip_desc">
								<view class=""><text style="color: #82a6f5;">Re：刷新（重置）</text></view>
								<view class=""><text style="color: #82a6f5;">C：清除当前函数</text></view>
								<view class=""><text style="color: #82a6f5;">Add：添加函数</text></view>
								<view class=""><text style="color: #82a6f5;">Del：删除当前函数</text></view>
								<view class=""><text style="color: #82a6f5;">Draw：绘制当前函数</text></view>
							</view>
						</view>
						<view class="tip">
							<text>以下为特殊函数的转义规则（左边为书面写法，右边为实际写法）：</text>
							<view class="tip_desc">
								<view class="desc_title">x的一般形式：</view>
								<text style="color: #82a6f5;">ax</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">a*(x)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">ln的一般形式：</view>
								<text style="color: #82a6f5;">ln(e)</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">log(e)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">lg的一般形式：</view>
								<text style="color: #82a6f5;">lg(e)</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">log10(e)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">对数的一般形式：</view>
								<text style="color: #82a6f5;">loga(b)</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">ln(b)/ln(a)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">e的指数的一般形式：</view>
								<text style="color: #82a6f5;">e^n</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">(exp(n))</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">π:</view>
								<text style="color: #82a6f5;">PI</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">对x开平方根:</view>
								<text style="color: #82a6f5;">√(x)</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">sqrt(x)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">对x开y次方根：</view>
								<text style="color: #82a6f5;">(x)^(1/y)</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">root(x,y)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">对x开a/b次方根：</view>
								<text style="color: #82a6f5;">(x)^(a/b)</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">pow(root(x,b),a)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">对x开a/b次方根（仅x正半轴）：</view>
								<text style="color: #82a6f5;">(x)^(a/b)</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">root(x,b/a)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">x的n次方（1）：</view>
								<text style="color: #82a6f5;">(x)^n</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">pow(x,n)</text>
							</view>							
							<view class="tip_desc">
								<view class="desc_title">x的n次方（仅x正半轴）：</view>
								<text style="color: #82a6f5;">(x)^n</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">root(x,1/n)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">n的阶乘：</view>
								<text style="color: #82a6f5;">n!</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">n!</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">正割函数secx：</view>
								<text style="color: #82a6f5;">secx</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">1/sin(x)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">余割函数cscx：</view>
								<text style="color: #82a6f5;">cscx</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">1/cos(x)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">余切函数cotx：</view>
								<text style="color: #82a6f5;">cotx</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">1/tan(x)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">反正弦arcsinx：</view>
								<text style="color: #82a6f5;">arcsinx</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">asin(x)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">反余弦arccosx：</view>
								<text style="color: #82a6f5;">arccosx</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">acos(x)</text>
							</view>
							<view class="tip_desc">
								<view class="desc_title">反正切arctanx：</view>
								<text style="color: #82a6f5;">arctanx</text>
								<text style="color:red;">-></text>
								<text style="color: #82a6f5;">atan(x)</text>
							</view>
						</view>					
					
					</view>
					<view class="tip">
						如果使用以下符号,内部仅有一个数，不需要手动加括号：
						<view class="tip_desc">
							<view class=""><text style="color: #82a6f5;">sin,cos,tan,asin,acos,atan,lg,ln,sqrt</text></view>
						</view>
					</view>
				</scroll-view>
			</view>
		</uni-popup>

		<div style="margin-top: 10upx;" id="root"></div>
		<view style="display: flex;">
			<text style="color:skyblue;font-size:28upx;width: 260upx;margin-left: 260upx;line-height: 56upx;">函数选择器↓</text>
			<view style="width:25%;color: #82a6f5; text-align: center;position: relative;">
				<view style="box-shadow:0 0 4px 0 #82a6f5;border-radius:40upx;font-size:28upx;padding-top: 3px;padding-bottom: 3px;" @tap="$refs.popup.open('top')">使用说明</view>
			</view>
		</view>
		<picker-view class="picker-view" :indicator-style="indicatorStyle" @change="changeFn($event)" :value="[currentIndex]">
			<picker-view-column>
				<view class="item" v-for="(item, index) in drawData" :key="index">
					<view :style="{ color: colorC() }">{{ item.fn }}</view>
				</view>
			</picker-view-column>
		</picker-view>
		<view class="fn">
			<text :style="{ color: colorC() }">{{ func }}</text>
		</view>
		<view class="button-container">
			<view class="row">
				<button @tap="taptap" class="symbol" data-value="sin">sin</button>
				<button @tap="taptap" class="symbol" data-value="(">(</button>
				<button @tap="taptap" class="symbol" data-value=")">)</button>
				<button @tap="taptap" class="symbol" data-value="PI">π</button>
				<button @tap="taptap" class="symbol" data-value="(exp(1))">e</button>
				<button @tap="taptap" class="symbol" data-value="sqrt">sqrt</button>
				
				<button @tap="taptap" class="symbol" data-value="back">⬅</button>
			</view>
			<view class="row">
				<button @tap="taptap" class="symbol" data-value="cos">cos</button>
				<button @tap="taptap" class="symbol" data-value="7">7</button>
				<button @tap="taptap" class="symbol" data-value="8">8</button>
				<button @tap="taptap" class="symbol" data-value="9">9</button>
				<button @tap="taptap" class="symbol" data-value="*">*</button>
				<button @tap="taptap" class="symbol" data-value="nthRoot">root</button>
				<button @tap="taptap" class="symbol" data-value="clean">C</button>
			</view>
			<view class="row">
				<button @tap="taptap" class="symbol" data-value="tan">tan</button>
				<button @tap="taptap" class="symbol" data-value="4">4</button>
				<button @tap="taptap" class="symbol" data-value="5">5</button>
				<button @tap="taptap" class="symbol" data-value="6">6</button>
				<button @tap="taptap" class="symbol" data-value="/">/</button>
				<button @tap="taptap" class="symbol" data-value="pow">pow</button>
				<button @tap="taptap" class="symbol" data-value="log">ln</button>
				
			</view>
			<view class="row">
				<button @tap="taptap" class="symbol" data-value="asin">asin</button>				
				<button @tap="taptap" class="symbol" data-value="1">1</button>
				<button @tap="taptap" class="symbol" data-value="2">2</button>
				<button @tap="taptap" class="symbol" data-value="3">3</button>
				<button @tap="taptap" class="symbol" data-value="+">+</button>
				<button @tap="taptap" class="symbol" data-value=",">,</button>
				<button @tap="taptap" class="symbol" data-value="log10">lg</button>
				
			</view>
			<view class="row">
				<button @tap="taptap" class="symbol" data-value="acos">acos</button>				
				<button @tap="taptap" class="symbol" data-value="0">0</button>
				<button @tap="taptap" class="symbol" data-value=".">.</button>
				<button @tap="taptap" class="symbol" data-value="-">-</button>
				<button @tap="taptap" class="symbol" data-value="x">x</button>
				<button @tap="taptap" class="symbol" data-value="!">!</button>
				<button @tap="deleteFn" class="symbol" data-value="^">Del</button>
				
			</view>
			<view class="row">
				<button @tap="taptap" class="symbol" data-value="atan">atan</button>
				<button @tap="refresh" class="symbol" style="width:30%;" data-value="=">Re</button>				
				<button @tap="create" class="symbol" style="width:30%;" data-value="^">Add</button>
				<button @tap="draw" class="symbol" style="width:30%;" data-value="^">Draw</button>
				
			</view>
			  <!-- acos, asin, atan, acot,asec,acsc -->
		</view>
	
	</view>
</template>

<script>
import functionPlot from 'function-plot';

String.prototype.replaceAll = function(f, e) {
	//吧f替换成e
	var reg = new RegExp(f, 'g'); //创建正则RegExp对象
	return this.replace(reg, e);
};

export default {
	data() {
		return {
			currentIndex: 0,
			isAdd: true,
			func: 'y1=',
			colors: ['rgb(0, 122, 255,0.6)', 'rgb(240, 173, 78,0.6)', 'rgb(221, 82, 77,0.6)', 'rgb(153, 50, 204,0.6)'],
			drawData: [],
			width: 800,
			height: 800,
			indicatorStyle: `height: 50px;`
		};
	},
	// 监听页面初次渲染完成时绘制空坐标图
	onReady() {
		this.init();
	},
	onLoad() {},
	methods: {
		init() {
			let contentsBounds = document.body.getBoundingClientRect();
			let ratio = contentsBounds.width / this.width;
			this.width *= ratio;
			this.height *= ratio;
			let width = this.width;
			let height = this.height;
			// 核心如下
			functionPlot({
				target: '#root',
				width,
				height,
				// 设置显示区间
				xAxis: { domain: [-8, 8] },
				yAxis: { domain: [-8, 8] },
				// 显示方格
				grid: true,
				data: []
			});
		},
		colorC() {
			let fnColor = this.drawData[this.currentIndex] != undefined ? this.drawData[this.currentIndex].color : 'unset';

			// console.log(fnColor);
			return fnColor;
		},
		// change(index) {
		// 	this.func = this.drawData[index].fn;
		// 	this.currentIndex = index;
		// },
		changeFn(e) {
			if (this.isAdd) {
				return;
			}
			var val = e.detail.value;
			this.func = this.drawData[val[0]].fn;
			this.currentIndex = val[0];
			// console.log(this.currentIndex);
		},
		create() {
			if (this.isAdd) {
				uni.showToast({
					icon: 'none',
					title: '请绘制当前函数再创建'
				});
				return;
			} else {
				if (this.drawData.length > 4) {
					uni.showToast({
						icon: 'none',
						title: '最多4个函数'
					});
					return;
				}
				this.currentIndex = this.drawData.length;
				// console.log(this.currentIndex);
				this.isAdd = true;
				var index = this.currentIndex + 1;
				this.func = 'y' + index + '=';
			}
		},
		replaceEx(value) {
			value = value.replaceAll('asin', 'sin');
			value = value.replaceAll('acos', 'cos');
			value = value.replaceAll('atan', 'sin');
			value = value.replaceAll('sin', 'Math.sin');
			value = value.replaceAll('cos', 'Math.cos');
			value = value.replaceAll('tan', 'Math.tan');
			value = value.replaceAll('log', 'Math.log');
			value = value.replaceAll('pow', 'Math.pow');
			value = value.replaceAll('sqrt', 'Math.sqrt');
			value = value.replaceAll('PI', 'Math.PI');
			value = value.replaceAll('exp', '(2.72)^');
			value = value.replaceAll('nthRoot', 'Math.pow');
			value = value.replaceAll('!', '*1');
			return value;
		},
		draw() {
			// console.log('draw');
			// console.log(this.func);
			let expression = this.func.substring(3);
			expression = this.replaceEx(expression);
			// console.log(expression)
			//判断函数表达式是否出现分母为0的情况，算法:把×都置为1，然后进行计算，求y,如果y =- Infinity，说明分母为0
			if (eval(expression.replaceAll('x', 1)) == Infinity) {
				uni.showToast({
					icon: 'none',
					title: '分母为0'
				});
				return;
			}

			// console.log(this.isAdd);
			if (this.isAdd) {
				var length = this.drawData.length;
				var data = { fn: this.func, color: this.colors[length], index: length, graphType: 'polyline' };
				this.drawData.push(data);
				this.isAdd = false;
				// console.log('添加');
			} else {
				// console.log(this.func);
				// console.log(this.currentIndex);
				this.drawData[this.currentIndex].fn = this.func;
			}
			// console.log('开始绘制');
			let width = this.width;
			let height = this.height;
			// 核心如下
			functionPlot({
				target: '#root',
				width,
				height,
				// 设置显示区间
				xAxis: { domain: [-8, 8] },
				yAxis: { domain: [-8, 8] },
				// 显示方格
				grid: true,
				data: this.drawData
			});
		},
		taptap(t) {
			var currentValue = t.currentTarget.dataset.value;
			var fnValue = this.func;
			if (currentValue === 'back') {
				if ('=' != fnValue.substring(fnValue.length - 1, fnValue.length)) {
					this.func = fnValue.substring(0, fnValue.length - 1);
				} else {
					return;
				}
			} else if (currentValue === 'clean') {
				var index = this.currentIndex + 1;
				this.func = 'y' + index + '=';
			} else {
				if (currentValue === 'x') {
					currentValue = '(x)';
					this.func += currentValue;
				} else if (this.judgeNextBracket() && (currentValue !== '(' && currentValue !== ')')) {
					this.func += '(' + currentValue + ')';
				} else {
					this.func += currentValue;
				}
				// console.log(currentValue);
			}
		},
		judgeNextBracket(value) {
			let index = this.func.lastIndexOf('sin');
			if (index != -1) {
				let length = this.func.length - index;
				// console.log('length', length);
				if (length === 3) {
					return true;
				}
			}

			index = this.func.lastIndexOf('cos');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 3) {
					return true;
				}
			}

			index = this.func.lastIndexOf('tan');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 3) {
					return true;
				}
			}
			index = this.func.lastIndexOf('asin');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 4) {
					return true;
				}
			}
			index = this.func.lastIndexOf('acos');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 4) {
					return true;
				}
			}
			index = this.func.lastIndexOf('atan');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 3) {
					return true;
				}
			}

			index = this.func.lastIndexOf('log');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 3) {
					return true;
				}
			}

			index = this.func.lastIndexOf('sqrt');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 4) {
					return true;
				}
			}

			index = this.func.lastIndexOf('log10');
			if (index != -1) {
				let length = this.func.length - index;
				if (length === 5) {
					return true;
				}
			}
		},
		deleteFn() {
			if (this.drawData.length === 0) {
				uni.showToast({
					icon: 'none',
					title: '请创建函数'
				});
				return;
			}
			if (this.currentIndex != this.drawData.length - 1) {
				uni.showToast({
					icon: 'none',
					title: '只能删除最后的函数'
				});
				return;
			}

			this.drawData[this.currentIndex] = { fn: '0', color: '#cecece', skipTip: true };
			// console.log("delete")
			let width = this.width;
			let height = this.height;
			// 核心如下
			functionPlot({
				target: '#root',
				width,
				height,
				// 设置显示区间
				xAxis: { domain: [-8, 8] },
				yAxis: { domain: [-8, 8] },
				// 显示方格
				grid: true,
				data: this.drawData
			});
			// console.log("index",this.currentIndex)
			if (this.currentIndex === 0) {
				this.drawData.splice(this.currentIndex, 1);
				// console.log(this.drawData);
				this.isAdd = true;
			} else {
				this.drawData.splice(this.currentIndex, 1);
				this.currentIndex--;
				this.func = this.drawData[this.currentIndex].fn;

				// console.log(this.func);
				// console.log(this.drawData);
			}
		},
		refresh() {
			if (this.drawData.length === 0) {
				return;
			}
			this.currentIndex = 0;
			this.isAdd = true;
			this.func = 'y1=';
			var length = this.drawData.length;
			var resetData = [];
			for (var i = 0; i < length; i++) {
				resetData.push({ fn: '0', color: '#cecece', skipTip: true });
			}
			this.drawData = [];
			let width = this.width;
			let height = this.height;
			// console.log(resetData);
			// 核心如下
			functionPlot({
				target: '#root',
				width,
				height,
				// 设置显示区间
				xAxis: { domain: [-8, 8] },
				yAxis: { domain: [-8, 8] },
				// 显示方格
				grid: true,
				data: resetData
			});
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.tip {
	padding: 8upx;
	box-sizing: border-box;
	font-size: 26upx;
}
.tip .tip_desc {
	padding:16upx;
	margin: 10upx 0;
	box-sizing: border-box;
	background-color: aliceblue;
	font-size: 24upx;
}
.desc_title{
	margin-bottom:10upx;
}
.picker-view {
	width: 100%;
	height: 100upx;
}
.item {
	align-items: center;
	justify-content: center;
	text-align: center;
	display: flex;
}
.fn {
	display: flex;
	width: 90%;
	height: 40px;
	background-color: white;
	margin: 10upx 0 0;
	flex-direction: column;
	border-radius: 10px;
	box-shadow: 0 0 4px 0 #82a6f5;
	justify-content: center;
	text-align: center;
}
.fn text {
	color: black;
	font-size: 28upx;
}
.button-container {
	margin: 10px 0 20px;
}
.row {
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 16%;
	margin-top: 2.5%;
}
.symbol {
	width: 14.2%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30rpx;
	margin: 0 2px;
	background-color: white;
}

.symbol {
	box-shadow: 0 0 2px 0 pink;
}

.row:nth-child(2) .symbol {
	/* border-bottom: 7px solid #9ff648; */
	box-shadow: 0 0 4px 0 #9ff648;
}

.row:nth-child(3) .symbol {
	/* border-bottom: 7px solid #5ed5d1; */
	box-shadow: 0 0 4px 0 #5ed5d1;
}

.row:nth-child(4) .symbol {
	/* border-bottom: 7px solid #ff6e97; */
	box-shadow: 0 0 4px 0 #ff6e97;
}

.row:nth-child(5) .symbol {
	/* border-bottom: 7px solid #82a6f5; */
	box-shadow: 0 0 4px 0 #82a6f5;
}
/deep/uni-button::after{
	content: none;
}
</style>
