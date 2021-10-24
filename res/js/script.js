function toggleDropdown() {
  document.getElementById("userDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn") &&
    !event.target.matches(".dropbtn .user_icon")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

$(function() {
  /* $.get("https://private-5a8573-postscontainer.apiary-mock.com/posts", function(posts) {
    for (post of posts) {
      let avatar = post.author.avatar;
      let name = post.author.name;
      let time = post["create-time"];
      //let type = post.media.type;
      let url = post.media.url;
      let text = post["post-text"];
      let likeURL = post["like-icon"]["url"];
      let iconText = post["like-icon"]["icon-text"];

      let postContainer = $('<div id= "post" class= "post">');
      let authorContainer = $('<div id= "author" class = "post-header">');
      let textContainer = $('<p id="post-text">');
      let likeButton = $('<button id="like-icon">');
      let iconTextContainer = $('<div id="icon-text">');
      


      authorContainer.append($('<img id ="avatar" src= "' + avatar + '"/>'));
      authorContainer.append($('<h5 id= "name">').text(name));
      postContainer.append(authorContainer);
      postContainer.append($('<h5 id= "create-time">').text(time));
      postContainer.append($('<img id = "media" class= "post-image" src= "' + url + '"/>'))
      textContainer.append(text);
      postContainer.append(textContainer);
      likeButton.append($('<img id ="url" src= "' + likeURL + '"/>'));
      iconTextContainer.append(iconText);
      likeButton.append(iconTextContainer);
      postContainer.append(likeButton);





      $('ul').append(postContainer); */

      $.get("res/json/posts.json", function(posts) {
    for (post of posts) {
      let avatar = post["author"]["avatar"];
      let name = post["author"]["name"];
      let time = post["create-time"];
      //let type = post.media.type;
      let url = post.media.url;
      let text = post["post-text"];
      let likeURL = post["like-icon"]["url"];
      let iconText = post["like-icon"]["icon-text"];

      let postContainer = $('<div id= "post" class= "post">');
      let authorContainer = $('<div id= "author" class = "post-header">');
      let textContainer = $('<p id="post-text">');
      let likeButton = $('<button id="like-icon">');
      let iconTextContainer = $('<div id="icon-text">');
      


      authorContainer.append($('<img id ="avatar" src= "' + avatar + '"/>'));
      authorContainer.append($('<h5 id= "name">').text(name));
      postContainer.append(authorContainer);
      postContainer.append($('<h5 id= "create-time">').text(time));
      postContainer.append($('<img id = "media" class= "post-image" src= "' + url + '"/>'))
      textContainer.append(text);
      postContainer.append(textContainer);
      likeButton.append($('<img id ="url" src= "' + likeURL + '"/>'));
      iconTextContainer.append(iconText);
      likeButton.append(iconTextContainer);
      postContainer.append(likeButton);





      $('ul').append(postContainer);
        
    }
  })
})
