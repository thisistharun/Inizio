$(document).ready(function() {
    $(document.getElementById('add_education')).click(function(e){ 
        e.preventDefault();
            $(document.getElementById('education')).append('<div class="new"><input type="text" size = "20" placeholder="Class-Year of End" class="personalinfo" style="font-weight:bold"><input type="text" size = "45" placeholder="Board of Education" class="personalinfo" style="margin-left:5px"><p style=" display:inline-block; font-family:Century Gothic; margin-left:6px; font-size:10px"> secured </p><input type="text" class="personalinfo" size = "4" placeholder="GPA" style=" margin-left:6px"><a href="#" class="remove_field" style="margin-right:0px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('education')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_hobby')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('hobbies')).append('<div class="new"><input type="text" size = "30" placeholder="Hobby" class="p_info" style="color:white"><a href="#" class="remove_field" style="margin-right:30px; color:white; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('hobbies')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_language')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('languages')).append('<div class="new"><input type="text" size = "30" placeholder="Language" class="p_info" style="color:white"><a href="#" class="remove_field" style="margin-right:30px; color:white; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('languages')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_skill')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('technicalskills')).append('<div class="new"><input type="text" class="personalinfo" size = "35" placeholder="Skill" style=" margin-left:40px; font-weight:bold; color:white"><br><input type="text" class="personalinfo" size = "20" placeholder="Level" style="color:white; margin-left:40px"><a href="#" class="remove_field" style="margin-right:30px; color:white; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('technicalskills')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_internship')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('internships')).append('<div class="new"><input type="text" class="personalinfo" size = "30" placeholder="Company Name" style=" font-weight:bold"><input type="text" class="personalinfo" size = "30" placeholder="Role / Subject" style=" margin-left:3px"><input type="text" class="personalinfo" size = "20" placeholder="Duration" style="margin-left:2px"><br><input type="text" class="personalinfo" size = "85" placeholder="Describe The Work" style=" margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('internships')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_project')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('projects')).append('<div class="new"><input type="text" class="personalinfo" size = "50" placeholder="Name" style=" font-weight:bold"><input type="text" class="personalinfo" size = "30" placeholder="Your Role" style=" margin-left:2px"><br><input type="text" class="personalinfo" size = "85" placeholder="Description" style=" margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
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
			$(document.getElementById('courses')).append('<div class="new"><input type="text" class="personalinfo" size = "45" placeholder="Field / Subject" style="font-weight:bold"><input type="text" class="personalinfo" size = "30" placeholder="Platform" style="border:none; margin-left:9px"><a href="#" class="remove_field" style="margin-right:0px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('courses')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_publication')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('publications')).append('<div class="new"><input type="text" class="personalinfo" size = "75" placeholder="Paper Title" style="font-weight:bold"><br><input type="text" class="personalinfo" size = "85" placeholder="Journal with Volume of publication" style="border:none; margin-left:0px"><a href="#" class="remove_field" style="margin-right:30px; color:black; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('publications')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('add_eca')).click(function(e){
        e.preventDefault();    
			$(document.getElementById('eca')).append('<div class="new"><input type="text" class="personalinfo" size = "35" placeholder="Heading" style="color:white; margin-left:40px; font-weight:bold"><br><textarea rows="4" cols="40" placeholder="Add Activity" style="color:white"></textarea><a href="#" class="remove_field" style="margin-right:0px; color:white; float:right"><i class="fa fa-times show-on-hover" aria-hidden="true"></i></a></div>');
    });  
    $(document.getElementById('eca')).on("click",".remove_field", function(e){
        e.preventDefault(); $(this).parent('div').remove();
    });
	$(document.getElementById('showmenu')).click(function(e){
	$(document.getElementById('dropmenu')).toggle();
	});
	
	$('input[type="checkbox"]').click(function() { 
                    var inputValue = $(this).attr("value"); 
                    $("." + inputValue).toggle(); 
                });
	});
