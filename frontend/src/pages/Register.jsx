import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../Context/GlobalState";

import AuthLayout from "../layout/AuthLayout";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Register = () => {

  const { register } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [serverError, setServerError] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));

    setServerError("");

  };

  const validate = () => {

    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = "Name is required";

    else if (formData.name.trim().length < 3)
      newErrors.name =
        "Minimum 3 characters required";

    if (!formData.email.trim())
      newErrors.email = "Email is required";

    else if (
      !/\S+@\S+\.\S+/.test(formData.email)
    )
      newErrors.email = "Invalid email";

    if (!formData.password.trim())
      newErrors.password = "Password is required";

    else if (
      formData.password.length < 6
    )
      newErrors.password =
        "Minimum 6 characters";

    return newErrors;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors =
      validate();

    if (
      Object.keys(validationErrors).length
    ) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const result =
      await register(formData);

    setLoading(false);

    if (result.success) {

      navigate("/login");

    } else {

      setServerError(result.message);

    }

  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Start tracking your finances today."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {serverError && (
          <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-red-300 text-sm">
            {"Something went wrong."}
          </div>
        )}

        <Input
          required
          label="Full Name"
          name="name"
          placeholder="Zohaib Munir"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <Input
          required
          label="Email Address"
          type="email"
          name="email"
          placeholder="zohaib@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          required
          label="Password"
          type="password"
          name="password"
          placeholder="Create password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Creating Account..."
            : "Create Account"}
        </Button>

        <p className="text-center text-sm text-zinc-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-400 font-medium"
          >
            Login
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Register;