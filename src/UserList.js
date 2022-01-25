import React from "react";

function User({myuser}) {
  return(
    <div>
      <b>{myuser.username}</b> <span>({myuser.email})</span>
    </div>
  )
};


function UserList({ users }) {

  // const users = [
  //   {
  //     id: 1,
  //     username: 'velopert',
  //     email: 'public@ggde.com'
  //   },
  //   {
  //     id: 2,
  //     username: 'velopert1',
  //     email: 'public2@ggde.com'
  //   },
  //   {
  //     id: 3,
  //     username: 'velopert3',
  //     email: 'public123@ggde.com'
  //   }
  // ];

  return(
    <div>
      {/* 기존 값 수정 */}
      {/* <User user={users[0]}/>
      <User user={users[1]}/>
      <User user={users[2]}/> */}
      리액트에서 배열을 렌더링 할 때에는 key 라는 props 를 설정해야합니다. key 값은 각 원소들마다 가지고 있는 고유값으로 설정을 해야합니다. 지금의 경우엔 id 가 고유 값이지요.
      {users.map(user => (
        <User myuser={user} key={user.id}/>
      ))}
      배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용하시면 됩니다.
      {users.map((user,index) => (
        <User myuser={user} key={index}/>
      ))}


    </div>
  );
}

export default UserList;
