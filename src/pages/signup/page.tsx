import { Button, Checkbox, Card, Input } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import * as yup from "yup";
import React from "react";
import axios from "axios";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { customToast } from "../../utils/toast";
import { toast } from "react-toastify";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

interface signupFormsValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  mobile: string;
}

function Signup() {
  const navigate = useNavigate();

  const registerSchema = yup.object().shape({
    firstname: yup.string().required("required"),
    lastname: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
    mobile: yup.number().required("required"),
  });
  const initialValuesSignUp: signupFormsValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    mobile: "",
  };

  const submitForm = async (values: signupFormsValues) => {
    try {
      const formData = new FormData();
      for (const [key, value] of Object.entries(values)) {
        formData.append(key, String(value)); // Ensure values are strings before appending
      }

      const res = await axios.post(`${backendUrl}/adduser`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log(res);

      toast.success("SignedUp successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => navigate("/"),
      });
    } catch (error) {
      if (error instanceof Error) {
        customToast("error", error.message);
      }
    }
  };
  return (
    <div className="bg h-screen flex justify-center items-center">
      <Card
        color="transparent"
        className="w-2/5  flex items-center justify-center mt-32 gap-4 shadow-2xl"
      >
        <div className="mt-10">
          <Typography
            variant="h4"
            color="black"
            fontFamily="Arial"
            fontWeight={700}
            fontSize="25px"
          >
            Create An Account
          </Typography>
        </div>
        <Formik
          initialValues={initialValuesSignUp}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            console.log(values);
            submitForm(values);
          }}
        >
          {(props) => (
            <Form
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              encType="multipart/form-data"
            >
              <div className="mb-1 flex flex-col ">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  First Name
                </Typography>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.firstname}
                  name="firstname"
                  size="lg"
                  placeholder="Mark,John...etc "
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Last Name
                </Typography>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.lastname}
                  name="lastname"
                  size="lg"
                  placeholder="Mark,John...etc"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Mobile
                </Typography>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.mobile}
                  name="mobile"
                  size="lg"
                  placeholder="01xxxxxxxxx"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Email
                </Typography>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  size="lg"
                  placeholder="name@mail.com"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Password
                </Typography>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Confirm Password
                </Typography>
                <Input
                  type="password"
                  size="lg"
                  placeholder="********"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Checkbox
                label={
                  <Typography
                    variant="h6"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
              <Button fullWidth className="mt-6" type="submit">
                sign up
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Already have an account?{" "}
                <a href="/" className="font-medium text-gray-900">
                  Sign In
                </a>
              </Typography>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default Signup;
