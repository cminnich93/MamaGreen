import styled from "styled-components";

export const HomeDesign = styled.div`
  text-align: center;
  margin-top: 150px;
  font-family: "Quicksand", sans-serif;

  .container {
    height: 100%;
  }

  //** helper
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
  }

  .uppercase {
    text-transform: uppercase;
  }

  //** button
  .btn {
    display: inline-block;
    background: rgb(68, 158, 68);
    color: white;
    border: 0;
    outline: 0;
    padding: 0;
    transition: all 200ms ease-in;
    cursor: pointer;
    font-size: 15px;

    &--primary {
      background: $button-bg-color;
      color: $button-text-color;
      box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.1);
      border-radius: 2px;
      padding: 12px 36px;

      &:hover {
        background: darken($button-bg-color, 4%);
      }

      &:active {
        background: $button-bg-color;
        box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, 0.2);
      }
    }

    &--inside {
      margin-left: -96px;
    }
  }

  //** form
  .form {
    &__field {
      width: 360px;
      background: #fff;
      color: $input-text-color;
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
      border: 0;
      outline: 0;
      padding: 22px 18px;
      font-size: 15px;
    }
  }
`;

export const Button = styled.div`
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  text-align: center;
`;
export const Div = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Info = styled.div`
  .p {
    display: flex;
  }
`;
