import React from "react";
import styled from "styled-components";

const Form = styled.form`
    p {
        font-size: 24px;
        font-weight: 400;
        input {
            color: black;
            max-height: 57px;
            width: auto;
            border-radius: 7px;
            padding: 15px 20px;
            margin: 15px 15px;

            &::placeholder {
                color: #babcbe;
                text-align: center;
            }
        }
    }
`;

const ClickGroup = styled.div`
    margin: 115px auto 147px;
    vertical-align: baseline;
    display: flex;
    justify-content: center;
    gap: 7px;

    .img-click {
        max-width: 64px;
        aspect-ratio: 64/72;
        position: relative;
        top: 20px;
    }
`;

const Calculate = styled.div`
    p {
        font-size: 24px;
        font-weight: 400;

        strong {
            font-size: 72px;
            font-weight: 700;
        }
    }
`;

function CountMajor() {
    function calculate() {
        const input = document.querySelector(".form-inp");
        const inpMajor = input.querySelector("#user-major");
        const inpTime = input.querySelector("#user-times");
        const output = document.querySelector(".calculate-wrap");
        const outMajor = output.querySelector("#major");
        const outTimes = output.querySelector("#times");

        if (inpMajor.value === "") {
            alert("희망하는 분야를 입력해주세요");
        } else if (inpTime.value === "") {
            alert("훈련할 시간을 입력해주세요.");
        } else {
            outMajor.textContent = inpMajor.value;
            outTimes.textContent = 10000 / parseInt(inpTime.value);
        }
    }

    return (
        <>
            <Form className="form-inp">
                <h3 className="form-inp"></h3>
                <p>
                    나는
                    <label>
                        <input
                            type="text"
                            name="user-major"
                            id="user-major"
                            placeholder="예) 프로그래밍"
                        />
                    </label>
                    전문가가 될 것이다.
                </p>
                <p>
                    그래서 앞으로 매일 하루에
                    <label>
                        <input
                            type="number"
                            name="user-times"
                            id="user-times"
                            min={0}
                            max={24}
                            step={1}
                            placeholder="예) 5(시간)"
                        />
                    </label>
                    시간씩 훈련할 것이다.
                </p>
            </Form>

            <ClickGroup className="clickGroup">
                <button className="btn-run" onClick={calculate}>
                    나는 며칠 동안 훈련을 해야 1만 시간이 될까?
                </button>
                <img className="img-click" src="img/click.svg" alt="클릭!" />
            </ClickGroup>

            <Calculate className="calculate-wrap">
                <p>
                    당신은 <strong id="major">당신이 희망하는</strong> 전문가가
                    되기 위해서
                </p>
                <p>
                    대략 <strong id="times">100000</strong> 일 이상 훈련하셔야
                    합니다! :)
                </p>
            </Calculate>
        </>
    );
}

export default CountMajor;
