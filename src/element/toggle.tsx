import { HTMLProps } from "react";

export function Toggle({ size, className, checked, ...props }: HTMLProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 33.015999 19.353487"
      fill="none"
      width={size}
      height={props.height ?? size}
      className={className}
      onClick={props.onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m 10.265361,0.05752611 c 1.126446,-0.06242431 2.251588,-0.05743114046 3.378034,-0.05743114046 0.0077,0 5.70779,0 5.70779,0 1.148521,0 2.273663,-0.0049931695 3.399407,0.05743114046 1.023495,0.05619252 2.020399,0.17605763 3.012887,0.44387929 2.089033,0.5631251 3.913363,1.739307 5.232065,3.4068227 1.310876,1.6569003 2.020399,3.685279 2.020399,5.7678955 0,2.0852294 -0.709523,4.1123014 -2.020399,5.7692404 -1.318702,1.666906 -3.143032,2.843688 -5.232065,3.406775 -0.992488,0.26785 -1.989392,0.387067 -3.012887,0.443869 -1.125744,0.06241 -2.250886,0.0568 -3.377332,0.0568 -0.0078,0 -5.709194,6.78e-4 -5.709194,6.78e-4 -1.147117,-6.78e-4 -2.272259,0.0049 -3.398705,-0.05748 C 9.2425688,19.239206 8.2455645,19.119989 7.253176,18.852139 5.1640828,18.289052 3.3397837,17.11227 2.021091,15.445364 0.71016486,13.788425 0,11.761353 0,9.676801 0,7.5935071 0.71016486,5.5651284 2.021091,3.9082281 3.3397837,2.2407124 5.1640828,1.0645305 7.253176,0.5014054 8.2455645,0.23358374 9.2425688,0.11371863 10.265361,0.05752611 Z"
        className={checked ? "transition-colors fill-success" : "transition-colors fill-layer-3"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m 10.118173,18.367375 c 4.8102,0 8.7097,-3.8995 8.7097,-8.7096999 0,-4.8101905 -3.8995,-8.7096505 -8.7097,-8.7096505 -4.8102196,0 -8.7096796,3.89946 -8.7096796,8.7096505 0,4.8101999 3.89946,8.7096999 8.7096796,8.7096999 z"
        fill="#ffffff"
        className="transition-transform"
        style={{
          transform: checked ? "translateX(12px)" : "translateX(0px)"
        }}
      />
    </svg>
  );
}
