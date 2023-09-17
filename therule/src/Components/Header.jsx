import styled from "styled-components";

const Title = styled.header`
    padding: 194px auto 125px;

    .title {
        max-width: 564px;
        aspect-ratio: 564/112;
        position: relative;

        &::after {
            content: "";
            width: 220px;
            aspect-ratio: 225px;
            background-image: url("img/time.svg");
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(50%);
        }
    }
`;

function Header() {
    return (
        <Title>
            <h1>
                <img
                    className="title"
                    src="img/title.svg"
                    alt="1만 시간의 법칙"
                />
            </h1>
        </Title>
    );
}

export default Header;
