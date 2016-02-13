$(document).ready(function(){


	// ANIMACIÓN DEL SCROLL




	$('#btnParticipateHeader').on('click', function(){
		idBtn = this.id;
		s = 10;
		scroller(idBtn, s)
	});
	$('#btnNavFooterRegist').on('click', function(e){
		e.preventDefault();
		idBtn = this.id;
		s = 10;
		scroller(idBtn, s)
	});
	$('#btnParticipateBannerPrinc').on('click', function(){
		idBtn = this.id;
		s = 10;
		scroller(idBtn, s)
	});
	$('.btnParticipateBannerSolut').on('click', function(){
		idBtn = this.id;
		s = 10;
		scroller(idBtn, s)
	});
	$('#btnMasInfo').on('click', function(){
		idBtn = this.id;
		if (screen.width <800){
			s = 50;
			scroller(idBtn, s)
		}else{
			s = 100;
			scroller(idBtn, s)
		}
	});
	$('#btnLogo').on('click', function(e){
		e.preventDefault();
		idBtn = this.id;
		s = 10;
		scroller(idBtn, s);
	});
	$('.btnNavSolutions').on('click', function(){
		selectBanner(this);
	})
	$('.btnSubNavFooter').on('click', function(e){
		e.preventDefault();
		idBtn = this.id;
		if (screen.width <800){
			s = 50;
			scroller(idBtn, s)
		}else{
			s = -170;
			scroller(idBtn, s)
		}
		scroller(idBtn, s);
		stopinterval(t);
		selectBanner(this)

	});
	


	function scroller(idBtn, s){
		var strAncla = $("#"+idBtn).attr('data-direct');
		var presize = $(strAncla).offset().top
		
		if (screen.width <500){
			var size = presize-50;
		}else{

			var size = presize + s;
		}

		$('body, html').stop(true, true).animate({
			scrollTop: size
		}, 1000);

	}


	//VALIDACION DE FORM DE SECCION CONTACTO

	function validarForm(){
		if($("#nombre").val() == ""){
			alert("El campo Nombre no puede estar vacio");
			$("#nombre").focus();
			return false;
		}
		if($("#correo").val() == ""){
			alert("El campo Correo no puede estar vacio");
			$("#correo").focus();
			return false;
		}
		if($("#campo1").val() == ""){
			alert("no pueden haber campos vacios");
			$("#campo1").focus();
			return false;
		}

		if($("#campo2").val() == ""){
			alert("no pueden haber campos vacios");
			$("#campo2").focus();
			return false;
		}

	/*	var nom = $("#nombre").val();
		var email = $("#correo").val();
		var msj = $("#mensaje").val();
		var camp1 = $("#campo1").val();
		var camp2 = $("#campo2").val();
		
		if(nom.length >40){
			return false
		}
		if(email.length > 100){
			return false
		}
		if(msj.length > 600){
			alert("el mensaje no puede exceder los 600 caracteres");
			return false
		}
		if(campo1.length > 100){
			return false;		
			
		}
		if(campo2.length > 100){
			return false
		}*/

		return true;		
	}

	$("#btnEnviar").click(function(){


		if(validarForm()){

			console.log("formulario validado");

			var nom = $("#nombre").val();
			var email = $("#correo").val();
			var msj = $("#mensaje").val();
			var camp1 = $("#campo1").val();
			var camp2 = $("#campo2").val();
			
			json = {
				nombre : nom,
				mensaje : msj,
				correo : email,
				campo1 : camp1,
				campo2 : camp2
			}

			console.log(json)
			if(msj != ""){
				$.post("envioCorreo.php", json, function(){

				});
			}

			$.post("registrarUsuario.php", json ,function(res){
				console.log(res)
				if(res === 2){
					alert("no se permiten caracteres especiales en el formulario como: parentesis o signos de admiración");
				}else{

					if(res==1){
						console.log("datos registrados");
						
						$("#mensajeExito").css("display", "block");
						document.getElementById("formdata").reset();

						setTimeout(function(){
							$("#mensajeExito").css("display", "none");
			
							
						}, 5000);
					}else{
						
						$("#mensajeError").css("display", "block");
						document.getElementById("formdata").reset();


						setTimeout(function(){
							$("#mensajeError").css("display", "none");						
						}, 3000);
					}
				}

			});
		}
	});

	// ANIMACIÓN DE BANNER DE SOLUCIONES

	var t=setInterval(function(){iniciarAnimacion();},5000);


	function iniciarAnimacion()
	{
		var size = $('#banner').find('.slide').size();
			$('#banner').find('.slide').each(
				function(index,value){
					if($(value).hasClass('slide_visible'))
					{
						var id_visible = $(value).attr("id");
						id_v = parseInt(id_visible.charAt(5));
						id_v = id_v+1;
						if(id_v ==8){
							id_v =1;
						}
						$(".paginacion").each( function (){
							$(this).find(".btnSolutions").css("display", "block");
							$(this).find(".btnSolutionsSelect").css("display", "none");

						});
						/*id_anterior = id_v -1;
						$("#btnNavSoltslide" + id_anterior).find(".btnSolutions").css("display", "block");
						$("#btnNavSoltslide" + id_anterior).find(".btnSolutionsSelect").css("display", "none");
*/

						$("#btnNavSoltslide" + id_v).find(".btnSolutionsSelect").css("display", "block");
						
						$("#btnNavSoltslide" + id_v).find(".btnSolutions").css("display", "none");
						$(value).fadeOut(1000);
						setTimeout(function(){ $(value).removeClass('slide_visible'); }, 1000);
	
						if(index+1<size)
						{
							$($('#banner').find('.slide').get(index+1)).fadeIn(1000);
							setTimeout(function(){ $($('#banner').find('.slide').get(index+1)).addClass('slide_visible'); }, 1000);
							
						}
						else
						{
							$($('#banner').find('.slide').get(0)).fadeIn(1000);
							$($('#banner').find('.slide').get(0)).addClass('slide_visible');	
							return false;
						}
					}
			});
	}

	function stopinterval(t){
		clearInterval(t);
	};

	function selectBanner(btn){
		stopinterval(t);
		idBtnNavSolt = $(btn).attr('id');
		$(".paginacion").each( function (){
			$(this).find(".btnSolutionsSelect").css("display", "none");
			$(this).find(".btnSolutions").css("display", "block");

		});
		$("#"+idBtnNavSolt).find(".btnSolutions").css("display","none");
		$("#"+idBtnNavSolt).find(".btnSolutionsSelect").css("display", "block");
		num = idBtnNavSolt.charAt(15);
		$('#banner').find('.slide').each( function(index, value){
			if($(value).hasClass('slide_visible'))
			{
				var id_visible = $(value).attr("id");
				$(value).fadeOut(1000);
				setTimeout(function(){ $(value).removeClass('slide_visible');}, 1000);

				$($('#banner').find('.slide').get(num-1)).fadeIn(1000);
				setTimeout(function(){ $($('#banner').find('.slide').get(num-1)).addClass('slide_visible'); }, 1000);
				//$("#btnNavSolt" + id_visible).find(".btnSolutionsSelect").css("display", "block");
						
				//$("#btnNavSolt" + id_visible).find(".btnSolutions").css("display", "none");
		}

		});
	}



});
