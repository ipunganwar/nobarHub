$(document).ready(function(){
  $.ajax({
    url: "http://localhost:3000/api/events/",
    method: 'GET',
    dataType: 'JSON',
    success: function(result){
      $('div#content').html(eventSet(result.events))
    }
  });
  $('#blah').fadeOut(function(){})
});

$('#modal-create').click(function() {
  $(':input','#modal-post')
 .not(':button, :submit, :reset, :hidden')
 .val('')
 .removeAttr('checked')
 .removeAttr('selected');

  $('.ui.modal.post')
    .modal('show')
  ;
})

$('select').change(function() {
  var input = $(this).val();
  if(input == 'Indonesia'){
    $.ajax({
      url: "http://localhost:3000/api/movies/id",
      method: 'GET',
      dataType: 'JSON',
      success: function(result){
        $('select#dropdown-movies').html(movieSet(result.results))
      }
    });
  }else if(input == 'Luar Negeri'){
    $.ajax({
      url: "http://localhost:3000/api/movies/en",
      method: 'GET',
      dataType: 'JSON',
      success: function(result){
        $('select#dropdown-movies').html(movieSet(result.results))
      }
    });
  }
})

$('select.dropdown')
  .dropdown()
;

function movieSet(movies) {
  console.log(movies);
  $('select#dropdown-movies').fadeIn('slow', function(){})
  let movieDiv = `<option selected>Pilih Film</option>`
  movies.forEach(m => {
    movieDiv += `
      <option value="${m.id}">${m.original_title}</option>
    `
  })
  return movieDiv
}

function eventSet(events) {
  let eventDiv = ``
  events.forEach(e => {
    let date = new Date(e.created)
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    eventDiv += `
      <div class="card">
        <div class="content">
          <div class="right floated meta">${dd}/${mm}/${yyyy}</div>
          <img class="ui avatar image" src="/assets/img/user.png"> Anon
        </div>
        <div class="image">
          <img src="">
        </div>
        <div class="content">
          <h4>${e.name.text}</h4>
          <div class="description">
            ${e.description.text}
          </div>
        </div>
        <div class="extra content">
          <div class="ui basic fluid green button">Detail Nobar</div>
        </div>
      </div>
    `
  })
  return eventDiv
}

$('#submit-event').click(function() {
  let event = {
    name : $('input[name=event-name]').val(),
    dec : $('textarea[name=event-dec]').val(),
    dateStart : $('input[name=event-start]').val(),
    timeStart : $('input[name=event-time-start]').val(),
    dateEnd : $('input[name=event-end]').val(),
    timeEnd : $('input[name=event-time-end]').val(),
    movies : $('select[name=movies-list]').val(),
    currency : 'IDR'
  }

  $.ajax({
    url: 'http://localhost:3000/api/events/create',
    type: 'POST',
    data: JSON.stringify(event),
    contentType: 'application/json',
    success: function(data) {
      console.log('success');
      console.log(JSON.stringify(data));
      getTimeline()
    }
  })
})

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah').attr('src', e.target.result);
      $('#blah').fadeIn('slow',function(){})
    }

    reader.readAsDataURL(input.files[0]);
  }
}

$("#imgInp").change(function(){
  readURL(this);
  console.log(this);
});
