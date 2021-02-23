import * as React from "react";
import * as Scrivito from "scrivito";
import { Steps, Step } from "react-step-builder";
import { Input, Button, Col, Row } from "antd";
import "antd/dist/antd.css";

import "./BidValuationWidget.scss";

const Navigation = (props) => {
  return (
    <Row align="center">
      <Col>
        <Button type="primary" onClick={props.prev} style={{ marginRight: 10 }}>
          Previous
        </Button>
      </Col>
      <Col>
        <Button type="primary" onClick={props.next}>
          Next
        </Button>
      </Col>
    </Row>
  );
};

Scrivito.provideComponent("BidValuationWidget", ({ widget }) => {
  const arr = widget.get("questions");

  const config = {
    navigation: {
      component: Navigation, // a React component with special props provided automatically
      location: "after" // or before
    }
  };

  

  const questions = arr.map((el) => {
      const obj = { question: el.get('question') }
      return obj
  })
  
  const question = questions.map(
    (el) => {
      return (
        el.question
      )
    }
  )

  return ( 
    <div className="instant-valuation">
      
    <Steps config={config}>
        <Step component={Step1} question={ question[0] }/>
        <Step component={Step2} question={question[1]} />
        <Step component={Step3} question={question[2]} />
        <Step component={Step4} question={question[3]} />
        <Step component={Step5} question={question[4]} />
        <Step component={Step6} question={question[5]} />
        <Step component={Step7} question={question[6]} />
        <Step component={Step8} question={question[7]} />
        <Step component={Step9} question={question[8]} />
        <Step component={Step10} question={question[9]} />
        <Step component={Step11} question={ question[10] }/>
        <Step component={FinalStep} />
        
      </Steps>
      
      </div>
  )

});



function Step1(props) {
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
        
        <Input
          autoFocus
          name="name"
          value={props.getState("name", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step2(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="email"
          value={props.getState("email", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step3(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="revenue"
          value={props.getState("revenue", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step4(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="earnings"
          value={props.getState("earnings", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step5(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="cummulative"
          value={props.getState("cummulative", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step6(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="recurring revenues"
          value={props.getState("recurring revenues", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step7(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="third party revenues"
          value={props.getState("email", "third party revenues")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step8(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question }}
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="largest customer"
          value={props.getState("largest customer", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step9(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="churn rate"
          value={props.getState("churn rate", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step10(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="empoyees"
          value={props.getState("employees", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function Step11(props) {
  
  return (
    <div>
      <div className="dark-blue rounded" 
       dangerouslySetInnerHTML = {{ __html: props.question } }
      ></div>
      <p className="light-blue rounded">
      
        <Input
          autoFocus
          name="email"
          value={props.getState("email", "")}
          onChange={props.handleChange}
        />
      </p>
      
    </div>
  );
}

function FinalStep(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <p>
        <b>Name:</b> {props.state.name}
      </p>
      <p>
        <b>Surname:</b> {props.state.surname}
      </p>
      <p>
        <b>Email:</b> {props.state.email}
      </p>
      <p>
        <b>Phone:</b> {props.state.phone}
      </p>
    </div>
  );
}
