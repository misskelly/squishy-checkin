import React from 'react';
import { crisisQuestions } from '../../data';
import uniqid from 'uniqid';

export const NotOkPage = () => {
  const questions = crisisQuestions.map((q) => {
    const id = uniqid();
    return (
      <article
        className="crisis-q-article"
        key={id}
      >
        <h4 className="crisis-q">
          {q.question}
        </h4>
        <p className="crisis-a">
          {q.answer}
        </p>
      </article>

    );
  });
  return (
    <section className="not-ok-section">
      { questions }
    </section>
  );
};

export default NotOkPage;
