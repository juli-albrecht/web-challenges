console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const postTitle = "New Post";
const postContent = "This is my first post on this social media network.";
let likes = 21;
const user = "Juli";
const isReported = true;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/
console.log("New Post");
console.log("This is my first post on this social media network.");
console.log(21);
console.log("Juli");
console.log("true");
// --v-- write your code here --v--
likes = likes + 2;
console.log(likes);
// --^-- write your code here --^--
