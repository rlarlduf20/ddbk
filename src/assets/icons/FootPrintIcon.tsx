interface Props {
  fill?: string;
  size?: string;
}

const FootPrintIcon = ({ fill = "#F0F0EE", size = "24" }: Props) => {
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
        <clipPath id="master_svg0_3_7841">
          <rect x="0" y="0" width={size} height={size} rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_3_7841)">
        <g>
          <path
            d="M12.5,17.9252C12.5,17.9252,6.62868,21,6.62868,21C6.62868,21,7.75,14.4875,7.75,14.4875C7.75,14.4875,3,9.87539,3,9.87539C3,9.87539,9.56434,8.925229999999999,9.56434,8.925229999999999C9.56434,8.925229999999999,12.5,3,12.5,3C12.5,3,15.4357,8.925229999999999,15.4357,8.925229999999999C15.4357,8.925229999999999,22,9.87539,22,9.87539C22,9.87539,17.25,14.4875,17.25,14.4875C17.25,14.4875,18.371299999999998,21,18.371299999999998,21C18.371299999999998,21,12.5,17.9252,12.5,17.9252Z"
            fill={fill}
            fillOpacity="1"
          />
        </g>
      </g>
    </svg>
  );
};

export default FootPrintIcon;
