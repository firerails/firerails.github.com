
{
theme: "blank",
slides: [
{
layout: "title",
content: {
title: "WebApp时代的界面布局浅析",
content: "赵锦江"
}
},
{
layout: "normal",
content: {
title: "自我介绍",
content: "赵锦江(勾三股四)
Tags: maxthon/f2e/music/football
QQ: 110698041
E/M: zhaojinjiang@yahoo.com.cn
Blog: http://bulaoge.net/?g3g4
Weibo: http://weibo.com/mx006"
},
style: {
content: {
-ppt-mode: "ul"
}
}
},
{
layout: "subtitle",
content: {
title: "WebPage时代的布局"
}
},
{
layout: "normal",
content: {
title: "WebPage",
content: "其功效集中在内容的展现
多以文档形式存在
流式布局"
},
style: {
content: {
-ppt-mode: "ul",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "normal",
content: {
title: "常见的WebPage布局",
content: "<header> 页眉 </header>
<nav> 横向导航 </nav>
<aside> 侧边导航 </aside>
<content> 正文内容 </content>
<footer> 页脚 </footer>"
},
style: {
content: {
-ppt-mode: "code",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "picture",
content: {
title: "Beautiful HTML Code",
picture: "./data/images/20120022010137.png",
content: "http://css-tricks.com/121-what-beautiful-html-code-looks-like/"
}
},
{
layout: "picture",
content: {
title: "经典案例：新闻、博客",
picture: "./data/images/20120022010014.png",
content: "截图来自：网易新闻、Typecho.org"
}
},
{
layout: "subtitle",
content: {
title: "WebPage++时代"
}
},
{
layout: "normal",
content: {
title: "星星还是那个星星",
content: "不同之处：
谋求更丰富的交互
谋求更灵活的布局
谋求更开放的版式"
},
style: {
content: {
-ppt-mode: "ul",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "picture",
content: {
title: "大量的交互性元素",
picture: "./data/images/20120022010207.png",
content: "截图来源：webrebuild.org的微博"
}
},
{
layout: "picture",
content: {
title: "对操作的集中控制",
picture: "./data/images/20120022010232.png",
content: "截图来源：人人网底边栏"
}
},
{
layout: "picture",
content: {
title: "更复杂的交互逻辑",
content: "截图来源：傲游账户中心",
picture: "./data/images/20120022010440.png"
}
},
{
layout: "normal",
content: {
title: "从界面的角度看",
content: "围绕着内容发展出了各种各样的按钮和浮层
出现了控制面板和工具条
出现了复杂的交互
内容由静态转为动态，信息越来越多
WebApp的影子开始浮现"
},
style: {
content: {
-ppt-mode: "ul",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "picture",
content: {
title: "典型的例子：微博、SNS",
content: "截图来源：新浪微博、人人网",
picture: "./data/images/20120022012348.png"
}
},
{
layout: "subtitle",
content: {
title: "WebApp时代的到来"
}
},
{
layout: "normal",
content: {
title: "什么是WebApp？",
content: "两条线索：
能够取代传统应用程序
运用了大量的HTML5技术"
},
style: {
content: {
-ppt-mode: "ul"
}
}
},
{
layout: "picture",
content: {
title: "经典的案例",
content: "Google Apps、iCloud.com",
picture: "./data/images/20120022012406.png"
}
},
{
layout: "picture",
content: {
title: "更多的WebApp",
content: "http://web.appstorm.net/",
picture: "./data/images/20120022012426.png"
}
},
{
layout: "subtitle",
content: {
title: "界面布局正在悄然改变……"
}
},
{
layout: "picture",
content: {
title: "WebPage",
content: "内容 → 网页 → 浏览区域",
picture: "./data/images/20120022012458.png"
}
},
{
layout: "picture",
content: {
title: "WebApp",
content: "内容 → 可视区域",
picture: "./data/images/20120022012504.png"
}
},
{
layout: "double-subtitle",
content: {
title: "WebPage vs. WebApp",
subtitle: "WebPage",
subtitle2: "WebApp",
content: "网页好比一张长长的画卷，
浏览器犹如放大镜，
浏览网页，好比用户那着放大镜看画卷的局部",
content2: "浏览器如观光玻璃，
内容如流水一样，浩瀚、灵活，
用户在水族馆里观赏风景"
},
style: {
content: {
-ppt-mode: "ul",
-ppt-size: "auto-adjust"
},
content2: {
-ppt-mode: "ul",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "subtitle",
content: {
title: "回归质",
content: "直接根据可视空间设计界面
解放思想，解放生产力"
}
},
{
layout: "normal",
content: {
title: "换个角度考虑界面布局",
content: "以可视空间为本
↓
如何充分利用有边界的可视空间？
↓
填满可视空间先……
↓
开始各种探索、思考、纠结……
↓
这时，我们不妨从传统应用程序的界面中开拓视野，找寻灵感"
}
},
{
layout: "subtitle",
content: {
title: "找了几个别的领域的技术",
content: "WPF / Cocoa / HTMLayout / ( + CSS 3 )"
}
},
{
layout: "normal",
content: {
title: "介绍几种界面布局的思路",
content: "WPF (Windows Presentation Foundation)：
是微软推出的基于Windows Vista的用户界面框架，属于.net的一部分

Cocoa：
苹果公司为Mac OS X所创建的原生面向对象的编程环境

HTMLayout：
一个免费的开源界面库(核心未开源)，以DLL的方式运行，可以高效的解析和渲染HTML网页，并根据界面库的特征，做了很多有用的功能性扩展。傲游3浏览器的界面就是基于HTMLayout设计和开发的"
}
},
{
layout: "title",
content: {
title: "WPF"
}
},
{
layout: "picture",
content: {
title: "WPF - StackPanel",
content: "朝一个特定的方向(横向或纵向)，依次排列子元素",
picture: "./data/images/20120022012530.png"
}
},
{
layout: "picture",
content: {
title: "WPF - WrapPanel",
picture: "./data/images/20120022012553.png",
content: "在 StackPanel 的基础上，可以允许子元素自动折行"
}
},
{
layout: "picture",
content: {
title: "WPF - Grid",
content: "网格式布局，可设定一共几行几列，和每行的行高、每列的列宽",
picture: "./data/images/20120022012611.png"
}
},
{
layout: "normal",
content: {
title: "WPF - Grid的列宽举例",
content: "<Grid.ColumnDefinitions>
  <ColumnDefinition Width="Auto" />
  <ColumnDefinition Width="2*" />
  <ColumnDefinition Width="1*" />
  <ColumnDefinition Width="80" />
</Grid.ColumnDefinitions>"
},
style: {
content: {
-ppt-mode: "code",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "picture",
content: {
title: "WPF - Grid的列宽举例",
picture: "./data/images/20120022012619.png"
}
},
{
layout: "picture",
content: {
title: "WPF - DockPanel",
content: "把界面分成上、下、左、右、中间5个部分",
picture: "./data/images/20120022012635.png"
}
},
{
layout: "subtitle",
content: {
title: "WPF Demo 演示",
content: "做一个简单的WPF浏览器界面"
}
},
{
layout: "picture",
content: {
title: "WPF Browser",
content: "软件名称：Kaxaml",
picture: "./data/images/20120022012652.png"
}
},
{
layout: "title",
content: {
title: "Appkit (Cocoa)"
}
},
{
layout: "picture",
content: {
title: "坐标、尺寸及其自动调整的方式",
content: "类似绝对定位 (软件：XCode)",
picture: "./data/images/20120022012721.png"
}
},
{
layout: "normal",
content: {
title: "一些特定界面元素",
content: "Toolbar

一种特定的布局方式，只能出现在窗口的最上部
子元素从左到右排布，可以放置按钮、输入框，也可以放置“可无限撑大”的空白区域，将其右侧的子元素挤到工具栏的最后边


Menu

菜单栏，永远在屏幕的最上面"
}
},
{
layout: "picture",
content: {
title: "Cocoa - Toolbar",
picture: "./data/images/20120022012739.png"
}
},
{
layout: "picture",
content: {
title: "更多子元素的内部布局",
content: "更复杂的界面布局都需要通过代码来实现",
picture: "./data/images/20120022012749.png"
}
},
{
layout: "subtitle",
content: {
title: "Cocoa Demo 演示",
content: "现场做一个简单的Mac浏览器界面"
}
},
{
layout: "title",
content: {
title: "HTMLayout"
}
},
{
layout: "normal",
content: {
title: "height: 100%",
content: "可以让元素撑满整个窗口的高度

传递很明确的信息
——应用程序的界面是有固定高度的"
}
},
{
layout: "normal",
content: {
title: "新长度单位：%%",
content: "在剩余的总长度中选取相应比例的长度
相当于WPF中的*单位

<tr>
    <td style="width: 50px; padding: 10px;">TD 1</td>
    <td style="width: 20%%;">TD 2</td>
    <td style="width: 80%%;">TD 3</td>
    <td style="width: 20%;">TD 4</td>
</tr>

http://www.terrainformatica.com/htmlayout/fspu.whtm"
},
style: {
content: {
-ppt-mode: "code",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "normal",
content: {
title: "新布局方式：flow",
content: "flow: vertical | horizontal | vertical-flow | horizontal-flow | grid

前四个相当于WPF中的StackPanel和WrapPanel，分横向纵向两个方向
第五个相当于WPF中的Gird

http://www.terrainformatica.com/htmlayout/flow.whtm"
},
style: {
content: {
-ppt-mode: "code",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "normal",
content: {
title: "其它",
content: "calc(...) 长度计算函数
http://www.terrainformatica.com/htmlayout/csss!-calc-function.whtm

Flex 布局 / min-intrinsic / max-intrinsic
http://www.terrainformatica.com/w3/flex-layout/flex-layout.htm

更多：
http://www.terrainformatica.com/htmlayout/"
},
style: {
content: {
-ppt-mode: "text",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "subtitle",
content: {
title: "HTMLayout 实践",
content: "傲游3浏览器皮肤系统
大量的素材、文档、源代码"
}
},
{
layout: "picture",
content: {
title: "首页 → 傲游实验室 → 皮肤系统",
content: "http://www.maxthon.cn/lab/skin/",
picture: "./data/images/20120022012820.png"
}
},
{
layout: "title",
content: {
title: "简单回顾一下",
content: "从 NativeApp 得到的启发"
}
},
{
layout: "subtitle",
content: {
title: "流式布局其实很棒",
content: "遭遇了流式布局缺失的界面库，才懂得流式布局的强大！
流式布局想垒积木一样灵活，非常适合功能性界面"
}
},
{
layout: "subtitle",
content: {
title: "DockPanel 式布局很讨喜",
content: "较为复杂的应用程序几乎都可以从DockPanel作为界面布局的起点"
}
},
{
layout: "subtitle",
content: {
title: "绝对定位应用最为广泛",
content: "在较为简单的界面中，绝对定位是最直观、成本最低的方式
可以很好的配合所见即得编辑器进行布局"
}
},
{
layout: "subtitle",
content: {
title: "* 绝对定位可能面临的问题",
content: "DPI的改变
多语言环境等"
}
},
{
layout: "normal",
content: {
title: "建议",
content: "给每个元素保留足够的余地，以应付内容变化
从排版上尽量回避由于文字长短、多媒体元素尺寸大小造成的布局混乱

推荐：
《Flexible Web Design》
---- Zoe Mickley Gillenwater (加)

(灵活Web设计)"
}
},
{
layout: "subtitle",
content: {
title: "几个WebApp的“好朋友”"
}
},
{
layout: "normal",
content: {
title: "box-sizing",
content: "border-box
padding-box
content-box

可以选择根据边框、内边距或实际内容计算盒模型
适用于边框大小、边距大小会动态变化的元素"
},
style: {
content: {
-ppt-mode: "code"
}
}
},
{
layout: "normal",
content: {
title: "background-origin (-clip)",
content: "border-box
padding-box
content-box

可以选择根据边框、内边距或实际内容计算背景图片的坐标起点
和覆盖区域
同样适用于边框大小、边距大小会动态变化的元素"
},
style: {
content: {
-ppt-mode: "code",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "normal",
content: {
content: "position: absolute;
left: ...;
right: ...;
top: ...;
bottom: ...;
z-index: n;

快速定位一个元素在窗口中的位置和大小
适用于尺寸需要根据窗口变化而变化的元素",
title: "绝对定位"
},
style: {
content: {
-ppt-mode: "code"
}
}
},
{
layout: "normal",
content: {
content: "类似 grid 的布局，可以让若干子元素，通过具体长度或长度比例，撑满整行/整列容器空间
但它是单行或单列的，并没有网格形式

适用于工具栏等元素，以及界面上大块的布局划分",
title: "display: box / flex-*"
}
},
{
layout: "normal",
content: {
content: "scale(n)

适用于工具栏等元素，以及界面上大块的布局划分
适用于尺寸需要等比例变化的展示性元素",
title: "transform (-origin)"
},
style: {
content: {
-ppt-mode: "code"
}
}
},
{
layout: "subtitle",
content: {
title: "WebApp Demo 演示",
content: "做一个简单的WebApp浏览器"
}
},
{
layout: "normal",
content: {
title: "* grid",
content: "网格化布局
从设计的角度看，非常实用"
}
},
{
layout: "picture",
content: {
title: "例子 (IE 10 supported)",
content: "http://ie.microsoft.com/testdrive/Graphics/hands-on-css3/",
picture: "./data/images/20120022012856.png"
}
},
{
layout: "normal",
content: {
content: "通过不同的界面尺寸，应用不同的CSS样式

@media screen and (min-width: 400px) and (max-width: 700px) { … }
@media screen and (device-width: 800px) { … }",
title: "* media queries"
},
style: {
content: {
-ppt-mode: "code"
}
}
},
{
layout: "picture",
content: {
title: "例子：http://css-tricks.com/",
picture: "./data/images/20120022012923.png"
}
},
{
layout: "normal",
content: {
content: "两者均属于对于界面布局细节的雕琢

分列显示大块内容
打破“矩形盒子”的限制，在高度自定义的一个或多个区域内填充内容",
title: "* multi-column / regions"
}
},
{
layout: "picture",
content: {
title: "Regions图解",
content: "来源：http://msdn.microsoft.com/en-us/ie/hh272902.aspx",
picture: "./data/images/20120022013001.png"
}
},
{
layout: "normal",
content: {
content: "w3c官网 - CSS
win8 html5 platform 展示页
HTML5 Rocks - Tutorials
前端观察",
title: "参考资料"
},
style: {
content: {
-ppt-mode: "ul",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "title",
content: {
title: "其实⋯⋯",
content: "这张幻灯片也是一个WebApp！"
}
},
{
layout: "double-subtitle",
content: {
content: "太过笨重
很多冗余的功能和设计
只有一张空白幻灯片的pptx文件也有几百行代码
大部分的Powerpoint功能我们根本用不到",
content2: "带有交互性的演示
小巧轻便、易于分享和传播
跨平台
可扩展
可融入其它的软件和系统",
subtitle2: "我们的目的",
subtitle: "传统的ppt",
title: "HTML5幻灯片系统"
},
style: {
content: {
-ppt-mode: "ul"
},
content2: {
-ppt-mode: "ul",
-ppt-size: "auto-adjust"
}
}
},
{
layout: "subtitle",
content: {
title: "希望可以重新定义幻灯演示",
content: "欢迎加入我们的行列！"
}
},
{
layout: "subtitle",
content: {
title: "THE END",
content: "谢谢大家"
}
}
]
}
