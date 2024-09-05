import React, {useState} from 'react';

const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage('안녕하세요!');
    const onClickLeave = () => setMessage('안녕히가세요!');

    const [color, setColor] = useState('pink');
    // useState 값이 color에 저장됨 -> color는 검정, setColor는 color값을 변경하는 메소드가 됨

    return ( 
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>
        </div>
    )
}
export default Say;