export default {
  title: 'Components/Card',
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    title: { control: 'text', description: 'The title displayed in the card header' },
    content: { control: 'text', description: 'The main content of the card' },
    image: { control: 'text', description: 'Optional image HTML for the card' },
    tags: { control: 'text', description: 'Optional tags HTML for the card' },
    url: { control: 'text', description: 'Optional URL for the title link' },
  },
};

const renderCard = (args) => {
  const article = document.createElement('article');
  article.className = 'mb-6 overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg';
  article.setAttribute('data-component-id', 'blog_sdc:card');

  if (args.image) {
    const imageDiv = document.createElement('div');
    imageDiv.className = 'aspect-video overflow-hidden';
    imageDiv.innerHTML = args.image;
    article.appendChild(imageDiv);
  }

  if (args.title) {
    const titleDiv = document.createElement('div');
    titleDiv.className = 'p-6';
    const h2 = document.createElement('h2');
    h2.className = 'mb-3 text-xl font-semibold text-gray-900';
    if (args.url) {
      const link = document.createElement('a');
      link.href = args.url;
      link.className = 'text-blue-600 transition-colors hover:text-blue-800';
      link.textContent = args.title;
      h2.appendChild(link);
    } else {
      h2.textContent = args.title;
    }
    titleDiv.appendChild(h2);
    article.appendChild(titleDiv);
  }

  if (args.content) {
    const contentDiv = document.createElement('div');
    contentDiv.className = 'px-6 pb-4';
    const innerDiv = document.createElement('div');
    innerDiv.className = 'leading-relaxed text-gray-600';
    innerDiv.innerHTML = args.content;
    contentDiv.appendChild(innerDiv);
    article.appendChild(contentDiv);
  }

  if (args.tags) {
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'border-t border-gray-100 px-6 pt-4 pb-6';
    const innerDiv = document.createElement('div');
    innerDiv.className = 'flex flex-wrap gap-2';
    innerDiv.innerHTML = args.tags;
    tagsDiv.appendChild(innerDiv);
    article.appendChild(tagsDiv);
  }

  return article;
};

export const Basic = {
  args: { title: 'Basic Card', content: 'This is a basic card with minimal styling.' },
  render: renderCard,
};

export const WithImage = {
  args: {
    title: 'Card with Image',
    content: 'This card includes a featured image at the top.',
    image: '<img src="<https://placehold.co/600x400>" alt="Placeholder" class="w-full h-auto" />',
    url: '/example',
  },
  render: renderCard,
};

export const Complete = {
  args: {
    title: 'Complete Card',
    content: 'This card showcases all available features.',
    image: '<img src="<https://placehold.co/600x400>" alt="Complete" class="w-full h-auto" />',
    tags: '<span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Featured</span>',
    url: '/complete',
  },
  parameters: { backgrounds: { default: 'gray' } },
  render: renderCard,
};