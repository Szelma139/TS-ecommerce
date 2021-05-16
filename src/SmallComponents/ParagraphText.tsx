import styled, {useTheme, css} from "styled-components";


interface IKey {
  [key:string]:string;
}

interface Props {
  children?: string;
  className?: string;
  color?:keyof IColors;
}

interface IColors {
black:IKey;
white: IKey;
gray:IKey;
}

interface SProps {
color?:keyof IColors;
colors?: IColors;
}

const Paragraph = styled.p<SProps>`

font-weight: 300;
font-size: 16px;
line-height: 28px;

${({color, colors})=>
color &&
colors &&
colors[color] &&
css`
color: ${colors[color].color};
`}
`;


export const ParagraphText = ({ children, className = "", color="gray" }: Props) => {
  const theme = useTheme();

  const colors:IColors = {
    black:{
        color: theme?.colors.black || "black"
    },
    white: {
        color: theme?.colors.white || "#fff"
    },
    gray: {
      color: theme?.colors.gray || "gray"
  }
};


  return <Paragraph colors={colors} color={color} className={className}>{children}</Paragraph>;
};
