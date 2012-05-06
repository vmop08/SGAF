function exibeConsultaPorSala(){
	document.getElementById('consultaPorSala').style.display = 'inline';
	document.getElementById('consultaPorEquipamento').style.display = 'none';
}

function exibeConsultaPorEquipamento(){
	document.getElementById('consultaPorEquipamento').style.display = 'inline';
	document.getElementById('consultaPorSala').style.display = 'none';
}
function abrir_janela(url)

{

opcoes = "channelmode=0, directories=0, fullscreen=0, location=0, ";

opcoes = opcoes + "menubar=0, resizable=1, scrollbars=1, status=0, ";

opcoes = opcoes + "titlebar=0, toolbar=0, width=400, height=210";

window.open(url, "remote", opcoes);

}