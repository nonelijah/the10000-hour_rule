import { useState } from "react";
import CountMajor from "./CountMajor";
import Catchphrase from "./Catchphrase";
import LinkBtns from "./LinkBtns";
import Modal from "./Modal";

function Main() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <main>
            <h2 className="a11y-hidden">main wrap</h2>
            <section className="wrap-main">
                <h3 className="a11y-hidden">
                    1만 시간의 법칙과 이를 계산해보기.
                </h3>
                <Catchphrase />
                <CountMajor />
                <LinkBtns setModalShow={setModalShow} />
            </section>
            {modalShow ? <Modal setModalShow={setModalShow} /> : null}
        </main>
    );
}

export default Main;
