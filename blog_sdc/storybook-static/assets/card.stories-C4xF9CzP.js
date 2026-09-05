import{n as e}from"./rolldown-runtime-DkW27tQK.js";var t,n,r,i,a,o;function s(){return(s=e((()=>{t={title:`Components/Card`,tags:[`autodocs`],parameters:{layout:`padded`},argTypes:{title:{control:`text`,description:`The title displayed in the card header`},content:{control:`text`,description:`The main content of the card`},image:{control:`text`,description:`Optional image HTML for the card`},tags:{control:`text`,description:`Optional tags HTML for the card`},url:{control:`text`,description:`Optional URL for the title link`}}},n=e=>{let t=document.createElement(`article`);if(t.className=`mb-6 overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg`,t.setAttribute(`data-component-id`,`blog_sdc:card`),e.image){let n=document.createElement(`div`);n.className=`aspect-video overflow-hidden`,n.innerHTML=e.image,t.appendChild(n)}if(e.title){let n=document.createElement(`div`);n.className=`p-6`;let r=document.createElement(`h2`);if(r.className=`mb-3 text-xl font-semibold text-gray-900`,e.url){let t=document.createElement(`a`);t.href=e.url,t.className=`text-blue-600 transition-colors hover:text-blue-800`,t.textContent=e.title,r.appendChild(t)}else r.textContent=e.title;n.appendChild(r),t.appendChild(n)}if(e.content){let n=document.createElement(`div`);n.className=`px-6 pb-4`;let r=document.createElement(`div`);r.className=`leading-relaxed text-gray-600`,r.innerHTML=e.content,n.appendChild(r),t.appendChild(n)}if(e.tags){let n=document.createElement(`div`);n.className=`border-t border-gray-100 px-6 pt-4 pb-6`;let r=document.createElement(`div`);r.className=`flex flex-wrap gap-2`,r.innerHTML=e.tags,n.appendChild(r),t.appendChild(n)}return t},r={args:{title:`Basic Card`,content:`This is a basic card with minimal styling.`},render:n},i={args:{title:`Card with Image`,content:`This card includes a featured image at the top.`,image:`<img src="<https://placehold.co/600x400>" alt="Placeholder" class="w-full h-auto" />`,url:`/example`},render:n},a={args:{title:`Complete Card`,content:`This card showcases all available features.`,image:`<img src="<https://placehold.co/600x400>" alt="Complete" class="w-full h-auto" />`,tags:`<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Featured</span>`,url:`/complete`},parameters:{backgrounds:{default:`gray`}},render:n},o=[`Basic`,`WithImage`,`Complete`],r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Basic Card',
    content: 'This is a basic card with minimal styling.'
  },
  render: renderCard
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Card with Image',
    content: 'This card includes a featured image at the top.',
    image: '<img src="<https://placehold.co/600x400>" alt="Placeholder" class="w-full h-auto" />',
    url: '/example'
  },
  render: renderCard
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Complete Card',
    content: 'This card showcases all available features.',
    image: '<img src="<https://placehold.co/600x400>" alt="Complete" class="w-full h-auto" />',
    tags: '<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Featured</span>',
    url: '/complete'
  },
  parameters: {
    backgrounds: {
      default: 'gray'
    }
  },
  render: renderCard
}`,...a.parameters?.docs?.source}}}})))()}s();export{r as Basic,a as Complete,i as WithImage,o as __namedExportsOrder,t as default};