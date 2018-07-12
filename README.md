# toolbar插件是按照学习慕课网的学习记录
课程名：侧栏工具条开发  
讲师:Alex Wang

链接地址：[https://www.imooc.com/video/8235](https://www.imooc.com/video/8235)

**技术点：**

 1. 使用sass编写css，koala编译(工具貌似不能识别中文路径的项目)。
 2.  requirejs来使js代码模块化。
 3.  字体图标的引用
 4.  使用伪类来简化html结构(before,after)
 5.  jquery插件的封装


**类型一:图片背景** 

  原理是依靠图片的切换，包括文字描述，背景图片，二维码，通过改变background-position来实现效果。
 
	transform-orgin:botton right;
	transform: scale(0);
	transition: all 1s;

 提炼css

    1 复用的css写在公共块中。
    2 结构类似的css块，sass写函数，通过传参数来控制。
        @mixin name(){}   //定义函数
		@include name()	  //使用函数
		css属性 transition  transition-origin等创建可复用，且兼顾浏览器兼容性的方法
		如:

`
@mixin transition($transition){
    -webkit-transition: $transition;
    -moz-transition: $transition;
    -ms-transition: $transition;
    -o-transition: $transition;
    transition: $transition;
}
`
**类型二:字体图标**
 
 md文件编辑器 [markdownpad](http://www.markdownpad.com/download.html)

