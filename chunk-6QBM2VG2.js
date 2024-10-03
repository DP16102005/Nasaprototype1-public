var s={name:"celestiary",homepage:"https://github.com/celestiary/web#readme",description:"Astronomical simulator web app.",author:"Pablo Mayrgundter",license:"ISC",version:"0.0.10",repository:{type:"git",url:"git+https://github.com/celestiary/web.git"},bugs:{url:"https://github.com/celestiary/web/issues"},scripts:{build:'yarn clean && xcopy "public\\*" "docs" /E /I && xcopy "js\\shaders" "docs\\js\\shaders" /E /I && node esbuild/build.js',clean:'rimraf docs && xcopy "public" "docs" /E /I',lint:"yarn eslint js",serve:"yarn build && node esbuild/serve.js",test:"bun test"},dependencies:{"@emotion/react":"^11.11.3","@emotion/styled":"^11.11.0","@mui/icons-material":"^5.15.11","@mui/material":"^5.15.11","@pablo-mayrgundter/fullscreen.js":"1.1.0","@pablo-mayrgundter/measure.js":"2.0.1","@pablo-mayrgundter/parser.js":"1.0.1","@pablo-mayrgundter/yaot2":"2.0.1","@react-three/drei":"9.5.3","@react-three/fiber":"8.2.3","@types/three":"0.161.0",frag:"^2.1.0",react:"18.2.0","react-dom":"18.2.0",three:"^0.137.0","troika-three-text":"^0.49.1","troika-three-utils":"^0.49.0",tweakpane:"4.0.3",vert:"^0.2.1",vsop87:"1.0.5",wouter:"^3.0.0",zustand:"^4.5.1"},devDependencies:{"@tsconfig/recommended":"1.0.3","@types/history":"5.0.0","@types/node":"18.11.10","@types/react":"18.2.0","@types/react-dom":"18.2.0",esbuild:"0.20.0",eslint:"8.56.0","eslint-config-google":"0.14.0","eslint-plugin-import":"2.29.1","eslint-plugin-jsdoc":"48.1.0","eslint-plugin-jsx-a11y":"6.8.0","eslint-plugin-react":"7.33.2","eslint-plugin-react-hooks":"4.6.0",rimraf:"^6.0.1"},keywords:["astronomy","astrology","planetarium","orary","gis","space","webgl","threejs","javascript"]};export{s as a};
//# sourceMappingURL=chunk-6QBM2VG2.js.map
