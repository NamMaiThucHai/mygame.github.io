const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.Text,
		C3.Plugins.Mouse,
		C3.Behaviors.Sin,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Text.Acts.SetVisible
	];
};
self.C3_JsPropNameTable = [
	{Solid: 0},
	{Dirt: 0},
	{Keyboard: 0},
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Death: 0},
	{Revive: 0},
	{YouWin: 0},
	{Continue1Button: 0},
	{Continue: 0},
	{Mouse: 0},
	{Exit: 0},
	{Gate: 0},
	{FakeDirt: 0},
	{Sine: 0},
	{MoveDirt: 0},
	{Coin: 0},
	{Score: 0},
	{hinhmenu: 0},
	{RunRunRun: 0},
	{PlayButton: 0},
	{Play: 0},
	{hinhnengame: 0},
	{Trap: 0},
	{Noob: 0},
	{SoilTrap: 0},
	{Cloud: 0},
	{Soil: 0},
	{Continue2Button: 0},
	{Exit2: 0},
	{score: 0}
];

self.InstanceType = {
	Dirt: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	Player: class extends self.ISpriteInstance {},
	Death: class extends self.ISpriteInstance {},
	Revive: class extends self.ISpriteInstance {},
	YouWin: class extends self.ITextInstance {},
	Continue1Button: class extends self.ISpriteInstance {},
	Continue: class extends self.ITextInstance {},
	Mouse: class extends self.IInstance {},
	Exit: class extends self.ISpriteInstance {},
	Gate: class extends self.ISpriteInstance {},
	FakeDirt: class extends self.ISpriteInstance {},
	MoveDirt: class extends self.ISpriteInstance {},
	Coin: class extends self.ISpriteInstance {},
	Score: class extends self.ITextInstance {},
	hinhmenu: class extends self.ISpriteInstance {},
	RunRunRun: class extends self.ITextInstance {},
	PlayButton: class extends self.ISpriteInstance {},
	Play: class extends self.ITextInstance {},
	hinhnengame: class extends self.ISpriteInstance {},
	Trap: class extends self.ISpriteInstance {},
	Noob: class extends self.ITextInstance {},
	SoilTrap: class extends self.ISpriteInstance {},
	Cloud: class extends self.ISpriteInstance {},
	Soil: class extends self.ISpriteInstance {},
	Continue2Button: class extends self.ISpriteInstance {},
	Exit2: class extends self.ISpriteInstance {}
}