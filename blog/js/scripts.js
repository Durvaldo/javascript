const url = "https://jsonplaceholder.typicode.com/posts"

//ids do index
const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

// ids do post
const postPage = document.querySelector("#post")
const postContainer = document.querySelector("#post-container")
const comentContainer = document.querySelector("#coments-container")

//get id from url
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

// add comentarios
const commentForm = document.querySelector("#comment-form")
const emailInput = document.querySelector("#email")
const bodyInput = document.querySelector("#body")


//get all posts
async function getAllPosts() {

    const response = await fetch(url)
    const data = await response.json()

    loadingElement.classList.add("hide")

    data.map((post) => {

        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = post.title
        body.innerText = post.body
        link.innerHTML = "Ler"
        link.setAttribute("href", `/blog/post.html?id=${post.id}`)     

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
    })
}

// get individual post
async function getPost(id) {

    const [responsePost, responseComments] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataCommenents = await responseComments.json()

    loadingElement.classList.add("hide")
    postPage.classList.remove("hide")

    // mostrando post
    const title = document.createElement("h1")
    const body = document.createElement("p")

    title.innerText = dataPost.title
    body.innerText = dataPost.body

    postContainer.appendChild(title)
    postContainer.appendChild(body)


    // mostrando comentarios
    dataCommenents.map((comment) => {
        createComment(comment)
    })

}

function createComment(comment) {
   
    const div = document.createElement("div")
    const email = document.createElement("h3")
    const commentBody = document.createElement("p")

    email.innerText = comment.email
    commentBody.innerText = comment.body

    div.appendChild(email)
    div.appendChild(commentBody)

    comentContainer.appendChild(div)
}

async function postComment(comment) {

    // POST, PUT, PATCH, DELETE - headers, body

    const response = await fetch(`${url}/${postId}/comments`, {
        method: "POST",
        body: comment,
        headers: {
            "content-type": "application/json",
        },
    })

    const data = await response.json()

    createComment(data)
}

if(!postId) {
    getAllPosts()
} else {
    getPost(postId)

    // add evento de comentar pelo formulario
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let comment = {
            email: emailInput.value,
            body: bodyInput.value
        }

        comment = JSON.stringify(comment)
        postComment(comment)

    })
}