interface Props {
  fill?: string;
  size?: string;
}

const HomeIcon = ({ fill = "#F0F0EE", size = "24" }: Props) => {
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
        <clipPath id="master_svg0_3_7843">
          <rect x="0" y="0" width={size} height={size} rx="0" />
        </clipPath>
      </defs>
      <g clipPath="url(#master_svg0_3_7843)">
        <g>
          <path
            d="M19.8741,9.29927L12,3L3.75061,9.59951C3.276179,9.97906,3,10.55368,3,11.16125L3,19C3,20.1046,3.89543,21,5,21L19,21C20.1046,21,21,20.1046,21,19L21,11.64187C21,10.73052,20.5857,9.86858,19.8741,9.29927ZM5,11.1625L12,5.5625L18.6247,10.86226C18.8619,11.05203,19,11.33934,19,11.64313L19,19.0013L14,19.0013L14,15.0013L10,15.0013L10,19.0013L5,19.0013L5,11.1625Z"
            fillRule="evenodd"
            fill={fill}
            fillOpacity="1"
          />
        </g>
      </g>
    </svg>
  );
};

export default HomeIcon;
