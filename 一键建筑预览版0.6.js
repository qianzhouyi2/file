ModPE.setItem(500,"fireworks",0,"well");
ModPE.setItem(501,"fireworks",0,"house 1");
ModPE.setItem(502,"fireworks",0,"house 2");
ModPE.setItem(503,"fireworks",0,"house 3");
ModPE.setItem(504,"fireworks",0,"smithy");
ModPE.setItem(505,"fireworks",0,"house 4");
ModPE.setItem(506,"fireworks",0,"creeper head");
Player.addItemCreativeInv(500, 1);
Player.addItemCreativeInv(501, 1);
Player.addItemCreativeInv(502, 1);
Player.addItemCreativeInv(503, 1);
Player.addItemCreativeInv(504, 1);
Player.addItemCreativeInv(505, 1);
Player.addItemCreativeInv(506, 1);


var btnWindow=null;
var mainMenu=null;
var dj=false;
function dip2px(ctx,dips){
 return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density);
};
function newLevel(){
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
   btnWindow = new android.widget.PopupWindow();
   var layout=new android.widget.LinearLayout(ctx); 
   var button = new android.widget.Button(ctx);
   button.setText("一键建筑");
   button.setOnClickListener(new android.view.View.OnClickListener({
   onClick: function(viewarg){
   openMenu();
}}));
    layout.addView(button);
    btnWindow.setContentView(layout);
    btnWindow.setWidth(dip2px(ctx, 50));
    btnWindow.setHeight(dip2px(ctx, 120));
    btnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
   btnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP,999,60)
;
		}catch(err){
			print("对不起,系统无法显示按钮")
;
		}
	}}))
}
;
function openMenu(){
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
  try{
   var menu=new android.widget.PopupWindow();
   menu.setFocusable(true);
   mainMenu=menu;
   var layout=new android.widget.LinearLayout(ctx);
   layout.setOrientation(1);

   var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT);
   textParams.setMargins(dip2px(ctx, 5), 0,0, 0)
   var stitle=new android.widget.TextView(ctx)
   stitle.setTextSize(20);
   stitle.setText("作者：qzy\n百度贴吧@qianzhouyi2\nMCG工作室出品");
   stitle.setLayoutParams(textParams);
   layout.addView(stitle);



var button=new android.widget.Button(ctx)
 button.setText("村庄")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    village() 
 }}))
 layout.addView(button)
 
 var button=new android.widget.Button(ctx)
 button.setText("建筑")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    building() 
 }}))
 layout.addView(button)

 var button=new android.widget.Button(ctx)
 button.setText("工具")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
    tool() 
 }}))
 layout.addView(button)
 
  var button=new android.widget.Button(ctx)
 button.setText("帮助")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
   print("本js由中国百度贴吧qianzhouyi2制作")
	print("未经允许禁止转载！")
   print("详情请见发布帖！")
   print("MCG工作室出品。")
   print("目前版本：预览版0.6")
 }}))
 layout.addView(button)


var mlayout=makeMenu(ctx,menu,layout);
   menu.setContentView(mlayout);
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/4);
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight());
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,999,60);
 }catch(err){
    print("�Բ���,���ϵͳ�д���,���ٴγ���.");
 }
};
function makeMenu(ctx,menu,layout){
  var mlayout=new android.widget.RelativeLayout(ctx);
 var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT);
var scrollview=new android.widget.ScrollView(ctx);
 var pad = dip2px(ctx,5);
 scrollview.setPadding(pad,pad,pad,pad);
 scrollview.setLayoutParams(svParams);
 scrollview.addView(layout);
 mlayout.addView(scrollview);
 return mlayout;
};
function leaveGame(){
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
 ctx.runOnUiThread(new java.lang.Runnable({run:function(){
  if(btnWindow!=null){
   btnWindow.dismiss();
   btnWindow=null;
  }
  if(mainMenu!=null){
   mainMenu.dismiss();
   mainMenu=null;
  }
 }}))
};

function village(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,35), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("村庄")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)  



var button=new android.widget.Button(ctx);
 button.setText("水井");
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(500,1);
}}));
  layout.addView(button);

var button=new android.widget.Button(ctx);
 button.setText("房子1");
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(501,1);
}}));
  layout.addView(button);

var button=new android.widget.Button(ctx);
 button.setText("房子2");
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(502,1);
}}));
  layout.addView(button);

var button=new android.widget.Button(ctx);
 button.setText("房子3");
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(503,1);
}}));
  layout.addView(button);
  
  var button=new android.widget.Button(ctx);
 button.setText("房子4");
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(505,1);
}}));
  layout.addView(button);


   var button=new android.widget.Button(ctx);
 button.setText("铁匠铺");
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(504,1);
}}));
  layout.addView(button);
 
 
var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print("错误: "+err+".")
}
}


function building(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,35), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("建筑")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)  

var button=new android.widget.Button(ctx);
 button.setText("苦力怕头");
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(506,1);
}}));
  layout.addView(button);


var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print("错误: "+err+".")
}
}

function tool(){
var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
var layout=new android.widget.LinearLayout(ctx) 
try{
var menu=new android.widget.PopupWindow(layout, dip2px(ctx,35), dip2px(ctx, 30)); 
menu.setFocusable(true)
var layout=new android.widget.LinearLayout(ctx)
layout.setOrientation(1)

var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)

var s=new android.widget.TextView(ctx)
s.setTextSize(16)
s.setText("工具")
s.setTextColor(android.graphics.Color.rgb(255,255,255));
s.setLayoutParams(textParams)
layout.addView(s)  



var button=new android.widget.Button(ctx)
 button.setText("创造模式")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
Level.setGameMode(1)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("生存模式")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
Level.setGameMode(0)
 }}))
 layout.addView(button)




var button=new android.widget.Button(ctx)
 button.setText("梯子")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(65,64);
 }}))
 layout.addView(button)


var button=new android.widget.Button(ctx)
 button.setText("门")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(324,1);
 }}))
 layout.addView(button)




var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,ctx.getWindowManager().getDefaultDisplay().getWidth()*0.25,0)
}catch(err){
    print("错误: "+err+".")
}
}


function modTick(){
ModPE.showTipMessage("\n\n\n\n             V1.0.0 alpha build 10");
}

function useItem(x,y,z,i,blockid,side,itemdamage,blockdamage){
if(i==500){
setTile(x,y,z,4);//一层
setTile(x,y,z+1,4);
setTile(x,y,z+2,4);
setTile(x,y,z-1,4);
setTile(x-1,y,z-1,4);
setTile(x-2,y,z-1,4);
setTile(x-1,y,z+1,4);
setTile(x-2,y,z+1,4);
setTile(x-3,y,z,4);
setTile(x-3,y,z+1,4);
setTile(x-3,y,z+2,4);
setTile(x-3,y,z-1,4);
setTile(x-1,y,z,8);
setTile(x-2,y,z,8);
setTile(x-1,y,z+1,8);
setTile(x-2,y,z+1,8);


setTile(x,y-1,z,4);//二层
setTile(x,y-1,z+1,4);
setTile(x,y-1,z+2,4);
setTile(x,y-1,z-1,4);
setTile(x-1,y-1,z-1,4);
setTile(x-2,y-1,z-1,4);
setTile(x-1,y-1,z+1,4);
setTile(x-2,y-1,z+1,4);
setTile(x-3,y-1,z,4);
setTile(x-3,y-1,z+1,4);
setTile(x-3,y-1,z+2,4);
setTile(x-3,y-1,z-1,4);
setTile(x-1,y-1,z,8);
setTile(x-2,y-1,z,8);
setTile(x-1,y-1,z+1,8);
setTile(x-2,y-1,z+1,8);



setTile(x,y-2,z,4);//三层
setTile(x,y-2,z+1,4);
setTile(x,y-2,z+2,4);
setTile(x,y-2,z-1,4);
setTile(x-1,y-2,z-1,4);
setTile(x-2,y-2,z-1,4);
setTile(x-1,y-2,z+1,4);
setTile(x-2,y-2,z+1,4);
setTile(x-3,y-2,z,4);
setTile(x-3,y-2,z+1,4);
setTile(x-3,y-2,z+2,4);
setTile(x-3,y-2,z-1,4);
setTile(x-1,y-2,z,8);
setTile(x-2,y-2,z,8);
setTile(x-1,y-2,z+1,8);
setTile(x-2,y-2,z+1,8);


setTile(x,y-3,z,4);//四层
setTile(x,y-3,z+1,4);
setTile(x,y-3,z+2,4);
setTile(x,y-3,z-1,4);
setTile(x-1,y-3,z-1,4);
setTile(x-2,y-3,z-1,4);
setTile(x-1,y-3,z+1,4);
setTile(x-2,y-3,z+1,4);
setTile(x-3,y-3,z,4);
setTile(x-3,y-3,z+1,4);
setTile(x-3,y-3,z+2,4);
setTile(x-3,y-3,z-1,4);
setTile(x-1,y-3,z,8);
setTile(x-2,y-3,z,8);
setTile(x-1,y-3,z+1,8);
setTile(x-2,y-3,z+1,8);


setTile(x,y-4,z,4);//五层
setTile(x,y-4,z+1,4);
setTile(x,y-4,z+2,4);
setTile(x,y-4,z-1,4);
setTile(x-1,y-4,z-1,4);
setTile(x-2,y-4,z-1,4);
setTile(x-1,y-4,z+1,4);
setTile(x-2,y-4,z+1,4);
setTile(x-3,y-4,z,4);
setTile(x-3,y-4,z+1,4);
setTile(x-3,y-4,z+2,4);
setTile(x-3,y-4,z-1,4);
setTile(x-1,y-4,z,8);
setTile(x-2,y-4,z,8);
setTile(x-1,y-4,z+1,8);
setTile(x-2,y-4,z+1,8);


setTile(x,y-5,z,4);//六层
setTile(x,y-5,z+1,4);
setTile(x,y-5,z+2,4);
setTile(x,y-5,z-1,4);
setTile(x-1,y-5,z-1,4);
setTile(x-2,y-5,z-1,4);
setTile(x-1,y-5,z+1,4);
setTile(x-2,y-5,z+1,4);
setTile(x-3,y-5,z,4);
setTile(x-3,y-5,z+1,4);
setTile(x-3,y-5,z+2,4);
setTile(x-3,y-5,z-1,4);
setTile(x-1,y-5,z,8);
setTile(x-2,y-5,z,8);
setTile(x-1,y-5,z+1,8);
setTile(x-2,y-5,z+1,8);


setTile(x,y-6,z,4);//七层
setTile(x,y-6,z+1,4);
setTile(x,y-6,z+2,4);
setTile(x,y-6,z-1,4);
setTile(x-1,y-6,z-1,4);
setTile(x-2,y-6,z-1,4);
setTile(x-1,y-6,z+1,4);
setTile(x-2,y-6,z+1,4);
setTile(x-3,y-6,z,4);
setTile(x-3,y-6,z+1,4);
setTile(x-3,y-6,z+2,4);
setTile(x-3,y-6,z-1,4);
setTile(x-1,y-6,z,8);
setTile(x-2,y-6,z,8);
setTile(x-1,y-6,z+1,8);
setTile(x-2,y-6,z+1,8);


setTile(x,y-7,z,4);//八层
setTile(x,y-7,z+1,4);
setTile(x,y-7,z+2,4);
setTile(x,y-7,z-1,4);
setTile(x-1,y-7,z-1,4);
setTile(x-2,y-7,z-1,4);
setTile(x-1,y-7,z+1,4);
setTile(x-2,y-7,z+1,4);
setTile(x-3,y-7,z,4);
setTile(x-3,y-7,z+1,4);
setTile(x-3,y-7,z+2,4);
setTile(x-3,y-7,z-1,4);
setTile(x-1,y-7,z,8);
setTile(x-2,y-7,z,8);
setTile(x-1,y-7,z+1,8);
setTile(x-2,y-7,z+1,8);


setTile(x,y-8,z,4);//九层
setTile(x,y-8,z+1,4);
setTile(x,y-8,z+2,4);
setTile(x,y-8,z-1,4);
setTile(x-1,y-8,z-1,4);
setTile(x-2,y-8,z-1,4);
setTile(x-1,y-8,z+1,4);
setTile(x-2,y-8,z+1,4);
setTile(x-3,y-8,z,4);
setTile(x-3,y-8,z+1,4);
setTile(x-3,y-5,z+2,4);
setTile(x-3,y-8,z-1,4);
setTile(x-1,y-8,z,8);
setTile(x-2,y-8,z,8);
setTile(x-1,y-8,z+1,8);
setTile(x-2,y-8,z+1,8);


setTile(x,y-9,z,4);//十层
setTile(x,y-9,z+1,4);
setTile(x,y-9,z+2,4);
setTile(x,y-9,z-1,4);
setTile(x-1,y-9,z-1,4);
setTile(x-2,y-9,z-1,4);
setTile(x-1,y-9,z+1,4);
setTile(x-2,y-9,z+1,4);
setTile(x-3,y-9,z,4);
setTile(x-3,y-9,z+1,4);
setTile(x-3,y-9,z+2,4);
setTile(x-3,y-9,z-1,4);
setTile(x-1,y-9,z,8);
setTile(x-2,y-9,z,8);
setTile(x-1,y-9,z+1,8);
setTile(x-2,y-9,z+1,8);


setTile(x-1,y-10,z,4);//底
setTile(x-2,y-10,z,4);
setTile(x-1,y-10,z+1,4);
setTile(x-2,y-10,z+1,4);


setTile(x-1,y-9,z+2,4);//边
setTile(x-2,y-9,z+2,4);
setTile(x-1,y-8,z+2,4);
setTile(x-2,y-8,z+2,4);
setTile(x-1,y-7,z+2,4);
setTile(x-2,y-7,z+2,4);
setTile(x-1,y-6,z+2,4);
setTile(x-2,y-6,z+2,4);
setTile(x-1,y-5,z+2,4);
setTile(x-2,y-5,z+2,4);
setTile(x-1,y-4,z+2,4);
setTile(x-2,y-4,z+2,4);
setTile(x-1,y-3,z+2,4);
setTile(x-2,y-3,z+2,4);
setTile(x-1,y-2,z+2,4);
setTile(x-2,y-2,z+2,4);
setTile(x-1,y-1,z+2,4);
setTile(x-2,y-1,z+2,4);
setTile(x-1,y,z+2,4);
setTile(x-2,y,z+2,4);


setTile(x,y+1,z,4);//上一层
setTile(x,y+1,z+1,4);
setTile(x,y+1,z+2,4);
setTile(x,y+1,z-1,4);
setTile(x-1,y+1,z-1,4);
setTile(x-2,y+1,z-1,4);
setTile(x-2,y+1,z+2,4);
setTile(x-1,y+1,z+2,4);
setTile(x-3,y+1,z,4);
setTile(x-3,y+1,z+1,4);
setTile(x-3,y+1,z+2,4);
setTile(x-3,y+1,z-1,4);


setTile(x,y+2,z-1,85);//上二层
setTile(x,y+2,z+2,85);
setTile(x-3,y+2,z-1,85);
setTile(x-3,y+2,z+2,85);


setTile(x,y+3,z-1,85);//上三层
setTile(x,y+3,z+2,85);
setTile(x-3,y+3,z-1,85);
setTile(x-3,y+3,z+2,85);



setTile(x,y+4,z,4);//上四层
setTile(x,y+4,z+1,4);
setTile(x,y+4,z+2,4);
setTile(x,y+4,z-1,4);
setTile(x-1,y+4,z-1,4);
setTile(x-2,y+4,z-1,4);
setTile(x-2,y+4,z+2,4);
setTile(x-1,y+4,z+2,4);
setTile(x-3,y+4,z,4);
setTile(x-3,y+4,z+1,4);
setTile(x-3,y+4,z+2,4);
setTile(x-3,y+4,z-1,4);
setTile(x-1,y+4,z,4);
setTile(x-2,y+4,z,4);
setTile(x-1,y+4,z+1,4);
setTile(x-2,y+4,z+1,4);
} 
if(i==501){
setTile(x,y+1,z,4);//底
setTile(x+1,y+1,z,4);
setTile(x+2,y+1,z,4);
setTile(x-1,y+1,z,4);
setTile(x-2,y+1,z,4);
setTile(x,y+1,z-1,4);
setTile(x+1,y+1,z-1,4);
setTile(x+2,y+1,z-1,4);
setTile(x-1,y+1,z-1,4);
setTile(x-2,y+1,z-1,4);
setTile(x,y+1,z-2,4);
setTile(x+1,y+1,z-2,4);
setTile(x+2,y+1,z-2,4);
setTile(x-1,y+1,z-2,4);
setTile(x-2,y+1,z-2,4);
setTile(x,y+1,z+1,4);
setTile(x+1,y+1,z+1,4);
setTile(x+2,y+1,z+1,4);
setTile(x-1,y+1,z+1,4);
setTile(x-2,y+1,z+1,4);
setTile(x,y+1,z+2,4);
setTile(x+1,y+1,z+2,4);
setTile(x+2,y+1,z+2,4);
setTile(x-1,y+1,z+2,4);
setTile(x-2,y+1,z+2,4);


setTile(x-2,y+2,z+1,5);//二层
setTile(x-2,y+2,z-1,5);
setTile(x-1,y+2,z+2,5);
setTile(x-1,y+2,z-2,5);
setTile(x,y+2,z+2,5);
setTile(x,y+2,z-2,5);
setTile(x+1,y+2,z+2,5);
setTile(x+1,y+2,z-2,5);
setTile(x+2,y+2,z+1,5);
setTile(x+2,y+2,z,5);
setTile(x+2,y+2,z-1,5);


setTile(x-1,y+3,z+2,5);//三层
setTile(x-1,y+3,z-2,5);
setTile(x-2,y+3,z+1,5);
setTile(x-2,y+3,z-1,5);
setTile(x+1,y+3,z+2,5);
setTile(x+1,y+3,z-2,5);
setTile(x+2,y+3,z-1,5);
setTile(x+2,y+3,z+1,5);
setTile(x,y+3,z+2,102);
setTile(x,y+3,z-2,102);
setTile(x+2,y+3,z,102);



setTile(x+2,y+4,z,5);//四层
setTile(x+2,y+4,z-1,5);
setTile(x+2,y+4,z+1,5);
setTile(x+1,y+4,z-2,5);
setTile(x+1,y+4,z+2,5);
setTile(x,y+4,z-2,5);
setTile(x,y+4,z+2,5);
setTile(x-1,y+4,z-2,5);
setTile(x-1,y+4,z+2,5);
setTile(x-2,y+4,z-1,5);
setTile(x-2,y+4,z+1,5);
setTile(x-2,y+4,z,5);


setTile(x+2,y+3,z-2,4);//补角
setTile(x+2,y+3,z+2,4);
setTile(x-2,y+3,z-2,4);
setTile(x-2,y+3,z+2,4);
setTile(x+2,y+2,z-2,4);
setTile(x+2,y+2,z+2,4);
setTile(x-2,y+2,z-2,4);
setTile(x-2,y+2,z+2,4);
setTile(x+2,y+4,z-2,4);
setTile(x+2,y+4,z+2,4);
setTile(x-2,y+4,z-2,4);
setTile(x-2,y+4,z+2,4);


setTile(x+2,y+5,z-2,17);//顶
setTile(x+2,y+5,z-1,17);
setTile(x+2,y+5,z+2,17);
setTile(x+2,y+5,z,17);
setTile(x+2,y+5,z+1,17);
setTile(x+1,y+5,z-2,17);
setTile(x,y+5,z-2,17);
setTile(x-1,y+5,z-2,17);
setTile(x-2,y+5,z-2,17);
setTile(x-2,y+5,z+2,17);
setTile(x-2,y+5,z+1,17);
setTile(x-2,y+5,z,17);
setTile(x-2,y+5,z-1,17);
setTile(x-1,y+5,z+2,17);
setTile(x+1,y+5,z+2,17);
setTile(x,y+5,z+2,17);
setTile(x-1,y+5,z,5);
setTile(x,y+5,z,5);
setTile(x+1,y+5,z,5);
setTile(x-1,y+5,z+1,5);
setTile(x,y+5,z+1,5);
setTile(x+1,y+5,z+1,5);
setTile(x-1,y+5,z-1,5);
setTile(x,y+5,z-1,5);
setTile(x+1,y+5,z-1,5);

}
if(i==502){

setTile(x,y+1,z,4);//底
setTile(x+1,y+1,z,4);
setTile(x+2,y+1,z,4);
setTile(x-1,y+1,z,4);
setTile(x-2,y+1,z,4);
setTile(x,y+1,z-1,4);
setTile(x+1,y+1,z-1,4);
setTile(x+2,y+1,z-1,4);
setTile(x-1,y+1,z-1,4);
setTile(x-2,y+1,z-1,4);
setTile(x,y+1,z-2,4);
setTile(x+1,y+1,z-2,4);
setTile(x+2,y+1,z-2,4);
setTile(x-1,y+1,z-2,4);
setTile(x-2,y+1,z-2,4);
setTile(x,y+1,z+1,4);
setTile(x+1,y+1,z+1,4);
setTile(x+2,y+1,z+1,4);
setTile(x-1,y+1,z+1,4);
setTile(x-2,y+1,z+1,4);
setTile(x,y+1,z+2,4);
setTile(x+1,y+1,z+2,4);
setTile(x+2,y+1,z+2,4);
setTile(x-1,y+1,z+2,4);
setTile(x-2,y+1,z+2,4);


setTile(x-2,y+2,z+1,5);//二层
setTile(x-2,y+2,z-1,5);
setTile(x-1,y+2,z+2,5);
setTile(x-1,y+2,z-2,5);
setTile(x,y+2,z+2,5);
setTile(x,y+2,z-2,5);
setTile(x+1,y+2,z+2,5);
setTile(x+1,y+2,z-2,5);
setTile(x+2,y+2,z+1,5);
setTile(x+2,y+2,z,5);
setTile(x+2,y+2,z-1,5);


setTile(x-1,y+3,z+2,5);//三层
setTile(x-1,y+3,z-2,5);
setTile(x-2,y+3,z+1,5);
setTile(x-2,y+3,z-1,5);
setTile(x+1,y+3,z+2,5);
setTile(x+1,y+3,z-2,5);
setTile(x+2,y+3,z-1,5);
setTile(x+2,y+3,z+1,5);
setTile(x,y+3,z+2,102);
setTile(x,y+3,z-2,102);
setTile(x+2,y+3,z,102);



setTile(x+2,y+4,z,5);//四层
setTile(x+2,y+4,z-1,5);
setTile(x+2,y+4,z+1,5);
setTile(x+1,y+4,z-2,5);
setTile(x+1,y+4,z+2,5);
setTile(x,y+4,z-2,5);
setTile(x,y+4,z+2,5);
setTile(x-1,y+4,z-2,5);
setTile(x-1,y+4,z+2,5);
setTile(x-2,y+4,z-1,5);
setTile(x-2,y+4,z+1,5);
setTile(x-2,y+4,z,5);


setTile(x+2,y+3,z-2,4);//补角
setTile(x+2,y+3,z+2,4);
setTile(x-2,y+3,z-2,4);
setTile(x-2,y+3,z+2,4);
setTile(x+2,y+2,z-2,4);
setTile(x+2,y+2,z+2,4);
setTile(x-2,y+2,z-2,4);
setTile(x-2,y+2,z+2,4);
setTile(x+2,y+4,z-2,4);
setTile(x+2,y+4,z+2,4);
setTile(x-2,y+4,z-2,4);
setTile(x-2,y+4,z+2,4);


setTile(x+2,y+5,z-2,17);//五层
setTile(x+2,y+5,z-1,17);
setTile(x+2,y+5,z+2,17);
setTile(x+2,y+5,z,17);
setTile(x+2,y+5,z+1,17);
setTile(x+1,y+5,z-2,17);
setTile(x,y+5,z-2,17);
setTile(x-1,y+5,z-2,17);
setTile(x-2,y+5,z-2,17);
setTile(x-2,y+5,z+2,17);
setTile(x-2,y+5,z+1,17);
setTile(x-2,y+5,z,17);
setTile(x-2,y+5,z-1,17);
setTile(x-1,y+5,z+2,17);
setTile(x+1,y+5,z+2,17);
setTile(x,y+5,z+2,17);
setTile(x-1,y+5,z,5);
setTile(x,y+5,z,5);
setTile(x+1,y+5,z,5);
setTile(x-1,y+5,z+1,5);
setTile(x,y+5,z+1,5);
setTile(x-1,y+5,z-1,5);
setTile(x,y+5,z-1,5);
setTile(x+1,y+5,z-1,5);



setTile(x+2,y+5,z-2,17);//顶
setTile(x+2,y+5,z-1,17);
setTile(x+2,y+5,z+2,17);
setTile(x+2,y+5,z,17);
setTile(x+2,y+5,z+1,17);
setTile(x+1,y+5,z-2,17);
setTile(x,y+5,z-2,17);
setTile(x-1,y+5,z-2,17);
setTile(x-2,y+5,z-2,17);
setTile(x-2,y+5,z+2,17);
setTile(x-2,y+5,z+1,17);
setTile(x-2,y+5,z,17);
setTile(x-2,y+5,z-1,17);
setTile(x-1,y+5,z+2,17);
setTile(x+1,y+5,z+2,17);
setTile(x,y+5,z+2,17);

setTile(x+2,y+6,z-2,85);//顶
setTile(x+2,y+6,z-1,85);
setTile(x+2,y+6,z+2,85);
setTile(x+2,y+6,z,85);
setTile(x+2,y+6,z+1,85);
setTile(x+1,y+6,z-2,85);
setTile(x,y+6,z-2,85);
setTile(x-1,y+6,z-2,85);
setTile(x-2,y+6,z-2,85);
setTile(x-2,y+6,z+2,85);
setTile(x-2,y+6,z+1,85);
setTile(x-2,y+6,z,85);
setTile(x-2,y+6,z-1,85);
setTile(x-1,y+6,z+2,85);
setTile(x+1,y+6,z+2,85);
setTile(x,y+6,z+2,85);
}
if(i==503){
setTile(x+1,y+1,z-4,4);//底
setTile(x,y+1,z-4,4);
setTile(x-1,y+1,z-4,4);
setTile(x+2,y+1,z-3,4);
setTile(x+2,y+1,z-2,4);
setTile(x+2,y+1,z-1,4);
setTile(x+2,y+1,z,4);
setTile(x-2,y+1,z-3,4);
setTile(x-2,y+1,z-2,4);
setTile(x-2,y+1,z-1,4);
setTile(x-2,y+1,z,4);
setTile(x+1,y+1,z+1,4);
setTile(x,y+1,z+1,4);
setTile(x-1,y+1,z+1,4);
setTile(x+1,y+1,z+2,4);
setTile(x,y+1,z+2,4);
setTile(x-1,y+1,z+2,4);
setTile(x+1,y+1,z+3,4);
setTile(x,y+1,z+3,4);
setTile(x-1,y+1,z+3,4);
setTile(x+1,y+1,z+4,4);
setTile(x,y+1,z+4,4);
setTile(x-1,y+1,z+4,4);
setTile(x-1,y+1,z,4);
setTile(x-1,y+1,z-1,4);
setTile(x-1,y+1,z-2,4);
setTile(x-1,y+1,z-3,4);
setTile(x,y+1,z,4);
setTile(x,y+1,z-1,4);
setTile(x,y+1,z-2,4);
setTile(x,y+1,z-3,4);
setTile(x+1,y+1,z,4);
setTile(x+1,y+1,z-1,4);
setTile(x+1,y+1,z-2,4);
setTile(x+1,y+1,z-3,4);


setTile(x+1,y+2,z-4,4);//一层
setTile(x,y+2,z-4,4);
setTile(x-1,y+2,z-4,4);
setTile(x+2,y+2,z-3,4);
setTile(x+2,y+2,z-2,4);
setTile(x+2,y+2,z-1,4);
setTile(x+2,y+2,z,4);
setTile(x+2,y+2,z+1,4);
setTile(x+2,y+2,z+2,4);
setTile(x+2,y+2,z+3,4);
setTile(x-2,y+2,z-3,4);
setTile(x-2,y+2,z-2,4);
setTile(x-2,y+2,z-1,4);
setTile(x-2,y+2,z,4);
setTile(x-2,y+2,z+1,4);
setTile(x-2,y+2,z+2,4);
setTile(x-2,y+2,z+3,4);



setTile(x+1,y+3,z-4,4);//二层
setTile(x-1,y+3,z-4,4);
setTile(x,y+3,z-4,4);
setTile(x+2,y+3,z-3,4);
setTile(x+2,y+3,z-2,4);
setTile(x+2,y+3,z-1,4);
setTile(x+2,y+3,z,4);
setTile(x+2,y+3,z+1,4);
setTile(x+2,y+3,z+2,102);
setTile(x+2,y+3,z+3,4);
setTile(x-2,y+3,z-3,4);
setTile(x-2,y+3,z-2,4);
setTile(x-2,y+3,z-1,4);
setTile(x-2,y+3,z,4);
setTile(x-2,y+3,z+1,4);
setTile(x-2,y+3,z+2,102);
setTile(x-2,y+3,z+3,4);

setTile(x+1,y+3,z-+4,4);//补
setTile(x-1,y+3,z+4,4);
setTile(x+1,y+2,z+4,4);
setTile(x-1,y+2,z+4,4);
setTile(x-1,y+4,z+4,4);
setTile(x+1,y+4,z+4,4);
setTile(x,y+4,z+4,4);
setTile(x+1,y+3,z+4,4);



setTile(x+1,y+4,z-4,4);//三层
setTile(x,y+4,z-4,4);
setTile(x-1,y+4,z-4,4);
setTile(x+1,y+4,z-4,4);
setTile(x,y+4,z-4,102);
setTile(x-1,y+4,z-4,4);
setTile(x+2,y+4,z-3,4);
setTile(x+2,y+4,z-2,102);
setTile(x+2,y+4,z-1,4);
setTile(x+2,y+4,z,4);
setTile(x+2,y+4,z+1,4);
setTile(x+2,y+4,z+2,102);
setTile(x+2,y+4,z+3,4);
setTile(x-2,y+4,z-3,4);
setTile(x-2,y+4,z-2,102);
setTile(x-2,y+4,z-1,4);
setTile(x-2,y+4,z,4);
setTile(x-2,y+4,z+1,4);
setTile(x-2,y+4,z+2,102);
setTile(x-2,y+4,z+3,4);

setTile(x+1,y+5,z-4,4);//四层
setTile(x,y+5,z-4,4);
setTile(x-1,y+5,z-4,4);
setTile(x+2,y+5,z-3,4);
setTile(x+2,y+5,z-2,4);
setTile(x+2,y+5,z-1,4);
setTile(x+2,y+5,z,4);
setTile(x+2,y+5,z+1,4);
setTile(x+2,y+5,z+2,4);
setTile(x+2,y+5,z+3,4);
setTile(x+2,y+5,z+4,4);
setTile(x-2,y+5,z-3,4);
setTile(x-2,y+5,z-2,4);
setTile(x-2,y+5,z-1,4);
setTile(x-2,y+5,z,4);
setTile(x-2,y+5,z+1,4);
setTile(x-2,y+5,z+2,4);
setTile(x-2,y+5,z+3,4);
setTile(x-2,y+5,z+4,4);
setTile(x-1,y+5,z+4,4);
setTile(x-1,y+5,z+3,4);
setTile(x-1,y+5,z+2,4);
setTile(x-1,y+5,z,4);
setTile(x,y+5,z+4,4);
setTile(x,y+5,z+3,4);
setTile(x,y+5,z+2,4);
setTile(x,y+5,z+1,4);
setTile(x,y+5,z,4);
setTile(x+1,y+5,z+4,4);
setTile(x+1,y+5,z+3,4);
setTile(x+1,y+5,z+2,4);
setTile(x+1,y+5,z+1,4);
setTile(x+1,y+5,z,4);


setTile(x+1,y+6,z-3,4);//五层
setTile(x,y+6,z-3,4);
setTile(x-1,y+6,z-3,4);
setTile(x+1,y+6,z-2,4);
setTile(x,y+6,z-2,4);
setTile(x-1,y+6,z-2,4);
setTile(x+1,y+6,z-1,4);
setTile(x,y+6,z-1,4);
setTile(x-1,y+6,z-1,4);
setTile(x+1,y+6,z,4);
setTile(x,y+6,z,4);
setTile(x-1,y+6,z,4);
setTile(x+2,y+6,z+1,4);
setTile(x+2,y+6,z+2,4);
setTile(x+2,y+6,z+3,4);
setTile(x-2,y+6,z+1,4);
setTile(x-2,y+6,z+2,4);
setTile(x-2,y+6,z+3,4);
setTile(x+1,y+6,z+4,4);
setTile(x,y+6,z+4,4);
setTile(x-1,y+6,z+4,4);




setTile(x+1,y+7,z+4,4); //六层
setTile(x,y+7,z+4,102);
setTile(x-1,y+7,z+4,4);
setTile(x+2,y+7,z+3,4);
setTile(x+2,y+7,z+2,102);
setTile(x+2,y+7,z+1,4);
setTile(x-2,y+7,z+3,4);
setTile(x-2,y+7,z+2,102);
setTile(x-2,y+7,z+1,4);
setTile(x+1,y+7,z,4);
setTile(x,y+7,z,102);
setTile(x-1,y+7,z,4);



setTile(x+1,y+8,z+4,4); //七层
setTile(x,y+8,z+4,102);
setTile(x-1,y+8,z+4,4);
setTile(x+2,y+8,z+3,4);
setTile(x+2,y+8,z+2,102);
setTile(x+2,y+8,z+1,4);
setTile(x-2,y+8,z+3,4);
setTile(x-2,y+8,z+2,102);
setTile(x-2,y+8,z+1,4);
setTile(x+1,y+8,z,4);
setTile(x,y+8,z,102);
setTile(x-1,y+8,z,4);



setTile(x+1,y+9,z+4,4); //八层
setTile(x,y+9,z+4,4);
setTile(x-1,y+9,z+4,4);
setTile(x+2,y+9,z+3,4);
setTile(x+2,y+9,z+2,4);
setTile(x+2,y+9,z+1,4);
setTile(x-2,y+9,z+3,4);
setTile(x-2,y+9,z+2,4);
setTile(x-2,y+9,z+1,4);
setTile(x+1,y+9,z,4);
setTile(x,y+9,z,4);
setTile(x-1,y+9,z,4);


setTile(x+1,y+10,z+4,4); //九层
setTile(x,y+10,z+4,4);
setTile(x-1,y+10,z+4,4);
setTile(x+2,y+10,z+3,4);
setTile(x+2,y+10,z+2,4);
setTile(x+2,y+10,z+1,4);
setTile(x-2,y+10,z+3,4);
setTile(x-2,y+10,z+2,4);
setTile(x-2,y+10,z+1,4);
setTile(x+1,y+10,z,4);
setTile(x,y+10,z,4);
setTile(x-1,y+10,z,4);
setTile(x+1,y+10,z+1,4);
setTile(x+1,y+10,z+2,4);
setTile(x+1,y+10,z+3,4);
setTile(x,y+10,z+1,4);
setTile(x,y+10,z+2,4);
setTile(x,y+10,z+3,4);
setTile(x-1,y+10,z+2,4);
setTile(x-1,y+10,z+3,4);
setTile(x-2,y+10,z,4);
setTile(x+2,y+10,z,4);
setTile(x-2,y+10,z+4,4);
setTile(x+2,y+10,z+4,4);



setTile(x+1,y+11,z+4,4); //十层
setTile(x,y+11,z+4,4);
setTile(x-1,y+11,z+4,4);
setTile(x+2,y+11,z+3,4);
setTile(x+2,y+11,z+2,4);
setTile(x+2,y+11,z+1,4);
setTile(x-2,y+11,z+3,4);
setTile(x-2,y+11,z+2,4);
setTile(x-2,y+11,z+1,4);
setTile(x+1,y+11,z,4);
setTile(x,y+11,z,4);
setTile(x-1,y+11,z,4);


setTile(x,y+12,z,4);//顶
setTile(x,y+12,z+4,4);
setTile(x+2,y+12,z+2,4);
setTile(x-2,y+12,z+2,4);
} 
if(i==504){
setTile(x+5,y+1,z+8,4);//底
setTile(x+5,y+1,z+7,4);
setTile(x+5,y+1,z+6,4);
setTile(x+5,y+1,z+5,4);
setTile(x+5,y+1,z+4,4);
setTile(x+5,y+1,z+3,4);
setTile(x+5,y+1,z+2,4);
setTile(x+5,y+1,z+1,4);
setTile(x+5,y+1,z-1,4);
setTile(x+4,y+1,z+8,4);
setTile(x+4,y+1,z+7,4);
setTile(x+4,y+1,z+6,4);
setTile(x+4,y+1,z+5,4);
setTile(x+4,y+1,z+4,4);
setTile(x+4,y+1,z+3,4);
setTile(x+4,y+1,z+2,4);
setTile(x+4,y+1,z+1,4);
setTile(x+4,y+1,z-1,4);
setTile(x+3,y+1,z+8,4);
setTile(x+3,y+1,z+7,4);
setTile(x+3,y+1,z+6,4);
setTile(x+3,y+1,z+5,4);
setTile(x+3,y+1,z+4,4);
setTile(x+3,y+1,z+3,4);
setTile(x+3,y+1,z+2,4);
setTile(x+3,y+1,z+1,4);
setTile(x+3,y+1,z-1,4);
setTile(x+2,y+1,z+8,4);
setTile(x+2,y+1,z+7,4);
setTile(x+2,y+1,z+6,4);
setTile(x+2,y+1,z+5,4);
setTile(x+2,y+1,z+4,4);
setTile(x+2,y+1,z+3,4);
setTile(x+2,y+1,z+2,4);
setTile(x+2,y+1,z+1,4);
setTile(x+2,y+1,z-1,4);
setTile(x+1,y+1,z+8,4);
setTile(x+1,y+1,z+7,4);
setTile(x+1,y+1,z+6,4);
setTile(x+1,y+1,z+5,4);
setTile(x+1,y+1,z+4,4);
setTile(x+1,y+1,z+3,4);
setTile(x+1,y+1,z+2,4);
setTile(x+1,y+1,z+1,4);
setTile(x+1,y+1,z-1,4);
setTile(x,y+1,z+8,4);
setTile(x,y+1,z+7,4);
setTile(x,y+1,z+6,4);
setTile(x,y+1,z+5,4);
setTile(x,y+1,z+4,4);
setTile(x,y+1,z+3,4);
setTile(x,y+1,z+2,4);
setTile(x,y+1,z+1,4);
setTile(x,y+1,z-1,4);
setTile(x-1,y+1,z+8,4);
setTile(x-1,y+1,z+7,4);
setTile(x-1,y+1,z+6,4);
setTile(x-1,y+1,z+5,4);
setTile(x-1,y+1,z+4,4);
setTile(x-1,y+1,z+3,4);
setTile(x-1,y+1,z+2,4);
setTile(x-1,y+1,z+1,4);
setTile(x-1,y+1,z-1,4);
setTile(x+5,y+1,z,4);
setTile(x+4,y+1,z,4);
setTile(x+3,y+1,z,4);
setTile(x+2,y+1,z,4);
setTile(x+1,y+1,z,4);
setTile(x,y+1,z,4);
setTile(x-1,y+1,z,4);



setTile(x-1,y+2,z-1,85);//一层
setTile(x-1,y+2,z+3,85);
setTile(x+3,y+2,z+6,85);
setTile(x+5,y+2,z+8,17);
setTile(x+5,y+2,z+7,5);
setTile(x+5,y+2,z+6,5);
setTile(x+5,y+2,z+5,5);
setTile(x+5,y+2,z+4,5);
setTile(x+5,y+2,z+3,5);
setTile(x+5,y+2,z+2,4);
setTile(x+5,y+2,z+1,4);
setTile(x+5,y+2,z-1,4);
setTile(x+5,y+2,z,4);
setTile(x+4,y+2,z+8,5);
setTile(x+3,y+2,z+8,5);
setTile(x+2,y+2,z+8,5);
setTile(x+1,y+2,z+8,5);
setTile(x,y+2,z+8,5);
setTile(x-1,y+2,z+8,17);
setTile(x-1,y+2,z+7,5);
setTile(x-1,y+2,z+6,5);
setTile(x-1,y+2,z+5,17);
setTile(x+3,y+2,z-1,4);
setTile(x+4,y+2,z-1,4);
setTile(x+4,y+2,z,10);
setTile(x+4,y+2,z+1,10);
setTile(x+4,y+2,z+2,4);
setTile(x+4,y+2,z+3,54);
setTile(x+4,y+2,z+7,5);
setTile(x+3,y+2,z,4);
setTile(x+3,y+2,z+1,4);
setTile(x+3,y+2,z+2,4);
setTile(x+2,y+2,z+3,5);
setTile(x+2,y+2,z+4,5);
setTile(x+1,y+2,z+5,5);
setTile(x,y+2,z,43);
setTile(x+2,y+2,z+2,4);



setTile(x-1,y+3,z-1,85);//二层
setTile(x-1,y+3,z+3,85);
setTile(x+3,y+3,z+6,171,12);
setTile(x+5,y+3,z+8,17);
setTile(x+5,y+3,z+7,5);
setTile(x+5,y+3,z+6,102);
setTile(x+5,y+3,z+5,5);
setTile(x+5,y+3,z+4,102);
setTile(x+5,y+3,z+3,5);
setTile(x+5,y+3,z+2,4);
setTile(x+5,y+3,z+1,4);
setTile(x+5,y+3,z-1,4);
setTile(x+5,y+3,z,4);
setTile(x+4,y+3,z+8,5);
setTile(x+3,y+3,z+8,102);
setTile(x+2,y+3,z+8,5);
setTile(x+1,y+3,z+8,102);
setTile(x,y+3,z+8,5);
setTile(x-1,y+3,z+8,17);
setTile(x-1,y+3,z+7,5);
setTile(x-1,y+3,z+6,5);
setTile(x-1,y+3,z+5,17);
setTile(x+4,y+3,z+2,4);
setTile(x+3,y+3,z-1,101);
setTile(x+4,y+3,z-1,101);
setTile(x+2,y+3,z+3,5);
setTile(x+2,y+3,z+4,5);
setTile(x+1,y+3,z+5,5);
setTile(x+2,y+3,z+2,61);
setTile(x+3,y+3,z+2,4);



setTile(x-1,y+4,z-1,85);//三层
setTile(x-1,y+4,z+3,85);
setTile(x+5,y+4,z+8,17);
setTile(x+5,y+4,z+7,5);
setTile(x+5,y+4,z+6,5);
setTile(x+5,y+4,z+5,5);
setTile(x+5,y+4,z+4,5);
setTile(x+5,y+4,z+3,5);
setTile(x+5,y+4,z+2,4);
setTile(x+5,y+4,z+1,4);
setTile(x+5,y+4,z-1,4);
setTile(x+5,y+4,z,4);
setTile(x+4,y+4,z+8,5);
setTile(x+3,y+4,z+8,5);
setTile(x+2,y+4,z+8,5);
setTile(x+1,y+4,z+8,5);
setTile(x,y+4,z+8,5);
setTile(x-1,y+4,z+8,17);
setTile(x-1,y+4,z+7,5);
setTile(x-1,y+4,z+6,5);
setTile(x-1,y+4,z+5,17);
setTile(x+3,y+4,z-1,4);
setTile(x+4,y+4,z-1,4);
setTile(x+4,y+4,z,4);
setTile(x+4,y+4,z+1,4);
setTile(x+4,y+4,z+2,4);
setTile(x+3,y+4,z,4);
setTile(x+3,y+4,z+1,4);
setTile(x+3,y+4,z+2,4);
setTile(x+2,y+4,z+3,5);
setTile(x+2,y+4,z+4,5);
setTile(x+1,y+4,z+5,5);
setTile(x+2,y+4,z+2,61);


setTile(x+5,y+5,z+8,17);//四层
setTile(x+5,y+5,z+7,4);
setTile(x+5,y+5,z+6,4);
setTile(x+5,y+5,z+5,4);
setTile(x+5,y+5,z+4,4);
setTile(x+5,y+5,z+3,4);
setTile(x+5,y+5,z+2,4);
setTile(x+5,y+5,z+1,4);
setTile(x+5,y+5,z-1,4);
setTile(x+4,y+5,z+8,4);
setTile(x+4,y+5,z+7,4);
setTile(x+4,y+5,z+6,4);
setTile(x+4,y+5,z+5,4);
setTile(x+4,y+5,z+4,4);
setTile(x+4,y+5,z+3,4);
setTile(x+4,y+5,z+2,4);
setTile(x+4,y+5,z+1,4);
setTile(x+4,y+5,z-1,4);
setTile(x+3,y+5,z+8,4);
setTile(x+3,y+5,z+7,4);
setTile(x+3,y+5,z+6,4);
setTile(x+3,y+5,z+5,4);
setTile(x+3,y+5,z+4,4);
setTile(x+3,y+5,z+3,4);
setTile(x+3,y+5,z+2,4);
setTile(x+3,y+5,z+1,4);
setTile(x+3,y+5,z-1,4);
setTile(x+2,y+5,z+8,4);
setTile(x+2,y+5,z+7,4);
setTile(x+2,y+5,z+6,4);
setTile(x+2,y+5,z+5,4);
setTile(x+2,y+5,z+4,4);
setTile(x+2,y+5,z+3,4);
setTile(x+2,y+5,z+2,4);
setTile(x+2,y+5,z+1,4);
setTile(x+2,y+5,z-1,4);
setTile(x+1,y+5,z+8,4);
setTile(x+1,y+5,z+7,4);
setTile(x+1,y+5,z+6,4);
setTile(x+1,y+5,z+5,4);
setTile(x+1,y+5,z+4,4);
setTile(x+1,y+5,z+3,4);
setTile(x+1,y+5,z+2,4);
setTile(x+1,y+5,z+1,4);
setTile(x+1,y+5,z-1,4);
setTile(x,y+5,z+8,4);
setTile(x,y+5,z+7,4);
setTile(x,y+5,z+6,4);
setTile(x,y+5,z+5,4);
setTile(x,y+5,z+4,4);
setTile(x,y+5,z+3,4);
setTile(x,y+5,z+2,4);
setTile(x,y+5,z+1,4);
setTile(x,y+5,z-1,4);
setTile(x-1,y+5,z+8,17);
setTile(x-1,y+5,z+7,4);
setTile(x-1,y+5,z+6,4);
setTile(x-1,y+5,z+5,17);
setTile(x-1,y+5,z+4,4);
setTile(x-1,y+5,z+3,4);
setTile(x-1,y+5,z+2,4);
setTile(x-1,y+5,z+1,4);
setTile(x-1,y+5,z-1,4);
setTile(x+5,y+5,z,4);
setTile(x+4,y+5,z,4);
setTile(x+3,y+5,z,4);
setTile(x+2,y+5,z,4);
setTile(x+1,y+5,z,4);
setTile(x,y+5,z,4);
setTile(x-1,y+5,z,4);



setTile(x+5,y+6,z-1,44);//顶
setTile(x+5,y+6,z,44);
setTile(x+5,y+6,z+1,44);
setTile(x+5,y+6,z+2,44);
setTile(x+5,y+6,z+3,44);
setTile(x+5,y+6,z+4,44);
setTile(x+5,y+6,z+5,44);
setTile(x+5,y+6,z+6,44);
setTile(x+5,y+6,z+7,44);
setTile(x+5,y+6,z+8,44);
setTile(x-1,y+6,z-1,44);
setTile(x-1,y+6,z,44);
setTile(x-1,y+6,z+1,44);
setTile(x-1,y+6,z+2,44);
setTile(x-1,y+6,z+3,44);
setTile(x-1,y+6,z+4,44);
setTile(x-1,y+6,z+5,44);
setTile(x-1,y+6,z+6,44);
setTile(x-1,y+6,z+7,44);
setTile(x-1,y+6,z+8,44);
setTile(x+4,y+6,z+8,44);
setTile(x+3,y+6,z+8,44);
setTile(x+2,y+6,z+8,44);
setTile(x+1,y+6,z+8,44);
setTile(x,y+6,z+8,44);
setTile(x+4,y+6,z-1,44);
setTile(x+3,y+6,z-1,44);
setTile(x+2,y+6,z-1,44);
setTile(x+1,y+6,z-1,44);
setTile(x,y+6,z-1,44);
Level.setChestSlot(x+4,y+2,z+3,1,256,0,1);
Level.setChestSlot(x+4,y+2,z+3,2,257,0,1);
Level.setChestSlot(x+4,y+2,z+3,3,258,0,1);
Level.setChestSlot(x+4,y+2,z+3,4,267,0,1);

}
if(i==505){
setTile(x,y+1,z,4);	//底
setTile(x+1,y+1,z,4);	
setTile(x+2,y+1,z,4);
setTile(x+3,y+1,z,4);
setTile(x+4,y+1,z,4);
setTile(x+5,y+1,z,4);
setTile(x,y+1,z+1,4);
setTile(x,y+1,z+2,4);
setTile(x,y+1,z+3,4);
setTile(x,y+1,z+4,4);
setTile(x,y+1,z+5,4);
setTile(x,y+1,z+6,4);
setTile(x,y+1,z+7,4);
setTile(x,y+1,z+8,4);
setTile(x+5,y+1,z+1,4);
setTile(x+5,y+1,z+2,4);
setTile(x+5,y+1,z+3,4);
setTile(x+5,y+1,z+4,4);
setTile(x+5,y+1,z+5,4);
setTile(x+5,y+1,z+6,4);
setTile(x+5,y+1,z+7,4);
setTile(x+5,y+1,z+8,4);
setTile(x,y+1,z+8,4);	
setTile(x+1,y+1,z+8,4);	
setTile(x+2,y+1,z+8,4);
setTile(x+3,y+1,z+8,4);
setTile(x+4,y+1,z+8,4);
setTile(x+5,y+1,z+8,4);
setTile(x+1,y+1,z+1,5);
setTile(x+1,y+1,z+2,5);
setTile(x+1,y+1,z+3,5);
setTile(x+1,y+1,z+4,5);
setTile(x+1,y+1,z+5,5);
setTile(x+1,y+1,z+6,5);
setTile(x+1,y+1,z+7,5);
setTile(x+2,y+1,z+1,5);
setTile(x+2,y+1,z+2,5);
setTile(x+2,y+1,z+3,5);
setTile(x+2,y+1,z+4,5);
setTile(x+3,y+1,z+1,5);
setTile(x+3,y+1,z+2,5);
setTile(x+3,y+1,z+3,5);
setTile(x+3,y+1,z+4,5);
setTile(x+4,y+1,z+1,5);
setTile(x+4,y+1,z+2,5);
setTile(x+4,y+1,z+3,5);
setTile(x+4,y+1,z+4,5);
setTile(x+2,y+1,z+5,43);
setTile(x+2,y+1,z+6,43);
setTile(x+2,y+1,z+7,43);
setTile(x+3,y+1,z+5,43);
setTile(x+3,y+1,z+6,43);
setTile(x+3,y+1,z+7,43);
setTile(x+4,y+1,z+5,43);
setTile(x+4,y+1,z+6,43);
setTile(x+4,y+1,z+7,43);



setTile(x,y+2,z,4);	//一层
setTile(x+1,y+2,z,4);	
setTile(x+2,y+2,z,4);
setTile(x+3,y+2,z,4);
setTile(x+4,y+2,z,4);
setTile(x+5,y+2,z,4);
setTile(x,y+2,z+1,4);
setTile(x,y+2,z+2,4);
setTile(x,y+2,z+3,4);
setTile(x,y+2,z+4,4);
setTile(x,y+2,z+5,4);
setTile(x,y+2,z+7,4);
setTile(x,y+2,z+8,4);
setTile(x+5,y+2,z+1,4);
setTile(x+5,y+2,z+3,4);
setTile(x+5,y+2,z+4,4);
setTile(x+5,y+2,z+5,4);
setTile(x+5,y+2,z+6,4);
setTile(x+5,y+2,z+7,4);
setTile(x+5,y+2,z+8,4);
setTile(x,y+2,z+8,4);	
setTile(x+1,y+2,z+8,4);	
setTile(x+2,y+2,z+8,4);
setTile(x+3,y+2,z+8,4);
setTile(x+4,y+2,z+8,4);
setTile(x+5,y+2,z+8,4);
setTile(x+1,y+2,z+1,5);
setTile(x+2,y+2,z+1,53,3);
setTile(x+1,y+2,z+2,53,1);
setTile(x+4,y+2,z+6,43);
setTile(x+3,y+2,z+6,43);
setTile(x+2,y+2,z+2,85);



setTile(x,y+3,z,4);//二层
setTile(x+1,y+3,z,17);
setTile(x+2,y+3,z,102);
setTile(x+3,y+3,z,102);
setTile(x+4,y+3,z,17);
setTile(x+5,y+3,z,4);
setTile(x,y+3,z+8,4);
setTile(x+1,y+3,z+8,17);
setTile(x+2,y+3,z+8,102);
setTile(x+3,y+3,z+8,102);
setTile(x+4,y+3,z+8,17);
setTile(x+5,y+3,z+8,4);
setTile(x+5,y+3,z+1,5);
setTile(x+5,y+3,z+3,5);
setTile(x+5,y+3,z+4,102);
setTile(x+5,y+3,z+5,102);
setTile(x+5,y+3,z+6,5);
setTile(x+5,y+3,z+7,5);
setTile(x,y+3,z+1,5);
setTile(x,y+3,z+2,102);
setTile(x,y+3,z+3,102);
setTile(x,y+3,z+4,5);
setTile(x,y+3,z+5,5);
setTile(x,y+3,z+7,5);
setTile(x+2,y+3,z+2,171,12);



setTile(x-1,y+4,z,53);//三层
setTile(x-1,y+4,z+1,53);
setTile(x-1,y+4,z+2,53);
setTile(x-1,y+4,z+3,53);
setTile(x-1,y+4,z+4,53);
setTile(x-1,y+4,z+5,53);
setTile(x-1,y+4,z+6,53);
setTile(x-1,y+4,z+7,53);
setTile(x-1,y+4,z+8,53);
setTile(x+6,y+4,z,53,1);
setTile(x+6,y+4,z+1,53,1);
setTile(x+6,y+4,z+2,53,1);
setTile(x+6,y+4,z+3,53,1);
setTile(x+6,y+4,z+4,53,1);
setTile(x+6,y+4,z+5,53,1);
setTile(x+6,y+4,z+6,53,1);
setTile(x+6,y+4,z+7,53,1);
setTile(x+6,y+4,z+8,53,1);
setTile(x,y+4,z+1,5);
setTile(x,y+4,z+2,5);
setTile(x,y+4,z+3,5);
setTile(x,y+4,z+4,5);
setTile(x,y+4,z+5,5);
setTile(x,y+4,z+6,5);
setTile(x,y+4,z+7,5);
setTile(x+5,y+4,z+1,5);
setTile(x+5,y+4,z+2,5);
setTile(x+5,y+4,z+3,5);
setTile(x+5,y+4,z+4,5);
setTile(x+5,y+4,z+5,5);
setTile(x+5,y+4,z+6,5);
setTile(x+5,y+4,z+7,5);
setTile(x,y+4,z,4);
setTile(x+1,y+4,z,4);
setTile(x+2,y+4,z,4);
setTile(x+3,y+4,z,4);
setTile(x+4,y+4,z,4);
setTile(x+5,y+4,z,4);
setTile(x,y+4,z+8,4);
setTile(x+1,y+4,z+8,4);
setTile(x+2,y+4,z+8,4);
setTile(x+3,y+4,z+8,4);
setTile(x+4,y+4,z+8,4);
setTile(x+5,y+4,z+8,4);



setTile(x+5,y+5,z+1,53,1);//四层
setTile(x+5,y+5,z,53,1);
setTile(x+5,y+5,z+2,53,1);
setTile(x+5,y+5,z+3,53,1);
setTile(x+5,y+5,z+4,53,1);
setTile(x+5,y+5,z+5,53,1);
setTile(x+5,y+5,z+6,53,1);
setTile(x+5,y+5,z+7,53,1);
setTile(x+5,y+5,z+8,53,1);
setTile(x,y+5,z,53);
setTile(x,y+5,z+1,53);
setTile(x,y+5,z+2,53);
setTile(x,y+5,z+3,53);
setTile(x,y+5,z+4,53);
setTile(x,y+5,z+5,53);
setTile(x,y+5,z+6,53);
setTile(x,y+5,z+7,53);
setTile(x,y+5,z+8,53);
setTile(x+1,y+5,z+1,5);
setTile(x+1,y+5,z+2,5);
setTile(x+1,y+5,z+3,5);
setTile(x+1,y+5,z+4,5);
setTile(x+1,y+5,z+5,5);
setTile(x+1,y+5,z+6,5);
setTile(x+1,y+5,z+7,5);
setTile(x+4,y+5,z+1,5);
setTile(x+4,y+5,z+2,5);
setTile(x+4,y+5,z+3,5);
setTile(x+4,y+5,z+4,5);
setTile(x+4,y+5,z+5,5);
setTile(x+4,y+5,z+6,5);
setTile(x+4,y+5,z+7,5);
setTile(x+1,y+5,z+8,5);
setTile(x+2,y+5,z+8,5);
setTile(x+3,y+5,z+8,5);
setTile(x+4,y+5,z+8,5);
setTile(x+1,y+5,z,5);
setTile(x+2,y+5,z,5);
setTile(x+3,y+5,z,5);
setTile(x+4,y+5,z,5);




setTile(x+1,y+6,z,53);//五层
setTile(x+1,y+6,z+1,53);
setTile(x+1,y+6,z+2,53);
setTile(x+1,y+6,z+3,53);
setTile(x+1,y+6,z+4,53);
setTile(x+1,y+6,z+5,53);
setTile(x+1,y+6,z+6,53);
setTile(x+1,y+6,z+7,53);
setTile(x+1,y+6,z+8,53);
setTile(x+4,y+6,z,53,1);
setTile(x+4,y+6,z+1,53,1);
setTile(x+4,y+6,z+2,53,1);
setTile(x+4,y+6,z+3,53,1);
setTile(x+4,y+6,z+4,53,1);
setTile(x+4,y+6,z+5,53,1);
setTile(x+4,y+6,z+6,53,1);
setTile(x+4,y+6,z+7,53,1);
setTile(x+4,y+6,z+8,53,1);
setTile(x+2,y+6,z,5);
setTile(x+2,y+6,z+1,5);
setTile(x+2,y+6,z+2,5);
setTile(x+2,y+6,z+3,5);
setTile(x+2,y+6,z+4,5);
setTile(x+2,y+6,z+5,5);
setTile(x+2,y+6,z+6,5);
setTile(x+2,y+6,z+7,5);
setTile(x+2,y+6,z+8,5);
setTile(x+3,y+6,z,5);
setTile(x+3,y+6,z+1,5);
setTile(x+3,y+6,z+2,5);
setTile(x+3,y+6,z+3,5);
setTile(x+3,y+6,z+4,5);
setTile(x+3,y+6,z+5,5);
setTile(x+3,y+6,z+6,5);
setTile(x+3,y+6,z+7,5);
setTile(x+3,y+6,z+8,5);




setTile(x+2,y+7,z,53);
setTile(x+2,y+7,z+1,53);
setTile(x+2,y+7,z+2,53);
setTile(x+2,y+7,z+3,53);
setTile(x+2,y+7,z+4,53);
setTile(x+2,y+7,z+5,53);
setTile(x+2,y+7,z+6,53);
setTile(x+2,y+7,z+7,53);
setTile(x+2,y+7,z+8,53);
setTile(x+3,y+7,z,53,1);
setTile(x+3,y+7,z+1,53,1);
setTile(x+3,y+7,z+2,53,1);
setTile(x+3,y+7,z+3,53,1);
setTile(x+3,y+7,z+4,53,1);
setTile(x+3,y+7,z+5,53,1);
setTile(x+3,y+7,z+6,53,1);
setTile(x+3,y+7,z+7,53,1);
setTile(x+3,y+7,z+8,53,1);

}
if(i==506){
setTile(x,y+1,z,35,5);//底
setTile(x,y+1,z+1,35,5);
setTile(x,y+1,z+2,35,7);
setTile(x,y+1,z+4,35,5);
setTile(x,y+1,z+3,35,5);
setTile(x,y+1,z+5,35,7);
setTile(x,y+1,z+7,35,5);
setTile(x,y+1,z+6,35,5);
setTile(x+6,y+1,z,35,5);
setTile(x+6,y+1,z+1,35,5);
setTile(x+6,y+1,z+2,35,5);
setTile(x+6,y+1,z+4,35,5);
setTile(x+6,y+1,z+3,35,5);
setTile(x+6,y+1,z+5,35,5);
setTile(x+6,y+1,z+7,35,5);
setTile(x+6,y+1,z+6,35,5);
setTile(x+1,y+1,z,35,5);
setTile(x+2,y+1,z,35,5);
setTile(x+3,y+1,z,35,5);
setTile(x+4,y+1,z,35,5);
setTile(x+5,y+1,z,35,5);
setTile(x+1,y+1,z+7,35,5);
setTile(x+2,y+1,z+7,35,5);
setTile(x+3,y+1,z+7,35,5);
setTile(x+4,y+1,z+7,35,5);
setTile(x+5,y+1,z+7,35,5);

setTile(x+1,y+1,z+1,35,5);
setTile(x+2,y+1,z+1,35,5);
setTile(x+3,y+1,z+1,35,5);
setTile(x+4,y+1,z+1,35,5);
setTile(x+5,y+1,z+1,35,5);
setTile(x+1,y+1,z+2,35,5);
setTile(x+2,y+1,z+2,35,5);
setTile(x+3,y+1,z+2,35,5);
setTile(x+4,y+1,z+2,35,5);
setTile(x+5,y+1,z+2,35,5);
setTile(x+1,y+1,z+3,35,5);
setTile(x+2,y+1,z+3,35,5);
setTile(x+3,y+1,z+3,35,5);
setTile(x+4,y+1,z+3,35,5);
setTile(x+5,y+1,z+3,35,5);
setTile(x+1,y+1,z+4,35,5);
setTile(x+2,y+1,z+4,35,5);
setTile(x+3,y+1,z+4,35,5);
setTile(x+4,y+1,z+4,35,5);
setTile(x+5,y+1,z+4,35,5);
setTile(x+1,y+1,z+5,35,5);
setTile(x+2,y+1,z+5,35,5);
setTile(x+3,y+1,z+5,35,5);
setTile(x+4,y+1,z+5,35,5);
setTile(x+5,y+1,z+5,35,5);
setTile(x+1,y+1,z+6,35,5);
setTile(x+2,y+1,z+6,35,5);
setTile(x+3,y+1,z+6,35,5);
setTile(x+4,y+1,z+6,35,5);
setTile(x+5,y+1,z+6,35,5);




setTile(x,y+2,z,35,5);//一层
setTile(x,y+2,z+1,35,5);
setTile(x,y+2,z+2,35,7);
setTile(x,y+2,z+4,35,7);
setTile(x,y+2,z+3,35,7);
setTile(x,y+2,z+5,35,7);
setTile(x,y+2,z+7,35,5);
setTile(x,y+2,z+6,35,5);
setTile(x+6,y+2,z,35,5);
setTile(x+6,y+2,z+1,35,5);
setTile(x+6,y+2,z+2,35,5);
setTile(x+6,y+2,z+4,35,5);
setTile(x+6,y+2,z+3,35,5);
setTile(x+6,y+2,z+5,35,5);
setTile(x+6,y+2,z+7,35,5);
setTile(x+6,y+2,z+6,35,5);
setTile(x+1,y+2,z,35,5);
setTile(x+2,y+2,z,35,5);
setTile(x+3,y+2,z,35,5);
setTile(x+4,y+2,z,35,5);
setTile(x+5,y+2,z,35,5);
setTile(x+1,y+2,z+7,35,5);
setTile(x+2,y+2,z+7,35,5);
setTile(x+3,y+2,z+7,35,5);
setTile(x+4,y+2,z+7,35,5);
setTile(x+5,y+2,z+7,35,5);



setTile(x,y+3,z,35,5);//二层
setTile(x,y+3,z+1,35,5);
setTile(x,y+3,z+2,35,7);
setTile(x,y+3,z+4,35,15);
setTile(x,y+3,z+3,35,15);
setTile(x,y+3,z+5,35,7);
setTile(x,y+3,z+7,35,5);
setTile(x,y+3,z+6,35,5);
setTile(x+6,y+3,z,35,5);
setTile(x+6,y+3,z+1,35,5);
setTile(x+6,y+3,z+2,35,5);
setTile(x+6,y+3,z+4,35,5);
setTile(x+6,y+3,z+3,35,5);
setTile(x+6,y+3,z+5,35,5);
setTile(x+6,y+3,z+7,35,5);
setTile(x+6,y+3,z+6,35,5);
setTile(x+1,y+3,z,35,5);
setTile(x+2,y+3,z,35,5);
setTile(x+3,y+3,z,35,5);
setTile(x+4,y+3,z,35,5);
setTile(x+5,y+3,z,35,5);
setTile(x+1,y+3,z+7,35,5);
setTile(x+2,y+3,z+7,35,5);
setTile(x+3,y+3,z+7,35,5);
setTile(x+4,y+3,z+7,35,5);
setTile(x+5,y+3,z+7,35,5);



setTile(x,y+4,z,35,5);//三层
setTile(x,y+4,z+1,35,5);
setTile(x,y+4,z+2,35,5);
setTile(x,y+4,z+4,35,15);
setTile(x,y+4,z+3,35,15);
setTile(x,y+4,z+5,35,5);
setTile(x,y+4,z+7,35,5);
setTile(x,y+4,z+6,35,5);
setTile(x+6,y+4,z,35,5);
setTile(x+6,y+4,z+1,35,5);
setTile(x+6,y+4,z+2,35,5);
setTile(x+6,y+4,z+4,35,5);
setTile(x+6,y+4,z+3,35,5);
setTile(x+6,y+4,z+5,35,5);
setTile(x+6,y+4,z+7,35,5);
setTile(x+6,y+4,z+6,35,5);
setTile(x+1,y+4,z,35,5);
setTile(x+2,y+4,z,35,5);
setTile(x+3,y+4,z,35,5);
setTile(x+4,y+4,z,35,5);
setTile(x+5,y+4,z,35,5);
setTile(x+1,y+4,z+7,35,5);
setTile(x+2,y+4,z+7,35,5);
setTile(x+3,y+4,z+7,35,5);
setTile(x+4,y+4,z+7,35,5);
setTile(x+5,y+4,z+7,35,5);


setTile(x,y+5,z,35,5);//四层
setTile(x,y+5,z+1,35,15);
setTile(x,y+5,z+2,35,7);
setTile(x,y+5,z+4,35,5);
setTile(x,y+5,z+3,35,5);
setTile(x,y+5,z+5,35,7);
setTile(x,y+5,z+7,35,5);
setTile(x,y+5,z+6,35,15);
setTile(x+6,y+5,z,35,5);
setTile(x+6,y+5,z+1,35,5);
setTile(x+6,y+5,z+2,35,5);
setTile(x+6,y+5,z+4,35,5);
setTile(x+6,y+5,z+3,35,5);
setTile(x+6,y+5,z+5,35,5);
setTile(x+6,y+5,z+7,35,5);
setTile(x+6,y+5,z+6,35,5);
setTile(x+1,y+5,z,35,5);
setTile(x+2,y+5,z,35,5);
setTile(x+3,y+5,z,35,5);
setTile(x+4,y+5,z,35,5);
setTile(x+5,y+5,z,35,5);
setTile(x+1,y+5,z+7,35,5);
setTile(x+2,y+5,z+7,35,5);
setTile(x+3,y+5,z+7,35,5);
setTile(x+4,y+5,z+7,35,5);
setTile(x+5,y+5,z+7,35,5);



setTile(x,y+6,z,35,5);//五层
setTile(x,y+6,z+1,35,15);
setTile(x,y+6,z+2,35,15);
setTile(x,y+6,z+4,35,5);
setTile(x,y+6,z+3,35,5);
setTile(x,y+6,z+5,35,15);
setTile(x,y+6,z+7,35,5);
setTile(x,y+6,z+6,35,15);
setTile(x+6,y+6,z,35,5);
setTile(x+6,y+6,z+1,35,5);
setTile(x+6,y+6,z+2,35,5);
setTile(x+6,y+6,z+4,35,5);
setTile(x+6,y+6,z+3,35,5);
setTile(x+6,y+6,z+5,35,5);
setTile(x+6,y+6,z+7,35,5);
setTile(x+6,y+6,z+6,35,5);
setTile(x+1,y+6,z,35,5);
setTile(x+2,y+6,z,35,5);
setTile(x+3,y+6,z,35,5);
setTile(x+4,y+6,z,35,5);
setTile(x+5,y+6,z,35,5);
setTile(x+1,y+6,z+7,35,5);
setTile(x+2,y+6,z+7,35,5);
setTile(x+3,y+6,z+7,35,5);
setTile(x+4,y+6,z+7,35,5);
setTile(x+5,y+6,z+7,35,5);



setTile(x,y+7,z,35,5);//六层
setTile(x,y+7,z+1,35,5);
setTile(x,y+7,z+2,35,5);
setTile(x,y+7,z+4,35,5);
setTile(x,y+7,z+3,35,5);
setTile(x,y+7,z+5,35,5);
setTile(x,y+7,z+7,35,5);
setTile(x,y+7,z+6,35,5);
setTile(x+6,y+7,z,35,5);
setTile(x+6,y+7,z+1,35,5);
setTile(x+6,y+7,z+2,35,5);
setTile(x+6,y+7,z+4,35,5);
setTile(x+6,y+7,z+3,35,5);
setTile(x+6,y+7,z+5,35,5);
setTile(x+6,y+7,z+7,35,5);
setTile(x+6,y+7,z+6,35,5);
setTile(x+1,y+7,z,35,5);
setTile(x+2,y+7,z,35,5);
setTile(x+3,y+7,z,35,5);
setTile(x+4,y+7,z,35,5);
setTile(x+5,y+7,z,35,5);
setTile(x+1,y+7,z+7,35,5);
setTile(x+2,y+7,z+7,35,5);
setTile(x+3,y+7,z+7,35,5);
setTile(x+4,y+7,z+7,35,5);
setTile(x+5,y+7,z+7,35,5);



setTile(x,y+8,z,35,5);//顶
setTile(x,y+8,z+1,35,5);
setTile(x,y+8,z+2,35,5);
setTile(x,y+8,z+4,35,5);
setTile(x,y+8,z+3,35,5);
setTile(x,y+8,z+5,35,5);
setTile(x,y+8,z+7,35,5);
setTile(x,y+8,z+6,35,5);
setTile(x+6,y+8,z,35,5);
setTile(x+6,y+8,z+1,35,5);
setTile(x+6,y+8,z+2,35,5);
setTile(x+6,y+8,z+4,35,5);
setTile(x+6,y+8,z+3,35,5);
setTile(x+6,y+8,z+5,35,5);
setTile(x+6,y+8,z+7,35,5);
setTile(x+6,y+8,z+6,35,5);
setTile(x+1,y+8,z,35,5);
setTile(x+2,y+8,z,35,5);
setTile(x+3,y+8,z,35,5);
setTile(x+4,y+8,z,35,5);
setTile(x+5,y+8,z,35,5);
setTile(x+1,y+8,z+7,35,5);
setTile(x+2,y+8,z+7,35,5);
setTile(x+3,y+8,z+7,35,5);
setTile(x+4,y+8,z+7,35,5);
setTile(x+5,y+8,z+7,35,5);

setTile(x+1,y+8,z+1,35,5);
setTile(x+2,y+8,z+1,35,5);
setTile(x+3,y+8,z+1,35,5);
setTile(x+4,y+8,z+1,35,5);
setTile(x+5,y+8,z+1,35,5);
setTile(x+1,y+8,z+2,35,5);
setTile(x+2,y+8,z+2,35,5);
setTile(x+3,y+8,z+2,35,5);
setTile(x+4,y+8,z+2,35,5);
setTile(x+5,y+8,z+2,35,5);
setTile(x+1,y+8,z+3,35,5);
setTile(x+2,y+8,z+3,35,5);
setTile(x+3,y+8,z+3,35,5);
setTile(x+4,y+8,z+3,35,5);
setTile(x+5,y+8,z+3,35,5);
setTile(x+1,y+8,z+4,35,5);
setTile(x+2,y+8,z+4,35,5);
setTile(x+3,y+8,z+4,35,5);
setTile(x+4,y+8,z+4,35,5);
setTile(x+5,y+8,z+4,35,5);
setTile(x+1,y+8,z+5,35,5);
setTile(x+2,y+8,z+5,35,5);
setTile(x+3,y+8,z+5,35,5);
setTile(x+4,y+8,z+5,35,5);
setTile(x+5,y+8,z+5,35,5);
setTile(x+1,y+8,z+6,35,5);
setTile(x+2,y+8,z+6,35,5);
setTile(x+3,y+8,z+6,35,5);
setTile(x+4,y+8,z+6,35,5);
setTile(x+5,y+8,z+6,35,5);
}
}


