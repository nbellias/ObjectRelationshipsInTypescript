/*
Here we have User and Post objects, where 
a user can have multiple posts, and each post belongs to a user.
*/
class AUser {
    username: string;
    posts: Post[] = [];
  
    constructor(username: string) {
      this.username = username;
    }
  
    addPost(post: Post) {
      this.posts.push(post);
      post.setAUser(this);
    }
  }
  
  class Post {
    title: string;
    aUser: AUser | null = null;
  
    constructor(title: string) {
      this.title = title;
    }
  
    setAUser(aUser: AUser) {
      this.aUser = aUser;
    }
  }
  
  // Creating instances
  const aUser1 = new AUser('aUser123');
  const post1 = new Post('First post');
  const post2 = new Post('Second post');
  
  // Establishing the bidirectional association
  aUser1.addPost(post1);
  aUser1.addPost(post2);
  
  console.log(post1.aUser?.username);  // Output: aUser123
  console.log(post2.aUser?.username);  // Output: aUser123
  console.log(aUser1.posts.length);    // Output: 2
  