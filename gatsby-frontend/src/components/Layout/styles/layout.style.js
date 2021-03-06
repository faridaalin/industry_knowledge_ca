import styled from "styled-components/macro"

const overlayBackground = `content: "";
background: -webkit-gradient(linear, left top, left bottom, color-stop(30%, rgba(29, 36, 52, 0)), to(#1d2434));
background: -o-linear-gradient(top, rgba(29, 36, 52, 0) 30%, #1d2434 100%);
background: linear-gradient(180deg, rgba(29, 36, 52, 0) 30%, #1d2434 100%);
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
z-index: -1;`

export const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-rows: auto 1fr auto;
  grid-template-rows: auto 1fr auto;
  -ms-grid-columns: 100%;
  grid-template-columns: 100%;
  overflow-x: hidden;

  .main {
    position: relative;
    width: 100vw;
    padding: 70px 10% 120px 10%;

    ::after {
      ${({ about }) => (about ? `${overlayBackground}` : "")}
      ${({ contact }) => (contact ? `${overlayBackground}` : "")};
      @media all and (min-width: 768px) {
        ${({ about }) => (about ? `max-width: 65vw` : "")}
        ${({ contact }) => contact && ` max-width: 70vw; right: 0; left: auto;`}
      }
    }
  }

  .main.home {
    padding-bottom: 0;
    height: 100vh;
  }

  .main__body {
    ${props =>
      props.home
        ? `display: flex; align-items: center; justify-content: center; height: 100%;`
        : `grid-row: 2 / 3;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 2fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
      `};

    .small-section {
      margin: 0 auto;
      width: 100%;
      max-width: 995px;
    }
  }

  .main__heading {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-weight: 900;
    height: 20vh;
   

    .title {
      position: absolute;
      font-size: 32px;
      font-weight: 900;
      text-transform: uppercase;
      display: -webkit-box;
      display: -ms-flexbox;

      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      background-color: rgba(231, 61, 87, 1);
      background-image: linear-gradient(
        95deg,
        rgba(243, 80, 105, 1) 0%,
        rgba(250, 106, 184, 1) 100%
      );
      background-image: -o-linear-gradient(
        355deg,
        rgba(243, 80, 105, 1) 0%,
        rgba(250, 106, 184, 1) 100%
      );
      background: -webkit-linear-gradient(
        95deg,
        rgba(243, 80, 105, 1) 0%,
        rgba(250, 106, 184, 1) 100%
      );

      background-size: 100%;
      background-repeat: repeat;
      background-clip: text;
      background-size: cover;
      background-clip: text;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
      -webkit-text-fill-color: transparent;
      text-shadow: 2px 2px 10px rgb(0 0 0 / 0.16);
    }

    .decorative-title {
      position: absolute;
      padding-top: 12px;
      font-size: clamp(5vh, 10rem, 12vw);
      background-image: linear-gradient(
        95deg,
        rgba(243, 80, 105, 1) 0%,
        rgba(250, 106, 184, 1) 100%
      );
      background-image: -o-linear-gradient(
        355deg,
        rgba(243, 80, 105, 1) 0%,
        rgba(250, 106, 184, 1) 100%
      );

      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-stroke: 3.5px transparent;
      color: #10141d;
      z-index: -200;
      text-transform: uppercase;
      width: 100%;
      width: -webkit-fit-content;
      width: -moz-fit-content;
      width: fit-content;
      height: 100%;
      min-height: 100%;
      -webkit-filter: opacity(0.1);
      filter: opacity(0.1);
    }
  }

  @media only screen and (min-width: 576px) {
    .main__heading {
      height: 25vh;
      .decorative-title {
        padding-top: 0px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    .main__heading {
      min-height: 30vh;

      .decorative-title {
        padding-top: 18px;
      }
    }
  }
`
