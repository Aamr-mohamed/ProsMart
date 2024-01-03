import { Button, Card, Input } from "@material-tailwind/react";
import { Typography } from "@mui/material";
import axios from "axios";
import { Form, Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

interface loginFormsValues {
  email: string;
  password: string;
}

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("required"),
  password: yup.string().required("required"),
});

const initialValuesLogin: loginFormsValues = {
  email: "",
  password: "",
};

function Login() {
  const navigate = useNavigate();

  const verification = async (values: loginFormsValues) => {
    const loggedInResponse = await axios.post(
      `${backendUrl}/auth/login`,
      values,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const loggedIn = loggedInResponse.data;
    if (loggedIn.success === false) {
      console.log("false");
      // toast.error(loggedInResponse.message, {
      //   position: "top-right",
      //   autoClose: 1000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "colored",
      // });
    } else {
      toast.success("logged in successfully", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        onClose: () => navigate("/Home"),
      });
    }
  };

  return (
    <div className="bg h-screen flex justify-center items-center">
      <Card
        color="transparent"
        className="w-2/5  flex items-center justify-center mt-32 gap-4 shadow-2xl"
      >
        <div className="mt-10">
          <p>here goes the logo</p>
          <Typography
            variant="h4"
            color="black"
            fontFamily="Arial"
            fontWeight={700}
            fontSize="25px"
          >
            Login to *SiteName*
          </Typography>
        </div>
        <Formik
          initialValues={initialValuesLogin}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            console.log(values);
            verification(values);
          }}
        >
          {(props) => (
            <Form
              className="mt-8 mb-2 w-80 w-screen-lg sm:w-96"
              encType="multipart/form-data"
            >
              <div className="mb-1 flex flex-col">
                <Typography variant="h6" color="black" className="mb-3">
                  Email
                </Typography>
                <Input
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  name="email"
                  type="email"
                  size="lg"
                  placeholder="name@mail.com"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Typography variant="h6" color="black" className="mb-3">
                  Password
                </Typography>
                <Input
                  autoComplete="off"
                  type="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  name="password"
                  size="lg"
                  placeholder="******"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <Button fullWidth className="mt-6" type="submit">
                Login
              </Button>
              <Typography color="gray" className="mt-4 text-center font-normal">
                Dont have an account?{" "}
                <a href="/signup" className="font-medium text-gray-900">
                  Sign up
                </a>
              </Typography>
            </Form>
          )}
        </Formik>
      </Card>
    </div>
  );
}

export default Login;
