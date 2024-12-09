interface Props {
  fill?: string;
  size?: string;
}

const LeftArrowIcon = ({ fill = "#F0F0EE", size = "24" }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="none"
      version="1.1"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
    >
      <defs>
        <clipPath id="master_svg0_3_5492">
          <rect x="0" y="0" width={size} height={size} rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_3_5492)">
        <g>
          <path
            d="M15,4C15,4,17,6,17,6C17,6,11,12,11,12C11,12,17,18,17,18C17,18,15,20,15,20C15,20,7,12,7,12C7,12,15,4,15,4Z"
            fillRule="evenodd"
            fill={fill}
            fillOpacity="1"
          />
        </g>
      </g>
    </svg>
  );
};

export default LeftArrowIcon;
