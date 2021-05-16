//配置网页的css样式，导入main.scss文件
module.exports={
	lintOnSave:false,
	css:{
		loaderOptions:{
			scss:{
				prependData:`@import "./src/styles/main.scss";`		
			}
		}
	}
}
