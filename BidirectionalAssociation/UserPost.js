"use strict";
var _a, _b;
/*
Here we have User and Post objects, where
a user can have multiple posts, and each post belongs to a user.
*/
class AUser {
    constructor(username) {
        this.posts = [];
        this.username = username;
    }
    addPost(post) {
        this.posts.push(post);
        post.setAUser(this);
    }
}
class Post {
    constructor(title) {
        this.aUser = null;
        this.title = title;
    }
    setAUser(aUser) {
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
console.log((_a = post1.aUser) === null || _a === void 0 ? void 0 : _a.username); // Output: aUser123
console.log((_b = post2.aUser) === null || _b === void 0 ? void 0 : _b.username); // Output: aUser123
console.log(aUser1.posts.length); // Output: 2
//# sourceMappingURL=UserPost.js.map