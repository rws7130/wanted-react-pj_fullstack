// import React from 'react';
// // import styles from './Modal.module.css';

// const Modal = (props) => {
//   // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
//   const { open, close, header } = props;

//   return (
//     // 모달이 열릴때 openModal 클래스가 생성된다.
//     <div className={open ? 'openModal modal' : 'modal'}>
//       {open ? (
//         <section>
//           <header>
//             {header}
//             <button className="close" onClick={close}>
//               &times;
//             </button>
//           </header>
//           <main>{props.children}</main>
//           <footer>
//             <button className="close" onClick={close}>
//               close
//             </button>
//           </footer>
//         </section>
//       ) : null}
//     </div>
//   );
// };
// export default Modal;

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세 내용</p>
    </div>
  );
}
 
export default Modal;
