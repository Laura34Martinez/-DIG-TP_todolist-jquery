$(document).ready(function(){
  var count = 0;
  $(".add").click(function(){
    var inputVal = $(".form-control").val();
    if (inputVal != '') {
      count ++;
      $(".todo-list").append(' <li><div class="left-cont"><input type="checkbox" id="check-'+count+'" name=""><label for="check-'+count+'"></label><span>'+inputVal+'</span></div><span class="remove"><i class="fas fa-trash-alt"></i></span></li>');
    }
    $(".form-control").val('');
  })

  $(document).on('change', 'input[type="checkbox"]', function(){
    if ($(this).is(':checked')) {
      $(this).closest("li").children(".remove").addClass("active");
    } else {
      $(this).closest("li").children(".remove").removeClass("active");
    }
  })

  $(document).on('click', '.remove', function(){
    $(this).parent().remove();
  })
})