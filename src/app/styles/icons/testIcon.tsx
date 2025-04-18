interface IconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export const TestIcon = ({
  width = 14,
  height = 14,
  color = "#597708",
  className,
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ minWidth: width, minHeight: height }}
  >
    <g clipPath="url(#clip0_191_89904)">
      <circle
        cx="7.00027"
        cy="7.00027"
        r="1.98398"
        stroke={color}
        strokeWidth="1.70055"
      />
      <g opacity="0.36">
        <path
          d="M13.1901 7.28343C13.6759 7.28343 14.0692 7.68936 13.9897 8.16854C13.5136 11.0381 11.313 13.3251 8.48866 13.929C7.9974 14.034 7.56685 13.6337 7.56685 13.1313C7.56685 12.6904 7.90272 12.3281 8.33004 12.2196C10.3152 11.7153 11.8603 10.1082 12.275 8.08876C12.3665 7.64274 12.7348 7.28343 13.1901 7.28343Z"
          fill={color}
        />
        <path
          d="M13.1313 6.43315C13.6337 6.43315 14.034 6.00267 13.929 5.51141C13.3478 2.79284 11.2072 0.652227 8.48859 0.0709972C7.99733 -0.0340341 7.56685 0.36631 7.56685 0.868673C7.56685 1.30956 7.90275 1.67187 8.33007 1.78043C10.2355 2.2645 11.7355 3.76451 12.2196 5.66993C12.3281 6.09725 12.6904 6.43315 13.1313 6.43315Z"
          fill={color}
        />
        <path
          d="M0.868666 6.43315C1.30956 6.43315 1.67186 6.09728 1.78042 5.66996C2.28474 3.68478 3.89182 2.13966 5.91124 1.72504C6.35726 1.63346 6.71657 1.26518 6.71657 0.809859C6.71657 0.324128 6.31064 -0.0692482 5.83146 0.0102658C2.96188 0.486439 0.674884 2.68698 0.0710056 5.51134C-0.0340306 6.0026 0.366304 6.43315 0.868666 6.43315Z"
          fill={color}
        />
        <path
          d="M0.809853 7.28343C0.324122 7.28343 -0.0692503 7.6894 0.0102666 8.16858C0.504299 11.1457 2.85433 13.4957 5.83142 13.9897C6.3106 14.0693 6.71657 13.6759 6.71657 13.1901C6.71657 12.7348 6.35729 12.3665 5.91127 12.275C3.81072 11.8437 2.1563 10.1893 1.72502 8.08873C1.63345 7.64271 1.26517 7.28343 0.809853 7.28343Z"
          fill={color}
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_191_89904">
        <rect width="14" height="14" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
