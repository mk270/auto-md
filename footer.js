
$ = jQuery;

$().ready(function() {
  $(".auto-mustache").each(function() {
    $(this).html(Mustache.render($(this).html(), params));
  });
  $(".auto-markdown").each(function() {
    $(this).html(marked($(this).html()));
  });
});