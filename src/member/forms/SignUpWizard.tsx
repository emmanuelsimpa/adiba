import { UserInfo } from "AppTypes";
import * as React from "react";
import { useState } from "react";
import UserWizard from "../../_app/shared/member/UserWizard";
import { SignUpSteps } from "../../_app/shared/member/SignUpSteps";
import Summary from "./Summary";
import Administrator from "./Administrator";
import BusinessEntity from "./BusinessEntity";

function SignUpWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<UserInfo>({
    first_name: "",
    last_name: "",
    email_address: "",
    phone_number: "",
    password: "",
    passwordConfirmation: "",
    license_number: "",
    business_name: "",
    business_address: "",
    business_email: "",
    business_url: "",
  });

  const makeRequest = (data) => {
    console.log("final", data);
  };

  const handleNextStep = (newData, final = false) => {
    console.log("hhdhd", newData);
    setData((prev) => ({ ...prev, ...newData }));
    if (final) {
      makeRequest(newData);
      return;
    }
    SignUpSteps[currentStep]["status"] = "complete";
    SignUpSteps[currentStep + 1]["status"] = "current";
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    SignUpSteps[currentStep]["status"] = "complete";
    SignUpSteps[currentStep - 1]["status"] = "current";
    setCurrentStep((prev) => prev - 1);
  };

  const handleSwitch = (id: string) => (e: any) => {
    SignUpSteps[currentStep]["status"] = "complete";
    SignUpSteps[parseInt(id) - 1]["status"] = "current";
    setCurrentStep((prev) => prev + 1);
  };

  const steps = [
    <UserWizard
      handleSwitch={handleSwitch}
      steps={SignUpSteps}
      content={<Administrator next={handleNextStep} data={data} />}
    />,
    <UserWizard
      handleSwitch={handleSwitch}
      steps={SignUpSteps}
      content={
        <BusinessEntity
          next={handleNextStep}
          prev={handlePrevStep}
          data={data}
        />
      }
    />,
    <UserWizard
      handleSwitch={handleSwitch}
      steps={SignUpSteps}
      content={
        <Summary next={handleNextStep} prev={handlePrevStep} data={data} />
      }
    />,
  ];

  const content = steps[currentStep];

  return content;
}

export default SignUpWizard;
