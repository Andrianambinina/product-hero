import { Typography, styled } from "@mui/material";

type Props = {
  text: string;
  alignment?: "left" | "center" | "right";
};

const StyledDescriptionText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "alignment"
})<Pick<Props, "alignment">>(({ theme, alignment }) => ({
  fontWeight: 400,
  fontSize: 14,
  lineHeight: 1.57,
  letterSpacing: "0.01em",
  color: theme.palette.grey[800],
  textAlign: alignment
}));

const Description = ({ text, alignment }: Props) => {
  return (
    <StyledDescriptionText variant="body1" alignment={alignment}>
      {text}
    </StyledDescriptionText>
  );
};

export default Description;
