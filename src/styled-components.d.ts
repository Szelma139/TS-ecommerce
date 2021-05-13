import 'styled-components';

interface objectKey  {
[key:string]:string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
     colors: objectKey;
     gradient:objectKey;
  }
}