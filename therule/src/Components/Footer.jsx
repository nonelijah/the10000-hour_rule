import styled from "styled-components";

const Foot = styled.footer`
    padding: 70px;

    img {
        width: 125px;
        aspect-ratio: 125/25;
    }
`;

const Address = styled.address`
    margin-top: 20px;
    font-size: 12px;
    font-weight: 400;
`;

function Footer() {
    return (
        <Foot>
            <h2>
                <img src="img/weniv.svg" art="주식회사 WeNiv" />
            </h2>
            <Address>
                ※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에
                있습니다. <br />
                수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.
            </Address>
        </Foot>
    );
}

export default Footer;
