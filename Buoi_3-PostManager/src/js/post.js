// Get DOM
const postForm = document.querySelector("#post-form");
const inputTitle = document.querySelector("#input-title");
const inputDescription = document.querySelector("#input-description");
const postContainer = document.querySelector(".post-container");

function addPost(event) {
  event.preventDefault();

  let title = inputTitle.value;
  let description = inputDescription.value;

  let newPost = {
    title,
    description,
    timestamp: new Date(),
  };

  if (!title || !description) {
    alert("Phải nhập đủ các trường");
    return;
  }

  // Thêm newPost vào firestore
  db.collection("posts")
    .add(newPost)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
}

// Hàm lấy dữ liệu từ Firestore
function getPosts() {
  let postList = [];

  db.collection("posts")
    .orderBy("timestamp", "desc")
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        postList.push(doc.data());
      });

      return postList
    })
    .then(postList => {
      if (postList.length > 0) {
        renderPosts(postList);
      } else {
        console.log("No posts found.");
      }
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
}

// Hàm render danh sách post ra HTML
function renderPosts(posts) {
  let htmls = posts.map((post) => {
    return `
      <div class="post-item">
        <h3>${post.title}</h3>
        <p>${post.description}</p>
      </div>
    `;
  });

  postContainer.innerHTML = htmls.join("");
}

// GỌi hàm getPost
getPosts()

postForm.addEventListener("submit", function (event) {
  addPost(event);
  getPosts()
});


