import * as React from "react"

import blogPreviewImg from "../../images/blog/blog-2.jpg"
import commentImg1 from "../../images/reviews/reviews-1.png"
import commentImg2 from "../../images/reviews/reviews-2.png"

const BlogDetailsContent = () => {
  return (
    <>
      <div className="news-details-area pt-100 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="news-details">
                <div className="news-simple-card">
                  <img src={blogPreviewImg} alt="Image" />
                  <div className="list">
                    <ul>
                      <li>
                        <i className="flaticon-user"></i>By{" "}
                        <a href="#">Admin</a>
                      </li>
                      <li>
                        <i className="flaticon-calendar"></i>22 May, 2022
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="news-details-content">
                  <h2>
                    The Best Marketing Top Use Management Tools
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tem incid idunt ut labore et dolore magna aliqua.
                    Ut enim ad minim ven iam quis nostrud xerci tation ulla mco
                    laboris nisi ut Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tem incid idunt ut labore{" "}
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt. 
                  </p>

                  <h4>Visual Learning With Theory</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tem incid idunt ut labore et dolore magna aliqua.
                    Ut enim ad minim ven iam quis nostrud{" "}
                  </p>

                  <h4>Layton Basic Logical Program</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tem incid idunt ut labore et dolore magna aliqua.
                    Ut enim ad minim ven iam quis nostrud{" "}
                  </p>

                  <h4>Error Resolution And Implementation</h4>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                  </p>
                </div>

                {/* Tags and socials share */}
                <div className="tags-and-share">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                      <div className="tags">
                        <ul>
                          <li>
                            <span>Tags:</span>
                          </li>
                          <li>
                            <a href="#">Tech</a>
                          </li>
                          <li>
                            <a href="#">Research</a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                      <div className="share">
                        <ul>
                          <li>
                            <span>Share:</span>
                          </li>
                          <li>
                            <a
                              href="https://www.facebook.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="flaticon-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.twitter.com"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="flaticon-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://instagram.com/?lang=en"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="flaticon-instagram"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://linkedin.com/?lang=en"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="flaticon-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div className="comments">
                  <h3>2 Comments</h3>

                  <div className="single-comments-box">
                    <img src={commentImg1} alt="Images" />
                    <h4>James Benjamin</h4>
                    <div className="date">
                      <p>Jan 17, 2022 at 10:43 am</p>
                    </div>
                    <div className="reply">
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tem incid idunt ut dolore magna aliqua. Ut
                      enim ad minim ven iam quis nostrud{" "}
                    </p>
                  </div>

                  <div className="single-comments-box">
                    <img src={commentImg2} alt="Images" />
                    <h4>Elizabeth Sofia</h4>
                    <div className="date">
                      <p>Jan 17, 2022 at 10:43 am</p>
                    </div>
                    <div className="reply">
                      <a href="#">Reply</a>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tem incid idunt ut dolore magna aliqua. Ut
                      enim ad minim ven iam quis nostrud{" "}
                    </p>
                  </div>
                </div>

                {/* Comments Form */}
                <div className="reply-area">
                  <div className="reply-form">
                    <h3>Leave a Reply</h3>
                    <p>Your email address will not be published.</p>
                    <form onSubmit={e => e.preventDefault()}>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="form-group">
                            <textarea
                              className="form-control"
                              id="review"
                              rows="4"
                              placeholder="Comment"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>

                        <div className="col-lg-4">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="website"
                              placeholder="Website"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />

                        <label
                          className="form-check-label"
                          htmlFor="flexCheckDefault"
                        >
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>

                      <button type="submit" className="sass-default-btn btn">
                        Post a Comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogDetailsContent
