interface Props {
  fill?: string;
  size?: string;
}

const CollectionIcon = ({ fill = "#F0F0EE", size = "24" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      version="1.1"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="master_svg0_3_7840">
          <rect x="0" y="0" width={size} height={size} rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_3_7840)">
        <g>
          <path
            d="M19,5L11,5L9,3L5,3C3.9,3,3,3.9,3,5L3,19C3,20.1046,3.89543,21,5,21L19,21C20.1046,21,21,20.1046,21,19L21,7C21,5.89543,20.1046,5,19,5ZM5,19L5,7L19,7L19,19L5,19Z"
            fillRule="evenodd"
            fill={fill}
            fillOpacity="1"
          />
        </g>
      </g>
    </svg>
  );
};

export default CollectionIcon;
