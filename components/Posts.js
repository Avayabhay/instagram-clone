import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import Post from './Post'

// const posts = [
//   {
//     id: '123',
//     username: 'shahzaad_Abhay',
//     img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
//     userImg:
//       'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
//     caption: 'Lets build A Instagram Clone',
//   },
//   {
//     id: '124',
//     username: 'shahzaad_Abhay',
//     img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
//     userImg:
//       'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
//     caption: 'Lets build A Instagram Clone',
//   },
//   {
//     id: '126',
//     username: 'shahzaad_Abhay',
//     img: 'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
//     userImg:
//       'https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D',
//     caption: 'Lets build A Instagram Clone',
//   },
// ]

function Posts() {
  const [posts, setPosts] = useState([])
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  //     (snapshot) => {
  //       setPosts(snapshot.docs)
  //     }
  //   )

  //   return () => {
  //     unsubscribe()
  //   }
  // }, [db])

  //The above UseEffect code in clean and compressed way
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    [db]
  )
  // console.log(posts)
  // console.log(posts[0].data().image)
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
