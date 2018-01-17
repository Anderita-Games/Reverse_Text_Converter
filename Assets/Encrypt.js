#pragma strict
var Import : UnityEngine.UI.InputField;
var Export : UnityEngine.UI.Text;

var numboro: int;

var imports = new Array ();
var Imports : String;

var str : String;

function Changer () {
	Imports = Import.text;
	numboro = 1;
	imports.Clear();
	while (numboro < Import.text.length + 1) {
		imports[numboro] = Imports.Substring(Import.text.length - numboro, 1);
		Debug.Log("Success x" + numboro);
		numboro ++; //Adds one to Numboro
		str = Array(imports).Join(""); 
	}
	Export.text = str;
	Debug.Log(str);
}

function ClipBoard () { //Copy code I found Online (Find better Sh!t)
	GUIUtility.systemCopyBuffer = str;
}

function MainMenu () { //Love how I have complicated Sh!t and then I have a simple return to ManMenu function (Edit: I love reading "Sh!t")
	Application.LoadLevel ("MainMenu");
}