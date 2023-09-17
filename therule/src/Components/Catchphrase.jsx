import React from "react";
import styled from "styled-components";

const TxtCatch = styled.p`
    color: #f5df4d;
    font-family: "OTEnjoystoriesBA", sans-serif;
    font-size: 36px;
    font-weight: 700;
    margin: 125px auto 78px;
`;

const TxtExplain = styled.p`
    font-size: 18px;
    font-weight: 400;
    position: relative;
    margin-bottom: 100px;

    .point {
        font-size: 24px;
        font-weight: 700;
    }

    &::before {
        content: "“";
        color: rgba(252, 238, 33, 0.3);
        font-size: 96px;
        font-weight: 700;
        position: absolute;
        top: 30%;
        left: 60px;
    }

    &::after {
        content: "”";
        color: rgba(252, 238, 33, 0.3);
        font-size: 96px;
        font-weight: 700;
        position: absolute;
        top: 30%;
        right: 60px;
    }
`;

function Catchphrase() {
    return (
        <>
            <TxtCatch className="txt-catch">
                “연습은 어제의 당신보다 당신을 더 낫게 만든다.”
            </TxtCatch>

            <TxtExplain className="txt-explain">
                <span className="point"> 1만 시간의 법칙</span>은<br />
                어떤 분야의 전문가가 되기 위해서는
                <br />
                최소한 1만 시간의 훈련이 필요하다는 법칙이다.
            </TxtExplain>
        </>
    );
}

export default Catchphrase;
