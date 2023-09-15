import CountMajor from "./CountMajor";
import Catchphrase from "./Catchphrase";
import LinkBtns from "./LinkBtns";
import Modal from "./Modal";

function Main() {
    return (
        <main>
            <h2 className="a11y-hidden">main wrap</h2>
            <section className="wrap-main">
                <Catchphrase />
                <CountMajor />
                <LinkBtns />
            </section>
            {<Modal />}
        </main>
    );
}

export default Main;
