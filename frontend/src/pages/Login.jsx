import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../Context/GlobalState";

import AuthLayout from "../layout/AuthLayout";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Login = () => {
  const { login } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    const result = await login(formData);

    setLoading(false);

    if (result.success) {
      navigate("/");
    } else {
      setServerError(result.message);
    }
  };

  return (
    <AuthLayout
      title="Welcome Back 👋"
      subtitle="Sign in to continue managing your finances."
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        {serverError && (
          <div className="rounded-xl border border-red-500 bg-red-500/10 p-3 text-sm text-red-300">
            {serverError}
          </div>
        )}

        <Input
            required
          label="Email Address"
          type="email"
          name="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          required
          label="Password"
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <Button
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing In..." : "Sign In"}
        </Button>

        <p className="text-center text-sm text-zinc-400">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-blue-500 hover:text-blue-400"
          >
            Create one
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
};

export default Login;