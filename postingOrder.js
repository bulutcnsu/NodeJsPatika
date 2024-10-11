const posts = [
    { id: "post 1", title: "SummerDays", date: "2022" },
    { id: "post 2", title: "RoadTrips", date: "2023" },
    { id: "post 3", title: "AbroadDays", date: "2024" },
  ];
  
  const listPosts = () => {
    posts.map((post) => {
       console.log(post.id +" " + post.title + " " + post.date);
    });
  };

  //listPosts();
  
  const addPost = (post) => {
    const promise1 = new Promise((resolve, reject) => {
      if (post) {
        posts.push(post);
        resolve("Post Added");
      } else {
        reject("Something Went Wrong");
      }
    });
    return promise1;
  };
  
   async  function showPosts() {
    try {
      await addPost({ id: "post 4",title: "LatestPost",date: "2027" });
      listPosts();
    } catch (err) {
      console.log(err);
    }};
  
 showPosts();