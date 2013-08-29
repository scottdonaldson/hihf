$(document).ready(function(){
	
	var email = $('#entry_0'),
		age = $('#entry_2'),
		hear = $('#entry_3'),
		other = $('#entry_5'),
		touch = $('#entry_4');

	age.val('');
	hear.val('');
	touch.val('');
	
	$('#submit').click(function(e){
		if (email.val() = '') {
			e.preventDefault();
			email.prev('label').css('font-weight','bold');
		}
	});
	
	createDropDownAge();
	createDropDownHear();
	createDropDownTouch();
	
	$(".dropdown dt").click(function() {
    	$(this).next('dd').find('ul').toggle();
    });

    $(document).on('click', function(e) {
    	var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("dropdown")) {
    		$(".dropdown dd ul").hide();
        }
	});
                        
    $(".dropdown dd ul li").click(function() {
        $this = $(this);
		var text = $(this).html();
		$this
			.closest('ul').hide()
			.closest('dd').prev('dt').html(text)
			.closest('dl').prev('select').val($this.find('span.value').html());
    });
	
	$('#targetHear ul li').click(function(){
		$('.other-hear').slideUp();
	});
	
	$('#targetHear ul li:last-child').click(function(){
		$('#targetHear').slideUp().prev().prev('label').slideUp();
		$('.other-hear').slideDown();
		hear.val('');
	});
	
	$('.cancel').click(function(){
		$('#targetHear').slideDown().prev().prev('label').slideDown();
		$('.other-hear').slideUp();
	});
	
	function createDropDownAge(){
        var age = $("#entry_2");
        var selected = age.find("option[selected]");
        var options = $("option", age);
            
        age.after('<dl id="targetAge" class="dropdown"></dl>')
        $("#targetAge").append('<dt>' + selected.text() + 
            '<span class="value">' + selected.val() + 
            '</span></dt>')
        $("#targetAge").append('<dd><ul></ul></dd>')
	
		options.each(function(){
			$("#targetAge dd ul").append('<li>' + 
			$(this).text() + '<span class="value">' + 
			$(this).val() + '</span></li>');
		});
	}
	
	function createDropDownHear(){
        var hear = $("#entry_3");
        var selected = hear.find("option[selected]");
        var options = $("option", hear);
            
        hear.after('<dl id="targetHear" class="dropdown"></dl>')
        $("#targetHear").append('<dt>' + selected.text() + 
            '<span class="value">' + selected.val() + 
            '</span></dt>')
        $("#targetHear").append('<dd><ul></ul></dd>')
	
		options.each(function(){
			$("#targetHear dd ul").append('<li>' + 
			$(this).text() + '<span class="value">' + 
			$(this).val() + '</span></li>');
		});
	}
	
	function createDropDownTouch(){
        var touch = $("#entry_4");
        var selected = touch.find("option[selected]");
        var options = $("option", touch);
            
        touch.after('<dl id="targetTouch" class="dropdown"></dl>')
        $("#targetTouch").append('<dt>' + selected.text() + 
            '<span class="value">' + selected.val() + 
            '</span></dt>')
        $("#targetTouch").append('<dd><ul></ul></dd>')
	
		options.each(function(){
			$("#targetTouch dd ul").append('<li>' + 
			$(this).text() + '<span class="value">' + 
			$(this).val() + '</span></li>');
		});
	}
	
});