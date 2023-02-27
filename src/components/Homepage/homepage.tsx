import { StyledHomepage } from './homepage.styles';

type Props = {
  children: React.ReactNode;
};

function Homepage({ children }: Props) {
  return <StyledHomepage>{children}</StyledHomepage>;
}

export default Homepage;
