import React, { useState } from "react";
import Select from "react-select";

import "./Main_page.css";
const Main_page = () => {
  let a;
  var array;

  var skill = [
    {
      value: 1,
      label: "HTML",
    },
    {
      value: 2,
      label: "CSS",
    },
    {
      value: 3,
      label: "Javascript",
    },
    {
      value: 4,
      label: "Node.js",
    },
    {
      value: 5,
      label: "React",
    },
    {
      value: 6,
      label: "Express.js",
    },
  ];
  const [isValid, setValid] = useState(false);
  var [valuu, setValuu] = useState("");
  const [clearInput, setclearInput] = useState("");
  const [skillCondition, setskillCondition] = useState(false);
  const [valuee, setValue] = useState({
    nameInput: "",
    emailInput: "",
    passwordInput: "",
  });

  function input(event) {
    setclearInput();

    const { name, value } = event.target;
    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    setValid(
      valuee.nameInput !== "" &&
        valuee.emailInput !== "" &&
        valuee.passwordInput !== ""
    );
  }

  function dltBtnClick(btn) {
    const newSkillArray = valuu.filter((skill) => skill !== btn.target.id);
    setValuu(newSkillArray);
  }

  function submitForm() {
    alert(
      "Hello " +
        valuee.nameInput +
        " Your Email Id is -> " +
        valuee.emailInput +
        " and Your Password is -> " +
        valuee.passwordInput +
        " and Your Skill is -> " +
        array
    );
    setclearInput("");
    setValuu("");
    setskillCondition(false);
  }

  function handle(e) {
    e.map((x) => (a = x.label));
    setValuu([...valuu, a]);
    if (isValid == true) {
      setskillCondition(true);
    }
  }

  array = Array.from(new Set(valuu));

  return (
    <div className="container">
      <div className="rightDiv">
        <h1>
          Learn to code by <br /> watching others
        </h1>
        <p>
          See how experienced developers solve problems in real-time. <br />
          Watching scripted tutorials is great, but understanding how <br />
          developers think is invaluable.
        </p>
      </div>
      <div className="leftDiv">
        <button className="trialBtn">
          Try it free 7 days then ₹180/mo. thereafter
        </button>
        <div className="formDiv">
          <input
            onChange={input}
            value={clearInput}
            name="nameInput"
            type="text"
            className="inputbox"
            placeholder="Enter Your Name"
          />
          <input
            onChange={input}
            value={clearInput}
            name="emailInput"
            type="email"
            className="inputbox"
            placeholder="Email Address"
          />
          <input
            onChange={input}
            value={clearInput}
            type="password"
            name="passwordInput"
            className="inputbox"
            placeholder="Password"
          />
          <Select
            className="skillInputBtn"
            isMulti
            value={""}
            options={skill}
            placeholder="Select Your Skill"
            onChange={handle}
          >
            Select Your Skill
          </Select>

          <div className="skillDiv">
            {array.map((item) => (
              <div className="skillInnerDiv">
                <p className="skill">{item}</p>
                <button className="dltBtn" id={item} onClick={dltBtnClick}>
                  x
                </button>
              </div>
            ))}
          </div>

          <button
            className="submitBtn"
            disabled={!skillCondition}
            onClick={submitForm}
          >
            CLAIM YOUR FREE TRIAL
          </button>
          <p className="termAndContidition">
            By clicking the button you are agreeing to our Terms and Services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main_page;
