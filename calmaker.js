function loadCalSrc(title) {
	return localStorage.getItem("src_" + title);
}
function saveCalSrc(title, src) {
	return localStorage.setItem("src_" + title, src);
}


/* for test */
samplesource = (function() {/*
#面積を求める
out
in: h: 高さ
in: w: 幅

S = h * w;
out: 面積: S

# 期待するフォーム
高さ: xxxxxx
幅: xxxxxx
[計算するボタン]
面積S:xxxxx
*/}).toString().match(/\/\*\n*([^]*)\*\//)[1];
saveCalSrc("sample", samplesource);
/* ./for test */



CalMaker = function(source) {
	var inputs;	//inputした変数
	var script; //スクリプトを格納する変数
	var source;
};

CalMaker.prototype.load = function(source) {
	//inputから始まる文字列からinputs変数に格納する
	//行で分割
	this.src_list = source.split(/\r\n|\r|\n/);
	console.log(this.src_list);
	for (i=0; i < this.src_list.length; i++)
	{
		// this.src_list[i]について分析する
	}
};


