const postForm = document.querySelector("#post-form");
const inputTitle = document.querySelector("#input-title");
const inputDescription = document.querySelector("#input-description");
const postContainer = document.querySelector(".post-container");

function addPost(event) {
  event.preventDefault();

  let title = inputTitle.value;
  let description = inputTitle.value;

  if (!title || !description) {
    alert("Please fill all field!");
    return;
  }

  // 
  db.collection("posts")
    .add({
      title,
      description,
    })
    .then(() => {
      console.log("Document successfully written!");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
}

function getPosts() {
  let postList = [];

  db.collection("posts")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        postList.push(doc.data());
      });

      

      if (postList.length > 0) {
        renderPosts(postList);
      } else {
        console.log("No posts found.");
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });

    console.log("aaa");
    console.log(postList);
}

function renderPosts(posts) {
  let htmls = posts.map((post) => {
    return `
      <h1>${post.title}</h1>
    `;
  });

  postContainer.innerHTML = htmls.join("");
}

getPosts()

postForm.addEventListener("submit", function (event) {
  handleAddPost(event);
});
