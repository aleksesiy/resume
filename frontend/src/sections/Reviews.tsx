import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="section section-band" id="reviews">
      <div className="container">
        <div className="section-head" data-reveal>
          <h2>Что говорят клиенты</h2>
          <p>Отзывы с Профи.ру, тексты не сокращал.</p>
        </div>

        <div className="reviews">
          {reviews.map((review) => (
            <figure className="review" key={review.author} data-reveal>
              <blockquote>
                {review.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </blockquote>
              <figcaption>
                <span className="review-author">{review.author}</span>
                <span className="review-meta">
                  {review.date} · {review.service}
                </span>
                <a className="review-project" href={`#${review.projectId}`}>
                  Проект: {review.projectTitle}
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
