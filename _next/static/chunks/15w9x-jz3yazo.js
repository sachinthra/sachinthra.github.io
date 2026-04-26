(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,99971,e=>{"use strict";var t=e.i(43476),r=e.i(71645),a=e.i(75056),i=e.i(80931),o=e.i(57528),n=e.i(90072);let s=parseInt(n.REVISION.replace(/\D+/g,""));class l extends n.ShaderMaterial{constructor(){super({uniforms:{time:{value:0},fade:{value:1}},vertexShader:`
      uniform float time;
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 0.5);
        gl_PointSize = size * (30.0 / -mvPosition.z) * (3.0 + sin(time + 100.0));
        gl_Position = projectionMatrix * mvPosition;
      }`,fragmentShader:`
      uniform sampler2D pointTexture;
      uniform float fade;
      varying vec3 vColor;
      void main() {
        float opacity = 1.0;
        if (fade == 1.0) {
          float d = distance(gl_PointCoord, vec2(0.5, 0.5));
          opacity = 1.0 / (1.0 + exp(16.0 * (d - 0.25)));
        }
        gl_FragColor = vec4(vColor, opacity);

        #include <tonemapping_fragment>
	      #include <${s>=154?"colorspace_fragment":"encodings_fragment"}>
      }`})}}let c=e=>new n.Vector3().setFromSpherical(new n.Spherical(e,Math.acos(1-2*Math.random()),2*Math.random()*Math.PI)),u=r.forwardRef(({radius:e=100,depth:t=50,count:a=5e3,saturation:o=0,factor:s=4,fade:u=!1,speed:d=1},m)=>{let f=r.useRef(null),[p,h,v]=r.useMemo(()=>{let r=[],i=[],l=Array.from({length:a},()=>(.5+.5*Math.random())*s),u=new n.Color,d=e+t,m=t/a;for(let e=0;e<a;e++)d-=m*Math.random(),r.push(...c(d).toArray()),u.setHSL(e/a,o,.9),i.push(u.r,u.g,u.b);return[new Float32Array(r),new Float32Array(i),new Float32Array(l)]},[a,t,s,e,o]);(0,i.useFrame)(e=>f.current&&(f.current.uniforms.time.value=e.clock.elapsedTime*d));let[g]=r.useState(()=>new l);return r.createElement("points",{ref:m},r.createElement("bufferGeometry",null,r.createElement("bufferAttribute",{attach:"attributes-position",args:[p,3]}),r.createElement("bufferAttribute",{attach:"attributes-color",args:[h,3]}),r.createElement("bufferAttribute",{attach:"attributes-size",args:[v,1]})),r.createElement("primitive",{ref:f,object:g,attach:"material",blending:n.AdditiveBlending,"uniforms-fade-value":u,depthWrite:!1,transparent:!0,vertexColors:!0}))});function d(){let e=(0,r.useRef)(null),a=(0,r.useMemo)(()=>{let e=new Float32Array(600);for(let t=0;t<200;t++)e[3*t]=(Math.random()-.5)*40,e[3*t+1]=(Math.random()-.5)*40,e[3*t+2]=(Math.random()-.5)*40;return e},[]);return(0,i.useFrame)(t=>{e.current&&(e.current.rotation.y=.02*t.clock.elapsedTime,e.current.rotation.x=.1*Math.sin(.01*t.clock.elapsedTime))}),(0,t.jsxs)("points",{ref:e,children:[(0,t.jsx)("bufferGeometry",{children:(0,t.jsx)("bufferAttribute",{attach:"attributes-position",args:[a,3]})}),(0,t.jsx)("pointsMaterial",{size:.05,color:"#00ADD8",transparent:!0,opacity:.6,sizeAttenuation:!0})]})}e.s(["default",0,function(){return(0,t.jsx)("div",{className:"fixed inset-0 -z-10","aria-hidden":"true",children:(0,t.jsxs)(a.Canvas,{camera:{position:[0,0,5],fov:75},dpr:[1,1.5],gl:{antialias:!1,alpha:!0},style:{background:"transparent"},children:[(0,t.jsx)(o.AdaptiveDpr,{pixelated:!0}),(0,t.jsx)(u,{radius:100,depth:50,count:3e3,factor:4,saturation:0,fade:!0,speed:.5}),(0,t.jsx)(d,{}),(0,t.jsx)("ambientLight",{intensity:.1})]})})}],99971)},57624,e=>{e.n(e.i(99971))}]);