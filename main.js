function updateLastUserActivity(user , post , createPost , deletePost){
    constLastActivityTime = new Date();
}
    const updateActivityTimePromise = new Promise((resolve) => {
        setTimeout(() => {
            user.lastActivity = lastActivityTime;
            resolve();
        } , 1000);

        });

        Promise.all([createPostpromise, updateActivityTimePromise])
        .then(() => {
            console.log("All promises resolved");
            console.log("Posts created:", posts);
            console.log("Last activity time:", user.lastActivityTime);
            return deletePost(posts[posts.length - 1]);

        })
        .then((newPosts) => {
            console.log("Post deleted, new set of posts:" , newPosts);

        })
        .catch((error) => {
            console.error("Error:" , error);

        })