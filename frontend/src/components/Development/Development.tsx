import * as S from "./Development.styles";

const Development = ({ page }: { page: string }) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>
          A página <S.Detail>{page}</S.Detail>{" "}está em manutenção, por favor
          volte mais tarde.
        </S.Title>
      </S.Wrapper>
    </S.Container>
  );
};

export default Development;
