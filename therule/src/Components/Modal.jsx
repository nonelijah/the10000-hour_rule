import React from "react";
import styled from "styled-components";

const Dim = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0 0 0 0.6);
    z-index: 100;
`;

const ModalWrap = styled.article`
    width: 800px;
    height: 800px;
    box-sizing: border-box;
    border-radius: 30px;
    box-shadow: 0 0 20px (rgba(0 0 0 0.5));
    background-color: white;
    overflow: hidden;

    padding-top: 76px;

    font-family: "OTEnjoystoriesBA", sans-serif;
    color: #5b2386;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;

    strong {
        font-size: 96px;
        font-weight: 700;
    }

    p {
        font-size: 36px;
    }

    img {
        max-width: 433px;
        aspect-ratio: 433/337;
        margin-top: 29px;
    }

    .btn-close-modal {
        margin: 74px auto 68px auto;
    }
`;

function Modal({ setModalShow }) {
    function closeModal() {
        setModalShow(false);
    }
    return (
        <section className="modal">
            <h3 className="a11y-hidden">화이팅! 모달창</h3>
            <Dim className="modal-backdrop" onClick={closeModal}></Dim>
            <ModalWrap className="modal-wrap">
                <strong>화이팅!!♥♥♥</strong>
                <p>당신의 꿈을 응원합니다!</p>
                <img src="img/licat.svg" alt="위니브 캐릭터 라이캣" />
                <button className="btn-close-modal" onClick={closeModal}>
                    종료하고 진짜 훈련하러 가기 GO!GO!
                </button>
            </ModalWrap>
        </section>
    );
}

export default Modal;
