import type { SVGProps } from 'react';
const SvgMemeColor = ({ width = 24, height = 24, ...props }: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512" {...props}>
    <path d="M357.1 1.4c-3.8 2.1-5 5.5-5.1 13.8V23h-11c-14 0-19.9 2-27.4 9.3-7.5 7.4-9.6 13.4-9.6 27.7v11h-7.5c-8.8 0-12.7 1.6-14.5 5.9-1.6 3.9-.5 8.2 2.6 11.2 2.2 2.1 3.8 2.5 11 2.8l8.4.3v48.6l-8.4.3c-7.2.3-8.8.7-11 2.8-3.1 3-4.2 7.3-2.6 11.2 1.8 4.3 5.7 5.9 14.5 5.9h7.5v11c0 13.7 2 19.8 8.8 26.8 7.7 7.8 12.5 9.6 27 10l12.2.4v7.4c0 8.7 1.6 12.6 5.9 14.4 3.9 1.6 8.2.5 11.2-2.6 2.1-2.2 2.5-3.8 2.8-11l.3-8.4h48.6l.3 8.4c.3 7.2.7 8.8 2.8 11 3 3.1 7.3 4.2 11.2 2.6 4.3-1.8 5.9-5.7 5.9-14.5V208h11c14.1 0 20.2-2.1 27.6-9.4 7.3-7.4 9.4-13.5 9.4-27.6v-11h7.5c8.6 0 12.5-1.5 14.3-5.5 1.9-4.1 1.4-7.2-1.7-10.7-2.8-3.2-3.3-3.3-11.5-3.7l-8.6-.3V91.2l8.4-.3c7.2-.3 8.8-.7 11-2.8 3.1-3 4.2-7.3 2.6-11.2-1.8-4.3-5.7-5.9-14.5-5.9H489V60c0-14.1-2.1-20.2-9.4-27.6-7.4-7.3-13.5-9.4-27.6-9.4h-11v-7.5c0-8.6-1.3-12.1-5.1-14.1-4.2-2.1-7.5-1.7-11.1 1.5-3.2 2.8-3.3 3.3-3.7 11.5l-.3 8.6h-48.6l-.3-8.6c-.4-8.2-.5-8.7-3.7-11.5q-5.25-4.8-11.1-1.5M463 44.5c6.2 3.2 6 1.2 6 71s.2 67.8-6 71c-2.6 1.4-11 1.5-67.5 1.3l-64.5-.3-3.2-3.3-3.3-3.2V50.2l2.5-2.7c1.4-1.5 3.4-3.1 4.5-3.5 1.1-.5 30.5-.9 65.3-.9 54.7-.1 63.7.1 66.2 1.4M186.7 126.2c-11.7 1.5-23.2 10.2-28.5 21.6-2.3 4.9-2.7 7-2.7 15.2.1 8.4.4 10.2 3 15.5 3.6 7.5 10.4 14.3 17.8 17.9l5.7 2.8v12.6l-40.2.5c-44.5.5-46 .6-59.3 7.2-12 5.8-22.4 16.1-28.9 28.5-4.8 9.2-6.6 16.7-7.3 30.7l-.6 12.3H34c-11.1 0-12 .2-17.9 3.1-7.4 3.7-12.4 9.8-14.7 17.7C.1 316-.1 320.5.2 331.4c.3 12.1.7 14.7 2.6 18.3 3.4 6.6 7.8 11 13.9 14 4.9 2.4 7.1 2.8 17.3 3.1l11.7.4.6 12.2c.6 13.8 2.2 19.8 8 31 6 11.6 15.8 21.1 27.9 27.1 9.1 4.4 20.6 7.5 28.4 7.5h3.4l-4.9 6.1c-10 12.4-15.1 27.2-15.1 44.1 0 5.5.5 10.8 1 11.9 2.7 5 .1 4.9 97.9 4.9H284l3.2-2.9 3.3-2.9-.1-11.4c-.1-17.5-5-31.7-14.9-43.8l-4.5-5.5 8.7-1.2c17.2-2.3 29.4-8.4 40.7-20.4 12.4-13.1 17.6-26.7 17.6-46v-10.7l11.8-.4c9.8-.3 12.6-.8 17.2-2.9 6.8-3.2 11.6-7.8 14.6-14.4 2.2-4.6 2.4-6.3 2.4-21s-.2-16.4-2.4-21c-2.4-5.2-8.2-11.2-13.8-14.2-2.5-1.3-6.6-1.9-16.3-2.3l-13-.5-.6-13.5c-.5-9.9-1.2-15-2.7-19.3-6.5-17.9-17.6-30.5-34-38.7-11.8-5.9-14.9-6.2-58.9-6.7l-40.3-.5v-12.7l6-2.7c14.6-6.5 23.9-23.8 21.1-39-3.9-21.1-21.4-33.9-42.4-31.2m13.4 22.1c10.6 5.6 11.9 19.2 2.6 27.4-15 13.2-36.1-8.2-23.2-23.5 5.3-6.3 13.1-7.8 20.6-3.9m92 88.8c9.9 4.8 17 11.9 21.8 21.8l3.6 7.6.3 59.5c.3 53.2.1 60.2-1.4 65.8-3 11.4-11.2 21.5-22.4 27.6-8.7 4.7-15.7 5.6-46.6 5.6h-28l-5-3.1c-8.5-5.4-20.6-15.4-29.4-24.3l-8.5-8.6H102V268h35v-3.8c0-4.2 2.5-20.3 4.2-26.9l1.1-4.4 71.1.3 71.1.3zM46 328.5V346H35.7c-9.8 0-10.5-.1-12.8-2.6-2.3-2.4-2.4-3.2-2.4-15.1 0-12.4 0-12.5 2.8-14.9 2.6-2.2 3.7-2.4 12.8-2.4H46zm315.5-15c2.4 2.3 2.5 2.9 2.5 15.3 0 12.5-.1 12.9-2.6 15.3-2.3 2.1-3.6 2.4-12.5 2.7l-9.9.4V311h10c9.4 0 10.3.2 12.5 2.5m-128.7 133c8.6 2 15.6 5.8 21.8 11.7 8.8 8.3 14.2 18.6 15.7 29.5l.5 4.3h-157l.7-4.3c3.1-20.4 19.5-37.8 39.1-41.5 2.7-.6 20.2-1 38.9-1.1 26.8 0 35.3.2 40.3 1.4" />
    <path d="M143.9 302.5c-5.4 3-6.1 10.4-1.4 15.1 2.2 2.2 3.2 2.4 11.2 2.4 9.8 0 12.2-1 14.3-5.9 1.7-4.2-.2-9.6-4-11.6-3.8-1.9-16.6-1.9-20.1 0M218.9 303.9c-2.1 2.2-2.9 3.9-2.9 6.6s.8 4.4 2.9 6.6c2.8 2.7 3.4 2.9 11.4 2.9 7.7 0 8.8-.2 11.6-2.6 4.3-3.6 4.4-9.3.2-13.5-2.8-2.8-3.4-2.9-11.6-2.9s-8.8.1-11.6 2.9M162.2 339.5c-1.7 1.4-3.3 3.9-3.7 5.5-.7 3.3 1.5 8.4 4.4 10 1.2.6 12.6 1 29.6 1h27.7l2.9-2.9c3.7-3.8 3.9-8.8.5-12.8l-2.4-2.8-28-.3-27.9-.3z" />
  </svg>
);
export default SvgMemeColor;
