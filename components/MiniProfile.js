import React from 'react'

function MiniProfile() {
  return (
    <div className=" mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full  border p-[2px]"
        src="https://scontent.fccu3-1.fna.fbcdn.net/v/t31.18172-8/18922591_1442687345782619_6455725593091166328_o.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=L66Yd_6OJRsAX_Hzf_u&_nc_ht=scontent.fccu3-1.fna&oh=00_AT_e5BSOwyC7tXZwNKhYmUHWBPlQDo1UMp9qumgTCOe6uA&oe=6223937D"
        alt="profile pic"
      />
      <div className="mx-4 flex-1">
        <h2 className="font-bold">Shahzaad_Abhay</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm text-blue-400" type="submit">
        Switch
      </button>
    </div>
  )
}

export default MiniProfile
