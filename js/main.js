function deferVideo() {

  // $ is an identifier, same way a name would identify an object.
  $("video source").each(function() {
    let sourceFile = $(this).attr("data-src");
    $(this).attr("src", sourceFile);
    let video = this.parentElement;
    video.load();
  
  });

}
window.onload = deferVideo;