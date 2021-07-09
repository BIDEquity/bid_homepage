import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("BidValuationWidget", ({ widget }) => {
  const arr = widget.get("questions");

  const questions = arr.map((el) => {
    const obj = { question: el.get("question"), error: el.get("errorMsg") };
    return obj;
  });

  const question = questions.map((el) => {
    return el.question;
  });

  const error = questions.map((el) => {
    return el.error;
  });

  return (
    <>
      <div className="valuation_intro bg_blue_light">
        <div className="container">
          <div className="valuation_intro_description col_7 col_t_12">
            <Scrivito.ContentTag
              content={widget}
              attribute="headline"
              tag="h2"
              className="section_title"
            />

            <Scrivito.ContentTag
              content={widget}
              className="block_text light"
              attribute="welcomeMessage"
            />
            <a className="btn" href="#">
              Talk to us
            </a>
          </div>
        </div>
      </div>
      <div className="valuation_info">
        <div className="container">
          <div className="valuation_info_wrap">
            <div className="valuation_info_row">
              <div className="valuation_info_box">
                <div className="valuation_info_titles">
                  <Scrivito.ContentTag
                    content={widget}
                    attribute="blockTitle"
                    tag="h2"
                    className="title_block bottom_line light"
                  />
                  <a className="valuation_info_link" href="#">
                    The finance multiplex calculator
                  </a>
                </div>
              </div>
              <div className="valuation_info_img">
                <Scrivito.ImageTag content={widget} attribute="image" alt="" />
              </div>
            </div>
            <div className="valuation_stats">
              <div className="valuation_stats_inner">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="statsNumber"
                  tag="span"
                  className="valuation_stats_number"
                />

                <Scrivito.ContentTag
                  content={widget}
                  attribute="statsText"
                  tag="p"
                  className="valuation_stats_text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="valuation_process bg_blue">
        <div className="container">
          <form className="valuation_process_form" action="#" method="POST">
            <div className="valuation_process_slider Xswiper-container">
              <div className="Xswiper-wrapper">
                <div className="valuation_process_item valuation_process_1 swiper-slide">
                  <div className="valuation_process_content">
                    <Scrivito.ContentTag
                      content={widget}
                      attribute="botTitle"
                      className="section_title col_6 col_t_12"
                      tag="h2"
                    />
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <div className="valuation_bot_text">
                          <Scrivito.ContentTag
                            content={widget}
                            attribute="botMessage"
                            tag="p"
                          />
                          <p>{question[0]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        {error[0]}
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="2"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">2</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>{question[1]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter your email address
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="3"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="1"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">3</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[2]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter your annual revenue
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="4"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="2"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="4"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">4</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[3]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter your earnings before interest and tax
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="6"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="3"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="5"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">5</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[4]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter your earnings before interest and tax
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="5"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="3"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="6"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">6</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[5]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter your cumulative annual growth rate
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="8"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="5"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="7"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">7</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[6]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter your cumulative annual growth rate
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="8"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="5"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="8"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">8</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[7]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter recurring revenues
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="10"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="7"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="9"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">9</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[8]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter recurring revenues
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="10"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="7"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="10"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">10</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>
                          {question[9]}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter the percentage of third party revenues
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="12"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="9"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="11"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="valuation_process_item swiper-slide">
                  <div className="valuation_process_content">
                    <div className="valuation_bot_message">
                      <div className="valuation_bot_img">
                        <Scrivito.ImageTag
                          content={widget}
                          attribute="botImage"
                        />
                      </div>
                      <div className="valuation_bot_info">
                        <p className="valuation_bot_count">
                          <span className="valuation_bot_current">10</span> of 10
                        </p>
                        <div className="valuation_bot_text">
                          <p>{question[10]}</p>
                        </div>
                      </div>
                    </div>
                    <div className="valuation_bot_data">
                      <p className="valuation_bot_error">
                        Please enter the percentage of third party revenues
                      </p>
                      <input
                        className="valuation_bot_field"
                        type="text"
                        //value=""
                      />
                      <button
                        className="valuation_bot_send valuation_bot_next"
                        data-index="12"
                      >
                        <svg className="svg_arrow_btn">svg</svg>
                      </button>
                    </div>
                    <div className="valuation_bot_nav">
                      <div
                        className="valuation_bot_direction valuation_bot_prev"
                        data-index="9"
                      >
                        <svg className="svg_arrow_link">svg</svg>
                        <span>Back to previous question</span>
                      </div>
                      <div
                        className="valuation_bot_direction valuation_bot_skip"
                        data-index="12"
                      >
                        <span>Skip question</span>
                        <svg className="svg_arrow_link">svg</svg>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="valuation_thanks bg_beige">
        <div className="container">
          <div className="valuation_bot_message">
            <div className="valuation_bot_img">
              <Scrivito.ImageTag content={widget} attribute="botImage" />
            </div>
            <div className="valuation_bot_info">
              <div className="valuation_bot_text">
                <Scrivito.ContentTag
                  content={widget}
                  attribute="thxMessage"
                  tag="p"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
