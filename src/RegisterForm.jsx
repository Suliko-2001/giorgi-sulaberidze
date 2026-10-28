import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("სახელის მითითება სავალდებულოა"),
  email: yup
    .string()
    .email("გთხოვთ მიუთითოთ სწორი ელფოსტის ფორმატი")
    .required("ელფოსტის მითითება სავალდებულოა"),
  password: yup
    .string()
    .min(6, "პაროლი უნდა შედგებოდეს მინიმუმ 6 სიმბოლოსგან")
    .required("პაროლის მითითება სავალდებულოა"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("ფორმის მონაცემები:", data);
    reset();
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "20px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2>რეგისტრაცია</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* სახელის ველი */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            სახელი:
          </label>
          <input
            type="text"
            {...register("name")}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.name && (
            <p style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}>
              {errors.name.message}
            </p>
          )}
        </div>

        {/* ელფოსტის ველი */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            ელფოსტა:
          </label>
          <input
            type="email"
            {...register("email")}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        {/* პაროლის ველი */}
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            პაროლი:
          </label>
          <input
            type="password"
            {...register("password")}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
          {errors.password && (
            <p style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          რეგისტრაცია
        </button>
      </form>
    </div>
  );
}
