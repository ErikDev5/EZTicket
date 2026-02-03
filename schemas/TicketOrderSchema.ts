import { z } from "zod";

export const TicketOrderSchema = z.object({
  weekDay: z.string().min(1),
  time: z.coerce
    .number({
      message: "Giờ phải là số"
    })
    .min(6, "Giờ không hợp lệ")
    .max(24, "Giờ không hợp lệ"),
  customerType: z.string().min(1),
  customerAge: z.coerce
    .number({
      message: "Tuổi của khách hàng phải là số"
    })
    .min(0, "Tuổi của khách hàng không hợp lệ")
    .max(120, "Tuổi của khách hàng không hợp lệ")
});

export type TicketFormData = z.infer<typeof TicketOrderSchema>;
