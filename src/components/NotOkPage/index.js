import React from 'react';
import uniqid from 'uniqid';
import { crisisQuestions } from '../../data';
import underwater from '../../assets/underwater.jpg';
import arrow from '../../assets/arrow.png';


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
        <img
        src={arrow}
        alt="Arrow pointing to next question"
        className="q-arrow"
      />
      </article>

    );
  });
  return (
    <section className="not-ok-section">
      <h1 className="not-ok-heading">
        Take 3 deep breaths.
        {/* <br/> */}
        <span role="img" className="heart">♥</span>
        <span className="not-alone-text">
          You are not alone.
        </span>
      </h1>
      <img
        src={arrow}
        alt="Arrow pointing to safety check questions"
        className="arrow"
      />
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
        <p className="crisis-link-text">
if you answered
{' '}
<em>YES</em>
{' '}
to any of these questions,
</p>
        <a
        href="#crisis"
        className="crisis-btn"
      >
          Click here
      </a>
      </article>
      <h3 className="crisis-q-heading"> Ok, let's do a check-in....</h3>

      { questions }

      <article id="crisis" className="crisis-services">
        <img
          src={underwater}
          alt="When you're feeling underwater, reach out to Colorado Crisis Services."
          className="underwater-img"
        />
        <p className="crisis-text">
          When the pressure of life feels like too much to bear, reach out to Colorado Crisis Services.
        </p>
        <a href="tel:+1844938255"> 1-844-493-TALK (8255)</a>
        <p className="toll-text">
          (toll-free)
        </p>
        <a href="sms:+38255">text TALK to 38255</a>
        <p className="crisis-text">
          Speak to a trained professional about topics like mental health, substance use or emotional support. Services are 100% free of charge. If this is a life threatenening emergency, dial 911.  
        </p>
        <p className="help-text">
          It's ok to ask for the help you need.
        </p>
        <a href="http://coloradocrisisservices.org/">
          http://coloradocrisisservices.org/
        </a>
      </article>
    </section>
  );
};

export default NotOkPage;
