import React from 'react'
import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'shahzaad_Abhay',
    img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
    userImg:
      'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
    caption: 'Lets build A Instagram Clone',
  },
  {
    id: '124',
    username: 'shahzaad_Abhay',
    img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
    userImg:
      'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
    caption: 'Lets build A Instagram Clone',
  },
  {
    id: '126',
    username: 'shahzaad_Abhay',
    img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
    userImg:
      'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
    caption: 'Lets build A Instagram Clone',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
