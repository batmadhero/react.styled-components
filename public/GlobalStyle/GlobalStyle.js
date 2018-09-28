import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
${reset}

* {
    box-sizing: border-box;
      &::before, &:after {
        box-sizing: border-box;
    }
}

*::-webkit-input-placeholder {
	color: #666;
	opacity: 1;
}

*:-moz-placeholder {
  color: #666;
	opacity: 1;
}

*::-moz-placeholder {
	color: #666;
	opacity: 1;
}

*:-ms-input-placeholder {
	color: #666;
	opacity: 1;
}

html, body  {
  height: 100%;
}

body {
	font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  color: #131313;
  min-width: 320px;
	position: relative;
  line-height: 1.65;
  overflow-x: hidden;
}

body input:focus:required:invalid,
body textarea:focus:required:invalid {
	color: #666
}

body input:required:valid,
body textarea:required:valid {
	color: #666
}

img {
  height: 100%
}

`;

export default GlobalStyle;