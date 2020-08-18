$(document).ready(function(){
  $("form#fortune_survey").submit(function(event){
    event.preventDefault();

    total = 0
    
    //$("#good-experiences").show();
    $("input:checkbox[name=good-experiences]:checked").each(function(){
      const goodExpInt = parseInt($(this).val());
      total += goodExpInt;
      //$('#good-experiences').append(goodExp + "<br>");
    });

    console.log(total);
    
    //$("#bad-experiences").show();
    $("input:checkbox[name=bad-experiences]:checked").each(function(){
      const badExpInt = parseInt($(this).val());
      total += badExpInt;
      //$('#bad-experiences').append(badExp + "<br>");
    });

    if (total >= 3) {
      $("#good-experiences").show();
    }

    else {
      $("#bad-experiences").show();
    }
    
    //$("#good-dreams").show();
    $("input:checkbox[name=good-dreams]:checked").each(function(){
      const goodDreamInt = parseInt($(this).val());
      total += goodDreamInt
      //$('#good-dreams').append(goodDream + "<br>");
    });

    
    
    //$("#bad-dreams").show();
    $("input:checkbox[name=bad-dreams]:checked").each(function(){
      const badDreamInt = parseInt($(this).val());
      total += badDreamInt;
      //$('#good-dreams').append(badDream + "<br>");
    });

    if (total >= 6) {
      $("#good-dreams").show();
    }

    else {
      $("#bad-dreams").show();
    }

    
    
    $('#fortune_survey').hide();
  });
});