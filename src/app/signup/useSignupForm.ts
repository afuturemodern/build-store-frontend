import { useState } from "react";
import { SignupFormStatus } from "./util";

export function useSignupForm() {
  const [formStatus, setFormStatus] = useState<SignupFormStatus>("init");
  const [loading, setLoading] = useState(false);

  function submitForm({
    firstname,
    lastname,
    email,
    phone,
  }: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  }) {
    setLoading(true);
    fetch("/api/crm", {
      method: "POST",
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phone,
      }),
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setLoading(false);
        if (data.error) {
          setFormStatus("error");
        } else if (!data.error) {
          setFormStatus("success");
        }
      })
      .catch(() => {
        setLoading(false);
        setFormStatus("error")
      });
  }

  function resetForm() {
    setFormStatus("init");
  }

  return {formStatus, loading, submitForm, resetForm}
}
