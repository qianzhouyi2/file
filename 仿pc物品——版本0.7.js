Item.addCraftRecipe(2,1,0,[3,1,0])
ModPE.setItem(133,"emerald_block", 0, "绿宝石块")
Block.defineBlock(133,"绿宝石块",[["emerald_block",0],["emerald_block",0],["emerald_block",0],["emerald_block",0],["emerald_block",0],["emerald_block",0]],50,false,0)
Block.setDestroyTime(133,1);

Block.defineBlock(117,"炼药架",[["brewing_stand",0],["brewing_stand",0],["brewing_stand",0],["brewing_stand",0],["brewing_stand",0],["brewing_stand",0]],50,true,1)

ModPE.setItem(152,"redstone_dust",0,"红石块")
Block.defineBlock(152,"红石块",[["redstone_block",0],["redstone_block",0],["redstone_block",0],["redstone_block",0],["redstone_block",0],["redstone_block",0]],50,false,0)
Block.setDestroyTime(152,1)

ModPE.setItem(84,"h",0,"音乐盒")
Block.defineBlock(84,"音乐盒",[["jukebox_top",0],["jukebox_top",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0],["jukebox_side",0]],50,false,0)
Block.setDestroyTime(84,1)

ModPE.setItem(129,"boat",0,"绿宝石矿")
Block.defineBlock(129,"绿宝石矿",[["emerald_ore",0],["emerald_ore",0],["emerald_ore",0],["emerald_ore",0],["emerald_ore",0],["emerald_ore",0]])
Block.setDestroyTime(129,1)

ModPE.setItem(110,"apple",0,"菌丝")
Block.defineBlock(110,"菌丝",[["mycelium_side",0],["mycelium_top",0],["mycelium_side",0],["mycelium_side",0],["mycelium_side",0],["mycelium_side",0]])
Block.setDestroyTime(110,1)

ModPE.setItem(116,"apple",0,"附魔台")
Block.defineBlock(116,"附魔台",[["enchanting_table_side",0],["enchanting_table_top",0],["enchanting_table_side",0],["enchanting_table_side",0],["enchanting_table_side",0],["enchanting_table_side",0]],50,false,13)
Block.setDestroyTime(116,1)
Block.setShape(116,0,0,0,1,0.75,1)

ModPE.setItem(120,"apple",0,"末影台")
Block.defineBlock(120,"末影台",[["endframe_side",0],["endframe_top",0],["endframe_side",0],["endframe_side",0],["endframe_side",0],["endframe_side",0]])
Block.setDestroyTime(120,1)
Block.setShape(120,0,0,0,1,0.75,1)

ModPE.setItem(88,"apple",0,"灵魂沙")
Block.defineBlock(88,"灵魂沙",[["soul_sand",0],["soul_sand",0],["soul_sand",0],["soul_sand",0],["soul_sand",0],["soul_sand",0]])
Block.setDestroyTime(88,1)

ModPE.setItem(121,"apple",0,"末地石")
Block.defineBlock(121,"末地石",[["end_stone",0],["end_stone",0],["end_stone",0],["end_stone",0],["end_stone",0],["end_stone",0]])
Block.setDestroyTime(121,1)

ModPE.setItem(153,"apple",0,"下界石英矿")
Block.defineBlock(153,"下界石英矿",[["quartz_ore",0],["quartz_ore",0],["quartz_ore",0],["quartz_ore",0],["quartz_ore",0],["quartz_ore",0]])
Block.setDestroyTime(153,1)

ModPE.setItem(137,"arrowaxe",0,"命令方块")
Block.defineBlock(137,"命令方块",[["command_block",0],["command_block",0],["command_block",0],["command_block",0],["command_block",0],["command_block",0]])
Block.setDestroyTime(137,1)

ModPE.setItem(154,"ss",0,"炼药锅")
Block.defineBlock(154,"炼药锅", 
[["cauldron_bottom", 0], 
["cauldron_top", 0],
["cauldron_side", 0], 
["cauldron_side", 0],
["cauldron_side", 0], 
["cauldron_side", 0]],1,true,0)

ModPE.setItem(250,"apple",0,"红蘑菇方块")
Block.defineBlock(250,"红蘑菇方块",[["mushroom_block_skin_red",0],["mushroom_block_skin_red",0],["mushroom_block_skin_red",0],["mushroom_block_skin_red",0],["mushroom_block_skin_red",0],["mushroom_block_skin_red",0]])

ModPE.setItem(251,"apple",0,"棕蘑菇方块")
Block.defineBlock(251,"棕蘑菇方块",[["mushroom_block_skin_brown",0],["mushroom_block_skin_brown",0],["mushroom_block_skin_brown",0],["mushroom_block_skin_brown",0],["mushroom_block_skin_brown",0],["mushroom_block_skin_brown",0]])

ModPE.setItem(52,"bed",0,"刷怪笼")
Block.defineBlock(52,"刷怪笼",[["mob_spawner",0],["mob_spawner",0],["mob_spawner",0],["mob_spawner",0],["mob_spawner",0],["mob_spawner",0]],50,false,0)

Block.defineBlock(111,"睡莲",[["waterlily",0],["waterlily",0],["waterlily",0],["waterlily",0],["waterlily",0],["waterlily",0]])
Block.setShape(111,0,0,0,1,0,1)
Block.setColor(111, [0x65ef58] )

ModPE.setItem(123,"b",0,"关闭的红石灯")
Block.defineBlock (123, "关闭的红石灯",[["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0], ["redstone_lamp_off",0]],50,false,0)

ModPE.setItem(124,"s",0,"开启的红石灯")
Block.defineBlock (124, "开启的红石灯",[["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0], ["redstone_lamp_on",0]],50,false,0)

Block.defineBlock(34,"粘性活塞",[["piston_bottom",0],["piston_top_sticky",0],["piston_side",0],["piston_side",0],["piston_side",0],["piston_side",0]])

Block.defineBlock(33,"活塞",[["piston_bottom",0],["piston_top_normal",0],["piston_side",0],["piston_side",0],["piston_side",0],["piston_side",0]])

ModPE.setItem(433,"book_enchanted",0,"力量之书")
ModPE.setItem(434,"book_enchanted",0,"速度之书")
ModPE.setItem(436,"book_enchanted",0,"火焰之书")
ModPE.setItem(435,"sword",0,"力量剑")
ModPE.setItem(437,"sword",0,"火焰剑")
ModPE.setItem(438,"sword",0,"速度剑")
ModPE.setItem(368,"ender_pearl",0,"末影珍珠")
ModPE.setItem(450,"spawn_egg", 0, "僵尸猪人蛋")
ModPE.setItem(452,"spawn_egg", 0, "蜘蛛蛋")
ModPE.setItem(453,"spawn_egg", 0, "苦力怕蛋")
ModPE.setItem(454,"spawn_egg", 0, "僵尸蛋")
ModPE.setItem(451,"spawn_egg", 0, "骷髅蛋")
ModPE.setItem(455,"spawn_egg", 0, "蜘蛛骑士蛋")
var btnWindow=null
var mainMenu=null
function dip2px(ctx,dips){
 return Math.ceil(dips*ctx.getResources().getDisplayMetrics().density)
}
function newLevel(){
print("本js由MCG工作室的qzy制作，转载请联系作者")
  time=0+Level.getTime()
  if(time=time+1000){
clientMessage("<server>herobrine joined the game")
}
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
ctx.runOnUiThread(new java.lang.Runnable({run:function(){
 try{
   btnWindow = new android.widget.PopupWindow()
   var layout=new android.widget.LinearLayout(ctx); 
   var button = new android.widget.Button(ctx)
   button.setText("物品")
   button.setOnClickListener(new android.view.View.OnClickListener({
   onClick: function(viewarg){
   openMenu()
    }
}))
    layout.addView(button)
    btnWindow.setContentView(layout)
    btnWindow.setWidth(dip2px(ctx, 60))
    btnWindow.setHeight(dip2px(ctx, 70))
    btnWindow.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
    btnWindow.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.RIGHT | android.view.Gravity.TOP,10,60)
		}catch(err){
			print("对不起,系统无法显示按钮")
		}
	}}))
}
function openMenu(){
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
  try{
   var menu=new android.widget.PopupWindow()
   menu.setFocusable(true)
   mainMenu=menu
   var layout=new android.widget.LinearLayout(ctx)
   layout.setOrientation(1)

   var textParams=new android.widget.LinearLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT, android.widget.RelativeLayout.LayoutParams.WRAP_CONTENT)
   textParams.setMargins(dip2px(ctx, 5), 0, 0, 0)
   var stitle=new android.widget.TextView(ctx)
   stitle.setTextSize(20)
   stitle.setText("由qzy制作")
   stitle.setLayoutParams(textParams)
   layout.addView(stitle)

var button=new android.widget.Button(ctx)
 button.setText("绿宝石块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(133,64)
 }}))
 layout.addView(button)
var button=new android.widget.Button(ctx)
 button.setText("红石块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(152,64)
 }}))
 layout.addView(button)
var button=new android.widget.Button(ctx)
 button.setText("音乐盒")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(84,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("绿宝石矿")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(129,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("菌丝")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(110,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("附魔台")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(116,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("末影台")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(120,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("灵魂沙")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(88,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("末地石")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(121,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("下界石英矿")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(153,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("命令方块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(137,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("炼药锅")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(154,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("红蘑菇方块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(250,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("棕蘑菇方块")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(251,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("刷怪笼")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(52,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("关闭的红石灯")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(123,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("开启的红石灯")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(124,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("活塞")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(33,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("粘性活塞")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(34,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("睡莲")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(111,64)
 }}))
 layout.addView(button)

var button=new android.widget.Button(ctx)
 button.setText("炼药架")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
addItemInventory(117,64)
 }}))
 layout.addView(button)

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
 button.setText("信息")
 button.setOnClickListener(new android.view.View.OnClickListener({
  onClick:function(viewarg){
clientMessage(ChatColor.RED+"版本0.7")
clientMessage(ChatColor.RED+"作者贴吧@qianzhouyi2")
clientMessage(ChatColor.RED+"转载请联系原作者。")
clientMessage(ChatColor.RED+"MCG工作室出品。")
 }}))
 layout.addView(button)

var mlayout=makeMenu(ctx,menu,layout)
   menu.setContentView(mlayout)
   menu.setWidth(ctx.getWindowManager().getDefaultDisplay().getWidth()/4)
   menu.setHeight(ctx.getWindowManager().getDefaultDisplay().getHeight())
   menu.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT))
   menu.showAtLocation(ctx.getWindow().getDecorView(),android.view.Gravity.RIGHT | android.view.Gravity.TOP,990,60)
 }catch(err){
    print("对不起,您的系统有错误,请再次尝试.")
 }
}
function makeMenu(ctx,menu,layout){
  var mlayout=new android.widget.RelativeLayout(ctx)
 var svParams=new android.widget.RelativeLayout.LayoutParams(android.widget.RelativeLayout.LayoutParams.FILL_PARENT,android.widget.RelativeLayout.LayoutParams.FILL_PARENT)
var scrollview=new android.widget.ScrollView(ctx)
 var pad = dip2px(ctx,5)
 scrollview.setPadding(pad,pad,pad,pad)
 scrollview.setLayoutParams(svParams)
 scrollview.addView(layout)
 mlayout.addView(scrollview)
 return mlayout
}
function leaveGame(){
 var ctx=com.mojang.minecraftpe.MainActivity.currentMainActivity.get()
 ctx.runOnUiThread(new java.lang.Runnable({run:function(){
  if(btnWindow!=null){
   btnWindow.dismiss()
   btnWindow=null
  }
  if(mainMenu!=null){
   mainMenu.dismiss()
   mainMenu=null
  }
 }}))
}
function useItem(x,y,z,i,b,side,itemdamage,blockdamage){
if(i==0&&b==116){
addItemInventory(433,1,0)
addItemInventory(436,1,0)
addItemInventory(434,1,0)
clientMessage(ChatColor.RED+"附魔书已加入背包")
}
if(i==433&&b==116){
addItemInventory(435,1,0)
clientMessage("力量剑已加入背包")
}
if(i==436&&b==116){
addItemInventory(437,1,0)
clientMessage("火焰剑已加入背包")
}
if(i==434&&b==116){
addItemInventory(438,1,0)
clientMessage("速度剑已加入背包")
} 
if(i==0&&b==120){
addItemInventory(368,1)
clientMessage(ChatColor.RED+"末影珍珠已加入背包")}
if(i==368){
a=Player.getEntity()
setPosition(a,x,y+3,z)
clientMessage("传送成功")
}

if(b==52){
addItemInventory(450,1)
addItemInventory(451,1)
addItemInventory(452,1)
addItemInventory(453,1)
addItemInventory(454,1)
addItemInventory(455,1)
}
if(i==450)
{
Level.spawnMob(x, y+1, z, 36);       //僵尸猪人
}
if(i==451)
{
Level.spawnMob(x, y+1, z, 34);       //骷髅
}
if(i==452)
{
Level.spawnMob(x, y+1, z, 35);       //蜘蛛
}
if(i==453)
{
Level.spawnMob(x, y+1, z, 33);       //苦力怕
}
if(i==454)
{
Level.spawnMob(x, y+1, z, 32);       //僵尸
}
if(i==455)
{
s=Level.spawnMob(x, y+1, z, 35);
b=Level.spawnMob(x, y+1, z, 34);
rideAnimal(b, s);                            //蜘蛛骑士
}
}
function attackHook(player,entity){
if(getCarriedItem()==435){
Entity.setHealth(entity,0)
}
if(getCarriedItem()==437){
Entity.setFireTicks(entity,10)
}

}
function modTick(){
ModPE.showTipMessage("V0.9.0 alpha build 1");
if(getCarriedItem()==438){
ModPE.setGameSpeed(40)
}
else{
ModPE.setGameSpeed(20)
}
}