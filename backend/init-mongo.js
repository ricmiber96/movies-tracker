db.createCollection('moviestracker');
use("moviestracker");


db.movies.insertMany([
    {   
        id:1,
        title:"Meeting with Jane",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at nisi non sapien egestas congue. Mauris a lacus diam. Praesent a dapibus nisi. Ut facilisis finibus dignissim. Sed quis rutrum orci. In eget commodo nulla. Nunc quis diam vitae odio rutrum tristique. Sed erat tellus, congue nec sagittis ac, volutpat nec ex. Morbi ut gravida purus, ut vulputate mi. Etiam tempor tincidunt porttitor. Fusce ac feugiat ante.",
        category:3,
        completed:true,
        date: "2020-08-02T11:45:43Z"
    },
])