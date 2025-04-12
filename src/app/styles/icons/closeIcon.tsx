import { IconProps } from './types';

export const CloseIcon = ({  fill = "#0F0E0F"  }: IconProps) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.99998 8.70714L11.6464 12.3536L12.3535 11.6465L8.70708 8.00004L12.3535 4.35359L11.6464 3.64648L7.99998 7.29293L4.35353 3.64648L3.64642 4.35359L7.29287 8.00004L3.64642 11.6465L4.35353 12.3536L7.99998 8.70714Z"
      fill={fill}
    />
  </svg>
);
