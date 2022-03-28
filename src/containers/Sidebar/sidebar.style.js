import styled from "styled-components";
import colors from "../../style/colors";

const Container = styled.div`
  width: 220px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${colors.sidebar_bg};
  border-right: 1px solid ${colors.sidebar_border};
  display: flex;
  flex-direction: column;
  z-index: 99999;

  .logo {
    width: 180px;
    height: 150px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .links {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
  .link {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 10px;
    height: 40px;
    border: 1px solid transparent;
    margin: 6px 0;
    &:hover .link__icon,
    &:hover .link__title,
    &.link--active .link__icon,
    &.link--active .link__title {
      color: ${colors.primary};
    }
    &:hover,
    &.link--active {
      border: 1px solid ${colors.primary};
      border-radius: 10px;
    }
    .link__icon {
      font-size: 20px;
      margin-right: 20px;
      color: ${colors.text};
    }
    .link__title {
      font-size: 18px;
      color: ${colors.text};
    }
  }
  .auth__links {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

export default Container;
