import React from 'react';
import { crisisQuestions } from '../../data';
import uniqid from 'uniqid';
import underwater from '../../assets/underwater.jpg';

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
      <h1 className="not-ok-heading">
        Take 3 deep breaths. 
        <br/>
        <span className="not-alone-text">
          You are not alone.
        </span>
      </h1>
      <h2 className="safety-q-heading">
        first, a safety check...
      </h2>
      <article className="safety-wrapper">
      <ul className="safety-list">
        <li className="safety-check-li">
          Do you feel unsafe?
        </li>
        <li className="safety-check-li">    
          Are you concerned about someone else's safety?
        </li>
        <li className="safety-check-li">    
          Are you worried you might harm yourself or others?
        </li>
        <li className="safety-check-li">    
          Do you need help or support from a human?
        </li>
      </ul>
      <p className="crisis-link-text">if you answered <em>YES</em> to any of these questions,</p>
      <a 
        href="#crisis" 
        className="crisis-btn">
          Click here
      </a>
      </article>
      <h3 className="crisis-q-heading"> Ok, let's do a check-in....</h3>
      
      { questions }

      <article id="crisis" className="crisis-services">
        <img
          src={ underwater }
          alt="When you're feeling underwater, reach out to Colorado Crisis Services."
        />
        <p className="crisis-text">
          When the pressure of life feels like too much to bear, call Colorado Crisis Services toll-free at <a href="tel:+1844938255"> 1-844-493-TALK (8255)</a> or <a href="sms:+38255?body=TALK">text TALK to 38255</a> to speak to a trained professional about topics like mental health, substance use or emotional support.
        </p>
        <a href="http://coloradocrisisservices.org/"> 
          http://coloradocrisisservices.org/
        </a>
      </article>
    </section>
  );
};

export default NotOkPage;
