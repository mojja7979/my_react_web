import React, { useState } from "react";

function InputSample() {
  console.log(1);
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  });
  console.log(2);
  console.log(inputs);
  const {name, nickname} = inputs;  //비구조화 할당을 통해 값 추출, 객체의 값을 각각 변수에 할당
  console.log(name);
  console.log(nickname);


  const onChange = (e) => {
    const {value, name} = e.target; //우선 e.target에서 name과 value를 추출
    setInputs({
      ...inputs,  //기존 inputs값을 복사한 뒤
      [name]: value //name 키를 가진 값을 value로 설정
    })
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    })
  }
  return(
    <div>
      <input name="name" placeholder="이름" value={name} onChange={onChange}/>
      <input name="nickname" placeholder="닉네임" value={nickname} onChange={onChange}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값 : </b>
        {name}({nickname})
      </div>
    </div>  
  );
}

export default InputSample;