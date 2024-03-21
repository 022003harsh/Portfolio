import React from 'react';

function TextAnimation() {
  return (
    <section>
      <div className="font-bold md:font-extrabold text-2xl md:text-4xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200">
        <span className="inline-flex flex-col h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
        <ul className="block animate-text-slide text-left leading-tight [&_li]:block bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent">
          <li>Harsh Raj</li>
          <li>Developer</li>
          <li aria-hidden="true">Harsh Raj</li>
        </ul>
        </span>
        </div>
    </section>
  );
}

export default TextAnimation;
