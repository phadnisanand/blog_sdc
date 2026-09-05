import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o,s;function c(){return(c=e((()=>{t={title:`Components/Button`,argTypes:{label:{control:`text`},variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`danger`]}}},n=({label:e,variant:t})=>{let n=document.createElement(`button`);return n.className={primary:`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors`,secondary:`px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors`,outline:`px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors`,danger:`px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors`}[t],n.textContent=e,n},r=n.bind({}),r.args={label:`Primary Button`,variant:`primary`},i=n.bind({}),i.args={label:`Secondary Button`,variant:`secondary`},a=n.bind({}),a.args={label:`Outline Button`,variant:`outline`},o=n.bind({}),o.args={label:`Delete`,variant:`danger`},s=[`Primary`,`Secondary`,`Outline`,`Danger`],r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  const button = document.createElement('button');
  const variants = {
    primary: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors',
    secondary: 'px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors',
    outline: 'px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors',
    danger: 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'
  };
  button.className = variants[variant];
  button.textContent = label;
  return button;
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  const button = document.createElement('button');
  const variants = {
    primary: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors',
    secondary: 'px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors',
    outline: 'px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors',
    danger: 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'
  };
  button.className = variants[variant];
  button.textContent = label;
  return button;
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  const button = document.createElement('button');
  const variants = {
    primary: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors',
    secondary: 'px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors',
    outline: 'px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors',
    danger: 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'
  };
  button.className = variants[variant];
  button.textContent = label;
  return button;
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  const button = document.createElement('button');
  const variants = {
    primary: 'px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors',
    secondary: 'px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors',
    outline: 'px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition-colors',
    danger: 'px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors'
  };
  button.className = variants[variant];
  button.textContent = label;
  return button;
}`,...o.parameters?.docs?.source}}}})))()}c();export{o as Danger,a as Outline,r as Primary,i as Secondary,s as __namedExportsOrder,t as default};