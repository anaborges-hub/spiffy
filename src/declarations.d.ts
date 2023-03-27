declare module '*.module.css';

declare module '*.module.scss';

declare module '*.module.sass';

declare module '*.png';

declare module '*.jpg';

declare module '*.jpg' {
  let _: string;
  export = _;
}
