
/* ======== Model ======== */ 

var model = {
	currentCat: null,
	cats: [
		{
			clickCount: 0,
			name: 'Cat01',
			imgSrc: 'images/cat01.jpg',
			imgAttribution: 'https://picjumbo.com/wp-content/uploads/one-little-angry-cat_free_stock_photos_picjumbo_HNCK1569-2210x1473.jpg'
		},
		{
			clickCount: 0,
			name: 'Cat02',
			imgSrc: 'images/cat02.jpg',
			imgAttribution: 'https://picjumbo.com/wp-content/uploads/HNCK1587-2210x1473.jpg'
		},
		{
			clickCount: 0,
			name: 'Cat03',
			imgSrc: 'images/cat03.jpg',
			imgAttribution: 'https://picjumbo.com/wp-content/uploads/HNCK1588-2210x1473.jpg'
		},
		{
			clickCount: 0,
			name: 'Cat04',
			imgSrc: 'images/cat04.jpg',
			imgAttribution: 'https://picjumbo.com/wp-content/uploads/HNCK1551-2210x1473.jpg'
		},
		{
			clickCount: 0,
			name: 'Cat05',
			imgSrc: 'images/cat05.png',
			imgAttribution: 'https://picjumbo.com/wp-content/uploads/picjumbo-premium-pic2.png'
		}
	]
};

/* ====== Octopus ====== */

var octopus = {
	init: function () {
		// 将我们当前的猫设置为列表中的第一个
		model.currentCat = model.cats[0];

		// 告诉视图开始渲染
		catListView.init();
		catView.init();
	},

	getCurrentCat: function () {
		return model.currentCat;
	},

	getCats: function () {
		return model.cats;
	},

	// 将当前选择的猫设置为传入对象
	setCurrentCat: function (cat) {
		model.currentCat = cat;
	},

	// 递增当前选择猫的计数器
	incrementCounter: function () {
		model.currentCat.clickCount++;
		catView.render();
	}
};


/* ===== View ===== */

var catView = {

	init: function () {

		this.catElem = document.getElementById('cat');
		this.catNameElem = document.getElementById('cat-name');
		this.catImgElem = document.getElementById('cat-img');
		this.catCountElem = document.getElementById('cat-count');

		// 点击后，增加当前猫的计数器
		this.catImgElem.addEventListener('click', function () {
			octopus.incrementCounter();
		});

		// 渲染此视图（用正确的值更新DOM元素）
		this.render();
	},

	render: function () {
		// 使用当前的 猫 更新 DOM 元素
		var currentCat = octopus.getCurrentCat();
		this.catCountElem.textContent = currentCat.clickCount;
		this.catNameElem.textContent = currentCat.name;
		this.catImgElem.src = currentCat.imgSrc;
	}
};

var catListView = {

	init: function () {
		// 存储 DOM 元素以便稍后访问
		this.catListElem = document.getElementById('cat-list');

		// 渲染此视图（用正确的值更新 DOM 元素）
		this.render();
	},

	render: function () {
		var cat, elem, i;

		// 从 octopus 那得到所有的猫
		var cats = octopus.getCats();

		// 清空猫列表
		this.catListElem.innerHTML = '';

		// 循环所有的猫
		for (i = 0; i < cats.length; i++) {
			// 这是我们正在循环的猫
			cat = cats[i];

			// 创建一个新的猫列表并设置其文本
			elem = document.createElement('li');
			elem.textContent = cat.name;

			// 点击时， setCurrentCat 并呈现 catView
			// （这使用我们循环中的闭包将cat变量的值连接到click事件函数）
			elem.addEventListener('click', (function (catCopy) {
				return function () {
					octopus.setCurrentCat(catCopy);
					catView.render();
				}
			})(cat));

			// 最后， 将元素添加到列表中
			this.catListElem.appendChild(elem);
		}
	}
};

// 开始一切
octopus.init();