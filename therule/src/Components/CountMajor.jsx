import React from "react";

function CountMajor() {
    return (
        <>
            <form>
                <h3 className="form-inp"></h3>
                <p>
                    나는
                    <label>
                        <input
                            type="text"
                            name="major"
                            id="major"
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
                            name="times"
                            id="times"
                            min={0}
                            step={0.5}
                            placeholder="예) 5(시간)"
                        />
                    </label>
                    시간씩 훈련할 것이다.
                </p>
            </form>

            <button className="btn-run">
                나는 며칠 동안 훈련을 해야 1만 시간이 될까?
            </button>

            <div>
                <p>
                    당신은<strong>당신이 희망하는</strong>전문가가 되기 위해서
                </p>
                <p>
                    대략 <strong>0</strong>일 이상 훈련하셔야 합니다! :)
                </p>
            </div>
        </>
    );
}

export default CountMajor;
