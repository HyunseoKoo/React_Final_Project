import { Controller } from "react-hook-form";
import styled from "styled-components";
import { ErrorMessage } from "@hookform/error-message";

export default function SignupInput({ label, name, control, errors, ...rest }) {
    return (
        <S.Div>
          <S.InputWrap>
            <S.ItemWrap>
              <S.Mark>*</S.Mark>
              <span>{label}</span>
            </S.ItemWrap>
            <S.InputBoxWrap>
              <Controller
                name={name}
                control={control}
                render={({ field }) => <input {...field} {...rest} />}
              />
            </S.InputBoxWrap>
          </S.InputWrap>
          {errors && (
            <div style={{ color: "red" }}>
              <ErrorMessage name={name} errors={errors} />
            </div>
          )}
        </S.Div>
      );
}

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const InputWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ItemWrap = styled.div`
  display: flex;
  width: 20%;
  & > span {
    font-size: 16px;
    font-weight: 700;
  }
`;

const InputBoxWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > input {
    width: 100%;
    height: 10px;
    border: 1px solid beige;
    border-radius: 10px;
    margin: 10px 0px;
    display: flex;
    padding: 20px;
    margin-left: 10px;
    padding-left: 10px;
  }
`;

const Mark = styled.span`
  color: red;
  font-weight: 700;
`;

const S = {
  InputWrap,
  Div,
  Mark,
  ItemWrap,
  InputBoxWrap,
};
