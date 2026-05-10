export function AnimateText(root: HTMLElement) {

  if (!document.getElementById('animate-text-style')) {
    const style = document.createElement("style");
    style.id = 'animate-text-style';

    style.textContent = `
      .animate-text span{
        display: inline-block;
        transform: translateY(20px);
        opacity: 0;
        transition: transform .45s cubic-bezier(.2,.65,.3,1), opacity .45s ease;
      }

      .animate-text.animate span{
        transform: translateY(0);
        opacity: 1;
      }
    `;

    document.head.appendChild(style);
  }

  const ignoreTags = ['BR', 'IMG', 'SVG'];

  function wrapWords(node: ChildNode) {

    if (node.nodeType === 3) {
      const words = node.textContent!.split(/(\s+)/);
      const fragment = document.createDocumentFragment();

      words.forEach(word => {
        if (!word.trim()) {
          fragment.appendChild(document.createTextNode(word));
        } else {
          const span = document.createElement('span');
          span.textContent = word;
          fragment.appendChild(span);
        }
      });

      node.replaceWith(fragment);
    }

    if (
      node.nodeType === 1 &&
      node instanceof Element &&
      !ignoreTags.includes(node.tagName)
    ) {
      [...node.childNodes].forEach(wrapWords);
    }
  }

  // защита от повторной обработки
  if (root.classList.contains('animated-ready')) return;
  root.classList.add('animated-ready');

  wrapWords(root);

  const spans = root.querySelectorAll('span');

  spans.forEach((span, i) => {
    span.style.transitionDelay = `${i * 0.02}s`;
  });

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        root.classList.add('animate');
        observer.disconnect();
      }
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -10% 0px" // 🔥 ключевой фикс
    }
  );

  observer.observe(root);
}