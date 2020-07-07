$(document).ready(function() {
    $(document.getElementById('add_education')).click(function(e){ 
        e.preventDefault();
            $(document.getElementById('education')).append('<div class="new"><input type="text" size = "30" placeholder="Class" class="personalinfo" style="font-weight:bold"><input type="text" size = "50" placeholder="College / School" class="personalinfo" style="margin-left:5px"><br><input type="text" class="personalinfo" size = "25" placeholder="Start Year - End year" style=" margin-left:0px"><p style=" display:inline-block; font-family:Century Gothic; margin-left:5px; font-size:10px"> secured </p><input type="text" class="personalinfo" size = "30" placeholder="GPA / %" style=" margin-left:5px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('education')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_hobby')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('hobbies')).append('<div class="new"><input type="text" size = "30" placeholder="Hobby" class="p_info"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('hobbies')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_language')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('languages')).append('<div class="new"><input type="text" size = "30" placeholder="Language" class="p_info"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('languages')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_skill')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('technicalskills')).append('<div class="new"><input type="text" size = "30" placeholder="Skill" class="p_info" style="border:none; margin-left:40px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('technicalskills')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_internship')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('internships')).append('<div class="new"><input type="text" size = "30" placeholder="Company Name" class="p_info" style="border:none; margin-left:0px; font-weight:bold"><input type="text" size = "40" placeholder="Role / Subject" class="p_info" style="border:none; margin-left:4px"><br><input type="text" size = "30" placeholder="Duration" class="p_info" style="border:none; margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('internships')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_project')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('projects')).append('<div class="new"><input type="text" class="personalinfo" size = "60" placeholder="Name" style="font-weight:bold"><br><input type="text" class="personalinfo" size = "85" placeholder="One line Description" style=" margin-left:0px"><br><input type="text" class="personalinfo" size = "60" placeholder="Project Link" style=" margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('projects')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_achievement')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('achievements')).append('<div class="new"><input type="text" class="personalinfo" size = "15" placeholder="Position" style="font-weight:bold"><input type="text" class="personalinfo" size = "50" placeholder="Event" style=" margin-left:9px"><br><input type="text" class="personalinfo" size = "85" placeholder="Reason" style=" margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('achievements')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_course')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('courses')).append('<div class="new"><input type="text" class="personalinfo" size = "50" placeholder="Field / Subject" style="font-weight:bold"><input type="text" class="personalinfo" size = "30" placeholder="Platform" style="border:none; margin-left:9px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('courses')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_publication')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('publications')).append('<div class="new"><input type="text" class="personalinfo" size = "85" placeholder="Paper Title" style="font-weight:bold"><br><input type="text" class="personalinfo" size = "85" placeholder="Journal with Volume of publication" style="border:none; margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('publications')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_eca')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('eca')).append('<div class="new"><textarea rows="4" cols="40" placeholder="Add Activity"></textarea><a href="#" class="remove_field" style="margin-right:0px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('eca')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	
	$('input[type="checkbox"]').click(function() { 
                    var inputValue = $(this).attr("value"); 
                    $("." + inputValue).toggle(); 
                });
	});