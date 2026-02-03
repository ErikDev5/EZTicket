"use client";

import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TicketOrderSchema, TicketFormData } from "@/schemas/TicketOrderSchema";
import { getTicketPrice } from "@/utils/getTicketPrice";

export default function TicketOrderForm() {
  const formStyle = "shadow-lg rounded-xl p-6 border border-gray-200 w-1/2";
  const formFieldStyle = "flex flex-col px-4 mb-2";
  const labelStyle = "font-bold text-md mb-2";
  const inputStyle =
    "p-2 mb-2 border border-gray-300 rounded shadow-none outline-none";
  const buttonStyle =
    "text-center text-white bg-black py-2 rounded cursor-pointer";
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting }
  } = useForm<TicketFormData>({
    mode: "onChange",
    defaultValues: {
      weekDay: "Mon",
      time: 6,
      customerType: "OT",
      customerAge: 0
    },
    resolver: zodResolver(TicketOrderSchema)
  });
  const [ticketPrice, setTicketPrice] = useState<number | null>(null);

  const onSumbit = (data: TicketFormData) => {
    const ticketPrice = getTicketPrice(data);
    setTicketPrice(ticketPrice);
  };

  return (
    <Fragment>
      <form className={formStyle} onSubmit={handleSubmit(onSumbit)}>
        <div className={formFieldStyle}>
          <label htmlFor='weekDay' className={labelStyle}>
            Thứ trong tuần:
          </label>
          <select id='weekDay' className={inputStyle} {...register("weekDay")}>
            <option value={"Mon"}>Thứ hai</option>
            <option value={"Tues"}>Thứ ba</option>
            <option value={"Wed"}>Thứ tư</option>
            <option value={"Thur"}>Thứ năm</option>
            <option value={"Fri"}>Thứ sáu</option>
            <option value={"Sat"}>Thứ bảy</option>
            <option value={"Sun"}>Chủ nhật</option>
          </select>
        </div>

        <div className={formFieldStyle}>
          <label className={labelStyle}>Giờ:</label>
          <input
            className={inputStyle}
            placeholder='Nhập giờ'
            {...register("time")}></input>
          {errors.time && <p className='text-red-400'>{errors.time.message}</p>}
        </div>

        <div className={formFieldStyle}>
          <label className={labelStyle}>Loại khách hàng:</label>
          <select className={inputStyle} {...register("customerType")}>
            <option value={"OT"}>Khách vãng lai</option>
            <option value={"M"}>Thành viên</option>
          </select>
        </div>

        <div className={formFieldStyle}>
          <label htmlFor='time' className={labelStyle}>
            Tuổi khách hàng:
          </label>
          <input
            id='time'
            className={inputStyle}
            placeholder='Nhập tuổi khách hàng'
            {...register("customerAge")}></input>
          {errors.customerAge && (
            <p className='text-red-400'>{errors.customerAge.message}</p>
          )}
        </div>

        <div className={formFieldStyle}>
          <button
            type='submit'
            disabled={!isValid || isSubmitting}
            className={`${buttonStyle} ${!isValid && "bg-gray-300"}`}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </form>
      {ticketPrice && <p className='mx-2 p-2'>Giá: {ticketPrice}</p>}
    </Fragment>
  );
}
