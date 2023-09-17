import React from "react";
import styled from "styled-components";

const Btns = styled.div`
    margin: 127px 130px;
    display: flex;
    gap: 20px;

    .btn-share {
        background-color: white;
    }
`;

function openModal() {}
function LinkBtns() {
    return (
        <Btns>
            <button className="btn-open-modal" onClick={openModal}>
                훈련하러 가기 GO!GO!
            </button>
            <button className="btn-share">공유하기</button>
        </Btns>
    );
}

export default LinkBtns;
