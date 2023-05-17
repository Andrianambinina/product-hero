import { Typography, styled } from "@mui/material";

type Props = {
  text: string;
  alignment?: "left" | "center" | "right";
};

const StyledTitleText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "alignment"
})<Pick<Props, "alignment">>(({ theme, alignment }) => ({
  fontWeight: 700,
  fontSize: 22,
  lineHeight: 1.36,
  letterSpacing: "0.01em",
  color: theme.palette.grey[800],
  textAlign: alignment
}));

const Title = ({ text, alignment }: Props) => {
  return (
    <StyledTitleText variant="h1" alignment={alignment}>
      {text}
    </StyledTitleText>
  );
};

export default Title;
