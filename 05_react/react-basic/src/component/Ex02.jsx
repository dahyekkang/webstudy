import React from 'react';

const Ex02 = (props) => {

  /* props : 다른 컴포넌트(부모)가 전달한 파라미터를 저장할 때 사용하는 매개변수(전달하는 게 부모, 전달받는 게 자식) */
  const person = props.per;
  
  return (
    <div className="ex02">
      <h1>Ex02</h1>
      <div>{person.name}, {person.age}</div>
    </div>
  );
};

export default Ex02;