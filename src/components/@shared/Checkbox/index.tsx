import { useTheme } from "@emotion/react";
import { themeType } from "../../../ThemeProvider";
import * as S from "./index.styles";

interface CheckboxProps {
  id: number;
  label?: string;
  value?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ id, label, value, handleChange }: CheckboxProps) => {
  const stringId = String(id);
  const {
    color: { primary },
  } = useTheme() as themeType;

  return (
    <S.CheckboxContainer>
      <S.Checkbox
        type="checkbox"
        id={stringId}
        backgroundColor={primary}
        checked={value}
        onChange={handleChange}
      />
      <S.Label htmlFor={stringId}>
        <S.CheckLabel>✔</S.CheckLabel>
      </S.Label>
      <p>{label}</p>
    </S.CheckboxContainer>
  );
};

export default Checkbox;
