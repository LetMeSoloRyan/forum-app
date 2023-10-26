let userList = [];
let postList = [];
// let commentList = []
let userInput;
let postToEnter
let logged = {};
const programContinue = true;

//User class
class User {
  constructor(username, password) {
    this._username = username;
    this._password = password;
    this._allowToCreatePost = true;
    this._accountIsValid = true;
  }

  createPost() {
    if (this._allowToCreatePost === true) {
      const author = this._username;
      console.log(`
╔══════════════════════════════════╗
║  what is the title of the post?  ║
╚══════════════════════════════════╝
    `)
      const postTitle = prompt("")
      console.log(`
╔════════════════════════════════════╗
║  what is the content of the post?  ║
╚════════════════════════════════════╝
          `)
      const postContent = prompt("")
      let newPost = new Post(author, postTitle, postContent)
      postList.push(newPost)
      console.log(`
╔════════════════════╗
║  new post created  ║
╚════════════════════╝
      `)
    } else {
      console.log(`
╔══════════════════════════════════════════╗
║  you are not allowed to create new post  ║
╚══════════════════════════════════════════╝
          `)
    }
  }

  viewPost() {
    if (postList.length !== 0) {
    for (let i = 0; i < postList.length; i++) {
      console.log(`
╔════════════════════════════════════════
║  Post List
╠════════════════════════════════════════ 
║  Post #${i + 1}: 
║  - Author: ${postList[i]._author}
║  - Title: ${postList[i]._postTitle}   
╚════════════════════════════════════════
    `)
    }
    console.log(`
╔═════════════════════════════════════════════╗
║  please enter the post# you want to enter   ║
╚═════════════════════════════════════════════╝
    `)
    postToEnter = (prompt("") - 1)
    console.log(`
╔════════════════════════════════════════ 
║  Post #${postToEnter + 1}: 
║  - Author: ${postList[postToEnter]._author}
║  - Title: ${postList[postToEnter]._postTitle}
║  - Content: ${postList[postToEnter]._postContent}
║  - Comment: 
╚════════════════════════════════════════
    `)
  } else {
      console.log(`
╔══════════════╗
║ no post yet  ║
╚══════════════╝
      `)
    }
  }
}

//Admin class
class Admin {
  constructor(username, password) {
    this._username = username;
    this._password = password;
    this._allowToCreatePost = true;
    this._accountIsValid = true;
    this._isAdmin = true;
  }

  createPost() {
    if (this._allowToCreatePost === true) {
      const author = this._username;
      console.log(`
╔══════════════════════════════════╗
║  what is the title of the post?  ║
╚══════════════════════════════════╝
    `)
      const postTitle = prompt("")
      console.log(`
╔════════════════════════════════════╗
║  what is the content of the post?  ║
╚════════════════════════════════════╝
          `)
      const postContent = prompt("")
      let newPost = new Post(author, postTitle, postContent)
      postList.push(newPost)
      console.log(`
╔════════════════════╗
║  new post created  ║
╚════════════════════╝
      `)
    } else {
      console.log(`
╔══════════════════════════════════════════╗
║  you are not allowed to create new post  ║
╚══════════════════════════════════════════╝
          `)
    }
  }

  viewPost() {
    if (postList.length !== 0) {
    for (let i = 0; i < postList.length; i++) {
      console.log(`
╔════════════════════════════════════════
║  Post List
╠════════════════════════════════════════ 
║  Post #${i + 1}: 
║  - Author: ${postList[i]._author}
║  - Title: ${postList[i]._postTitle}   
╚════════════════════════════════════════
    `)
    }
    console.log(`
╔═════════════════════════════════════════════╗
║  please enter the post# you want to enter   ║
╚═════════════════════════════════════════════╝
    `)
    postToEnter = (prompt("") - 1)
    console.log(`
╔════════════════════════════════════════ 
║  Post #${postToEnter + 1}: 
║  - Author: ${postList[postToEnter]._author}
║  - Title: ${postList[postToEnter]._postTitle}
║  - Content: ${postList[postToEnter]._postContent}
║  - Comment: 
╚════════════════════════════════════════
    `)
  } else {
      console.log(`
╔══════════════╗
║ no post yet  ║
╚══════════════╝
      `)
    }
  }

  deletePost() {
    if (postList.length !== 0) {
    console.log(`
╔═════════════════════════════════════════════╗
║  please enter the post# you want to delete  ║
╠═════════════════════════════════════════════╣
║  Or enter 0 to go back to menu              ║
╚═════════════════════════════════════════════╝
            `)
    const postToDelete = prompt("")
    if (postToDelete == 0) {
      return adminMenu();
    } else {
      postList.splice((postToDelete - 1), 1)
      console.log(`
╔═════════════════════════════════╗
  Post#${postToDelete} is deleted now
╚═════════════════════════════════╝
            `)
      }
    } else {
      console.log(`
╔══════════════╗
║ no post yet  ║
╚══════════════╝
      `)
    }
  }

  viewUser() {
    console.log(`
╔════════════════════════════════════════
║  User List`)
    for (let i = 0; i < userList.length; i++) {
      console.log(`
╠════════════════════════════════════════ 
║  User #${i + 1}: ${userList[i].constructor.name}
║  - Username: ${userList[i]._username}
║  - Password: ${userList[i]._password}
║  - Right to create post: ${userList[i]._allowToCreatePost}
║  - Valid account: ${userList[i]._accountIsValid}`)
    }
    console.log(`
╚════════════════════════════════════════
    `)
  }

  manageUser() {
    console.log(`
╔══════════════════════════╗
║       Manage User        ║
╠══════════════════════════╣
║ 1. Suspend User          ║
║ 2. Delete User           ║
║ 3. Back to Main Menu     ║
║ 4. Log out               ║
╚══════════════════════════╝
    `)
    userInput = prompt("")
    switch (userInput) {
      case '1':
        logged.suspendUser();
        return
      case '2':
        logged.deleteUser();
        return
      case '3':
        return
      case '4':
        logout();
        return
    }
  }

  deleteUser() {
    console.log(`
╔═════════════════════════════════════════════╗
║  please enter the user# you want to delete  ║
╚═════════════════════════════════════════════╝
Or enter 0 to go back to menu
            `)
    const userToDelete = prompt("")
    if (userToDelete == 0) {
      return adminMenu();
    } else {
      userList[(userToDelete) - 1]._accountIsValid = false
      console.log(`
╔═════════════════════════════════╗
  User#${userToDelete} is not a valid user now
╚═════════════════════════════════╝
            `)
    }
  }


  suspendUser() {
    console.log(`
╔══════════════════════════════════════════════╗
║  please enter the user# you want to suspend  ║
╚══════════════════════════════════════════════╝
Or enter 0 to go back to menu
            `)
    const userToSuspend = prompt("")
    if (userToSuspend == 0) {
      return adminMenu();
    } else {
      userList[(userToSuspend) - 1]._allowToCreatePost = false
      console.log(`
╔═════════════════════╗
  User#${userToSuspend} is suspended
╚═════════════════════╝
            `)
    }
  }
}

//Post class

class Post {
  constructor(author, postTitle, postContent) {
    this._author = author;
    this._postTitle = postTitle;
    this._postContent = postContent;
  }
}

//Comment class
class Comment extends Post {
  constructor(author, comment) {
    super(author)
    this._comment = comment
    // this._commentId = commentList[commentList.length + 1]
  }
}

function pushUserToList(name, password) {
  let newUser = new User(name, password);
  userList.push(newUser);
}

function pushAdminToList(name, password) {
  let newAdmin = new Admin(name, password)
  userList.push(newAdmin)
}

pushUserToList("Tom", "456789");
pushUserToList("Jason", "678900");
pushUserToList("Mary", "230111");
pushAdminToList('Terry', '123456');
pushAdminToList('David', '999456');
pushAdminToList('Kevin', '345678')

//Program continue & diverting user/admin 
while (programContinue) {
  if (logged instanceof Admin) {
    adminMenu()
  } else if (logged instanceof User) {
    userMenu()
  } else {
    checkUsername();
    checkPassword();
  }
}

//Check username & password
function checkUsername() {
  console.log(`
╔══════════════════════════════╗
║  please enter your username  ║
╚══════════════════════════════╝
      `)
  userInput = prompt("")
  for (i = 0; i < userList.length; i++) {
    if (userInput == userList[i]._username) {
      logged = userList[i]
      return
    }
  }
}

function checkPassword() {
  console.log(`
╔══════════════════════════════╗
║  please enter your password  ║
╚══════════════════════════════╝
      `)
  userInput = prompt("")
  if (userInput == logged._password && logged._accountIsValid) {
    console.log(`
╔══════════════════════════════╗
  logged in, welcome ${logged._username}
╚══════════════════════════════╝
      `)
    return
  } else if (userInput == logged._password && logged._accountIsValid == false) {
    logged = {};
    console.log(`
╔═══════════════════════╗
║  not a valid account  ║
╚═══════════════════════╝
      `);
    return
  } else {
    console.log(`
╔═════════════════════════════════╗
║  username or password is wrong  ║
╚═════════════════════════════════╝
      `);
    logged = {};
    return
  }
}

function logout() {
  logged = {};
  console.log(`
╔═════════════════════════╗
║  You are now logged out ║
╚═════════════════════════╝
      `);
}

//Admin menu
function adminMenu() {
  console.log(`
╔══════════════════════════╗
║        Admin Menu        ║
╠══════════════════════════╣
║ 1. Create a new post     ║
║ 2. Browse posts          ║
║ 3. View users            ║
║ 4. Delete Post           ║
║ 5. Manage user           ║
║ 6. Log out               ║
╚══════════════════════════╝
    `)
  userInput = prompt("")
  switch (userInput) {
    case '1':
      logged.createPost();
      return
    case '2':
      logged.viewPost();
      return
    case '3':
      logged.viewUser();
      return
    case '4':
      logged.deletePost();
      return
    case '5':
      logged.manageUser();
      return
    case "6":
      logout();
      return
    default:
      console.log(`
╔════════════════════════════════════╗
║  please enter a number for action  ║
╚════════════════════════════════════╝
      `);
      return
  }
}

//User menu
function userMenu() {
  console.log(`
╔══════════════════════════╗
║        User Menu         ║
╠══════════════════════════╣
║ 1. Create a new post     ║
║ 2. Browse posts          ║
║ 3. Log out               ║
╚══════════════════════════╝
  `)
  userInput = prompt("")
  switch (userInput) {
    case '1':
      logged.createPost();
      return
    case '2':
      logged.viewPost();
      return
    case '3':
      logout();
      return
    default:
      console.log(`
╔════════════════════════════════════╗
║  please enter a number for action  ║
╚════════════════════════════════════╝
      `);
      return
  }
}


// -----------Method with comment function---------

//   createPost() {
//     if (this._allowToCreatePost === true) {
//       const author = this._username;
//       console.log(`
// ╔══════════════════════════════════╗
// ║  what is the title of the post?  ║
// ╚══════════════════════════════════╝
//     `)
//       const postTitle = prompt("")
//       console.log(`
// ╔════════════════════════════════════╗
// ║  what is the content of the post?  ║
// ╚════════════════════════════════════╝
//           `)
//       const postContent = prompt("")
//       let newPost = new Post(author, postTitle, postContent)
//       postList.push(newPost)
//       commentList.push(newPost)
//       console.log(`
// ╔════════════════════╗
// ║  new post created  ║
// ╚════════════════════╝
//       `)
//     } else {
//       console.log(`
// ╔══════════════════════════════════════════╗
// ║  you are not allowed to create new post  ║
// ╚══════════════════════════════════════════╝
//           `)
//     }
//   }

//   createComment() {
//     if (this._allowToCreatePost === true) {
//       const author = this._username;
//       console.log(`
// ╔════════════════════════╗
// ║  what is the comment?  ║
// ╚════════════════════════╝
//     `)
//       const commentContent = prompt("")
//       let newComment = new Comment(author, commentContent)
//       commentList[postToEnter] = [commentList[postToEnter], newComment] 
//       console.log(`
// ╔═══════════════════════╗
// ║  new comment created  ║
// ╚═══════════════════════╝
//       `)
//     } else {
//       console.log(`
// ╔═════════════════════════════════════════════╗
// ║  you are not allowed to create new comment  ║
// ╚═════════════════════════════════════════════╝
//           `)
//     }
//   }

//   viewPost() {
//     for (let i = 0; i < postList.length; i++) {
//       console.log(`
// ╔════════════════════════════════════════
// ║  Post List
// ╠════════════════════════════════════════ 
// ║  Post #${i + 1}: 
// ║  - Author: ${postList[i]._author}
// ║  - Title: ${postList[i]._postTitle}   
// ╚════════════════════════════════════════
//     `)
//     }
//     console.log(`
// ╔═════════════════════════════════════════════╗
// ║  please enter the post# you want to enter   ║
// ╚═════════════════════════════════════════════╝
//     `)
//     postToEnter = (prompt("") - 1)
//     if (Array.isArray(commentList[postToEnter]) === false) {
//     console.log(`
// ╔════════════════════════════════════════ 
// ║  Post #${postToEnter + 1}: 
// ║  - Author: ${postList[postToEnter]._author}
// ║  - Title: ${postList[postToEnter]._postTitle}
// ║  - Content: ${postList[postToEnter]._postContent}
// ║  - Comment: 
// ╚════════════════════════════════════════
//     `)} else {
//     console.log(`
// ╔════════════════════════════════════════ 
// ║  Post #${commentToEnter + 1}: 
// ║  - Author: ${commentList[postToEnter][0]._author}
// ║  - Title: ${commentList[postToEnter][0]._postTitle}
// ║  - Content: ${commentList[postToEnter][0]._postContent}
// ╠═════════════════════════════════════════════════
//     `)
// for (i=0;i<commentList[postToEnter].length;i++) {
// console.log(`
// ║  - Comment author: ${commentList[postToEnter][i]._author}
// ║  - Comment: ${commentList[postToEnter][i]._commentContent}
// ╚════════════════════════════════════════
// `)}
//     }
//     console.log(`
// ╔═════════════════════════════════════════════════╗
// ║  please enter "YES" if you want to add comment  ║
// ╠═════════════════════════════════════════════════╣
// ║  leave blank or enter anything else to return   ║
// ╚═════════════════════════════════════════════════╝
//     `)
//     userInput = prompt("")
//     if (userInput == "YES") {
//     logged.createComment() } else {
//       return
//     }
//   }