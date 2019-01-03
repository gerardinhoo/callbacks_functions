const posts = [
  {title: 'Post One', body: 'This is post one'},
  {title: 'Post two', body: 'This is post two' },
]


// Without callback, post three will not return

// function createPost(post) {
//   setTimeout(() => {
//     posts.push(post)
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = '';
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`
//     });
//     document.body.innerHTML = output;
//   },1000)
// }


// createPost({title: 'Post Three', body: 'This is post three'});

// getPosts();




// With callback, post three will return
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`
    });
    document.body.innerHTML = output;
  }, 1000)
}


createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
