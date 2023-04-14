import * as React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion"

import faqImg from "../../images/faq-img.png"

const Faq = () => {
  return (
    <>
      <div id="faq" className="exchange-faq-area ptb-100">
        <div className="container">
          <div className="exchange-section-title">
            <span>Our Faq</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="exchange-faq-content pr-20">
                <div className="faq-accordion">
                  <Accordion preExpanded={['a']}>
                    <AccordionItem uuid="a">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Why don’t you show your rates online?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante. Praesent eget venenatis enim vitae
                          vestibulu massa.Lorem ipsum dolor sit amet.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante raesent eget venenatis enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="b">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          Tell me more about the security of funds.
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante. Praesent eget venenatis enim vitae
                          vestibulu massa.Lorem ipsum dolor sit amet.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante raesent eget venenatis enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="c">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What is the minimum amount I can exchange?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante. Praesent eget venenatis enim vitae
                          vestibulu massa.Lorem ipsum dolor sit amet.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante raesent eget venenatis enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem uuid="d">
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          What forms of payment do you accept?
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante. Praesent eget venenatis enim vitae
                          vestibulu massa.Lorem ipsum dolor sit amet.
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec et mi elementum convallis odio eleifend,
                          fermentum ante raesent eget venenatis enim.
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="exchange-faq-img pl-20">
                <img src={faqImg} alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
