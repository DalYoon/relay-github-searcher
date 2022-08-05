const icons = {
  github: require("assets/icons/github.png"),
} as const;

type Props = {
  type: keyof typeof icons;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function Icon({ type, alt, ...rest }: Props) {
  return <img src={icons[type]} alt={alt} {...rest} />;
}
