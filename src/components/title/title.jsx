import FeedbackOptions from "components/FeedbackOptions/";
import css from './title.module.css';

function Title() {
    return (
      <section className={css.section}>
        <div className={css.container}>
          <h1>Please leave feedback</h1>
          <FeedbackOptions />
        </div>
      </section>
    );
}

export default Title;