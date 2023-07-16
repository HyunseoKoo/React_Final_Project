export const FORM_TYPE = {
	EMAIL: {
		required: 'email을 입력해주세요',
		pattern: {
			value:
				/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
			message: 'email 형식에 맞지 않습니다',
		},
	},

	PASSWORD: {
		required: '비밀번호를 입력해주세요',
		maxLength: { value: 20, message: '최대 20글자입니다' },
		minLength: {
			value: 8,
			message: '최소 8글자 이상 비밀번호를 사용하세요.',
		},
		pattern: {
			value: /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
			message: '특수문자, 문자, 숫자를 포함한 형태의 암호를 입력해 주세요',
		},
	},

	PASSWORD_simple: {
		required: '비밀번호를 입력해주세요',
		pattern: {
			message: '비밀번호가 일치하지 않습니다.',
		},
	},

	NICKNAME: {
		required: '닉네임을 입력해주세요',
		minLength: { value: 1 },
		maxLength: { value: 10, message: '닉네임은 최대 10자입니다' },
		pattern: {
			value: /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
			message: '공백없이 한글, 영어, 숫자 형태의 닉네임을 입력해 주세요',
		},
	},
};

import * as yup from "yup";

export const SignupSchema = yup.object().shape({
  email: yup
	.string()
	.required("email을 입력해주세요")
	.matches(
		/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
		"email 형식에 맞지 않습니다"
  ),
  // EMAIL_simple: yup
	// .string()
	// .required("email을 다시 확인해주세요.")
	// .oneOf([yup.ref("EMAIL")], "이메일이 일치하지 않습니다."),
  password: yup
    .string()
    .required("비밀번호를 입력해주세요")
    .min(8, "최소 8글자 이상 비밀번호를 사용하세요.")
    .max(20, "최대 20글자입니다")
    .matches(
	  /^.*(?=^.{8,20}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/,
	  "특수문자, 문자, 숫자를 모두 포함한 암호를 입력해 주세요."
    ),
    passwordCheck: yup
    .string()
    .required("비밀번호를 다시 확인해주세요.")
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  nickname: yup
	  .string()
	  .required("닉네임을 입력해주세요.")
	  .min(1, "닉네임은 최소 1자 이상입니다")
    .max(10, "닉네임은 최대 10자입니다.")
    .matches(
		/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/,
	  "공백없이 한글, 영어, 숫자 형태의 닉네임을 입력해 주세요."
    ),
  phoneNumber: yup
    .string()
    .required("핸드폰 번호를 입력해주세요.")
    .max(13, "숫자 13자리를 입력해주세요.")
    .matches(/^\d{3}-\d{4}-\d{4}$/, "올바른 핸드폰 번호 형식이 아닙니다."),
  address: yup
    .string()
    .required("주소를 입력해주세요.")

})