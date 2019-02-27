
// mostrarimagenes ocultas
function mostrar(){
	document.getElementById('a').style.display = 'block';
	document.getElementById('b').style.display = 'block';
	document.getElementById('c').style.display = 'block';
	document.getElementById('d').style.display = 'block';
	document.getElementById('e').style.display = 'block';
	document.getElementById('f').style.display = 'block';
	document.getElementById('g').style.display = 'block';
	document.getElementById('h').style.display = 'block';
	document.getElementById('i').style.display = 'block';
	document.getElementById('j').style.display = 'block';
	document.getElementById('k').style.display = 'block';
	document.getElementById('l').style.display = 'block';
	document.getElementById('m').style.display = 'block';
	document.getElementById('n').style.display = 'block';
	document.getElementById('o').style.display = 'block';
	document.getElementById('p').style.display = 'block';
	document.getElementById('q').style.display = 'block';
	document.getElementById('r').style.display = 'block';
	document.getElementById('s').style.display = 'block';
	document.getElementById('t').style.display = 'block';
	document.getElementById('u').style.display = 'block';
	document.getElementById('v').style.display = 'block';
	document.getElementById('w').style.display = 'block';
	document.getElementById('x').style.display = 'block';
	document.getElementById('y').style.display = 'block';
	document.getElementById('z').style.display = 'block';
	document.getElementById('aa').style.display = 'block';
	document.getElementById('bb').style.display = 'block';
	document.getElementById('cc').style.display = 'block';
	document.getElementById('dd').style.display = 'block';
	document.getElementById('ee').style.display = 'block';
	document.getElementById('ff').style.display = 'block';
	document.getElementById('gg').style.display = 'block';
	document.getElementById('hh').style.display = 'block';
	document.getElementById('ii').style.display = 'block';
	document.getElementById('jj').style.display = 'block';
	// document.getElementById('kk').style.display = 'block';
	// document.getElementById('ll').style.display = 'block';
	// document.getElementById('mm').style.display = 'block';
	// document.getElementById('nn').style.display = 'block';
	// document.getElementById('oo').style.display = 'block';
	// document.getElementById('pp').style.display = 'block';
}



//funcion cambiar imagen aleatoriamente
function rand(n){
	return(Math.floor(Math.random() * n + 1 ));
}

var cambia_imagen = new Array();
cambia_imagen[0] = "image/1.png";
cambia_imagen[1] = "image/2.png";
cambia_imagen[2] = "image/3.png";
cambia_imagen[3] = "image/4.png";

function cambiar(){
	document.getElementById("a").src = cambia_imagen[rand(4)-1];
	document.getElementById("b").src = cambia_imagen[rand(4)-1];
	document.getElementById("c").src = cambia_imagen[rand(4)-1];
	document.getElementById("d").src = cambia_imagen[rand(4)-1];
	document.getElementById("e").src = cambia_imagen[rand(4)-1];
	document.getElementById("f").src = cambia_imagen[rand(4)-1];
	document.getElementById("g").src = cambia_imagen[rand(4)-1];
	document.getElementById("j").src = cambia_imagen[rand(4)-1];
	document.getElementById("h").src = cambia_imagen[rand(4)-1];
	document.getElementById("i").src = cambia_imagen[rand(4)-1];
	document.getElementById("j").src = cambia_imagen[rand(4)-1];
	document.getElementById("k").src = cambia_imagen[rand(4)-1];
	document.getElementById("l").src = cambia_imagen[rand(4)-1];
	document.getElementById("m").src = cambia_imagen[rand(4)-1];
	document.getElementById("n").src = cambia_imagen[rand(4)-1];
	document.getElementById("o").src = cambia_imagen[rand(4)-1];
	document.getElementById("p").src = cambia_imagen[rand(4)-1];
	document.getElementById("q").src = cambia_imagen[rand(4)-1];
	document.getElementById("r").src = cambia_imagen[rand(4)-1];
	document.getElementById("s").src = cambia_imagen[rand(4)-1];
	document.getElementById("t").src = cambia_imagen[rand(4)-1];
	document.getElementById("u").src = cambia_imagen[rand(4)-1];
	document.getElementById("v").src = cambia_imagen[rand(4)-1];
	document.getElementById("w").src = cambia_imagen[rand(4)-1];
	document.getElementById("x").src = cambia_imagen[rand(4)-1];
	document.getElementById("y").src = cambia_imagen[rand(4)-1];
	document.getElementById("z").src = cambia_imagen[rand(4)-1];
	document.getElementById("aa").src = cambia_imagen[rand(4)-1];
	document.getElementById("bb").src = cambia_imagen[rand(4)-1];
	document.getElementById("cc").src = cambia_imagen[rand(4)-1];
	document.getElementById("dd").src = cambia_imagen[rand(4)-1];
	document.getElementById("ee").src = cambia_imagen[rand(4)-1];
	document.getElementById("ff").src = cambia_imagen[rand(4)-1];
	document.getElementById("gg").src = cambia_imagen[rand(4)-1];
	document.getElementById("hh").src = cambia_imagen[rand(4)-1];
	document.getElementById("ii").src = cambia_imagen[rand(4)-1];
	document.getElementById("jj").src = cambia_imagen[rand(4)-1];
	// document.getElementById("kk").src = cambia_imagen[rand(4)-1];
	// document.getElementById("ll").src = cambia_imagen[rand(4)-1];
	// document.getElementById("mm").src = cambia_imagen[rand(4)-1];
	// document.getElementById("nn").src = cambia_imagen[rand(4)-1];
	// document.getElementById("oo").src = cambia_imagen[rand(4)-1];
	// document.getElementById("pp").src = cambia_imagen[rand(4)-1];
}




// funcion contador 
function inicio() {
	var salida = document.getElementById("tiempo"),
	minutos = 2,
	segundos = 0,

	intervalo = setInterval(function(){
		if (--segundos < 0){
			segundos = 59;
			minutos--;
		}
		if (!minutos && !segundos)
			clearInterval(intervalo);
		salida.innerHTML = minutos + ":" + (segundos < 10 ? "0" + segundos : segundos);
		document.getElementById("tiempo").style.color="#ffff00";
		// document.getElementById("tiempo").exportImage();
	}, 1000);

}







//funcion cambiar estilo y mostrar nuevo mensaje al finalizar el tiempo
var div = document.getElementById('container')
var div1 = document.getElementById('modificable2')
var div2 = document.getElementById('contenido')

function saludo(){
	var parent = div.parentElement;
	parent.removeChild(div);



	if (document.getElementById("modificable").style.width == '100%') {
		document.getElementById("modificable").style.width = '1200px';
		document.getElementById("modificable").style.height = '150px';
	} 
	if (document.getElementById("modificable1").style.width == '100%') {
		document.getElementById("modificable1").style.width = '1200px';
		document.getElementById("modificable1").style.height = '150px';
	}
	if (document.getElementById("modificable2").style.width == '100%') {
		var ocultar = div1.parentElement;
		ocultar.removeChild(div1);



	}
	if (document.getElementById("modificable3").style.width == '100%') {

		document.getElementById('cambio').style.display = 'block';
		document.getElementById("cambio").style.width = '1200px';
		document.getElementById("cambio").style.height = '150px';
}

}





  //funcion cambiar texto de iniciar a reiniciar

  function cambiarboton() {
  	document.getElementById('nuevoboton').style.display = 'block';
  	document.getElementById('boton').style.display = 'none';
  }


//funcion reiniciar la pagina
function reiniciar(){
	location.reload();
}



    // function funcionPrincipal(parpadeo, eliminarElemento,moviminto){

    	function funcionPrincipal(parpadeo, eliminarElemento){
    //código de la función principal
    parpadeo();
    
    var miVar = setInterval(function(){ eliminarElemento() }, 8000);
    

    
}



// funcion parpadeo 
function parpadeoOn(){

	var a = document.getElementById('a');	
	var b = document.getElementById("b");
	var c = document.getElementById("c");
	var d = document.getElementById("d");
	var e = document.getElementById("e");
	var f = document.getElementById("f");
	var g = document.getElementById("g");
	var h = document.getElementById("h");

	var i = document.getElementById('i');	
	var j = document.getElementById("j");
	var k = document.getElementById("k");
	var l = document.getElementById("l");
	var m = document.getElementById("m");
	var n = document.getElementById("n");
	var o = document.getElementById("o");
	var p = document.getElementById("p");

	var q = document.getElementById('q');	
	var r = document.getElementById("r");
	var s = document.getElementById("s");
	var t = document.getElementById("t");
	var u = document.getElementById("u");
	var v = document.getElementById("v");
	var w = document.getElementById("w");
	var x = document.getElementById("x");

	var y = document.getElementById('y');	
	var z = document.getElementById("z");
	var aa = document.getElementById("aa");
	var bb = document.getElementById("bb");
	var cc = document.getElementById("cc");
	var dd = document.getElementById("dd");
	var ee = document.getElementById("ee");
	var ff = document.getElementById("ff");

	var gg = document.getElementById("gg");
	var hh = document.getElementById("hh");
	var ii = document.getElementById("ii");
	var jj = document.getElementById("jj");

	if (a.src == b.src && a.src == c.src && b.src == c.src ) {


		if (a.style.visibility == "visible"){
			a.style.visibility = "hidden";
		}else{
			a.style.visibility = "visible";
		}

		if (b.style.visibility == "visible"){
			b.style.visibility = "hidden";
		}else{
			b.style.visibility = "visible";
		}

		if (c.style.visibility == "visible"){
			c.style.visibility = "hidden";
		}else{
			c.style.visibility = "visible";
		}

	}

	if (d.src==e.src && d.src==f.src && e.src==f.src ) {

		if (d.style.visibility == "visible"){
			d.style.visibility = "hidden";
		}else{
			d.style.visibility = "visible";
		}

		if (e.style.visibility == "visible"){
			e.style.visibility = "hidden";
		}else{
			e.style.visibility = "visible";
		}

		if (f.style.visibility == "visible"){
			f.style.visibility = "hidden";
		}else{
			f.style.visibility = "visible";
		}

	} 

	if (g.src==h.src && g.src==i.src && h.src==i.src ) {

		if (g.style.visibility == "visible"){
			g.style.visibility = "hidden";
		}else{
			g.style.visibility = "visible";
		}

		if (h.style.visibility == "visible"){
			h.style.visibility = "hidden";
		}else{
			h.style.visibility = "visible";
		}

		if (i.style.visibility == "visible"){
			i.style.visibility = "hidden";
		}else{
			i.style.visibility = "visible";
		}

	} 


	if (j.src==k.src && j.src==l.src && k.src==l.src ) {

		if (j.style.visibility == "visible"){
			j.style.visibility = "hidden";
		}else{
			j.style.visibility = "visible";
		}
		if (k.style.visibility == "visible"){
			k.style.visibility = "hidden";
		}else{
			k.style.visibility = "visible";
		}
		if (l.style.visibility == "visible"){
			l.style.visibility = "hidden";
		}else{
			l.style.visibility = "visible";
		}

	} 

	if (n.src==m.src && n.src==o.src && m.src==o.src ) {

		if (n.style.visibility == "visible"){
			n.style.visibility = "hidden";
		}else{
			n.style.visibility = "visible";
		}
		if (m.style.visibility == "visible"){
			m.style.visibility = "hidden";
		}else{
			m.style.visibility = "visible";
		}
		if (o.style.visibility == "visible"){
			o.style.visibility = "hidden";
		}else{
			o.style.visibility = "visible";
		}

	} 

	if (p.src==q.src && p.src==r.src && q.src==r.src ) {

		if (p.style.visibility == "visible"){
			p.style.visibility = "hidden";
		}else{
			p.style.visibility = "visible";
		}
		if (q.style.visibility == "visible"){
			q.style.visibility = "hidden";
		}else{
			q.style.visibility = "visible";
		}
		if (r.style.visibility == "visible"){
			r.style.visibility = "hidden";
		}else{
			r.style.visibility = "visible";
		}

	}

	if (s.src==t.src && s.src==u.src && t.src==u.src ) {

		if (s.style.visibility == "visible"){
			s.style.visibility = "hidden";
		}else{
			s.style.visibility = "visible";
		}
		if (t.style.visibility == "visible"){
			t.style.visibility = "hidden";
		}else{
			t.style.visibility = "visible";
		}
		if (u.style.visibility == "visible"){
			u.style.visibility = "hidden";
		}else{
			u.style.visibility = "visible";
		}

	}

	if (v.src==w.src && v.src==x.src && w.src==x.src ) {

		if (v.style.visibility == "visible"){
			v.style.visibility = "hidden";
		}else{
			v.style.visibility = "visible";
		}
		if (w.style.visibility == "visible"){
			w.style.visibility = "hidden";
		}else{
			w.style.visibility = "visible";
		}
		if (x.style.visibility == "visible"){
			x.style.visibility = "hidden";
		}else{
			x.style.visibility = "visible";
		}

	}

	if (y.src==z.src && y.src==aa.src && z.src==aa.src ) {

		if (y.style.visibility == "visible"){
			y.style.visibility = "hidden";
		}else{
			y.style.visibility = "visible";
		}
		if (z.style.visibility == "visible"){
			z.style.visibility = "hidden";
		}else{
			z.style.visibility = "visible";
		}
		if (aa.style.visibility == "visible"){
			aa.style.visibility = "hidden";
		}else{
			aa.style.visibility = "visible";
		}

	} 

	if (bb.src==cc.src && bb.src==dd.src &&cc.src==dd.src ) {

		if (bb.style.visibility == "visible"){
			bb.style.visibility = "hidden";
		}else{
			bb.style.visibility = "visible";
		}
		if (cc.style.visibility == "visible"){
			cc.style.visibility = "hidden";
		}else{
			cc.style.visibility = "visible";
		}
		if (dd.style.visibility == "visible"){
			dd.style.visibility = "hidden";
		}else{
			dd.style.visibility = "visible";
		}

	}

	if (ee.src==ff.src && ee.src==gg.src && ff.src==gg.src ) {

		if (ee.style.visibility == "visible"){
			ee.style.visibility = "hidden";
		}else{
			ee.style.visibility = "visible";
		}
		if (ff.style.visibility == "visible"){
			ff.style.visibility = "hidden";
		}else{
			ff.style.visibility = "visible";
		}
		if (gg.style.visibility == "visible"){
			gg.style.visibility = "hidden";
		}else{
			gg.style.visibility = "visible";
		}

	}

	if (hh.src==ii.src && hh.src==jj.src && ii.src==jj.src ) {

		if (hh.style.visibility == "visible"){
			hh.style.visibility = "hidden";
		}else{
			hh.style.visibility = "visible";
		}
		if (ii.style.visibility == "visible"){
			ii.style.visibility = "hidden";
		}else{
			ii.style.visibility = "visible";
		}
		if (jj.style.visibility == "visible"){
			jj.style.visibility = "hidden";
		}else{
			jj.style.visibility = "visible";
		}

	}

	if (a.src==g.src && a.src==m.src && g.src==m.src ) {

		if (a.style.visibility == "visible"){
			a.style.visibility = "hidden";
		}else{
			a.style.visibility = "visible";
		}
		if (g.style.visibility == "visible"){
			g.style.visibility = "hidden";
		}else{
			g.style.visibility = "visible";
		}
		if (m.style.visibility == "visible"){
			m.style.visibility = "hidden";
		}else{
			m.style.visibility = "visible";
		}

	}

		if (s.src==y.src && s.src==ee.src && y.src==ee.src ) {

		if (s.style.visibility == "visible"){
			s.style.visibility = "hidden";
		}else{
			s.style.visibility = "visible";
		}
		if (y.style.visibility == "visible"){
			y.style.visibility = "hidden";
		}else{
			y.style.visibility = "visible";
		}
		if (ee.style.visibility == "visible"){
			ee.style.visibility = "hidden";
		}else{
			ee.style.visibility = "visible";
		}

		}

	if (b.src==h.src && b.src==n.src && h.src==n.src ) {

		if (b.style.visibility == "visible"){
			b.style.visibility = "hidden";
		}else{
			b.style.visibility = "visible";
		}
		if (h.style.visibility == "visible"){
			h.style.visibility = "hidden";
		}else{
			h.style.visibility = "visible";
		}
		if (n.style.visibility == "visible"){
			n.style.visibility = "hidden";
		}else{
			n.style.visibility = "visible";
		}

	}

	if (t.src==z.src && t.src==ff.src && z.src==ff.src ) {

		if (t.style.visibility == "visible"){
			t.style.visibility = "hidden";
		}else{
			t.style.visibility = "visible";
		}
		if (z.style.visibility == "visible"){
			z.style.visibility = "hidden";
		}else{
			z.style.visibility = "visible";
		}
		if (ff.style.visibility == "visible"){
			ff.style.visibility = "hidden";
		}else{
			ff.style.visibility = "visible";
		}

	}

	if (c.src==i.src && c.src==o.src && i.src==o.src ) {

		if (c.style.visibility == "visible"){
			c.style.visibility = "hidden";
		}else{
			c.style.visibility = "visible";
		}
		if (i.style.visibility == "visible"){
			i.style.visibility = "hidden";
		}else{
			i.style.visibility = "visible";
		}
		if (o.style.visibility == "visible"){
			o.style.visibility = "hidden";
		}else{
			o.style.visibility = "visible";
		}
	}

	if (u.src==aa.src && u.src==gg.src && aa.src==gg.src ) {

		if (u.style.visibility == "visible"){
			u.style.visibility = "hidden";
		}else{
			u.style.visibility = "visible";
		}
		if (aa.style.visibility == "visible"){
			aa.style.visibility = "hidden";
		}else{
			aa.style.visibility = "visible";
		}
		if (gg.style.visibility == "visible"){
			gg.style.visibility = "hidden";
		}else{
			gg.style.visibility = "visible";
		}

	}


	if (d.src==j.src && d.src==p.src && j.src==p.src ) {

		if (d.style.visibility == "visible"){
			d.style.visibility = "hidden";
		}else{
			d.style.visibility = "visible";
		}
		if (j.style.visibility == "visible"){
			j.style.visibility = "hidden";
		}else{
			j.style.visibility = "visible";
		}
		if (p.style.visibility == "visible"){
			p.style.visibility = "hidden";
		}else{
			p.style.visibility = "visible";
		}

	}

	if (v.src==bb.src && v.src==hh.src && bb.src==hh.src ) {

		if (v.style.visibility == "visible"){
			v.style.visibility = "hidden";
		}else{
			v.style.visibility = "visible";
		}
		if (bb.style.visibility == "visible"){
			bb.style.visibility = "hidden";
		}else{
			bb.style.visibility = "visible";
		}
		if (hh.style.visibility == "visible"){
			hh.style.visibility = "hidden";
		}else{
			hh.style.visibility = "visible";
		}

	}


	if (e.src==k.src && e.src==q.src && k.src==q.src ) {

		if (e.style.visibility == "visible"){
			e.style.visibility = "hidden";
		}else{
			e.style.visibility = "visible";
		}
		if (k.style.visibility == "visible"){
			k.style.visibility = "hidden";
		}else{
			k.style.visibility = "visible";
		}
		if (q.style.visibility == "visible"){
			q.style.visibility = "hidden";
		}else{
			q.style.visibility = "visible";
		}

	}

	if (w.src==cc.src && w.src==ii.src && cc.src==ii.src ) {

		if (w.style.visibility == "visible"){
			w.style.visibility = "hidden";
		}else{
			w.style.visibility = "visible";
		}
		if (cc.style.visibility == "visible"){
			cc.style.visibility = "hidden";
		}else{
			cc.style.visibility = "visible";
		}
		if (ii.style.visibility == "visible"){
			ii.style.visibility = "hidden";
		}else{
			ii.style.visibility = "visible";
		}

	}

	if (f.src==l.src && f.src==r.src && l.src==r.src ) {

		if (f.style.visibility == "visible"){
			f.style.visibility = "hidden";
		}else{
			f.style.visibility = "visible";
		}
		if (l.style.visibility == "visible"){
			l.style.visibility = "hidden";
		}else{
			l.style.visibility = "visible";
		}
		if (r.style.visibility == "visible"){
			r.style.visibility = "hidden";
		}else{
			r.style.visibility = "visible";
		}

	}

	if (x.src==dd.src && x.src==jj.src && dd.src==jj.src ) {

		if (x.style.visibility == "visible"){
			x.style.visibility = "hidden";
		}else{
			x.style.visibility = "visible";
		}
		if (dd.style.visibility == "visible"){
			dd.style.visibility = "hidden";
		}else{
			dd.style.visibility = "visible";
		}
		if (jj.style.visibility == "visible"){
			jj.style.visibility = "hidden";
		}else{
			jj.style.visibility = "visible";
		}

	}

	if (ii.src==hh.src && ii.src==gg.src && hh.src==gg.src ) {

		if (ii.style.visibility == "visible"){
			ii.style.visibility = "hidden";
		}else{
			ii.style.visibility = "visible";
		}
		if (hh.style.visibility == "visible"){
			hh.style.visibility = "hidden";
		}else{
			hh.style.visibility = "visible";
		}
		if (gg.style.visibility == "visible"){
			gg.style.visibility = "hidden";
		}else{
			gg.style.visibility = "visible";
		}

	}

	if (cc.src==bb.src && cc.src==aa.src && bb.src==aa.src ) {

		if (cc.style.visibility == "visible"){
			cc.style.visibility = "hidden";
		}else{
			cc.style.visibility = "visible";
		}
		if (bb.style.visibility == "visible"){
			bb.style.visibility = "hidden";
		}else{
			bb.style.visibility = "visible";
		}
		if (aa.style.visibility == "visible"){
			aa.style.visibility = "hidden";
		}else{
			aa.style.visibility = "visible";
		}

	}

		if (w.src==v.src && w.src==u.src && v.src==u.src ) {

		if (w.style.visibility == "visible"){
			w.style.visibility = "hidden";
		}else{
			w.style.visibility = "visible";
		}
		if (v.style.visibility == "visible"){
			v.style.visibility = "hidden";
		}else{
			v.style.visibility = "visible";
		}
		if (u.style.visibility == "visible"){
			u.style.visibility = "hidden";
		}else{
			u.style.visibility = "visible";
		}

	}

		if (q.src==p.src && q.src==o.src && p.src==o.src ) {

		if (q.style.visibility == "visible"){
			q.style.visibility = "hidden";
		}else{
			q.style.visibility = "visible";
		}
		if (p.style.visibility == "visible"){
			p.style.visibility = "hidden";
		}else{
			p.style.visibility = "visible";
		}
		if (o.style.visibility == "visible"){
			o.style.visibility = "hidden";
		}else{
			o.style.visibility = "visible";
		}

	}

		if (k.src==j.src && k.src==i.src && j.src==i.src ) {

		if (k.style.visibility == "visible"){
			k.style.visibility = "hidden";
		}else{
			k.style.visibility = "visible";
		}
		if (j.style.visibility == "visible"){
			j.style.visibility = "hidden";
		}else{
			j.style.visibility = "visible";
		}
		if (i.style.visibility == "visible"){
			i.style.visibility = "hidden";
		}else{
			i.style.visibility = "visible";
		}

	}

		if (e.src==d.src && e.src==c.src && d.src==c.src ) {

		if (e.style.visibility == "visible"){
			e.style.visibility = "hidden";
		}else{
			e.style.visibility = "visible";
		}
		if (d.style.visibility == "visible"){
			d.style.visibility = "hidden";
		}else{
			d.style.visibility = "visible";
		}
		if (c.style.visibility == "visible"){
			c.style.visibility = "hidden";
		}else{
			c.style.visibility = "visible";
		}

	}

	if (d.src==c.src && d.src==b.src && c.src==b.src ) {

		if (d.style.visibility == "visible"){
			d.style.visibility = "hidden";
		}else{
			d.style.visibility = "visible";
		}
		if (c.style.visibility == "visible"){
			c.style.visibility = "hidden";
		}else{
			c.style.visibility = "visible";
		}
		if (b.style.visibility == "visible"){
			b.style.visibility = "hidden";
		}else{
			b.style.visibility = "visible";
		}

	}

	if (j.src==i.src && j.src==h.src && i.src==h.src ) {

		if (j.style.visibility == "visible"){
			j.style.visibility = "hidden";
		}else{
			j.style.visibility = "visible";
		}
		if (i.style.visibility == "visible"){
			i.style.visibility = "hidden";
		}else{
			i.style.visibility = "visible";
		}
		if (h.style.visibility == "visible"){
			h.style.visibility = "hidden";
		}else{
			h.style.visibility = "visible";
		}

	}

	if (p.src==o.src && p.src==n.src && o.src==n.src ) {

		if (p.style.visibility == "visible"){
			p.style.visibility = "hidden";
		}else{
			p.style.visibility = "visible";
		}
		if (o.style.visibility == "visible"){
			o.style.visibility = "hidden";
		}else{
			o.style.visibility = "visible";
		}
		if (n.style.visibility == "visible"){
			n.style.visibility = "hidden";
		}else{
			n.style.visibility = "visible";
		}

	}

	if (v.src==u.src && v.src==t.src && u.src==t.src ) {

		if (v.style.visibility == "visible"){
			v.style.visibility = "hidden";
		}else{
			v.style.visibility = "visible";
		}
		if (u.style.visibility == "visible"){
			u.style.visibility = "hidden";
		}else{
			u.style.visibility = "visible";
		}
		if (t.style.visibility == "visible"){
			t.style.visibility = "hidden";
		}else{
			t.style.visibility = "visible";
		}

	}

	if (bb.src==aa.src && bb.src==z.src && aa.src==z.src ) {

		if (bb.style.visibility == "visible"){
			bb.style.visibility = "hidden";
		}else{
			bb.style.visibility = "visible";
		}
		if (aa.style.visibility == "visible"){
			aa.style.visibility = "hidden";
		}else{
			aa.style.visibility = "visible";
		}
		if (z.style.visibility == "visible"){
			z.style.visibility = "hidden";
		}else{
			z.style.visibility = "visible";
		}

	}

	if (hh.src==gg.src && hh.src==ff.src && gg.src==ff.src ) {

		if (hh.style.visibility == "visible"){
			hh.style.visibility = "hidden";
		}else{
			hh.style.visibility = "visible";
		}
		if (gg.style.visibility == "visible"){
			gg.style.visibility = "hidden";
		}else{
			gg.style.visibility = "visible";
		}
		if (ff.style.visibility == "visible"){
			ff.style.visibility = "hidden";
		}else{
			ff.style.visibility = "visible";
		}

	}

	if (g.src==m.src && g.src==s.src && m.src==s.src ) {

		if (g.style.visibility == "visible"){
			g.style.visibility = "hidden";
		}else{
			g.style.visibility = "visible";
		}
		if (m.style.visibility == "visible"){
			m.style.visibility = "hidden";
		}else{
			m.style.visibility = "visible";
		}
		if (s.style.visibility == "visible"){
			s.style.visibility = "hidden";
		}else{
			s.style.visibility = "visible";
		}

	}

	if (m.src==s.src && m.src==y.src && s.src==y.src ) {

		if (m.style.visibility == "visible"){
			m.style.visibility = "hidden";
		}else{
			m.style.visibility = "visible";
		}
		if (s.style.visibility == "visible"){
			s.style.visibility = "hidden";
		}else{
			s.style.visibility = "visible";
		}
		if (y.style.visibility == "visible"){
			y.style.visibility = "hidden";
		}else{
			y.style.visibility = "visible";
		}

	}

	if (h.src==n.src && h.src==t.src && n.src==t.src ) {

		if (h.style.visibility == "visible"){
			h.style.visibility = "hidden";
		}else{
			h.style.visibility = "visible";
		}
		if (n.style.visibility == "visible"){
			n.style.visibility = "hidden";
		}else{
			n.style.visibility = "visible";
		}
		if (t.style.visibility == "visible"){
			t.style.visibility = "hidden";
		}else{
			t.style.visibility = "visible";
		}

	}

	if (n.src==t.src && n.src==z.src && t.src==z.src ) {

		if (n.style.visibility == "visible"){
			n.style.visibility = "hidden";
		}else{
			n.style.visibility = "visible";
		}
		if (t.style.visibility == "visible"){
			t.style.visibility = "hidden";
		}else{
			t.style.visibility = "visible";
		}
		if (z.style.visibility == "visible"){
			z.style.visibility = "hidden";
		}else{
			z.style.visibility = "visible";
		}

	}

	if (i.src==o.src && i.src==u.src && o.src==u.src ) {

		if (i.style.visibility == "visible"){
			i.style.visibility = "hidden";
		}else{
			i.style.visibility = "visible";
		}
		if (o.style.visibility == "visible"){
			o.style.visibility = "hidden";
		}else{
			o.style.visibility = "visible";
		}
		if (u.style.visibility == "visible"){
			u.style.visibility = "hidden";
		}else{
			u.style.visibility = "visible";
		}

	}

	if (o.src==u.src && o.src==aa.src && u.src==aa.src ) {

		if (o.style.visibility == "visible"){
			o.style.visibility = "hidden";
		}else{
			o.style.visibility = "visible";
		}
		if (u.style.visibility == "visible"){
			u.style.visibility = "hidden";
		}else{
			u.style.visibility = "visible";
		}
		if (aa.style.visibility == "visible"){
			aa.style.visibility = "hidden";
		}else{
			aa.style.visibility = "visible";
		}

	}

	if (j.src==p.src && j.src==v.src && p.src==v.src ) {

		if (j.style.visibility == "visible"){
			j.style.visibility = "hidden";
		}else{
			j.style.visibility = "visible";
		}
		if (p.style.visibility == "visible"){
			p.style.visibility = "hidden";
		}else{
			p.style.visibility = "visible";
		}
		if (v.style.visibility == "visible"){
			v.style.visibility = "hidden";
		}else{
			v.style.visibility = "visible";
		}

	}

	if (k.src==q.src && k.src==w.src && q.src==w.src ) {

		if (k.style.visibility == "visible"){
			k.style.visibility = "hidden";
		}else{
			k.style.visibility = "visible";
		}
		if (q.style.visibility == "visible"){
			q.style.visibility = "hidden";
		}else{
			q.style.visibility = "visible";
		}
		if (w.style.visibility == "visible"){
			w.style.visibility = "hidden";
		}else{
			w.style.visibility = "visible";
		}

	}

	if (q.src==w.src && q.src==cc.src && w.src==cc.src ) {

		if (q.style.visibility == "visible"){
			q.style.visibility = "hidden";
		}else{
			q.style.visibility = "visible";
		}
		if (w.style.visibility == "visible"){
			w.style.visibility = "hidden";
		}else{
			w.style.visibility = "visible";
		}
		if (cc.style.visibility == "visible"){
			cc.style.visibility = "hidden";
		}else{
			cc.style.visibility = "visible";
		}

	}

	if (l.src==r.src && l.src==x.src && r.src==x.src ) {

		if (l.style.visibility == "visible"){
			l.style.visibility = "hidden";
		}else{
			l.style.visibility = "visible";
		}
		if (r.style.visibility == "visible"){
			r.style.visibility = "hidden";
		}else{
			r.style.visibility = "visible";
		}
		if (x.style.visibility == "visible"){
			x.style.visibility = "hidden";
		}else{
			x.style.visibility = "visible";
		}

	}

	if (r.src==x.src && r.src==dd.src && x.src==dd.src ) {

		if (r.style.visibility == "visible"){
			r.style.visibility = "hidden";
		}else{
			r.style.visibility = "visible";
		}
		if (x.style.visibility == "visible"){
			x.style.visibility = "hidden";
		}else{
			x.style.visibility = "visible";
		}
		if (dd.style.visibility == "visible"){
			dd.style.visibility = "hidden";
		}else{
			dd.style.visibility = "visible";
		}

	}






	}



	function parpadeo(){
		parpadeoencendido=setInterval("parpadeoOn()", 500);
	}



 //funcion eliminar y sustituir elemento elemento

 function eliminarElemento(){
 	contador= 0;
 	puntos=0;

 	a = document.getElementById('a').src;	
 	b = document.getElementById("b").src;
 	c = document.getElementById("c").src;
 	d = document.getElementById("d").src;
 	e = document.getElementById("e").src;
 	f = document.getElementById("f").src;
 	g = document.getElementById("g").src;
 	h = document.getElementById("h").src;

 	i = document.getElementById('i').src;	
 	j = document.getElementById("j").src;
 	k = document.getElementById("k").src;
 	l = document.getElementById("l").src;
 	m = document.getElementById("m").src;
 	n = document.getElementById("n").src;
 	o = document.getElementById("o").src;
 	p = document.getElementById("p").src;

 	q = document.getElementById('q').src;	
 	r = document.getElementById("r").src;
 	s = document.getElementById("s").src;
 	t = document.getElementById("t").src;
 	u = document.getElementById("u").src;
 	v = document.getElementById("v").src;
 	w = document.getElementById("w").src;
 	x = document.getElementById("x").src;

 	y = document.getElementById('y').src;	
 	z = document.getElementById("z").src;
 	aa = document.getElementById("aa").src;
 	bb = document.getElementById("bb").src;
 	cc = document.getElementById("cc").src;
 	dd = document.getElementById("dd").src;
 	ee = document.getElementById("ee").src;
 	ff = document.getElementById("ff").src;
 	
 	gg = document.getElementById("gg").src;
 	hh = document.getElementById("hh").src;
 	ii = document.getElementById("ii").src;
 	jj = document.getElementById("jj").src;
 	


 
 	if (a==b  && a==c && b==c) {

 		var elem = document.getElementById("a");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("b");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("c");
 		elem.parentNode.removeChild(elem);

 		abc();

 	 	document.getElementById("d").style.marginTop = "-0px", 10000;
  		document.getElementById("e").style.marginTop = "-120px", 10000;
  		document.getElementById("f").style.marginTop = "-240px", 10000;

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (d==e && d==f && e==f ) {


 		var elem = document.getElementById("d");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("e");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("f");
 		elem.parentNode.removeChild(elem);

 		def();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	} 

 	if (g==h && g==i && h==i ) {

 		var elem = document.getElementById("g");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("h");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("i");
 		elem.parentNode.removeChild(elem);

 		ghi();

 		document.getElementById("j").style.marginTop = "-0px", 10000;
  		document.getElementById("k").style.marginTop = "-120px", 10000;
  		document.getElementById("l").style.marginTop = "-240px", 10000;

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	} 

 	if (j==k && j==l && k==l ) {

 		var elem = document.getElementById("j");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("k");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("l");
 		elem.parentNode.removeChild(elem);

 		jkl();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	} 

 	if (m==n && m==o && n==o ) {

 		var elem = document.getElementById("m");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("n");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("o");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("p").style.marginTop = "-0px", 10000;
  		document.getElementById("q").style.marginTop = "-120px", 10000;
  		document.getElementById("r").style.marginTop = "-240px", 10000;

  		mno();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	} 

 	if (p==q && p==r && q==r ) {

 		var elem = document.getElementById("p");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("q");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("r");
 		elem.parentNode.removeChild(elem);

 		pqr();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (s==t && s==u && t==u ) {

 		var elem = document.getElementById("s");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("t");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("u");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("v").style.marginTop = "-0px", 10000;
  		document.getElementById("w").style.marginTop = "-120px", 10000;
  		document.getElementById("x").style.marginTop = "-240px", 10000;

  		stu();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	} 

 	if (v==w && v==x && w==x ) {

 		var elem = document.getElementById("v");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("w");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("x");
 		elem.parentNode.removeChild(elem);

 		vwx();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (y==z && y==aa && z==aa ) {

 		var elem = document.getElementById("y");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("z");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("aa");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("bb").style.marginTop = "-0px", 10000;
  		document.getElementById("cc").style.marginTop = "-120px", 10000;
  		document.getElementById("dd").style.marginTop = "-240px", 10000;

  		yzaa();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (bb==cc && bb==dd && cc==dd ) {

 		var elem = document.getElementById("bb");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("cc");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("dd");
 		elem.parentNode.removeChild(elem);

 		bbccdd();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (ee==ff && ee==gg && ff==gg ) {

 		var elem = document.getElementById("ee");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("ff");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("gg");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("hh").style.marginTop = "-0px", 10000;
  		document.getElementById("ii").style.marginTop = "-120px", 10000;
  		document.getElementById("jj").style.marginTop = "-240px", 10000;

  		eeffgg();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (hh==ii && hh==jj && ii==jj ) {

 		var elem = document.getElementById("hh");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("ii");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("jj");
 		elem.parentNode.removeChild(elem);

 		hhiijj();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (a==g && a==m && g==m ) {

 		var elem = document.getElementById("a");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("g");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("m");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("b").style.marginTop = "-0px", 10000;
  		document.getElementById("h").style.marginTop = "-0px", 10000;
  		document.getElementById("n").style.marginTop = "-0px", 10000;
  		document.getElementById("c").style.marginTop = "-120px", 10000;
  		document.getElementById("i").style.marginTop = "-120px", 10000;
  		document.getElementById("o").style.marginTop = "-120px", 10000;
  		document.getElementById("d").style.marginTop = "-240px", 10000;
  		document.getElementById("j").style.marginTop = "-240px", 10000;
  		document.getElementById("p").style.marginTop = "-240px", 10000;
  		document.getElementById("e").style.marginTop = "-360px", 10000;
  		document.getElementById("k").style.marginTop = "-360px", 10000;
  		document.getElementById("q").style.marginTop = "-360px", 10000;
  		document.getElementById("f").style.marginTop = "-470px", 10000;
  		document.getElementById("l").style.marginTop = "-470px", 10000;
  		document.getElementById("r").style.marginTop = "-470px", 10000;

  		agm();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (b==h && b==n && h==n ) {

 		var elem = document.getElementById("b");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("h");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("n");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("c").style.marginTop = "-120px", 10000;
  		document.getElementById("i").style.marginTop = "-120px", 10000;
  		document.getElementById("o").style.marginTop = "-120px", 10000;
  		document.getElementById("d").style.marginTop = "-240px", 10000;
  		document.getElementById("j").style.marginTop = "-240px", 10000;
  		document.getElementById("p").style.marginTop = "-240px", 10000;
  		document.getElementById("e").style.marginTop = "-360px", 10000;
  		document.getElementById("k").style.marginTop = "-360px", 10000;
  		document.getElementById("q").style.marginTop = "-360px", 10000;
  		document.getElementById("f").style.marginTop = "-470px", 10000;
  		document.getElementById("l").style.marginTop = "-470px", 10000;
  		document.getElementById("r").style.marginTop = "-470px", 10000;

  		bhn();
 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (c==i && c==o && i==o ) {

 		var elem = document.getElementById("c");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("i");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("o");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("d").style.marginTop = "-240px", 10000;
  		document.getElementById("j").style.marginTop = "-240px", 10000;
  		document.getElementById("p").style.marginTop = "-240px", 10000;
  		document.getElementById("e").style.marginTop = "-360px", 10000;
  		document.getElementById("k").style.marginTop = "-360px", 10000;
  		document.getElementById("q").style.marginTop = "-360px", 10000;
  		document.getElementById("f").style.marginTop = "-470px", 10000;
  		document.getElementById("l").style.marginTop = "-470px", 10000;
  		document.getElementById("r").style.marginTop = "-470px", 10000;

  		cio();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (d==j && d==p && j==p ) {

 		var elem = document.getElementById("d");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("j");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("p");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("e").style.marginTop = "-360px", 10000;
  		document.getElementById("k").style.marginTop = "-360px", 10000;
  		document.getElementById("q").style.marginTop = "-360px", 10000;
  		document.getElementById("f").style.marginTop = "-470px", 10000;
  		document.getElementById("l").style.marginTop = "-470px", 10000;
  		document.getElementById("r").style.marginTop = "-470px", 10000;

  		djp();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (e==k && e==q && k==q ) {

 		var elem = document.getElementById("e");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("k");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("q");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("f").style.marginTop = "-470px", 10000;
  		document.getElementById("l").style.marginTop = "-470px", 10000;
  		document.getElementById("r").style.marginTop = "-470px", 10000;

  		ekq();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (f==l && f==r && l==r ) {

 		var elem = document.getElementById("f");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("l");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("r");
 		elem.parentNode.removeChild(elem);

 		flr();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (s==y && s==ee && y==ee ) {

 		var elem = document.getElementById("s");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("y");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("ee");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("t").style.marginTop = "-0px", 10000;
  		document.getElementById("z").style.marginTop = "-0px", 10000;
  		document.getElementById("f").style.marginTop = "-0px", 10000;
  		document.getElementById("u").style.marginTop = "-120px", 10000;
  		document.getElementById("aa").style.marginTop = "-120px", 10000;
  		document.getElementById("gg").style.marginTop = "-120px", 10000;
  		document.getElementById("v").style.marginTop = "-240px", 10000;
  		document.getElementById("bb").style.marginTop = "-240px", 10000;
  		document.getElementById("hh").style.marginTop = "-240px", 10000;
  		document.getElementById("w").style.marginTop = "-360px", 10000;
  		document.getElementById("cc").style.marginTop = "-360px", 10000;
  		document.getElementById("ii").style.marginTop = "-360px", 10000;
  		document.getElementById("x").style.marginTop = "-470px", 10000;
  		document.getElementById("dd").style.marginTop = "-470px", 10000;
  		document.getElementById("jj").style.marginTop = "-470px", 10000;

  		syee();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (t==z && t==ff && z==ff ) {

 		var elem = document.getElementById("t");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("z");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("ff");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("u").style.marginTop = "-120px", 10000;
  		document.getElementById("aa").style.marginTop = "-120px", 10000;
  		document.getElementById("gg").style.marginTop = "-120px", 10000;
  		document.getElementById("v").style.marginTop = "-240px", 10000;
  		document.getElementById("bb").style.marginTop = "-240px", 10000;
  		document.getElementById("hh").style.marginTop = "-240px", 10000;
  		document.getElementById("w").style.marginTop = "-360px", 10000;
  		document.getElementById("cc").style.marginTop = "-360px", 10000;
  		document.getElementById("ii").style.marginTop = "-360px", 10000;
  		document.getElementById("x").style.marginTop = "-470px", 10000;
  		document.getElementById("dd").style.marginTop = "-470px", 10000;
  		document.getElementById("jj").style.marginTop = "-470px", 10000;

  		tzff();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (u==aa && u==gg && aa==gg ) {

 		var elem = document.getElementById("u");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("aa");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("gg");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("v").style.marginTop = "-240px", 10000;
  		document.getElementById("bb").style.marginTop = "-240px", 10000;
  		document.getElementById("hh").style.marginTop = "-240px", 10000;
  		document.getElementById("w").style.marginTop = "-360px", 10000;
  		document.getElementById("cc").style.marginTop = "-360px", 10000;
  		document.getElementById("ii").style.marginTop = "-360px", 10000;
  		document.getElementById("x").style.marginTop = "-470px", 10000;
  		document.getElementById("dd").style.marginTop = "-470px", 10000;
  		document.getElementById("jj").style.marginTop = "-470px", 10000;

  		uaagg();


 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (v==bb && v==hh && bb==hh ) {

 		var elem = document.getElementById("v");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("bb");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("hh");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("w").style.marginTop = "-360px", 10000;
  		document.getElementById("cc").style.marginTop = "-360px", 10000;
  		document.getElementById("ii").style.marginTop = "-360px", 10000;
  		document.getElementById("x").style.marginTop = "-470px", 10000;
  		document.getElementById("dd").style.marginTop = "-470px", 10000;
  		document.getElementById("jj").style.marginTop = "-470px", 10000;

  		vbbhh();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (w==cc && w==ii && cc==ii ) {

 		var elem = document.getElementById("w");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("cc");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("ii");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("x").style.marginTop = "-470px", 10000;
  		document.getElementById("dd").style.marginTop = "-470px", 10000;
  		document.getElementById("jj").style.marginTop = "-470px", 10000;

  		wccii();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (x==dd && x==jj && dd==jj ) {

 		var elem = document.getElementById("x");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("dd");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("jj");
 		elem.parentNode.removeChild(elem);

 		xddjj();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (ii==hh && ii==gg && hh==gg ) {

 		var elem = document.getElementById("ii");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("hh");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("gg");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("jj").style.marginTop = "-240px", 10000;

 		iihhgg();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (cc==bb && cc==aa && bb==aa ) {

 		var elem = document.getElementById("cc");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("bb");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("aa");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("dd").style.marginTop = "-240px", 10000;

 		ccbbaa();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (w==v && w==u && v==u ) {

 		var elem = document.getElementById("w");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("v");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("u");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("x").style.marginTop = "-240px", 10000;
 		wvu();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (q==p && q==o && p==o ) {

 		var elem = document.getElementById("q");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("p");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("o");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("r").style.marginTop = "-240px", 10000;
 		qpo();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (k==j && k==i && j==i ) {

 		var elem = document.getElementById("k");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("j");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("i");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("l").style.marginTop = "-240px", 10000;

 		kji();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (e==d && e==c && d==c ) {

 		var elem = document.getElementById("e");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("d");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("c");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("f").style.marginTop = "-240px", 10000;

 		edc();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 		if (d==c && d==b && c==b ) {

 		var elem = document.getElementById("d");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("c");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("b");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("f").style.marginTop = "-120px", 10000;
 		document.getElementById("e").style.marginTop = "-240px", 10000;
 		dcb();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (j==i && j==h && i==h ) {

 		var elem = document.getElementById("j");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("i");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("h");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("l").style.marginTop = "-120px", 10000;
 		document.getElementById("k").style.marginTop = "-240px", 10000;
 		jih();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (v==u && v==t && u==t ) {

 		var elem = document.getElementById("v");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("u");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("t");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("x").style.marginTop = "-120px", 10000;
 		document.getElementById("w").style.marginTop = "-240px", 10000;
 		vut();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (bb==aa && bb==z && aa==z ) {

 		var elem = document.getElementById("bb");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("aa");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("z");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("dd").style.marginTop = "-120px", 10000;
 		document.getElementById("cc").style.marginTop = "-240px", 10000;

 		bbaaz();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 		if (hh==gg && hh==ff && gg==ff ) {

 		var elem = document.getElementById("hh");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("gg");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("ff");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("jj").style.marginTop = "-120px", 10000;
 		document.getElementById("ii").style.marginTop = "-240px", 10000;

 		hhggff();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 		if (g==m && g==s && m==s ) {

 		var elem = document.getElementById("g");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("m");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("s");
 		elem.parentNode.removeChild(elem);
 		gms();

 		document.getElementById("h").style.marginTop = "-0px", 10000;
 		document.getElementById("n").style.marginTop = "-0px", 10000;
 		document.getElementById("t").style.marginTop = "-0px", 10000;


 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 		if (m==s && m==y && s==y ) {

 		var elem = document.getElementById("m");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("s");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("y");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("n").style.marginTop = "-0px", 10000;
 		document.getElementById("t").style.marginTop = "-0px", 10000;
 		document.getElementById("z").style.marginTop = "-0px", 10000;
 		msy();


 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (h==n && h==t && n==t ) {

 		var elem = document.getElementById("h");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("n");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("t");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("i").style.marginTop = "-120px", 10000;
 		document.getElementById("o").style.marginTop = "-120px", 10000;
 		document.getElementById("u").style.marginTop = "-120px", 10000;
 		hnt();


 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (n==t && n==z && t==z ) {

 		var elem = document.getElementById("n");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("t");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("z");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("o").style.marginTop = "-120px", 10000;
 		document.getElementById("u").style.marginTop = "-120px", 10000;
 		document.getElementById("a").style.marginTop = "-120px", 10000;
 		ntz();


 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 	if (i==o && i==u && o==u ) {

 		var elem = document.getElementById("i");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("o");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("u");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("j").style.marginTop = "-240px", 10000;
 		document.getElementById("p").style.marginTop = "-240px", 10000;
 		document.getElementById("v").style.marginTop = "-240px", 10000;
 		iou();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}

 		if (o==u && o==aa && u==aa ) {

 		var elem = document.getElementById("o");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("u");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("aa");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("p").style.marginTop = "-240px", 10000;
 		document.getElementById("v").style.marginTop = "-240px", 10000;
 		document.getElementById("bb").style.marginTop = "-240px", 10000;
 		ouaa();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (j==p && j==v && p==v ) {

 		var elem = document.getElementById("j");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("p");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("v");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("k").style.marginTop = "-360px", 10000;
 		document.getElementById("q").style.marginTop = "-360px", 10000;
 		document.getElementById("w").style.marginTop = "-360px", 10000;
 		jpv();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (p==v && p==bb && v==bb ) {

 		var elem = document.getElementById("p");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("v");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("bb");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("q").style.marginTop = "-360px", 10000;
 		document.getElementById("w").style.marginTop = "-360px", 10000;
 		document.getElementById("cc").style.marginTop = "-360px", 10000;
 		pvbb();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}



 	if (k==q && k==w && q==w ) {

 		var elem = document.getElementById("k");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("q");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("w");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("l").style.marginTop = "-470px", 10000;
 		document.getElementById("r").style.marginTop = "-470px", 10000;
 		document.getElementById("x").style.marginTop = "-470px", 10000;
 		kqw();
 		

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (q==w && q==cc && w==cc ) {

 		var elem = document.getElementById("q");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("w");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("cc");
 		elem.parentNode.removeChild(elem);

 		document.getElementById("r").style.marginTop = "-470px", 10000;
 		document.getElementById("x").style.marginTop = "-470px", 10000;
 		document.getElementById("dd").style.marginTop = "-470px", 10000;
 		qwcc();
 		

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (l==r && l==x && r==x ) {

 		var elem = document.getElementById("l");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("r");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("x");
 		elem.parentNode.removeChild(elem);
 		lrx();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}


 	if (r==x && r==dd && x==dd ) {

 		var elem = document.getElementById("r");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("x");
 		elem.parentNode.removeChild(elem);

 		var elem = document.getElementById("dd");
 		elem.parentNode.removeChild(elem);

 		rxdd();

 		puntos = puntos+100;
 		document.getElementById('puntos').innerHTML = puntos;

 	}










}


funcionPrincipal(parpadeo, eliminarElemento);
 // funcionPrincipal(parpadeo, eliminarElemento , moviminto);






// funcion agregar imagen

function abc() {

 document.getElementById("aqui").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="a" src="image/1.png">';
 document.getElementById("aquia").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="b" src="image/4.png">';
 document.getElementById("aquib").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="c" src="image/3.png">';

}
function def() {

 document.getElementById("aqui").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="d" src="image/1.png">';
 document.getElementById("aquia").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="e" src="image/4.png">';
 document.getElementById("aquib").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="f" src="image/1.png">';

}


function ghi() {

 document.getElementById("aquig").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="g" src="image/4.png">';
 document.getElementById("aquih").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="h" src="image/1.png">';
 document.getElementById("aquii").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="i" src="image/2.png">';

}

function jkl() {

 document.getElementById("aquig").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="j" src="image/2.png">';
 document.getElementById("aquih").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="k" src="image/1.png">';
 document.getElementById("aquii").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="l" src="image/2.png">';

}

function mno(){

 document.getElementById("aquim").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="m" src="image/3.png">';
 document.getElementById("aquin").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="n" src="image/3.png">';
 document.getElementById("aquio").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="o" src="image/2.png">';

}

function pqr(){

 document.getElementById("aquim").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="p" src="image/3.png">';
 document.getElementById("aquin").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="q" src="image/4.png">';
 document.getElementById("aquio").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="r" src="image/2.png">';

}


function stu(){

 document.getElementById("aquis").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="s" src="image/3.png">';
 document.getElementById("aquit").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="t" src="image/4.png">';
 document.getElementById("aquiu").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="u" src="image/2.png">';

}

function vwx(){

 document.getElementById("aquis").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="v" src="image/3.png">';
 document.getElementById("aquit").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="w" src="image/4.png">';
 document.getElementById("aquiu").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="x" src="image/2.png">';

}

function yzaa(){

 document.getElementById("aquiy").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="y" src="image/1.png">';
 document.getElementById("aquiz").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="z" src="image/4.png">';
 document.getElementById("aquiaa").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="aa" src="image/1.png">';

}

function bbccdd(){

 document.getElementById("aquiy").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="bb" src="image/1.png">';
 document.getElementById("aquizz").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="cc" src="image/3.png">';
 document.getElementById("aquiaa").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="dd" src="image/4.png">';

}

function eeffgg(){

 document.getElementById("aquiee").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="ee" src="image/2.png">';
 document.getElementById("aquiff").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="ff" src="image/3.png">';
 document.getElementById("aquigg").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="gg" src="image/4.png">';

}

function hhiijj(){

 document.getElementById("aquiee").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -360px" id="hh" src="image/1.png">';
 document.getElementById("aquiff").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -470px" id="ii" src="image/3.png">';
 document.getElementById("aquigg").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="jj" src="image/4.png">';

}


function agm(){

 document.getElementById("aquia").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="a" src="image/3.png">';
 document.getElementById("aquig").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="g" src="image/3.png">';
 document.getElementById("aquim").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="m" src="image/4.png">';

}

function bhn(){

 document.getElementById("aquib").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="b" src="image/2.png">';
 document.getElementById("aquih").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="h" src="image/3.png">';
 document.getElementById("aquin").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="n" src="image/4.png">';

}

function cio(){

 document.getElementById("aquic").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="c" src="image/4.png">';
 document.getElementById("aquii").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="i" src="image/3.png">';
 document.getElementById("aquio").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="o" src="image/2.png">';

}

function djp(){

 document.getElementById("aquid").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="d" src="image/2.png">';
 document.getElementById("aquij").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="j" src="image/3.png">';
 document.getElementById("aquip").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="p" src="image/2.png">';

}

function ekq(){

 document.getElementById("aquie").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="e" src="image/1.png">';
 document.getElementById("aquik").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="k" src="image/3.png">';
 document.getElementById("aquiq").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="q" src="image/2.png">';

}

function flr(){

 document.getElementById("aquif").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="f" src="image/1.png">';
 document.getElementById("aquil").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="l" src="image/3.png">';
 document.getElementById("aquir").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="r" src="image/3.png">';

}

function sye(){

 document.getElementById("aquis").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="s" src="image/1.png">';
 document.getElementById("aquiy").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="y" src="image/3.png">';
 document.getElementById("aquie").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="e" src="image/4.png">';

}


function sye(){

 document.getElementById("aquis").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="s" src="image/1.png">';
 document.getElementById("aquiy").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="y" src="image/3.png">';
 document.getElementById("aquie").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="e" src="image/2.png">';

}

function tzff(){

 document.getElementById("aquit").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="t" src="image/1.png">';
 document.getElementById("aquiz").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="z" src="image/3.png">';
 document.getElementById("aquiff").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="ff" src="image/2.png">';

}

function uaagg(){

 document.getElementById("aquiu").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="u" src="image/2.png">';
 document.getElementById("aquiaa").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="aa" src="image/3.png">';
 document.getElementById("aquigg").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="gg" src="image/2.png">';

}

function vbbhh(){

 document.getElementById("aquiv").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="v" src="image/1.png">';
 document.getElementById("aquibb").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="bb" src="image/3.png">';
 document.getElementById("aquih").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="h" src="image/1.png">';

}

function wwccii(){

 document.getElementById("aquiw").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="w" src="image/1.png">';
 document.getElementById("aquicc").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="cc" src="image/4.png">';
 document.getElementById("aquii").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="i" src="image/2.png">';

}

function xddjj(){

 document.getElementById("aquix").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="x" src="image/1.png">';
 document.getElementById("aquidd").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="dd" src="image/1.png">';
 document.getElementById("aquijj").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="jj" src="image/2.png">';

}

function lrx(){

 document.getElementById("aquil").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="l" src="image/1.png">';
 document.getElementById("aquir").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="r" src="image/1.png">';
 document.getElementById("aquix").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="x" src="image/2.png">';

}

function rxdd(){

 document.getElementById("aquir").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="r" src="image/1.png">';
 document.getElementById("aquix").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="x" src="image/2.png">';
 document.getElementById("aquidd").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="dd" src="image/1.png">';

}

function kqw(){

 document.getElementById("aquik").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="k" src="image/1.png">';
 document.getElementById("aquiq").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="q" src="image/1.png">';
 document.getElementById("aquiw").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="w" src="image/2.png">';

}

function qwcc(){

 document.getElementById("aquik").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="k" src="image/1.png">';
 document.getElementById("aquicc").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="cc" src="image/2.png">';
 document.getElementById("aquiq").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="q" src="image/1.png">';

}

function jpv(){

 document.getElementById("aquij").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="j" src="image/1.png">';
 document.getElementById("aquip").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="p" src="image/1.png">';
 document.getElementById("aquiv").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="v" src="image/2.png">';

}

function pvbb(){

 document.getElementById("aquip").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="p" src="image/1.png">';
 document.getElementById("aquiv").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="v" src="image/1.png">';
 document.getElementById("aquibb").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="bb" src="image/2.png">';

}

function iou(){

 document.getElementById("aquii").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="i" src="image/1.png">';
 document.getElementById("aquio").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="o" src="image/1.png">';
 document.getElementById("aquiu").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="u" src="image/2.png">';

}

function ouaa(){

 document.getElementById("aquio").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="o" src="image/1.png">';
 document.getElementById("aquiu").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="u" src="image/1.png">';
 document.getElementById("aquiaa").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="aa" src="image/2.png">';

}

function hnt(){

 document.getElementById("aquih").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="h" src="image/1.png">';
 document.getElementById("aquin").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="n" src="image/1.png">';
 document.getElementById("aquit").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="t" src="image/2.png">';

}
function ntz(){

 document.getElementById("aquin").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="n" src="image/1.png">';
 document.getElementById("aquit").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="t" src="image/1.png">';
 document.getElementById("aquiz").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="z" src="image/2.png">';

}

function gms(){

 document.getElementById("aquig").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="g" src="image/1.png">';
 document.getElementById("aquim").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="m" src="image/1.png">';
 document.getElementById("aquis").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="s" src="image/2.png">';

}

function msy(){

 document.getElementById("aquim").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="m" src="image/1.png">';
 document.getElementById("aquis").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="s" src="image/2.png">';
 document.getElementById("aquiy").innerHTML='<img style="width: 100px; height: auto; position: absolute; margin-top: -580px" id="y" src="image/1.png">';

}




















